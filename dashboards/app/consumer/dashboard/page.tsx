"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Download, Filter, MapPin, Search, Star, Ticket } from "lucide-react"
import { Button } from "@/components/ui-consumer/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui-consumer/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui-consumer/tabs"
import { Badge } from "@/components/ui-consumer/badge"
import { Progress } from "@/components/ui-consumer/progress"
import { Input } from "@/components/ui-consumer/input"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui-consumer/hover-card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui-consumer/dropdown-menu"

export default function ConsumerDashboard() {
  // Update the search functionality to filter coupons
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for coupons
  const coupons = [
    {
      id: 1,
      title: "Two-Hour Cooking Class with Professional Chef",
      merchant: "Culinary Institute",
      location: "New York",
      originalPrice: 120,
      discountedPrice: 60,
      discount: "50%",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      reviewCount: 42,
      purchased: "2025-04-01",
      expires: "2025-06-30",
      status: "Active",
      code: "COOK50X123",
      category: "Activities",
    },
    {
      id: 2,
      title: "Full Day Spa Package with Massage and Facial",
      merchant: "Luxury Spa & Wellness",
      location: "New York",
      originalPrice: 250,
      discountedPrice: 125,
      discount: "50%",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviewCount: 86,
      purchased: "2025-03-15",
      expires: "2025-06-15",
      status: "Active",
      code: "SPA50X456",
      category: "Beauty & Spas",
    },
    {
      id: 3,
      title: "Three-Course Dinner for Two with Wine",
      merchant: "Gourmet Restaurant",
      location: "New York",
      originalPrice: 180,
      discountedPrice: 99,
      discount: "45%",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.2,
      reviewCount: 128,
      purchased: "2025-02-20",
      expires: "2025-05-20",
      status: "Active",
      code: "DINNER45X789",
      category: "Restaurants",
    },
    {
      id: 4,
      title: "One-Hour Professional Photo Session",
      merchant: "Capture Studios",
      location: "New York",
      originalPrice: 150,
      discountedPrice: 75,
      discount: "50%",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      reviewCount: 34,
      purchased: "2025-01-10",
      expires: "2025-04-10",
      status: "Expired",
      code: "PHOTO50X012",
      category: "Services",
    },
  ]

  // Filter coupons based on search query
  const filteredCoupons = coupons.filter(
    (coupon) =>
      coupon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Get active coupons - update to use filteredCoupons
  const activeCoupons = filteredCoupons.filter((coupon) => coupon.status === "Active")

  // Get expired coupons - update to use filteredCoupons
  const expiredCoupons = filteredCoupons.filter((coupon) => coupon.status === "Expired")

  // Recent transactions
  const recentTransactions = [
    {
      id: "TRX-001",
      date: "2025-04-01",
      merchant: "Culinary Institute",
      amount: 60,
      status: "Completed",
    },
    {
      id: "TRX-002",
      date: "2025-03-15",
      merchant: "Luxury Spa & Wellness",
      amount: 125,
      status: "Completed",
    },
    {
      id: "TRX-003",
      date: "2025-02-20",
      merchant: "Gourmet Restaurant",
      amount: 99,
      status: "Completed",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Hello, Ehnand Azucena!</h1>

        <div className="flex items-center gap-2 self-stretch sm:self-auto w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            {/* In the search input component, update the onChange handler */}
            <Input
              type="search"
              placeholder="Search coupons..."
              className="pl-9 sm:w-[250px] rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Categories</DropdownMenuItem>
              <DropdownMenuItem>Restaurants</DropdownMenuItem>
              <DropdownMenuItem>Beauty & Spas</DropdownMenuItem>
              <DropdownMenuItem>Activities</DropdownMenuItem>
              <DropdownMenuItem>Services</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <Card className="p-4 shadow-sm border border-red-100 hover:shadow-md transition-shadow duration-200">
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center space-x-2">
      <Ticket className="h-5 w-5 text-red-500" />
      <h3 className="text-base font-semibold text-red-600">Active Coupons</h3>
    </div>
    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
      {activeCoupons.length} total
    </span>
  </div>
  <CardContent className="p-0">
    <div className="flex flex-col items-center text-center mt-2">
      <div className="text-3xl font-bold text-gray-900">{activeCoupons.length}</div>
      <p className="text-sm text-muted-foreground">Available to redeem</p>
    </div>
  </CardContent>
</Card>


<Card className="p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-200">
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center space-x-2">
      <Calendar className="h-5 w-5 text-green-500" />
      <h3 className="text-base font-semibold text-green-600">Total Savings</h3>
    </div>
    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
      ${486.00}
    </span>
  </div>
  <CardContent className="p-0">
    <div className="flex flex-col items-center text-center mt-2">
      <div className="text-3xl font-bold text-gray-900">${486.00}</div>
      <p className="text-sm text-muted-foreground">From all your coupons</p>
    </div>
  </CardContent>
</Card>



<Card className="p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-200">
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center space-x-2">
      <Star className="h-5 w-5 text-amber-500" />
      <h3 className="text-base font-semibold text-amber-600">Membership Status</h3>
    </div>
    <span className="text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">
      Premium
    </span>
  </div>
  <CardContent className="p-0">
    <div className="flex flex-col items-center text-center mt-2">
      <div className="text-2xl font-bold text-gray-900">Premium</div>
    </div>
    <div className="mt-4">
      <div className="flex justify-between text-xs text-muted-foreground mb-1">
        <span>Coupon Usage</span>
        <span>4/10 this month</span>
      </div>
      <Progress value={40} className="h-2 [&>div]:bg-orange-500 bg-orange-100" />
    </div>
  </CardContent>
</Card>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2">
    <Card className="shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center mb-1">
        <CardTitle className="text-3xl font-semibold text-gray-700">My Coupons</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="text-orange-600 hover:text-orange-700 flex items-center"
            asChild
          >
            <Link href="/consumer/coupons">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          Manage your active and expired coupons
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-2 bg-orange-100 rounded-md mb-4">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeCoupons.slice(0, 3).map((coupon) => (
              <div
                key={coupon.id}
                className="hover:bg-orange-50 cursor-pointer rounded-md p-2 transition-transform duration-200 hover:scale-105"
              >
                <CouponCard coupon={coupon} />
              </div>
            ))}
          </TabsContent>

          <TabsContent value="expired" className="space-y-4">
            {expiredCoupons.slice(0, 3).map((coupon) => (
              <div
                key={coupon.id}
                className="hover:bg-orange-50 cursor-pointer rounded-md p-2 transition-transform duration-200 hover:scale-105"
              >
                <CouponCard coupon={coupon} />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  </div>

  <div>
  <Card className="shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-200">
    <CardHeader className="pb-3">
      <div className="flex justify-between items-center mb-1">
        <CardTitle className="text-lg font-semibold text-gray-700">Recent Transactions</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="text-orange-600 hover:text-orange-700 flex items-center"
          asChild
        >
          <Link href="/consumer/transactions">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <CardDescription className="text-sm text-muted-foreground">
        Your latest purchase activity
      </CardDescription>
    </CardHeader>

    <CardContent className="pt-2 space-y-4">
      {recentTransactions.map((transaction) => (
        <HoverCard key={transaction.id}>
          <HoverCardTrigger asChild>
            <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 cursor-pointer transform transition-transform duration-150 hover:scale-105">
              <div>
                <p className="font-medium text-sm">{transaction.merchant}</p>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(transaction.date).toLocaleDateString()}
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${transaction.amount}</p>
                <Badge
                  variant="outline"
                  className="mt-1 bg-green-50 text-green-700 border-green-200"
                >
                  {transaction.status}
                </Badge>
              </div>
            </div>
          </HoverCardTrigger>

          <HoverCardContent className="w-80">
            <div className="flex justify-between">
              <h4 className="font-semibold">{transaction.merchant}</h4>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                {transaction.status}
              </Badge>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Transaction ID:</span>
                <span>{transaction.id}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Date:</span>
                <span>{new Date(transaction.date).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-medium">${transaction.amount}</span>
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <Button
                size="sm"
                variant="outline"
                asChild
                className="border-orange-400 text-orange-500 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-500 transform transition-transform duration-200 hover:scale-105"
              >
                <Link href={`/consumer/transactions?id=${transaction.id}`}>
                  View Details
                </Link>
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </CardContent>

    <CardFooter className="p-4">
      <Button
        variant="outline"
        className="w-full bg-orange-500 text-white hover:bg-orange-600 hover:text-white transform transition-transform duration-200 hover:scale-105"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Statement
      </Button>
    </CardFooter>
  </Card>
</div>
</div>
    </div>
  )
}

interface Coupon {
  id: number;
  title: string;
  merchant: string;
  location: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  image: string;
  rating: number;
  reviewCount: number;
  purchased: string;
  expires: string;
  status: string;
  code: string;
  category: string;
}

function CouponCard({ coupon }: { coupon: Coupon }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
      <div className="sm:w-1/4">
        <div className="relative h-24 sm:h-full rounded-lg overflow-hidden">
          <Image src={coupon.image || "/placeholder.svg"} alt={coupon.title} fill className="object-cover" />
          <div className="absolute top-2 left-2 bg-orange-500 text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
            {coupon.discount} OFF
          </div>
        </div>
      </div>
      <div className="sm:w-3/4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm sm:text-base">{coupon.title}</h3>
            <Badge variant={coupon.status === "Active" ? "default" : "secondary"}>{coupon.status}</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{coupon.merchant}</p>
          <div className="flex items-center text-xs text-muted-foreground mt-2">
            <MapPin className="h-3 w-3 mr-1" />
            {coupon.location}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            Expires: {new Date(coupon.expires).toLocaleDateString()}
          </div>
          <div className="mt-2 sm:mt-0 text-xs font-medium bg-orange-100 p-2 rounded-md">
            Code: <span className="font-mono text-primary">{coupon.code}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
