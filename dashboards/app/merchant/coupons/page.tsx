"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpDown,
  Calendar,
  Download,
  Edit,
  Eye,
  MoreHorizontal,
  Search,
  Store,
  Tag,
  Trash2,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CouponManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [storeFilter, setStoreFilter] = useState("all")

  // Sample data for coupons
  const coupons = [
    {
      id: 1,
      name: "Two-Hour Cooking Class with Professional Chef",
      store: "Manhattan Branch",
      storeId: 1,
      originalPrice: 120,
      discountedPrice: 60,
      discount: "50%",
      image: "/placeholder.svg?height=80&width=120",
      created: "2025-03-01",
      expires: "2025-06-30",
      status: "Active",
      totalQuantity: 30,
      soldQuantity: 18,
      remainingQuantity: 12,
    },
    {
      id: 2,
      name: "Three-Course Dinner for Two with Wine",
      store: "Manhattan Branch",
      storeId: 1,
      originalPrice: 180,
      discountedPrice: 99,
      discount: "45%",
      image: "/placeholder.svg?height=80&width=120",
      created: "2025-03-05",
      expires: "2025-05-20",
      status: "Active",
      totalQuantity: 25,
      soldQuantity: 10,
      remainingQuantity: 15,
    },
    {
      id: 3,
      name: "Two-Hour Cooking Class with Professional Chef",
      store: "Brooklyn Branch",
      storeId: 2,
      originalPrice: 120,
      discountedPrice: 60,
      discount: "50%",
      image: "/placeholder.svg?height=80&width=120",
      created: "2025-03-10",
      expires: "2025-06-30",
      status: "Active",
      totalQuantity: 20,
      soldQuantity: 12,
      remainingQuantity: 8,
    },
    {
      id: 4,
      name: "Pasta Making Workshop",
      store: "Queens Branch",
      storeId: 3,
      originalPrice: 90,
      discountedPrice: 45,
      discount: "50%",
      image: "/placeholder.svg?height=80&width=120",
      created: "2025-02-15",
      expires: "2025-04-10",
      status: "Expired",
      totalQuantity: 15,
      soldQuantity: 5,
      remainingQuantity: 10,
    },
    {
      id: 5,
      name: "Dessert Masterclass",
      store: "Brooklyn Branch",
      storeId: 2,
      originalPrice: 80,
      discountedPrice: 40,
      discount: "50%",
      image: "/placeholder.svg?height=80&width=120",
      created: "2025-03-20",
      expires: "2025-07-15",
      status: "Active",
      totalQuantity: 20,
      soldQuantity: 7,
      remainingQuantity: 13,
    },
  ]

  // Sample data for stores
  const stores = [
    { id: 1, name: "Manhattan Branch" },
    { id: 2, name: "Brooklyn Branch" },
    { id: 3, name: "Queens Branch" },
    { id: 4, name: "Bronx Branch" },
    { id: 5, name: "Staten Island Branch" },
  ]

  // Filter coupons based on search query, status filter, and store filter
  const filteredCoupons = coupons.filter((coupon) => {
    const matchesSearch = coupon.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || coupon.status.toLowerCase() === statusFilter.toLowerCase()
    const matchesStore = storeFilter === "all" || coupon.storeId.toString() === storeFilter

    return matchesSearch && matchesStatus && matchesStore
  })

  // Calculate totals
  const totalCouponsUploaded = coupons.reduce((sum, coupon) => sum + coupon.totalQuantity, 0)
  const totalCouponsSold = coupons.reduce((sum, coupon) => sum + coupon.soldQuantity, 0)
  const totalCouponsRemaining = coupons.reduce((sum, coupon) => sum + coupon.remainingQuantity, 0)

  // Group coupons by store for the reports
  const couponsByStore = stores.map((store) => {
    const storeCoupons = coupons.filter((coupon) => coupon.storeId === store.id)
    const totalUploaded = storeCoupons.reduce((sum, coupon) => sum + coupon.totalQuantity, 0)
    const totalSold = storeCoupons.reduce((sum, coupon) => sum + coupon.soldQuantity, 0)
    const totalRemaining = storeCoupons.reduce((sum, coupon) => sum + coupon.remainingQuantity, 0)
    const totalRevenue = storeCoupons.reduce((sum, coupon) => sum + coupon.soldQuantity * coupon.discountedPrice, 0)

    return {
      ...store,
      totalUploaded,
      totalSold,
      totalRemaining,
      totalRevenue,
    }
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Coupon Management</h1>

        <div className="flex items-center gap-2 self-stretch sm:self-auto w-full sm:w-auto">
          <Button asChild>
            <Link href="/merchant/coupons/upload">
              <Upload className="h-4 w-4 mr-2" />
              Upload Coupons
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="px-8 py-6">
            <CardTitle className="text-sm font-medium flex items-center">
              <Tag className="h-4 w-4 mr-2 text-primary" />
              Total Coupons
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 py-6">
            <div className="text-2xl font-bold">{totalCouponsUploaded}</div>
            <p className="text-xs text-muted-foreground">Across all branches</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="px-6 py-5">
            <CardTitle className="text-sm font-medium flex items-center">
              <Tag className="h-4 w-4 mr-2 text-green-500" />
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
          <CardHeader className="px-6 py-5">
            <CardTitle className="text-sm font-medium flex items-center">
              <Tag className="h-4 w-4 mr-2 text-amber-500" />
              Coupons Remaining
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-4">
            <div className="text-2xl font-bold">{totalCouponsRemaining}</div>
            <p className="text-xs text-muted-foreground">
              {((totalCouponsRemaining / totalCouponsUploaded) * 100).toFixed(1)}% available
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="coupons" className="space-y-6">
        <TabsList>
          <TabsTrigger value="coupons">All Coupons</TabsTrigger>
          <TabsTrigger value="reports">Coupon Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="coupons">
          <Card>
            <CardHeader className="px-6 py-5">
              <CardTitle>Coupon Inventory</CardTitle>
              <CardDescription>Manage all your coupons across different branches</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search coupons..."
                    className="pl-9 w-full sm:w-[300px] rounded-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Select value={storeFilter} onValueChange={setStoreFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by store" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Stores</SelectItem>
                      {stores.map((store) => (
                        <SelectItem key={store.id} value={store.id.toString()}>
                          {store.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="expired">Expired</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
              </div>

              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6 py-3">Coupon</TableHead>
                      <TableHead className="px-6 py-3">Store</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Price</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Expiry</TableHead>
                      <TableHead className="px-6 py-3">Status</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Sold/Total</TableHead>
                      <TableHead className="px-6 py-3 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCoupons.length > 0 ? (
                      filteredCoupons.map((coupon) => (
                        <TableRow key={coupon.id}>
                          <TableCell className="px-8 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-16 relative rounded overflow-hidden">
                                <Image
                                  src={coupon.image || "/placeholder.svg"}
                                  alt={coupon.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-medium line-clamp-1">{coupon.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  Created: {new Date(coupon.created).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            <div className="flex items-center">
                              <Store className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              {coupon.store}
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">
                            <div className="flex flex-col">
                              <span className="text-xs line-through text-muted-foreground">
                                ${coupon.originalPrice}
                              </span>
                              <span className="font-medium">${coupon.discountedPrice}</span>
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">
                            <div className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              {new Date(coupon.expires).toLocaleDateString()}
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            <Badge
                              variant={coupon.status === "Active" ? "default" : "secondary"}
                              className={
                                coupon.status === "Active"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                              }
                            >
                              {coupon.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span>{coupon.soldQuantity}</span>
                                <span>/ {coupon.totalQuantity}</span>
                              </div>
                              <Progress
                                value={(coupon.soldQuantity / coupon.totalQuantity) * 100}
                                className="h-2"
                                indicatorClassName="bg-primary"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Eye className="h-4 w-4 mr-2" /> View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="h-4 w-4 mr-2" /> Edit Coupon
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="h-4 w-4 mr-2" /> Delete Coupon
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={7} className="px-6 py-4 text-center py-8">
                          <p className="text-muted-foreground">No coupons found.</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader className="px-6 py-5">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Coupon Reports</CardTitle>
                  <CardDescription>Performance metrics for all your coupons by store</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="rounded-md border mb-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6 py-3">Store</TableHead>
                      <TableHead className="px-6 py-3">
                        <div className="flex items-center gap-1">
                          Total Coupons
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="px-6 py-3">
                        <div className="flex items-center gap-1">
                          Coupons Sold
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="px-6 py-3">
                        <div className="flex items-center gap-1">
                          Remaining
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="px-6 py-3">
                        <div className="flex items-center gap-1">
                          Revenue
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="px-6 py-3 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {couponsByStore.map((store) => (
                      <TableRow key={store.id}>
                        <TableCell className="px-6 py-4">
                          <div className="font-medium">{store.name}</div>
                        </TableCell>
                        <TableCell className="px-6 py-4">{store.totalUploaded}</TableCell>
                        <TableCell className="px-6 py-4">{store.totalSold}</TableCell>
                        <TableCell className="px-6 py-4">{store.totalRemaining}</TableCell>
                        <TableCell className="px-6 py-4">${store.totalRevenue.toLocaleString()}</TableCell>
                        <TableCell className="px-6 py-4 text-right">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4 mr-1" /> View Report
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <Card>
                <CardHeader className="px-6 py-5">
                  <CardTitle>Total Report Summary</CardTitle>
                </CardHeader>
                <CardContent className="px-6 py-4">
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
                        <h3 className="font-medium">Total Revenue</h3>
                        <span className="text-2xl font-bold">
                          $
                          {coupons
                            .reduce((sum, coupon) => sum + coupon.soldQuantity * coupon.discountedPrice, 0)
                            .toLocaleString()}
                        </span>
                      </div>
                      <Progress value={100} className="h-2" indicatorClassName="bg-primary" />
                      <p className="text-sm text-muted-foreground">
                        Total earnings from all coupon sales across all branches.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
