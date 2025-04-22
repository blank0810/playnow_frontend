"use client"

import { useState } from "react"
import { Calendar, CreditCard, Edit, Mail, Phone, Save, Star, Ticket } from "lucide-react"
import { Button } from "@/components/ui-consumer/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui-consumer/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui-consumer/tabs"
import { Badge } from "@/components/ui-consumer/badge"
import { Progress } from "@/components/ui-consumer/progress"
import { Input } from "@/components/ui-consumer/input"
import { Label } from "@/components/ui-consumer/label"
import { Textarea } from "@/components/ui-consumer/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-consumer/avatar"
import { SubscriptionUpgrade } from "./subscription-upgrade"

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    bio: "Food enthusiast and adventure seeker. Always looking for the next great deal!",
    avatar: "/placeholder.svg?height=200&width=200",
  })

  // Sample subscription data
  const subscriptionData = {
    plan: "Premium",
    status: "Active",
    renewalDate: "2025-12-31",
    price: 9.99,
    billingCycle: "Monthly",
    features: [
      "Up to 10 coupons per month",
      "Early access to exclusive deals",
      "No processing fees",
      "Priority customer support",
      "Personalized deal recommendations",
    ],
    couponUsage: {
      used: 4,
      total: 10,
      percentage: 40,
    },
  }

  // Available plans
  const plans = [
    {
      name: "Basic",
      price: 0,
      billingCycle: "Free",
      features: ["Up to 3 coupons per month", "Standard customer support", "Basic deal access"],
      recommended: false,
    },
    {
      name: "Premium",
      price: 9.99,
      billingCycle: "Monthly",
      features: [
        "Up to 10 coupons per month",
        "Early access to exclusive deals",
        "No processing fees",
        "Priority customer support",
        "Personalized deal recommendations",
      ],
      recommended: true,
    },
    {
      name: "Ultimate",
      price: 19.99,
      billingCycle: "Monthly",
      features: [
        "Unlimited coupons",
        "VIP access to all deals",
        "No processing fees",
        "24/7 priority support",
        "Personalized deal recommendations",
        "Exclusive member-only events",
      ],
      recommended: false,
    },
  ]

  const handleSaveProfile = () => {
    setIsEditing(false)
    // In a real app, you would save the data to the backend here
  }

  // Add a state to track when the subscription is upgraded
  const [currentSubscription, setCurrentSubscription] = useState("Premium")

  // Update the handleUpgradeComplete function
  const handleUpgradeComplete = (newPlan) => {
    if (newPlan) {
      setCurrentSubscription(newPlan.name)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">My Account</h1>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">

        <Card className="hover:shadow-lg rounded-2xl border">
  <CardHeader>
    <div className="flex justify-between items-center">
      <div>
        <CardTitle className="text-xl font-semibold">Personal Information</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Manage your personal information and preferences
        </CardDescription>
      </div>
      {!isEditing ? (
        <Button variant="outline" onClick={() => setIsEditing(true)} className="transition duration-150">
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      ) : (
        <Button onClick={handleSaveProfile} className="transition duration-150">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      )}
    </div>
  </CardHeader>
  <CardContent>
    <div className="flex flex-col md:flex-row gap-6">
      {/* Avatar + Change Photo */}
      <div className="md:w-1/3 flex flex-col items-center gap-4">
        <Avatar className="w-32 h-32 ring-2 ring-gray-200">
          <AvatarImage src={userData.avatar || "/placeholder.svg"} alt="Profile" />
          <AvatarFallback className="text-2xl">JD</AvatarFallback>
        </Avatar>
        {isEditing && (
          <Button variant="outline" className="w-full">
            Change Photo
          </Button>
        )}
      </div>

      {/* Editable or Display Info */}
      <div className="md:w-2/3">
        {isEditing ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={userData.address}
                  onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={userData.bio}
                onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                className="min-h-[100px]"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-muted-foreground font-medium">Full Name</h3>
                <p className="mt-1">{userData.name}</p>
              </div>
              <div>
                <h3 className="text-muted-foreground font-medium">Email</h3>
                <div className="mt-1 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p>{userData.email}</p>
                </div>
              </div>
              <div>
                <h3 className="text-muted-foreground font-medium">Phone</h3>
                <div className="mt-1 flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p>{userData.phone}</p>
                </div>
              </div>
              <div>
                <h3 className="text-muted-foreground font-medium">Address</h3>
                <p className="mt-1">{userData.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-muted-foreground font-medium">Bio</h3>
              <p className="mt-1">{userData.bio}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </CardContent>
</Card>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Ticket className="h-4 w-4 mr-2 text-primary" />
                  Coupons Purchased
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">4 active coupons</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <CreditCard className="h-4 w-4 mr-2 text-green-500" />
                  Total Spent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$563.00</div>
                <p className="text-xs text-muted-foreground">Saved $486.00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                  Member Since
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Jan 2025</div>
                <p className="text-xs text-muted-foreground">3 months ago</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="subscription" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Current Subscription</CardTitle>
                  <CardDescription>
                    Your subscription renews on {new Date(subscriptionData.renewalDate).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge>{subscriptionData.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Plan</h3>
                      <div className="mt-1 flex items-center">
                        <Star className="h-4 w-4 mr-2 text-amber-500" />
                        <p className="font-semibold">{subscriptionData.plan}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Billing</h3>
                      <p className="mt-1">
                        ${subscriptionData.price} / {subscriptionData.billingCycle}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Features</h3>
                      <ul className="mt-2 space-y-1">
                        {subscriptionData.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Coupon Usage This Month</h3>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{subscriptionData.couponUsage.used} used</span>
                          <span>{subscriptionData.couponUsage.total} total</span>
                        </div>
                        <Progress value={subscriptionData.couponUsage.percentage} className="h-2" />
                      </div>
                    </div>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-medium">Need more coupons?</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Upgrade your plan to get access to more coupons and exclusive deals.
                        </p>
                        <SubscriptionUpgrade
                          currentPlan={currentSubscription}
                          onUpgradeComplete={handleUpgradeComplete}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-semibold mb-4">Available Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <Card key={plan.name} className={plan.recommended ? "border-primary" : ""}>
                  {plan.recommended && (
                    <div className="bg-primary text-primary-foreground text-center py-1 text-xs font-medium">
                      RECOMMENDED
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-2xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/{plan.billingCycle.toLowerCase()}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={plan.name === subscriptionData.plan ? "outline" : "default"}
                      disabled={plan.name === subscriptionData.plan}
                    >
                      {plan.name === subscriptionData.plan ? "Current Plan" : "Select Plan"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
