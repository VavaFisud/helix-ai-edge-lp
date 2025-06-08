// Define interfaces for the schema types since the module is not found
import { v4 as uuidv4 } from 'uuid';
import { getGeminiPDFService } from './gemini-pdf-service';
const geminiPDFService = getGeminiPDFService();

export interface User {
  id: number;
  username: string;
}

export interface InsertUser {
  username: string;
}

export interface Notification {
  id: string;
  userId?: string;
  title: string;
  content: string;
  message: string;
  type: string;
  isGlobal: boolean;
  isRead: boolean;
  createdAt: Date;
  metadata?: any;
}

export interface InsertNotification {
  userId?: string;
  title: string;
  content: string;
  message: string;
  type: string;
  isGlobal: boolean;
  metadata?: any;
}

export interface DailyReport {
  id: string;
  title: string;
  description: string;
  reportDate: Date;
  content: string;
  createdAt: Date;
  pdfPath?: string;
  pdfUrl?: string;
  filename?: string;
}

export interface InsertDailyReport {
  title: string;
  description: string;
  reportDate: Date;
  content: string;
  pdfPath?: string;
  pdfUrl?: string;
  filename?: string;
}

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getNotifications(userId?: string): Promise<Notification[]>;
  createNotification(notification: InsertNotification): Promise<Notification>;
  markNotificationAsRead(id: string): Promise<void>;
  deleteNotification(id: string): Promise<boolean>;
  getDailyReports(date?: Date): Promise<DailyReport[]>;
  createDailyReport(report: InsertDailyReport): Promise<DailyReport>;
  getLatestDailyReport(): Promise<DailyReport | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private notifications: Map<string, Notification>;
  private dailyReports: Map<string, DailyReport>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.notifications = new Map();
    this.dailyReports = new Map();
    this.currentId = 1;
    
    this.initializeTestData();
  }

  private initializeTestData() {
    const testNotifications = [
      {
        id: uuidv4(),
        title: "Welcome to Helix AI",
        content: "Your financial analysis platform is ready to use.",
        message: "Your financial analysis platform is ready to use.",
        type: "info" as const,
        isGlobal: true,
        isRead: false,
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        title: "Nouvelle fonctionnalité",
        content: "Le système de notifications personnalisées est maintenant actif.",
        message: "Le système de notifications personnalisées est maintenant actif.",
        type: "success" as const,
        isGlobal: true,
        isRead: false,
        createdAt: new Date(Date.now() - 3600000)
      },
      {
        id: uuidv4(),
        title: "Maintenance programmée",
        content: "Une maintenance est prévue ce weekend pour améliorer les performances.",
        message: "Une maintenance est prévue ce weekend pour améliorer les performances.",
        type: "warning" as const,
        isGlobal: true,
        isRead: false,
        createdAt: new Date(Date.now() - 7200000)
      }
    ];

    testNotifications.forEach(notification => {
      this.notifications.set(notification.id, notification);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getNotifications(userId?: string): Promise<Notification[]> {
    return Array.from(this.notifications.values())
      .filter(notification => {
        // Afficher les notifications globales ou celles spécifiques à l'utilisateur
        return notification.isGlobal || notification.userId === userId;
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createNotification(insertNotification: InsertNotification): Promise<Notification> {
    const id = uuidv4();
    const notification: Notification = {
      ...insertNotification,
      id,
      createdAt: new Date(),
      isRead: false
    };
    this.notifications.set(id, notification);
    return notification;
  }

  async deleteNotification(id: string): Promise<boolean> {
    return this.notifications.delete(id);
  }

  async markNotificationAsRead(id: string): Promise<void> {
    const notification = this.notifications.get(id);
    if (notification) {
      notification.isRead = true;
      this.notifications.set(id, notification);
    }
  }

  async getDailyReports(date?: Date): Promise<DailyReport[]> {
    let reports = Array.from(this.dailyReports.values());
    
    if (date) {
      const targetDate = new Date(date);
      targetDate.setHours(0, 0, 0, 0);
      const nextDay = new Date(targetDate);
      nextDay.setDate(nextDay.getDate() + 1);
      
      reports = reports.filter(report => {
        const reportDate = new Date(report.reportDate);
        return reportDate >= targetDate && reportDate < nextDay;
      });
    }
    
    return reports.sort((a, b) => new Date(b.reportDate).getTime() - new Date(a.reportDate).getTime());
  }

  async createDailyReport(insertReport: InsertDailyReport): Promise<DailyReport> {
    const id = uuidv4();
    const report: DailyReport = {
      ...insertReport,
      id,
      createdAt: new Date(),
      title: insertReport.title || 'Daily Fundamental Report',
      description: insertReport.description || 'AI-generated forex market analysis'
    };
    this.dailyReports.set(id, report);
    return report;
  }

  async getLatestDailyReport(): Promise<DailyReport | undefined> {
    const reports = await this.getDailyReports();
    return reports[0];
  }

  async cleanupOldNotifications(daysOld: number = 30): Promise<number> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    let deletedCount = 0;
    for (const [id, notification] of this.notifications.entries()) {
      if (new Date(notification.createdAt) < cutoffDate) {
        this.notifications.delete(id);
        deletedCount++;
      }
    }
    
    return deletedCount;
  }

  async analyzeReportContent(content: string): Promise<Array<{title: string, impact: string, summary: string}>> {
    try {
      const service = geminiPDFService;
      return await service.extractKeyInsights(content);
    } catch (error) {
      console.error('Error analyzing report content:', error);
      return [];
    }
  }

  async extractCurrencyMatrixData(content: string): Promise<{[key: string]: {overall: string, interestRate: string, growth: string, inflation: string, details: string}}> {
    try {
      const service = geminiPDFService;
      return await service.extractCurrencyMatrix(content);
    } catch (error) {
      console.error('Error extracting currency matrix data:', error);
      return {};
    }
  }

  async extractMarketPredictions(content: string): Promise<Array<{pair: string, direction: string, reasoning: string, confidence: number}>> {
    try {
      const service = geminiPDFService;
      return await service.extractMarketPredictions(content);
    } catch (error) {
      console.error('Error extracting market predictions:', error);
      return [];
    }
  }

  async extractMarketSentiment(content: string): Promise<{overall: string, bullish: number, bearish: number, neutral: number, factors: Array<{factor: string, impact: string, sentiment: string}>}> {
    try {
      const service = geminiPDFService;
      return await service.extractMarketSentiment(content);
    } catch (error) {
      console.error('Error extracting market sentiment:', error);
      return { overall: 'neutral', bullish: 33, bearish: 33, neutral: 34, factors: [] };
    }
  }

  async extractTradingOpportunities(content: string): Promise<Array<{pair: string, type: string, entry: string, target: string, stopLoss: string, reasoning: string, riskLevel: string}>> {
    try {
      const service = geminiPDFService;
      return await service.extractTradingOpportunities(content);
    } catch (error) {
      console.error('Error extracting trading opportunities:', error);
      return [];
    }
  }

  async extractRiskAssessment(content: string): Promise<{overallRisk: string, riskLevel: number, factors: Array<{factor: string, level: string, description: string}>, recommendations: Array<string>}> {
    try {
      const service = geminiPDFService;
      return await service.extractRiskAssessment(content);
    } catch (error) {
      console.error('Error extracting risk assessment:', error);
      return { overallRisk: 'moderate', riskLevel: 50, factors: [], recommendations: [] };
    }
  }

  async extractMarketTrends(content: string): Promise<{trends: Array<{pair: string, trend: string, strength: number, timeframe: string, description: string}>, overallTrend: string}> {
    const service = geminiPDFService;
    
    try {
      const result = await service.extractMarketTrends(content);
      return {
        trends: result.trends.map(trend => ({
          ...trend,
          pair: trend.currency // Map currency to pair to match the expected type
        })),
        overallTrend: result.overallTrend
      };
    } catch (error) {
      console.error('Error extracting market trends:', error);
      return { trends: [], overallTrend: 'neutral' };
    }
  }

  async extractVolatilityAnalysis(content: string): Promise<{overallVolatility: string, volatilityLevel: number, pairs: Array<{pair: string, volatility: string, level: number, factors: Array<string>}>, forecast: string}> {
    const service = geminiPDFService;
    
    return await service.extractVolatilityAnalysis(content);
  }

  async extractCurrencyMatrix(content: string): Promise<Array<{currency: string, strength: number, bias: string, reasoning: string}>> {
    const service = geminiPDFService;
    
    return await service.extractCurrencyMatrix(content);
  }
}

export const storage = new MemStorage();
