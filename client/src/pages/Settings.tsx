import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { CreditCard, Bell, Shield, Trash2, Download, Eye, EyeOff, Crown, Zap } from 'lucide-react';

export function Settings() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketAlerts, setMarketAlerts] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [accountType, setAccountType] = useState('Free');
  const [subscriptionStatus, setSubscriptionStatus] = useState('active');
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        toast.error('Error fetching session:', { description: sessionError.message });
        setLoading(false);
        return;
      }

      if (session?.user) {
        setUser(session.user);
        const metadata = session.user.user_metadata;
        setAccountType(metadata?.account_type || 'Free');
        setEmailNotifications(metadata?.email_notifications !== false);
        setPushNotifications(metadata?.push_notifications !== false);
        setMarketAlerts(metadata?.market_alerts !== false);
        setTwoFactorEnabled(metadata?.two_factor_enabled || false);
      } else {
        toast.info('No active session. Please log in.');
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handlePasswordChange = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      toast.error('Error updating password:', { description: error.message });
    } else {
      toast.success('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
    setLoading(false);
  };

  const handleNotificationUpdate = async (setting: string, value: boolean) => {
    if (!user) return;

    const updates = {
      [setting]: value,
    };

    const { error } = await supabase.auth.updateUser({ data: updates });

    if (error) {
      toast.error('Error updating notification settings:', { description: error.message });
    } else {
      toast.success('Notification settings updated!');
    }
  };

  const handleDeleteAccount = async () => {
    if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      return;
    }

    toast.error('Account deletion is not yet implemented. Please contact support.');
  };

  const handleExportData = async () => {
    toast.info('Data export feature coming soon!');
  };

  const handleUpgradeSubscription = () => {
    toast.info('Subscription upgrade coming soon!');
  };

  const handleCancelSubscription = () => {
    toast.info('Subscription management coming soon!');
  };

  if (loading) {
    return <div className="p-6">Loading settings...</div>;
  }

  if (!user) {
    return <div className="p-6">Please log in to view your settings.</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account settings and preferences.</p>
        </div>

        <Tabs defaultValue="subscription" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Subscription Management
                </CardTitle>
                <CardDescription>
                  Manage your subscription plan and billing information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {accountType === 'Pro' ? (
                      <Crown className="h-8 w-8 text-yellow-500" />
                    ) : accountType === 'Premium' ? (
                      <Zap className="h-8 w-8 text-purple-500" />
                    ) : (
                      <div className="h-8 w-8 bg-gray-200 rounded-full" />
                    )}
                    <div>
                      <h3 className="font-semibold">{accountType} Plan</h3>
                      <p className="text-sm text-muted-foreground">
                        {accountType === 'Free' ? 'Basic features included' : 
                         accountType === 'Pro' ? 'Advanced trading tools' : 
                         'All premium features'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={subscriptionStatus === 'active' ? 'default' : 'secondary'}>
                      {subscriptionStatus}
                    </Badge>
                    {accountType !== 'Free' && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Billed {billingCycle}
                      </p>
                    )}
                  </div>
                </div>

                {accountType === 'Free' && (
                  <div className="space-y-4">
                    <h4 className="font-medium">Upgrade Your Plan</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-2 border-yellow-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Crown className="h-5 w-5 text-yellow-500" />
                            Pro Plan
                          </CardTitle>
                          <CardDescription>$29/month</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm">• Advanced AI insights</p>
                          <p className="text-sm">• Real-time market data</p>
                          <p className="text-sm">• Priority support</p>
                        </CardContent>
                        <CardFooter>
                          <Button onClick={handleUpgradeSubscription} className="w-full">
                            Upgrade to Pro
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="border-2 border-purple-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Zap className="h-5 w-5 text-purple-500" />
                            Premium Plan
                          </CardTitle>
                          <CardDescription>$99/month</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm">• Everything in Pro</p>
                          <p className="text-sm">• Custom AI models</p>
                          <p className="text-sm">• White-label solutions</p>
                        </CardContent>
                        <CardFooter>
                          <Button onClick={handleUpgradeSubscription} variant="outline" className="w-full">
                            Upgrade to Premium
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                )}

                {accountType !== 'Free' && (
                  <div className="space-y-4">
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Billing Information</h4>
                        <p className="text-sm text-muted-foreground">Manage your payment method and billing cycle</p>
                      </div>
                      <Button variant="outline">Update Payment</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Cancel Subscription</h4>
                        <p className="text-sm text-muted-foreground">Cancel your subscription at any time</p>
                      </div>
                      <Button variant="destructive" onClick={handleCancelSubscription}>
                        Cancel Plan
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Manage your password and security preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <h4 className="font-medium">Change Password</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showCurrentPassword ? 'text' : 'password'}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="pr-10"
                        placeholder="Minimum 8 characters"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Password'}
                  </Button>
                </form>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Add an extra layer of security to your account</p>
                      <p className="text-xs text-muted-foreground">Requires authentication app</p>
                    </div>
                    <Switch
                      checked={twoFactorEnabled}
                      onCheckedChange={(checked) => {
                        setTwoFactorEnabled(checked);
                        handleNotificationUpdate('two_factor_enabled', checked);
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Choose how you want to be notified about important updates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={(checked) => {
                        setEmailNotifications(checked);
                        handleNotificationUpdate('email_notifications', checked);
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Push Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive browser notifications</p>
                    </div>
                    <Switch
                      checked={pushNotifications}
                      onCheckedChange={(checked) => {
                        setPushNotifications(checked);
                        handleNotificationUpdate('push_notifications', checked);
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Market Alerts</h4>
                      <p className="text-sm text-muted-foreground">Get notified about important market movements</p>
                    </div>
                    <Switch
                      checked={marketAlerts}
                      onCheckedChange={(checked) => {
                        setMarketAlerts(checked);
                        handleNotificationUpdate('market_alerts', checked);
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Management</CardTitle>
                <CardDescription>
                  Manage your account data and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Export Account Data</h4>
                      <p className="text-sm text-muted-foreground">Download a copy of your account data</p>
                    </div>
                    <Button variant="outline" onClick={handleExportData}>
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium text-destructive">Danger Zone</h4>
                    <div className="border border-destructive/20 rounded-lg p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium">Delete Account</h5>
                          <p className="text-sm text-muted-foreground">
                            Permanently delete your account and all associated data
                          </p>
                        </div>
                        <Button variant="destructive" onClick={handleDeleteAccount}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}