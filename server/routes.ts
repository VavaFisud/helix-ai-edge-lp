import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { scheduler } from "./scheduler";
import multer from "multer";
import path from "path";
import fs from "fs";
import { createClient } from '@supabase/supabase-js';

const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 }
});

// Initialize Supabase client for server-side authentication
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

let supabase: any = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

// Authentication middleware
const authenticateUser = async (req: any, res: any, next: any) => {
  try {
    if (!supabase) {
      return res.status(500).json({ error: 'Authentication service not configured' });
    }

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const token = authHeader.substring(7);
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return res.status(401).json({ error: 'Invalid authentication token' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ error: 'Authentication failed' });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  app.use('/uploads', express.static('uploads'));

  // Récupérer les notifications
  app.get('/api/notifications', async (req, res) => {
    try {
      const userId = req.headers['user-id'] as string || req.query.userId as string;
      const notifications = await storage.getNotifications(userId);
      res.json(notifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      res.status(500).json({ error: 'Failed to fetch notifications' });
    }
  });

  app.post('/api/notifications', async (req, res) => {
    try {
      const notification = await storage.createNotification(req.body);
      res.json(notification);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create notification' });
    }
  });

  app.patch('/api/notifications/:id', async (req, res) => {
    try {
      await storage.markNotificationAsRead(req.params.id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to mark notification as read' });
    }
  });

  app.delete('/api/notifications/:id', async (req, res) => {
    try {
      const deleted = await storage.deleteNotification(req.params.id);
      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Notification not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete notification' });
    }
  });

  app.get('/api/daily-reports', async (req, res) => {
    try {
      const reports = await storage.getDailyReports();
      res.json(reports);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch daily reports' });
    }
  });

  app.post('/api/daily-reports', upload.single('pdf'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'PDF file is required' });
      }

      const pdfUrl = `/uploads/${req.file.filename}`;
      const report = await storage.createDailyReport({
        ...req.body,
        pdfUrl,
        reportDate: new Date(req.body.reportDate)
      });
      
      res.json(report);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create daily report' });
    }
  });

  app.get('/api/daily-reports/latest', async (req, res) => {
    try {
      const report = await storage.getLatestDailyReport();
      res.json(report);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch latest report' });
    }
  });

  app.post('/api/daily-reports/extract-insights', async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      const insights = await storage.analyzeReportContent(content);
      res.json(insights);
    } catch (error) {
      console.error('Failed to extract insights:', error);
      res.status(500).json({ error: 'Failed to extract insights from report' });
    }
  });

  app.post('/api/daily-reports/extract-currency-matrix', async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      const matrixData = await storage.extractCurrencyMatrixData(content);
      res.json(matrixData);
    } catch (error) {
      console.error('Failed to extract currency matrix data:', error);
      res.status(500).json({ error: 'Failed to extract currency matrix data from report' });
    }
  });

  // Extract market predictions from PDF content
  app.post('/api/market-analysis/extract-predictions', async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      const predictions = await storage.extractMarketPredictions(content);
      res.json(predictions);
    } catch (error) {
      console.error('Failed to extract market predictions:', error);
      res.status(500).json({ error: 'Failed to extract market predictions from report' });
    }
  });

  // Extract market sentiment analysis from PDF content
  app.post('/api/reports-analytics/extract-sentiment', async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      const sentiment = await storage.extractMarketSentiment(content);
      res.json(sentiment);
    } catch (error) {
      console.error('Failed to extract market sentiment:', error);
      res.status(500).json({ error: 'Failed to extract market sentiment from report' });
    }
  });

  // Extract trading opportunities from PDF content
  app.post('/api/reports-analytics/extract-opportunities', async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      const opportunities = await storage.extractTradingOpportunities(content);
      res.json(opportunities);
    } catch (error) {
      console.error('Failed to extract trading opportunities:', error);
      res.status(500).json({ error: 'Failed to extract trading opportunities from report' });
    }
  });

  // Extract risk assessment from PDF content
  app.post('/api/reports-analytics/extract-risk-assessment', async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      const riskAssessment = await storage.extractRiskAssessment(content);
      res.json(riskAssessment);
    } catch (error) {
      console.error('Failed to extract risk assessment:', error);
      res.status(500).json({ error: 'Failed to extract risk assessment from report' });
    }
  });

  // Extract market trends from PDF content
  app.post('/api/market-analysis/extract-trends', async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      const trends = await storage.extractMarketTrends(content);
      res.json(trends);
    } catch (error) {
      console.error('Failed to extract market trends:', error);
      res.status(500).json({ error: 'Failed to extract market trends from report' });
    }
  });

  // Extract volatility analysis from PDF content
  app.post('/api/market-analysis/extract-volatility', async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      const volatility = await storage.extractVolatilityAnalysis(content);
      res.json(volatility);
    } catch (error) {
      console.error('Failed to extract volatility analysis:', error);
      res.status(500).json({ error: 'Failed to extract volatility analysis from report' });
    }
  });

  app.get('/api/currency-matrix/latest', async (req, res) => {
    try {
      const latestReport = await storage.getLatestDailyReport();
      if (!latestReport || !latestReport.content) {
        return res.status(404).json({ error: 'No report content available' });
      }
      
      const matrixData = await storage.extractCurrencyMatrixData(latestReport.content);
      res.json(matrixData);
    } catch (error) {
      console.error('Failed to get latest currency matrix data:', error);
      res.status(500).json({ error: 'Failed to get latest currency matrix data' });
    }
  });

  // Routes pour tester le scheduler
  app.post('/api/scheduler/test-daily-report', async (req, res) => {
    try {
      await scheduler.testDailyReport();
      res.json({ success: true, message: 'Daily report test executed' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to test daily report generation' });
    }
  });

  app.post('/api/scheduler/test-notifications', async (req, res) => {
    try {
      await scheduler.testDailyNotifications();
      res.json({ success: true, message: 'Daily notifications test executed' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to test daily notifications' });
    }
  });

  // Routes pour tester les rapports PDF IA
  app.post('/api/scheduler/test-ai-pdf-report', async (req, res) => {
    try {
      await scheduler.testAIPDFReport();
      res.json({ message: 'AI PDF report test completed successfully' });
    } catch (error) {
      console.error('AI PDF report test failed:', error);
      res.status(500).json({ error: 'AI PDF report test failed' });
    }
  });

  // Test market trends extraction
  app.post('/api/scheduler/test-market-trends', async (req, res) => {
    try {
      const testContent = "EUR/USD shows strong bullish momentum with ECB policy support. GBP/USD faces headwinds from BoE dovish stance. USD/JPY maintains upward trajectory on Fed hawkishness. AUD/USD consolidates amid RBA uncertainty. Overall market sentiment remains risk-on with dollar strength dominating.";
      
      const trends = await storage.extractMarketTrends(testContent);
      res.json({ message: 'Market trends test completed successfully', data: trends });
    } catch (error) {
      console.error('Market trends test failed:', error);
      res.status(500).json({ error: 'Market trends test failed' });
    }
  });

  // Test volatility analysis extraction
  app.post('/api/scheduler/test-volatility-analysis', async (req, res) => {
    try {
      const testContent = "Market volatility remains elevated ahead of central bank meetings. EUR/USD experiencing high volatility due to ECB policy uncertainty. GBP/USD volatility driven by Brexit concerns and BoE decisions. USD/JPY showing moderate volatility with intervention risks. Expected volatility to persist through FOMC meeting.";
      
      const volatility = await storage.extractVolatilityAnalysis(testContent);
      res.json({ message: 'Volatility analysis test completed successfully', data: volatility });
    } catch (error) {
      console.error('Volatility analysis test failed:', error);
      res.status(500).json({ error: 'Volatility analysis test failed' });
    }
  });

  // Test market sentiment extraction
  app.post('/api/scheduler/test-market-sentiment', async (req, res) => {
    try {
      const testContent = "Market sentiment turns bullish on Fed pause expectations. Risk appetite improves with equity markets rallying. Dollar strength continues but showing signs of fatigue. European currencies gaining ground on ECB policy optimism. Overall sentiment: 70% bullish, 20% bearish, 10% neutral.";
      
      const sentiment = await storage.extractMarketSentiment(testContent);
      res.json({ message: 'Market sentiment test completed successfully', data: sentiment });
    } catch (error) {
      console.error('Market sentiment test failed:', error);
      res.status(500).json({ error: 'Market sentiment test failed' });
    }
  });

  // Test trading opportunities extraction
  app.post('/api/scheduler/test-trading-opportunities', async (req, res) => {
    try {
      const testContent = "EUR/USD long opportunity at 1.0850 targeting 1.0920 with stop at 1.0800. GBP/USD short setup at 1.2650 targeting 1.2580 with stop at 1.2700. USD/JPY long bias above 148.50 targeting 150.00 with stop at 147.80. Risk management essential given high volatility environment.";
      
      const opportunities = await storage.extractTradingOpportunities(testContent);
      res.json({ message: 'Trading opportunities test completed successfully', data: opportunities });
    } catch (error) {
      console.error('Trading opportunities test failed:', error);
      res.status(500).json({ error: 'Trading opportunities test failed' });
    }
  });

  // Test risk assessment extraction
  app.post('/api/scheduler/test-risk-assessment', async (req, res) => {
    try {
      const testContent = "Current risk environment shows elevated uncertainty. Central bank policy divergence creating volatility. Geopolitical tensions adding to market stress. Inflation concerns persist globally. Risk level: HIGH. Recommendations: reduce position sizes, use tight stops, diversify exposure.";
      
      const riskAssessment = await storage.extractRiskAssessment(testContent);
      res.json({ message: 'Risk assessment test completed successfully', data: riskAssessment });
    } catch (error) {
      console.error('Risk assessment test failed:', error);
      res.status(500).json({ error: 'Risk assessment test failed' });
    }
  });

  app.post('/api/scheduler/test-pdf-upload', async (req, res) => {
    try {
      await scheduler.testPDFUpload();
      res.json({ success: true, message: 'PDF upload test executed' });
    } catch (error) {
      console.error('Error testing PDF upload:', error);
      res.status(500).json({ error: 'Failed to test PDF upload' });
    }
  });

  // Route to download PDF reports (protected with authentication)
  app.get('/api/download/pdf/:filename', authenticateUser, async (req, res) => {
    try {
      const filename = req.params.filename;
      const filePath = path.join(process.cwd(), 'uploads', filename);
      
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'PDF file not found' });
      }
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      res.status(500).json({ error: 'Failed to download PDF' });
    }
  });

  // Route to get scheduler information
  app.get('/api/scheduler/status', async (req, res) => {
    try {
      res.json({ 
        status: 'active',
        schedule: {
          aiPDFGeneration: '7:00 AM EST (12:00 UTC)',
          pdfUploadAndNotify: '7:30 AM EST (12:30 UTC)',
          dailyReports: '7:30 AM EST (12:30 UTC)',
          notifications: '7:30 AM EST (12:30 UTC)',
          cleanup: '12:00 AM UTC'
        },
        features: {
          geminiAI: 'Enabled - Automatic report generation',
          pdfGeneration: 'Enabled - Branded PDF reports',
          autoUpload: 'Enabled - Automatic file management'
        },
        timezone: 'UTC',
        message: 'Scheduler is running with AI-powered PDF generation and will execute tasks automatically'
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get scheduler status' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
