// Define interfaces for the schema types since the module is not found
import { v4 as uuidv4 } from 'uuid';

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
}

export interface InsertNotification {
  userId?: string;
  title: string;
  content: string;
  message: string;
  type: string;
  isGlobal: boolean;
}

export interface DailyReport {
  id: string;
  reportDate: Date;
  content: string;
  createdAt: Date;
}

export interface InsertDailyReport {
  reportDate: Date;
  content: string;
}

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getNotifications(userId?: string): Promise<Notification[]>;
  createNotification(notification: InsertNotification): Promise<Notification>;
  markNotificationAsRead(id: string): Promise<void>;
  deleteNotification(id: string): Promise<boolean>;
  getDailyReports(): Promise<DailyReport[]>;
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
        title: "Bienvenue sur Helix AI",
        content: "Votre plateforme d'analyse financière est prête à l'emploi.",
        message: "Votre plateforme d'analyse financière est prête à l'emploi.",
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

  async getDailyReports(): Promise<DailyReport[]> {
    return Array.from(this.dailyReports.values())
      .sort((a, b) => new Date(b.reportDate).getTime() - new Date(a.reportDate).getTime());
  }

  async createDailyReport(insertReport: InsertDailyReport): Promise<DailyReport> {
    const id = uuidv4();
    const report: DailyReport = {
      ...insertReport,
      id,
      createdAt: new Date()
    };
    this.dailyReports.set(id, report);
    return report;
  }

  async getLatestDailyReport(): Promise<DailyReport | undefined> {
    const reports = await this.getDailyReports();
    return reports[0];
  }
}

export const storage = new MemStorage();
