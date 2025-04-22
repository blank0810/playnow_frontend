"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  Calendar,
  ChevronRight,
  Download,
  Eye,
  Filter,
  MapPin,
  Search,
  ShoppingBag,
  Tag,
  Ticket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MerchantDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for stores
  const stores = [
    {
      id: 1,
      name: "Manhattan Branch",
      location: "123 Broadway, New York, NY",
      category: "Restaurant",
      logo: "/placeholder.svg?height=40&width=40",
      status: "Active",
      totalCoupons: 45,
      soldCoupons: 28,
      remainingCoupons: 17,
    },
    {
      id: 2,
      name: "Brooklyn Branch",
      location: "456 Atlantic Ave, Brooklyn, NY",
      category: "Restaurant",
      logo: "/placeholder.svg?height=40&width=40",
      status: "Active",
      totalCoupons: 32,
      soldCoupons: 19,
      remainingCoupons: 13,
    },
    {
      id: 3,
      name: "Queens Branch",
      location: "789 Queens Blvd, Queens, NY",
      category: "Restaurant",
      logo: "/placeholder.svg?height=40&width=40",
      status: "Inactive",
      totalCoupons: 20,
      soldCoupons: 5,
      remainingCoupons: 15,
    },
  ]

  // Filter stores based on search query
  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Calculate totals
  const totalCouponsUploaded = stores.reduce((sum, store) => sum + store.totalCoupons, 0)
  const totalCouponsSold = stores.reduce((sum, store) => sum + store.soldCoupons, 0)
  const totalCouponsRemaining = stores.reduce((sum, store) => sum + store.remainingCoupons, 0)
  const totalRevenue = totalCouponsSold * 60 // Assuming average price of $60 per coupon

  // Recent transactions
  const recentTransactions = [
    {
      id: "TRX-001",
      date: "2025-04-01",
      store: "Manhattan Branch",
      coupon: "Two-Hour Cooking Class",
      customer: "John Doe",
      amount: 60,
      status: "Completed",
    },
    {
      id: "TRX-002",
      date: "2025-03-30",
      store: "Brooklyn Branch",
      coupon: "Three-Course Dinner",
      customer: "Jane Smith",
      amount: 99,
      status: "Completed",
    },
    {
      id: "TRX-003",
      date: "2025-03-28",
      store: "Manhattan Branch",
      coupon: "Two-Hour Cooking Class",
      customer: "Robert Johnson",
      amount: 60,
      status: "Completed",
    },
    {
      id: "TRX-004",
      date: "2025-03-25",
      store: "Queens Branch",
      coupon: "Two-Hour Cooking Class",
      customer: "Emily Davis",
      amount: 60,
      status: "Completed",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Merchant Dashboard</h1>

        <div className="flex items-center gap-2 self-stretch sm:self-auto w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search stores..."
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
              <DropdownMenuItem>All Stores</DropdownMenuItem>
              <DropdownMenuItem>Active Stores</DropdownMenuItem>
              <DropdownMenuItem>Inactive Stores</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Building className="h-4 w-4 mr-2 text-primary" />
              Total Stores
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 py-6">
            <div className="text-2xl font-bold">{stores.length}</div>
            <p className="text-xs text-muted-foreground">
              {stores.filter((store) => store.status === "Active").length} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Tag className="h-4 w-4 mr-2 text-green-500" />
              Total Coupons
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-4">
            <div className="text-2xl font-bold">{totalCouponsUploaded}</div>
            <p className="text-xs text-muted-foreground">{totalCouponsRemaining} remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Ticket className="h-4 w-4 mr-2 text-amber-500" />
              Coupons Sold
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-4">
            <div className="text-2xl font-bold">{totalCouponsSold}</div>
            <p className="text-xs text-muted-foreground">
              {((totalCouponsSold / totalCouponsUploaded) * 100).toFixed(1)}% redemption rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <ShoppingBag className="h-4 w-4 mr-2 text-purple-500" />
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-4">
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">From all coupon sales</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="px-8 py-6">
              <div className="flex justify-between items-center">
                <CardTitle>Branch Information</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/merchant/branches">
                    Manage Branches <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <CardDescription>Overview of all your store branches</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6 py-3">Branch</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Location</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Status</TableHead>
                      <TableHead className="px-6 py-3">Coupons</TableHead>
                      <TableHead className="px-6 py-3 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStores.length > 0 ? (
                      filteredStores.map((store) => (
                        <TableRow key={store.id}>
                          <TableCell className="px-8 py-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={store.logo || "/placeholder.svg"} alt={store.name} />
                                <AvatarFallback>{store.name.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{store.name}</div>
                                <div className="text-sm text-muted-foreground md:hidden">{store.location}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">
                            <div className="flex items-center">
                              <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              {store.location}
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">
                            <Badge
                              variant={store.status === "Active" ? "default" : "secondary"}
                              className={
                                store.status === "Active"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                              }
                            >
                              {store.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span>Sold: {store.soldCoupons}</span>
                                <span>Total: {store.totalCoupons}</span>
                              </div>
                              <Progress
                                value={(store.soldCoupons / store.totalCoupons) * 100}
                                className="h-2"
                                indicatorClassName="bg-primary"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 text-right">
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/merchant/branches/${store.id}`}>
                                <Eye className="h-4 w-4 mr-1" /> View
                              </Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="px-6 py-4 text-center py-8">
                          <p className="text-muted-foreground">No stores found.</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/merchant/branches/new">
                  <Building className="mr-2 h-4 w-4" />
                  Add New Branch
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="h-full flex flex-col">
            <CardHeader className="px-6 py-5">
              <div className="flex justify-between items-center">
                <CardTitle>Recent Transactions</CardTitle>
                <Button variant="ghost" size="sm" className="text-primary" asChild>
                  <Link href="/merchant/transactions">
                    View All <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <CardDescription>Latest coupon sales</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-6 py-4">
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-sm">{transaction.coupon}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Building className="h-3 w-3 mr-1" />
                        {transaction.store}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(transaction.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${transaction.amount}</p>
                      <Badge variant="outline" className="mt-1 bg-green-50 text-green-700 border-green-200">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader className="px-6 py-5">
          <div className="flex justify-between items-center">
            <CardTitle>Basic Merchant Reports</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
          <CardDescription>Overview of your business performance</CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <Tabs defaultValue="coupons">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="coupons">Coupon Stats</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="coupons">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Total Coupons Uploaded</h3>
                    <span className="text-2xl font-bold">{totalCouponsUploaded}</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    Across all your branches, you have uploaded a total of {totalCouponsUploaded} coupons.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Total Coupons Sold</h3>
                    <span className="text-2xl font-bold">{totalCouponsSold}</span>
                  </div>
                  <Progress
                    value={(totalCouponsSold / totalCouponsUploaded) * 100}
                    className="h-2"
                    indicatorClassName="bg-green-500"
                  />
                  <p className="text-sm text-muted-foreground">
                    {totalCouponsSold} coupons have been sold, which is{" "}
                    {((totalCouponsSold / totalCouponsUploaded) * 100).toFixed(1)}% of your total inventory.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Coupons Remaining</h3>
                    <span className="text-2xl font-bold">{totalCouponsRemaining}</span>
                  </div>
                  <Progress
                    value={(totalCouponsRemaining / totalCouponsUploaded) * 100}
                    className="h-2"
                    indicatorClassName="bg-amber-500"
                  />
                  <p className="text-sm text-muted-foreground">
                    You have {totalCouponsRemaining} coupons remaining, which is{" "}
                    {((totalCouponsRemaining / totalCouponsUploaded) * 100).toFixed(1)}% of your total inventory.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="revenue">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Total Revenue</h3>
                    <span className="text-2xl font-bold">${totalRevenue.toLocaleString()}</span>
                  </div>
                  <Progress value={100} className="h-2" indicatorClassName="bg-primary" />
                  <p className="text-sm text-muted-foreground">
                    Your total revenue from all coupon sales is ${totalRevenue.toLocaleString()}.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Average Sale Value</h3>
                    <span className="text-2xl font-bold">
                      ${totalCouponsSold > 0 ? (totalRevenue / totalCouponsSold).toFixed(2) : "0.00"}
                    </span>
                  </div>
                  <Progress value={75} className="h-2" indicatorClassName="bg-blue-500" />
                  <p className="text-sm text-muted-foreground">
                    The average value per coupon sale across all your branches.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Revenue Growth</h3>
                    <div className="flex items-center">
                      <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-2xl font-bold text-green-500">12%</span>
                    </div>
                  </div>
                  <Progress value={12} className="h-2" indicatorClassName="bg-green-500" />
                  <p className="text-sm text-muted-foreground">
                    Your revenue has grown 12% compared to the previous month.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="performance">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Redemption Rate</h3>
                    <span className="text-2xl font-bold">
                      {((totalCouponsSold / totalCouponsUploaded) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Progress
                    value={(totalCouponsSold / totalCouponsUploaded) * 100}
                    className="h-2"
                    indicatorClassName="bg-green-500"
                  />
                  <p className="text-sm text-muted-foreground">
                    Percentage of coupons that have been sold out of total uploaded.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Best Performing Branch</h3>
                    <span className="text-lg font-bold">Manhattan Branch</span>
                  </div>
                  <Progress value={85} className="h-2" indicatorClassName="bg-amber-500" />
                  <p className="text-sm text-muted-foreground">
                    Manhattan Branch has the highest coupon redemption rate at 85%.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Customer Satisfaction</h3>
                    <span className="text-2xl font-bold">4.8/5</span>
                  </div>
                  <Progress value={96} className="h-2" indicatorClassName="bg-blue-500" />
                  <p className="text-sm text-muted-foreground">
                    Average rating from customer feedback across all branches.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
