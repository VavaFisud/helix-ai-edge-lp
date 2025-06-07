import { GoogleGenerativeAI } from '@google/generative-ai';
import * as puppeteer from 'puppeteer';
import * as fs from 'fs/promises';
import * as path from 'path';
import { Readable } from 'stream';

// Type aliases for extractKeyInsights return type
type KeyInsight = {
  title: string;
  impact: string;
  summary: string;
};
type KeyInsightsArray = Array<KeyInsight>;
type KeyInsightsPromise = Promise<KeyInsightsArray>;

interface ReportData {
  date: string;
  content: string;
  analysis: string;
}

class GeminiPDFService {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private flashModel: any;
  constructor() {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GOOGLE_GEMINI_API_KEY environment variable is required');
    }
    this.genAI = new GoogleGenerativeAI(apiKey);
    const modelName = process.env.GOOGLE_GEMINI_MODEL || 'gemini-2.5-pro-preview-06-05';
    this.model = this.genAI.getGenerativeModel({ model: modelName });
    this.flashModel = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  }



  async generateDailyReport(): Promise<ReportData> {
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const prompt = `
**CRITICAL INSTRUCTION - STARTING PHRASES:**
- NEVER START WITH INTRODUCTORY PHRASES:
- AIM TO BE FULLY CONSTRUCTIVE WHEN WRITING THE REPORT. 
- NO BLANK PAGES - fill every page completely
- AT LEAST 2 FULLY WRITE PAGES FOR EACH CURRENCY ABOUT THE SITUATION OF IT
Do NOT begin with phrases like "Here's your report", "Based on current market conditions", "Today's analysis", or any similar introductory language. Start IMMEDIATELY with the Executive Summary content.

**FORMATTING REQUIREMENTS:**
- Generate 12-15 pages minimum of comprehensive content
- NO blank pages - fill every page completely
- Prevent text cutoff by ensuring complete sentences and paragraphs
- Use well-developed analysis with detailed explanations
- Each section must be substantial and complete

Generate a comprehensive daily fundamental analysis report for the forex market for ${dateStr}. Structure the report as follows:

**I. Executive Summary: Global Forex Market Dynamics**
- Provide a comprehensive overview of current market sentiment and key drivers (minimum 2 full pages)
- Include major central bank policy impacts, geopolitical factors, and economic data releases
- Analyze cross-currency relationships and dominant market themes
- Discuss risk-on vs risk-off sentiment and safe-haven flows

**II. Global Macroeconomic Overview**
- Start with detailed macroeconomic context and fill the entire page
- Create a comprehensive data table with the following columns:
  * Currency
  * GDP Growth (latest)
  * Inflation (latest)
  * Unemployment Rate (latest)
  * Policy Interest Rate (latest)
  * Trade Balance (latest)
  * Government Debt Levels
- Include data for: USD, EUR, JPY, GBP, AUD, CAD, CHF, NZD
- Follow with 3-4 detailed analysis paragraphs interpreting the data
- Provide detailed context on regional economic dynamics and policy implications

**III. Fundamental Analysis by Currency**
For each currency, provide minimum 2 pages of detailed analysis covering:
- Current economic fundamentals and recent data releases
- Central bank policy stance and recent communications
- Political and geopolitical factors
- Technical outlook and key levels
- Short-term and medium-term outlook

Currencies to analyze:
A. United States Dollar (USD)
B. Euro (EUR)
C. Japanese Yen (JPY)
D. British Pound (GBP)
E. Australian Dollar (AUD)
F. Canadian Dollar (CAD)
G. Swiss Franc (CHF)
H. New Zealand Dollar (NZD)

**IV. Upcoming Major Economic Events**
- Create a detailed table with columns: Date, Time, Event, Currency Impacted
- Include the next 5-7 business days of major economic releases
- Focus on high-impact events (interest rate decisions, GDP, inflation, employment data)

**V. Market Summary and Future Outlook**
Provide at least 2 full pages covering:
- Key market themes and dominant narratives
- Risk management considerations for traders
- Potential market-moving events in the coming week
- Long-term structural trends affecting currency markets
- Seasonal factors and historical patterns
- Correlation analysis between major pairs
- Volatility expectations and trading recommendations

**CONTENT QUALITY REQUIREMENTS:**
- Use specific economic data and recent market developments
- Include actual or realistic interest rates, inflation figures, and economic indicators
- Reference recent central bank meetings, policy statements, and economic releases
- Provide actionable insights for forex traders and analysts
- Ensure professional, analytical tone throughout
- Make each section comprehensive and detailed to reach the 12-15 page target
`;

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const analysis = response.text();

      return {
        date: dateStr,
        content: analysis,
        analysis: analysis
      };
    } catch (error) {
      console.error('Error generating report with Gemini:', error);
      throw error;
    }
  }



  private async savePDFToFile(pdfBuffer: Buffer, fileName: string): Promise<string> {
    const uploadsDir = path.join(__dirname, '..', 'uploads');
    try {
      await fs.mkdir(uploadsDir, { recursive: true });
    } catch (error) {
      console.error(`Error creating directory ${uploadsDir}:`, error);
      throw error; // Re-throw error if directory creation fails
    }
    const filePath = path.join(uploadsDir, fileName);
    await fs.writeFile(filePath, pdfBuffer);
    console.log(`PDF saved to: ${filePath}`);
    return filePath;
  }

  async generateReportAndSaveAsPDF(reportData: ReportData): Promise<string | null> {
    try {
      const pdfBuffer = await this.generateBrandedPDF(reportData);
      const pdfFileName = `helix-daily-report-${new Date().toISOString().split('T')[0]}.pdf`;
      const savedFilePath = await this.savePDFToFile(pdfBuffer, pdfFileName);
      return savedFilePath;
    } catch (error) {
      console.error('Error generating or saving PDF:', error);
      return null;
    }
  }

  // Old method, can be kept for direct PDF generation or removed if not needed
  async generateBrandedPDF(reportData: ReportData): Promise<Buffer> {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
      const page = await browser.newPage();
      const htmlContent = await this.generateHTMLTemplate(reportData);
      
      await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
      
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20mm',
          right: '15mm',
          bottom: '20mm',
          left: '15mm'
        },
        preferCSSPageSize: true,
        displayHeaderFooter: false
      });

      return Buffer.from(pdfBuffer);
    } finally {
      await browser.close();
    }
  }

  private async generateHTMLTemplate(reportData: ReportData): Promise<string> {
    const formattedContent = this.formatContentForHTML(reportData.content);
    
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 40px;
            color: #333;
            font-size: 12px;
        }
        h1 {
            font-size: 24px;
            font-weight: bold;
            margin: 30px 0 20px 0;
            color: #1a1a1a;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
        }
        h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 25px 0 15px 0;
            color: #2a2a2a;
            border-bottom: 1px solid #666;
            padding-bottom: 5px;
        }
        h3 {
            font-size: 16px;
            font-weight: bold;
            margin: 20px 0 10px 0;
            color: #3a3a3a;
        }
        p {
            margin: 10px 0;
            text-align: justify;
        }
        strong {
            font-weight: bold;
            color: #000;
        }
        em {
            font-style: italic;
        }
        ul {
            margin: 15px 0;
            padding-left: 25px;
        }
        li {
            margin: 8px 0;
            line-height: 1.5;
        }
        .page-break {
            page-break-before: always;
        }
        .avoid-break {
            page-break-inside: avoid;
        }
    </style>
</head>
<body>
    ${formattedContent}
</body>
</html>`;
  }

  private formatContentForHTML(content: string): string {
    // First, handle the basic markdown formatting
    let formatted = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^### (.*$)/gim, '<h3 class="avoid-break">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="avoid-break">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="avoid-break">$1</h1>');

    // Handle explicit page breaks
    formatted = formatted.replace(/\[PAGE_BREAK\]/g, '<div class="page-break"></div>');

    // Split content into lines for better processing
    const lines = formatted.split('\n');
    const processedLines = [];
    let inList = false;
    let currentListItems = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Handle list items
      if (line.match(/^[-*+] /)) {
        if (!inList) {
          inList = true;
          currentListItems = [];
        }
        const listItem = line.replace(/^[-*+] /, '').trim();
        currentListItems.push(`<li>${listItem}</li>`);
      } else {
        // If we were in a list and now we're not, close the list
        if (inList) {
          processedLines.push(`<ul class="avoid-break">${currentListItems.join('')}</ul>`);
          inList = false;
          currentListItems = [];
        }
        
        // Handle regular content
        if (line) {
          // Don't wrap headings in paragraphs
          if (line.startsWith('<h1>') || line.startsWith('<h2>') || line.startsWith('<h3>')) {
            processedLines.push(line);
          } else if (line.startsWith('<div class="page-break">')) {
            processedLines.push(line);
          } else {
            // Wrap regular text in paragraphs
            processedLines.push(`<p class="avoid-break">${line}</p>`);
          }
        } else {
          // Empty line - add some spacing
          processedLines.push('<br>');
        }
      }
    }
    
    // Close any remaining list
    if (inList) {
      processedLines.push(`<ul class="avoid-break">${currentListItems.join('')}</ul>`);
    }
    
    return processedLines.join('\n');
  }

  async extractKeyInsights(reportContent: string): KeyInsightsPromise {
    try {
      const prompt = `
Analyze the following forex market report and extract exactly 4 key market insights.
Return ONLY a JSON array with this exact format:

[
  {
    "title": "Brief insight title",
    "impact": "high/medium/low",
    "summary": "Brief summary"
  }
]

Report content:
${reportContent}
`;

      const result = await this.flashModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        let jsonText = text.trim();
        
        // Extract JSON from markdown code blocks if present
        const codeBlockMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (codeBlockMatch) {
          jsonText = codeBlockMatch[1].trim();
        }
        
        // Try to find JSON array pattern
        const jsonMatch = jsonText.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          jsonText = jsonMatch[0];
        }
        
        const insights = JSON.parse(jsonText);
        if (Array.isArray(insights)) {
          return insights.slice(0, 4);
        }
        
        return [];
      } catch (parseError) {
        console.error('Error parsing insights JSON:', parseError);
        console.error('Raw response text:', text);
        return [];
      }
    } catch (error) {
      console.error('Error extracting insights:', error);
      return [];
    }
  }

  async extractCurrencyMatrix(reportContent: string): Promise<any> {
    try {
      const prompt = `
Analyze the forex report and extract currency strength data.
Return ONLY a JSON object with this format:

{
  "EUR": {
    "strength": "strong/neutral/weak",
    "trend": "bullish/bearish/sideways",
    "volatility": "high/medium/low",
    "inflation": "rising/stable/falling",
    "details": "Brief analysis summary"
  },
  "USD": {
    "strength": "strong/neutral/weak",
    "trend": "bullish/bearish/sideways",
    "volatility": "high/medium/low",
    "inflation": "rising/stable/falling",
    "details": "Brief analysis summary"
  }
  // ... continue for all currencies
}

Report: ${reportContent.substring(0, 3000)}
`;

      const result = await this.flashModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        let jsonText = text.trim();
        
        // Extract JSON from markdown code blocks if present
        const codeBlockMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (codeBlockMatch) {
          jsonText = codeBlockMatch[1].trim();
        }
        
        // Try to extract JSON from the response
        const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
        return {};
      } catch (parseError) {
        console.error('Error parsing currency matrix JSON:', parseError);
        console.error('Raw response text:', text);
        return {};
      }
    } catch (error) {
      console.error('Error extracting currency matrix data:', error);
      return {};
    }
  }

  async extractMarketPredictions(reportContent: string): Promise<Array<{pair: string, direction: string, reasoning: string, confidence: number}>> {
    try {
      const prompt = `
Analyze the forex report and extract market predictions.
Return ONLY a JSON array with this format:

[
  {
    "pair": "EUR/USD",
    "direction": "bullish/bearish/neutral",
    "reasoning": "Brief reasoning",
    "confidence": 75
  }
]

Report: ${reportContent.substring(0, 3000)}
`;

      const result = await this.flashModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        let jsonText = text.trim();
        
        // Extract JSON from markdown code blocks if present
        const codeBlockMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (codeBlockMatch) {
          jsonText = codeBlockMatch[1].trim();
        }
        
        const jsonMatch = jsonText.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
        return [];
      } catch (parseError) {
        console.error('Error parsing market predictions JSON:', parseError);
        console.error('Raw response text:', text);
        return [];
      }
    } catch (error) {
      console.error('Error extracting market predictions:', error);
      return [];
    }
  }

  async extractMarketSentiment(reportContent: string): Promise<{overall: string, bullish: number, bearish: number, neutral: number, factors: Array<{factor: string, impact: string, sentiment: string}>}> {
    try {
      const prompt = `
Analyze the forex report and extract market sentiment data.
Return ONLY a JSON object with this format:

{
  "overall": "bullish/bearish/neutral",
  "bullish": 45,
  "bearish": 30,
  "neutral": 25,
  "factors": [
    {
      "factor": "Factor name",
      "impact": "high/medium/low",
      "sentiment": "bullish/bearish/neutral"
    }
  ]
}

Report: ${reportContent.substring(0, 3000)}
`;

      const result = await this.flashModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        let jsonText = text.trim();
        
        // Extract JSON from markdown code blocks if present
        const codeBlockMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (codeBlockMatch) {
          jsonText = codeBlockMatch[1].trim();
        }
        
        const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
        return { overall: 'neutral', bullish: 33, bearish: 33, neutral: 34, factors: [] };
      } catch (parseError) {
        console.error('Error parsing market sentiment JSON:', parseError);
        console.error('Raw response text:', text);
        return { overall: 'neutral', bullish: 33, bearish: 33, neutral: 34, factors: [] };
      }
    } catch (error) {
      console.error('Error extracting market sentiment:', error);
      return { overall: 'neutral', bullish: 33, bearish: 33, neutral: 34, factors: [] };
    }
  }

  async extractTradingOpportunities(reportContent: string): Promise<Array<{pair: string, type: string, entry: string, target: string, stopLoss: string, reasoning: string, riskLevel: string}>> {
    try {
      const prompt = `
Analyze the forex report and extract trading opportunities.
Return ONLY a JSON array with this format:

[
  {
    "pair": "EUR/USD",
    "type": "long/short",
    "entry": "1.0850",
    "target": "1.0950",
    "stopLoss": "1.0800",
    "reasoning": "Brief reasoning",
    "riskLevel": "high/medium/low"
  }
]

Report: ${reportContent.substring(0, 3000)}
`;

      const result = await this.flashModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        let jsonText = text.trim();
        
        // Extract JSON from markdown code blocks if present
        const codeBlockMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (codeBlockMatch) {
          jsonText = codeBlockMatch[1].trim();
        }
        
        const jsonMatch = jsonText.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
        return [];
      } catch (parseError) {
        console.error('Error parsing trading opportunities JSON:', parseError);
        console.error('Raw response text:', text);
        return [];
      }
    } catch (error) {
      console.error('Error extracting trading opportunities:', error);
      return [];
    }
  }

  async extractRiskAssessment(reportContent: string): Promise<{overallRisk: string, riskLevel: number, factors: Array<{factor: string, level: string, description: string}>, recommendations: Array<string>}> {
    try {
      const prompt = `
Analyze the forex report and extract risk assessment data.
Return ONLY a JSON object with this format:

{
  "overallRisk": "high/medium/low",
  "riskLevel": 65,
  "factors": [
    {
      "factor": "Risk factor name",
      "level": "high/medium/low",
      "description": "Brief description"
    }
  ],
  "recommendations": [
    "Risk management recommendation"
  ]
}

Report: ${reportContent.substring(0, 3000)}
`;

      const result = await this.flashModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        let jsonText = text.trim();
        
        // Extract JSON from markdown code blocks if present
        const codeBlockMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (codeBlockMatch) {
          jsonText = codeBlockMatch[1].trim();
        }
        
        const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
        return {
          overallRisk: 'medium',
          riskLevel: 50,
          factors: [],
          recommendations: []
        };
      } catch (parseError) {
        console.error('Error parsing risk assessment JSON:', parseError);
        console.error('Raw response text:', text);
        return {
          overallRisk: 'medium',
          riskLevel: 50,
          factors: [],
          recommendations: []
        };
      }
    } catch (error) {
      console.error('Error extracting risk assessment:', error);
      return {
        overallRisk: 'medium',
        riskLevel: 50,
        factors: [],
        recommendations: []
      };
    }
  }

  async extractMarketTrends(reportContent: string): Promise<{overallTrend: string, trends: Array<{currency: string, trend: string, strength: number, timeframe: string, description: string}>}> {
    try {
      const prompt = `
Analyze the forex report and extract market trend data.
Return ONLY a JSON object with this format:

{
  "overallTrend": "bullish/bearish/neutral",
  "trends": [
    {
      "currency": "EUR",
      "trend": "bullish/bearish/neutral",
      "strength": 75,
      "timeframe": "short/medium/long",
      "description": "Brief description"
    }
  ]
}

Report: ${reportContent.substring(0, 3000)}
`;

      const result = await this.flashModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        let jsonText = text.trim();
        
        // Extract JSON from markdown code blocks if present
        const codeBlockMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (codeBlockMatch) {
          jsonText = codeBlockMatch[1].trim();
        }
        
        const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
        return {
          overallTrend: 'neutral',
          trends: []
        };
      } catch (parseError) {
        console.error('Error parsing market trends JSON:', parseError);
        console.error('Raw response text:', text);
        return {
          overallTrend: 'neutral',
          trends: []
        };
      }
    } catch (error) {
      console.error('Error extracting market trends:', error);
      return {
        overallTrend: 'neutral',
        trends: []
      };
    }
  }

  async extractVolatilityAnalysis(reportContent: string): Promise<{overallVolatility: string, volatilityLevel: number, pairs: Array<{pair: string, volatility: string, level: number, factors: Array<string>}>, forecast: string}> {
    try {
      const prompt = `
Analyze the forex report and extract volatility analysis data.
Return ONLY a JSON object with this format:

{
  "overallVolatility": "high/medium/low",
  "volatilityLevel": 65,
  "pairs": [
    {
      "pair": "EUR/USD",
      "volatility": "high/medium/low",
      "level": 70,
      "factors": ["Factor 1", "Factor 2"]
    }
  ],
  "forecast": "Brief volatility forecast"
}

Report: ${reportContent.substring(0, 3000)}
`;

      const result = await this.flashModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        let jsonText = text.trim();
        
        // Extract JSON from markdown code blocks if present
        const codeBlockMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (codeBlockMatch) {
          jsonText = codeBlockMatch[1].trim();
        }
        
        const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
        return {
          overallVolatility: 'medium',
          volatilityLevel: 50,
          pairs: [],
          forecast: 'Volatility expected to remain stable'
        };
      } catch (parseError) {
        console.error('Error parsing volatility analysis JSON:', parseError);
        console.error('Raw response text:', text);
        return {
          overallVolatility: 'medium',
          volatilityLevel: 50,
          pairs: [],
          forecast: 'Volatility expected to remain stable'
        };
      }
    } catch (error) {
      console.error('Error extracting volatility analysis:', error);
      return {
        overallVolatility: 'medium',
        volatilityLevel: 50,
        pairs: [],
        forecast: 'Volatility expected to remain stable'
      };
    }
  }

  async savePDFToUploads(pdfBuffer: Buffer, filename: string): Promise<string> {
    const uploadsDir = path.join(process.cwd(), 'uploads');
    
    // Ensure uploads directory exists
    try {
      await fs.mkdir(uploadsDir, { recursive: true });
    } catch (error) {
      // Directory might already exist, ignore error
    }
    
    const filePath = path.join(uploadsDir, filename);
    await fs.writeFile(filePath, pdfBuffer);
    
    return `/uploads/${filename}`;
  }
}

// Singleton instance
let geminiPDFServiceInstance: GeminiPDFService | null = null;

export const getGeminiPDFService = (): GeminiPDFService => {
  if (!geminiPDFServiceInstance) {
    geminiPDFServiceInstance = new GeminiPDFService();
  }
  return geminiPDFServiceInstance;
};
