"use client"

import { useState } from "react"
import { Bell, Lock, Mail, Save, Shield, Smartphone, User } from "lucide-react"
import { Button } from "@/components/ui-consumer/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui-consumer/card"
import { Input } from "@/components/ui-consumer/input"
import { Label } from "@/components/ui-consumer/label"
import { Switch } from "@/components/ui-consumer/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui-consumer/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui-consumer/dialog"
import { Separator } from "@/components/ui-consumer/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui-consumer/alert"

export default function SettingsPage() {
  const [emailSettings, setEmailSettings] = useState({
    marketing: true,
    deals: true,
    reminders: true,
    account: true,
  })

  const [notificationSettings, setNotificationSettings] = useState({
    newDeals: true,
    expiringCoupons: true,
    successfulPurchases: true,
    accountUpdates: true,
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [emailData, setEmailData] = useState({
    currentEmail: "john.doe@example.com",
    newEmail: "",
    password: "",
  })

  const handlePasswordChange = (e) => {
    e.preventDefault()
    // In a real app, you would validate and submit the password change
    console.log("Password change submitted:", passwordData)
    // Reset form
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  const handleEmailChange = (e) => {
    e.preventDefault()
    // In a real app, you would validate and submit the email change
    console.log("Email change submitted:", emailData)
    // Reset form
    setEmailData({
      ...emailData,
      newEmail: "",
      password: "",
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                Email Settings
              </CardTitle>
              <CardDescription>Manage your email address and change your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Change Email Address</h3>
                <form onSubmit={handleEmailChange} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentEmail">Current Email</Label>
                    <Input id="currentEmail" value={emailData.currentEmail} disabled className="bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newEmail">New Email</Label>
                    <Input
                      id="newEmail"
                      type="email"
                      value={emailData.newEmail}
                      onChange={(e) => setEmailData({ ...emailData, newEmail: e.target.value })}
                      placeholder="Enter new email address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emailPassword">Password</Label>
                    <Input
                      id="emailPassword"
                      type="password"
                      value={emailData.password}
                      onChange={(e) => setEmailData({ ...emailData, password: e.target.value })}
                      placeholder="Enter your password to confirm"
                      required
                    />
                  </div>
                  <Button type="submit">
                    <Save className="h-4 w-4 mr-2" />
                    Update Email
                  </Button>
                </form>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium mb-3">Password</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Lock className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Change Password</DialogTitle>
                      <DialogDescription>
                        Enter your current password and a new password to update your credentials.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handlePasswordChange} className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                          required
                        />
                      </div>
                      <DialogFooter className="pt-4">
                        <Button type="submit">Update Password</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-primary" />
                Account Preferences
              </CardTitle>
              <CardDescription>Manage your account settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Language</h3>
                    <p className="text-sm text-muted-foreground">Select your preferred language</p>
                  </div>
                  <select className="rounded-md border border-input bg-background px-3 py-2">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Time Zone</h3>
                    <p className="text-sm text-muted-foreground">Set your local time zone</p>
                  </div>
                  <select className="rounded-md border border-input bg-background px-3 py-2">
                    <option value="est">Eastern Time (ET)</option>
                    <option value="cst">Central Time (CT)</option>
                    <option value="mst">Mountain Time (MT)</option>
                    <option value="pst">Pacific Time (PT)</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Currency</h3>
                    <p className="text-sm text-muted-foreground">Set your preferred currency</p>
                  </div>
                  <select className="rounded-md border border-input bg-background px-3 py-2">
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="gbp">GBP (£)</option>
                    <option value="cad">CAD ($)</option>
                  </select>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium mb-3">Email Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Marketing Emails</h4>
                      <p className="text-sm text-muted-foreground">Receive emails about new features and promotions</p>
                    </div>
                    <Switch
                      checked={emailSettings.marketing}
                      onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, marketing: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Deal Alerts</h4>
                      <p className="text-sm text-muted-foreground">
                        Get notified about new deals that match your interests
                      </p>
                    </div>
                    <Switch
                      checked={emailSettings.deals}
                      onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, deals: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Coupon Reminders</h4>
                      <p className="text-sm text-muted-foreground">Receive reminders about expiring coupons</p>
                    </div>
                    <Switch
                      checked={emailSettings.reminders}
                      onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, reminders: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Account Updates</h4>
                      <p className="text-sm text-muted-foreground">Important updates about your account</p>
                    </div>
                    <Switch
                      checked={emailSettings.account}
                      onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, account: checked })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-primary" />
                Push Notifications
              </CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">New Deals</h4>
                    <p className="text-sm text-muted-foreground">Get notified when new deals are available</p>
                  </div>
                  <Switch
                    checked={notificationSettings.newDeals}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, newDeals: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Expiring Coupons</h4>
                    <p className="text-sm text-muted-foreground">Get reminded when your coupons are about to expire</p>
                  </div>
                  <Switch
                    checked={notificationSettings.expiringCoupons}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, expiringCoupons: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Successful Purchases</h4>
                    <p className="text-sm text-muted-foreground">Get notified when your purchase is successful</p>
                  </div>
                  <Switch
                    checked={notificationSettings.successfulPurchases}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, successfulPurchases: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Account Updates</h4>
                    <p className="text-sm text-muted-foreground">Get notified about important account updates</p>
                  </div>
                  <Switch
                    checked={notificationSettings.accountUpdates}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, accountUpdates: checked })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2 text-primary" />
                Mobile App Notifications
              </CardTitle>
              <CardDescription>Manage notifications for the mobile app</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <AlertTitle>Download our mobile app</AlertTitle>
                    <AlertDescription>
                      Get the best experience with our mobile app. Available on iOS and Android.
                    </AlertDescription>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <Button variant="outline" size="sm">
                      App Store
                    </Button>
                    <Button variant="outline" size="sm">
                      Google Play
                    </Button>
                  </div>
                </div>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Login History</h4>
                    <p className="text-sm text-muted-foreground">View your recent login activity</p>
                  </div>
                  <Button variant="outline">View</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Connected Devices</h4>
                    <p className="text-sm text-muted-foreground">Manage devices connected to your account</p>
                  </div>
                  <Button variant="outline">Manage</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium mb-3">Account Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-amber-600 hover:bg-amber-50 hover:text-amber-700"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Log Out of All Devices
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-destructive hover:bg-destructive/10">
                    <Shield className="h-4 w-4 mr-2" />
                    Deactivate Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
