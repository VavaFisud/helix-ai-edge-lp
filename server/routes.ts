import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import fs from "fs";

const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 }
});

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

  const httpServer = createServer(app);

  return httpServer;
}
