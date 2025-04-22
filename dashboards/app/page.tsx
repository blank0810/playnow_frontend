"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Bell,
  Search,
  ShieldCheck,
  User,
  BarChart3,
  Store,
  Settings,
  ChevronDown,
  Users,
  ShoppingBag,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Filter,
  LogOut,
  Eye,
  Edit,
  Trash2,
  DollarSign,
  FileText,
  Menu,
  Home,
  PieChart,
  UserPlus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for merchants
  const merchants = [
    {
      id: 1,
      name: "Culinary Institute",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Activities",
      status: "Approved",
      deals: 12,
      redemptions: 345,
      joinDate: "2024-01-15",
      revenue: 44580,
    },
    {
      id: 2,
      name: "Luxury Spa & Wellness",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Beauty & Spas",
      status: "Approved",
      deals: 8,
      redemptions: 210,
      joinDate: "2024-02-20",
      revenue: 26250,
    },
    {
      id: 3,
      name: "Gourmet Restaurant",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Restaurants",
      status: "Pending",
      deals: 0,
      redemptions: 0,
      joinDate: "2025-04-05",
      revenue: 0,
    },
    {
      id: 4,
      name: "Fitness Center",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Health & Fitness",
      status: "Approved",
      deals: 5,
      redemptions: 120,
      joinDate: "2024-03-10",
      revenue: 11880,
    },
    {
      id: 5,
      name: "Home Essentials",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Home",
      status: "Rejected",
      deals: 0,
      redemptions: 0,
      joinDate: "2025-04-01",
      revenue: 0,
    },
    {
      id: 6,
      name: "Theater District",
      logo: "/placeholder.svg?height=80&width=80",
      category: "Entertainment",
      status: "Approved",
      deals: 7,
      redemptions: 180,
      joinDate: "2024-02-15",
      revenue: 32400,
    },
  ]

  // Filter merchants based on search query
  const filteredMerchants = merchants.filter(
    (merchant) =>
      merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      merchant.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Get approved merchants
  const approvedMerchants = merchants.filter((merchant) => merchant.status === "Approved")

  // Get pending merchants
  const pendingMerchants = merchants.filter((merchant) => merchant.status === "Pending")

  // Get rejected merchants
  const rejectedMerchants = merchants.filter((merchant) => merchant.status === "Rejected")

  // Calculate total revenue
  const totalRevenue = merchants.reduce((sum, merchant) => sum + merchant.revenue, 0)

  // Sample data for reported deals
  const reportedDeals = [
    {
      id: 1,
      title: "90% Off Designer Bags",
      merchant: "Luxury Outlet",
      reportCount: 12,
      reportReason: "Misleading information",
      status: "Under Review",
    },
    {
      id: 2,
      title: "Free iPhone with any purchase",
      merchant: "Tech Deals",
      reportCount: 8,
      reportReason: "Scam/Fraud",
      status: "Under Review",
    },
    {
      id: 3,
      title: "Unlimited Spa Sessions for $10",
      merchant: "Wellness Center",
      reportCount: 5,
      reportReason: "Expired but still active",
      status: "Resolved",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="p-6 border-b">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Admin User</h3>
                      <p className="text-sm text-gray-500">Super Admin</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                      <Home className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Store className="mr-2 h-4 w-4" />
                      <span>Merchants</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      <span>Deals</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      <span>Users</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <PieChart className="mr-2 h-4 w-4" />
                      <span>Analytics</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <Button variant="outline" className="w-full justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-2 rounded-xl">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl">DealHub</span>
            <Badge variant="outline" className="ml-2 rounded-full">
              Admin
            </Badge>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search merchants, deals..."
                className="pl-9 w-full rounded-xl border-gray-200 bg-gray-50 focus-visible:ring-violet-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline">Admin User</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-xl">
                <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="md:hidden container mx-auto px-4 pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-9 w-full rounded-xl border-gray-200 bg-gray-50 focus-visible:ring-violet-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Admin User</h3>
                  <p className="text-sm text-gray-500">Super Admin</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-sm">
                  <span>Total Merchants</span>
                  <span className="font-semibold">{merchants.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Pending Approvals</span>
                  <span className="font-semibold">{pendingMerchants.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Reported Deals</span>
                  <span className="font-semibold">{reportedDeals.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Platform Revenue</span>
                  <span className="font-semibold text-violet-600">${totalRevenue.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start rounded-xl border-gray-200">
                  <Store className="mr-2 h-4 w-4" />
                  <span>Review Merchants</span>
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl border-gray-200">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  <span>Reported Deals</span>
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl border-gray-200">
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Add Admin User</span>
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl border-gray-200">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  <span>Platform Analytics</span>
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl border-gray-200">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Financial Reports</span>
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl border-gray-200">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>System Settings</span>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold mb-4">Platform Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Total Users</span>
                    <span className="font-semibold">12,458</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-indigo-600 h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Active Deals</span>
                    <span className="font-semibold">245</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-indigo-600 h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Total Redemptions</span>
                    <span className="font-semibold">8,742</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-violet-500 to-indigo-600 h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>

              <div className="flex items-center gap-2 self-stretch md:self-auto">
                <Button variant="outline" size="sm" className="rounded-xl border-gray-200">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-xl">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="rounded-2xl border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <Store className="h-4 w-4 mr-2 text-violet-600" />
                    Total Merchants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{merchants.length}</div>
                  <p className="text-xs text-muted-foreground">+3 new this month</p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <ShoppingBag className="h-4 w-4 mr-2 text-green-600" />
                    Active Deals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">245</div>
                  <p className="text-xs text-muted-foreground">Across all merchants</p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-purple-600" />
                    Platform Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Merchant Management</h2>
                <Tabs defaultValue="all" className="mb-6">
                  <TabsList className="bg-gray-100 p-1 rounded-xl">
                    <TabsTrigger
                      value="all"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-violet-600"
                    >
                      All Merchants
                    </TabsTrigger>
                    <TabsTrigger
                      value="approved"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-violet-600"
                    >
                      Approved
                    </TabsTrigger>
                    <TabsTrigger
                      value="pending"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-violet-600"
                    >
                      Pending
                    </TabsTrigger>
                    <TabsTrigger
                      value="rejected"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-violet-600"
                    >
                      Rejected
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-6">
                    <MerchantTable merchants={filteredMerchants} />
                  </TabsContent>

                  <TabsContent value="approved" className="mt-6">
                    <MerchantTable merchants={approvedMerchants} />
                  </TabsContent>

                  <TabsContent value="pending" className="mt-6">
                    <MerchantTable merchants={pendingMerchants} />
                  </TabsContent>

                  <TabsContent value="rejected" className="mt-6">
                    <MerchantTable merchants={rejectedMerchants} />
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Reported Deals</h2>
                <div className="border rounded-2xl overflow-hidden bg-white shadow-sm">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Deal</TableHead>
                        <TableHead>Merchant</TableHead>
                        <TableHead className="hidden md:table-cell">Reports</TableHead>
                        <TableHead className="hidden md:table-cell">Reason</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reportedDeals.map((deal) => (
                        <TableRow key={deal.id}>
                          <TableCell>
                            <div className="font-medium">{deal.title}</div>
                          </TableCell>
                          <TableCell>{deal.merchant}</TableCell>
                          <TableCell className="hidden md:table-cell">{deal.reportCount}</TableCell>
                          <TableCell className="hidden md:table-cell">{deal.reportReason}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                deal.status === "Resolved"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                              }
                            >
                              {deal.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" className="rounded-full hover:bg-violet-50">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="rounded-full hover:bg-violet-50">
                                <CheckCircle className="h-4 w-4" />
                                <span className="sr-only">Approve</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="rounded-full hover:bg-violet-50">
                                <XCircle className="h-4 w-4" />
                                <span className="sr-only">Reject</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2025 DealHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function MerchantTable({ merchants }) {
  return (
    <div className="border rounded-2xl overflow-hidden bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Merchant</TableHead>
            <TableHead className="hidden md:table-cell">Category</TableHead>
            <TableHead className="hidden md:table-cell">Join Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Deals</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {merchants.length > 0 ? (
            merchants.map((merchant) => (
              <TableRow key={merchant.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <Image src={merchant.logo || "/placeholder.svg"} alt={merchant.name} width={32} height={32} />
                    </div>
                    <div>
                      <div className="font-medium">{merchant.name}</div>
                      <div className="text-sm text-muted-foreground md:hidden">
                        {merchant.category} • Joined: {new Date(merchant.joinDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant="outline" className="rounded-full">
                    {merchant.category}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(merchant.joinDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      merchant.status === "Approved"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : merchant.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {merchant.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{merchant.deals}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-violet-50">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-violet-50">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-violet-50">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8">
                <p className="text-muted-foreground">No merchants found.</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
