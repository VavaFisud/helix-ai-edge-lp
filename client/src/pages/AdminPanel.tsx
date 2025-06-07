import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Bell, FileText, Upload, Send, Download, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SchedulerStatus } from '@/components/admin/SchedulerStatus';
import { supabase } from '@/lib/supabase';

interface Notification {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success' | 'error';
  isRead: boolean;
  createdAt: Date;
  isGlobal: boolean;
  userId?: string;
}

interface DailyReport {
  id: string;
  title: string;
  description: string;
  reportDate: Date;
  pdfUrl: string;
  createdAt: Date;
}

export default function AdminPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [dailyReports, setDailyReports] = useState<DailyReport[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Notification form state
  const [notificationForm, setNotificationForm] = useState({
    title: '',
    content: '',
    type: 'info' as 'info' | 'warning' | 'success' | 'error',
    isGlobal: true,
    userId: ''
  });

  // Daily report form state
  const [reportForm, setReportForm] = useState({
    title: '',
    description: '',
    reportDate: new Date().toISOString().split('T')[0],
    pdfFile: null as File | null
  });

  useEffect(() => {
    fetchNotifications();
    fetchDailyReports();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/notifications');
      if (response.ok) {
        const data = await response.json();
        setNotifications(data);
      }
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  const fetchDailyReports = async () => {
    try {
      const response = await fetch('/api/daily-reports');
      if (response.ok) {
        const data = await response.json();
        setDailyReports(data);
      }
    } catch (error) {
      console.error('Failed to fetch daily reports:', error);
    }
  };

  const handleSendNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: notificationForm.title,
          content: notificationForm.content,
          message: notificationForm.content,
          type: notificationForm.type,
          isGlobal: notificationForm.isGlobal,
          userId: notificationForm.isGlobal ? null : notificationForm.userId
        }),
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Notification sent successfully!',
        });
        setNotificationForm({
          title: '',
          content: '',
          type: 'info',
          isGlobal: true,
          userId: ''
        });
        fetchNotifications();
      } else {
        throw new Error('Failed to send notification');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send notification',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUploadReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportForm.pdfFile) {
      toast({
        title: 'Error',
        description: 'Please select a PDF file',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('title', reportForm.title);
    formData.append('description', reportForm.description);
    formData.append('reportDate', reportForm.reportDate);
    formData.append('pdf', reportForm.pdfFile);

    try {
      const response = await fetch('/api/daily-reports', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Daily report uploaded successfully!',
        });
        setReportForm({
          title: '',
          description: '',
          reportDate: new Date().toISOString().split('T')[0],
          pdfFile: null
        });
        fetchDailyReports();
      } else {
        throw new Error('Failed to upload report');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload daily report',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNotification = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Notification deleted successfully!',
        });
        fetchNotifications();
      } else {
        throw new Error('Failed to delete notification');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete notification',
        variant: 'destructive',
      });
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Bell className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-600">Manage notifications and daily reports</p>
        </div>
      </div>

      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Daily Reports
          </TabsTrigger>
          <TabsTrigger value="scheduler" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Scheduler
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Send Notification Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Notification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSendNotification} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={notificationForm.title}
                      onChange={(e) => setNotificationForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Notification title"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={notificationForm.content}
                      onChange={(e) => setNotificationForm(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Notification content"
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <select
                      id="type"
                      value={notificationForm.type}
                      onChange={(e) => setNotificationForm(prev => ({ ...prev, type: e.target.value as any }))}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="info">Info</option>
                      <option value="success">Success</option>
                      <option value="warning">Warning</option>
                      <option value="error">Error</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isGlobal"
                      checked={notificationForm.isGlobal}
                      onChange={(e) => setNotificationForm(prev => ({ ...prev, isGlobal: e.target.checked }))}
                      className="rounded"
                    />
                    <Label htmlFor="isGlobal">Notification globale (pour tous les utilisateurs)</Label>
                  </div>
                  {!notificationForm.isGlobal && (
                    <div>
                      <Label htmlFor="userId">ID Utilisateur spécifique</Label>
                      <Input
                        id="userId"
                        value={notificationForm.userId}
                        onChange={(e) => setNotificationForm(prev => ({ ...prev, userId: e.target.value }))}
                        placeholder="ID de l'utilisateur (ex: uuid)"
                        required={!notificationForm.isGlobal}
                      />
                    </div>
                  )}
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? 'Sending...' : 'Send Notification'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Recent Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">No notifications sent yet</p>
                  ) : (
                    notifications.map((notification) => (
                      <div key={notification.id} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{notification.title}</h4>
                              <Badge variant={notification.isGlobal ? "default" : "secondary"}>
                                {notification.isGlobal ? "Globale" : "Personnalisée"}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                            {!notification.isGlobal && notification.userId && (
                              <p className="text-xs text-gray-500 mt-1">Pour l'utilisateur: {notification.userId}</p>
                            )}
                            <p className="text-xs text-gray-400 mt-2">
                              {new Date(notification.createdAt).toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getTypeColor(notification.type)}>
                              {notification.type}
                            </Badge>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteNotification(notification.id)}
                              className="h-8 w-8 p-0"
                            >
                              ×
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upload Report Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Daily Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUploadReport} className="space-y-4">
                  <div>
                    <Label htmlFor="reportTitle">Title</Label>
                    <Input
                      id="reportTitle"
                      value={reportForm.title}
                      onChange={(e) => setReportForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Daily Fundamental Report - [Date]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="reportDescription">Description</Label>
                    <Textarea
                      id="reportDescription"
                      value={reportForm.description}
                      onChange={(e) => setReportForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Brief description of the report content"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="reportDate">Report Date</Label>
                    <Input
                      id="reportDate"
                      type="date"
                      value={reportForm.reportDate}
                      onChange={(e) => setReportForm(prev => ({ ...prev, reportDate: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="pdfFile">PDF File</Label>
                    <Input
                      id="pdfFile"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => setReportForm(prev => ({ ...prev, pdfFile: e.target.files?.[0] || null }))}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? 'Uploading...' : 'Upload Report'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {dailyReports.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">No reports uploaded yet</p>
                  ) : (
                    dailyReports.map((report) => (
                      <div key={report.id} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-medium">{report.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                            <p className="text-xs text-gray-400 mt-2">
                              Report Date: {new Date(report.reportDate).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-gray-400">
                              Uploaded: {new Date(report.createdAt).toLocaleString()}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={async () => {
                              try {
                                const { data: { session } } = await supabase.auth.getSession();
                                if (!session) {
                                  toast({ title: 'Authentication Required', description: 'Please log in to download reports.', variant: 'destructive' });
                                  return;
                                }
                                const filename = report.pdfUrl.split('/').pop();
                                const response = await fetch(`/api/download/pdf/${filename}`, {
                                  headers: { 'Authorization': `Bearer ${session.access_token}` },
                                });
                                if (!response.ok) throw new Error('Download failed');
                                const blob = await response.blob();
                                const url = window.URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = filename || 'report.pdf';
                                document.body.appendChild(a);
                                a.click();
                                window.URL.revokeObjectURL(url);
                                document.body.removeChild(a);
                              } catch (error) {
                                toast({ title: 'Download Failed', description: 'Failed to download the report.', variant: 'destructive' });
                              }
                            }}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scheduler" className="space-y-6">
          <SchedulerStatus />
        </TabsContent>
      </Tabs>
    </div>
  );
}