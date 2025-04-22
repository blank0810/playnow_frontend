"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Building,
  Calendar,
  Download,
  Edit,
  FileText,
  MapPin,
  MoreHorizontal,
  Plus,
  Tag,
  Trash2,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BranchDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const branchId = params.id
  const [isEditing, setIsEditing] = useState(false)

  // Sample data for the branch
  const branch = {
    id: Number.parseInt(branchId),
    name: "Manhattan Branch",
    location: "123 Broadway, New York, NY",
    email: "manhattan@culinary.com",
    category: "Restaurant",
    logo: "/placeholder.svg?height=80&width=80",
    status: "Active",
    totalCoupons: 45,
    soldCoupons: 28,
    remainingCoupons: 17,
    revenue: 1680,
    description:
      "Our flagship Manhattan branch offers cooking classes, gourmet dining experiences, and culinary workshops in the heart of New York City.",
  }

  // Sample data for coupons
  const coupons = [
    {
      id: 1,
      name: "Two-Hour Cooking Class with Professional Chef",
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
  ]

  // Sample data for transactions
  const transactions = [
    {
      id: "TRX-001",
      date: "2025-04-01",
      coupon: "Two-Hour Cooking Class",
      customer: "John Doe",
      amount: 60,
      status: "Completed",
    },
    {
      id: "TRX-002",
      date: "2025-03-30",
      coupon: "Three-Course Dinner",
      customer: "Jane Smith",
      amount: 99,
      status: "Completed",
    },
    {
      id: "TRX-003",
      date: "2025-03-28",
      coupon: "Two-Hour Cooking Class",
      customer: "Robert Johnson",
      amount: 60,
      status: "Completed",
    },
    {
      id: "TRX-004",
      date: "2025-03-25",
      coupon: "Two-Hour Cooking Class",
      customer: "Emily Davis",
      amount: 60,
      status: "Completed",
    },
  ]

  // Form state for editing
  const [formData, setFormData] = useState({
    name: branch.name,
    location: branch.location,
    email: branch.email,
    category: branch.category,
    status: branch.status,
    description: branch.description,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // In a real app, you would save the data to the backend here
    setIsEditing(false)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">{branch.name}</h1>
          <Badge
            variant={branch.status === "Active" ? "default" : "secondary"}
            className={
              branch.status === "Active"
                ? "bg-green-100 text-green-800 hover:bg-green-100"
                : "bg-gray-100 text-gray-800 hover:bg-gray-100"
            }
          >
            {branch.status}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          {!isEditing ? (
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Branch
            </Button>
          ) : (
            <Button onClick={handleSave}>Save Changes</Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="coupons">Coupon Management</TabsTrigger>
          <TabsTrigger value="branch">Branch Management</TabsTrigger>
          <TabsTrigger value="transactions">Transaction Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="px-8 py-6">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-primary" />
                  Total Coupons
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 py-6">
                <div className="text-2xl font-bold">{branch.totalCoupons}</div>
                <p className="text-xs text-muted-foreground">Uploaded to this branch</p>
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
                <div className="text-2xl font-bold">{branch.soldCoupons}</div>
                <p className="text-xs text-muted-foreground">
                  {((branch.soldCoupons / branch.totalCoupons) * 100).toFixed(1)}% redemption rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-6 py-5">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-amber-500" />
                  Remaining Coupons
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-4">
                <div className="text-2xl font-bold">{branch.remainingCoupons}</div>
                <p className="text-xs text-muted-foreground">
                  {((branch.remainingCoupons / branch.totalCoupons) * 100).toFixed(1)}% available
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-6 py-5">
                <CardTitle className="text-sm font-medium flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-purple-500" />
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-4">
                <div className="text-2xl font-bold">${branch.revenue}</div>
                <p className="text-xs text-muted-foreground">From all coupon sales</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="px-6 py-5">
                  <div className="flex justify-between items-center">
                    <CardTitle>Transaction History</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                  <CardDescription>Recent coupon sales for this branch</CardDescription>
                </CardHeader>
                <CardContent className="px-6 py-4">
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="px-6 py-3">Transaction ID</TableHead>
                          <TableHead className="px-6 py-3">Date</TableHead>
                          <TableHead className="px-6 py-3">Coupon</TableHead>
                          <TableHead className="px-6 py-3 hidden md:table-cell">Customer</TableHead>
                          <TableHead className="px-6 py-3">Amount</TableHead>
                          <TableHead className="px-6 py-3 text-right">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell className="px-8 py-4 font-medium">{transaction.id}</TableCell>
                            <TableCell className="px-6 py-4">
                              {new Date(transaction.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="px-6 py-4">{transaction.coupon}</TableCell>
                            <TableCell className="px-6 py-4 hidden md:table-cell">{transaction.customer}</TableCell>
                            <TableCell className="px-6 py-4">${transaction.amount}</TableCell>
                            <TableCell className="px-6 py-4 text-right">
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50"
                              >
                                {transaction.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/merchant/branches/${branchId}/transactions`}>View All Transactions</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader className="px-6 py-5">
                  <CardTitle>Branch Information</CardTitle>
                </CardHeader>
                <CardContent className="px-6 py-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={branch.logo || "/placeholder.svg"} alt={branch.name} />
                      <AvatarFallback>{branch.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{branch.name}</h3>
                      <p className="text-sm text-muted-foreground">{branch.category}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>{branch.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>{branch.email}</span>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Coupon Performance</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Sold</span>
                          <span>
                            {branch.soldCoupons} / {branch.totalCoupons}
                          </span>
                        </div>
                        <Progress
                          value={(branch.soldCoupons / branch.totalCoupons) * 100}
                          className="h-2"
                          indicatorClassName="bg-primary"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="px-6 py-5">
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="px-6 py-4 space-y-2">
                  <Button className="w-full justify-start" asChild>
                    <Link href={`/merchant/coupons/upload?branch=${branchId}`}>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Coupons
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Branch
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="coupons">
          <Card>
            <CardHeader className="px-6 py-5">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Coupon Management</CardTitle>
                  <CardDescription>Manage coupons for {branch.name}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button asChild>
                    <Link href={`/merchant/coupons/upload?branch=${branchId}`}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Coupon
                    </Link>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6 py-3">Coupon</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Price</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Expiry</TableHead>
                      <TableHead className="px-6 py-3">Status</TableHead>
                      <TableHead className="px-6 py-3">Sold/Total</TableHead>
                      <TableHead className="px-6 py-3 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {coupons.map((coupon) => (
                      <TableRow key={coupon.id}>
                        <TableCell className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-16 relative rounded overflow-hidden">
                              <img
                                src={coupon.image || "/placeholder.svg"}
                                alt={coupon.name}
                                className="object-cover w-full h-full"
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
                        <TableCell className="px-6 py-4 hidden md:table-cell">
                          <div className="flex flex-col">
                            <span className="text-xs line-through text-muted-foreground">${coupon.originalPrice}</span>
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
                        <TableCell className="px-6 py-4">
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
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branch">
          <Card>
            <CardHeader className="px-6 py-5">
              <CardTitle>Branch Management</CardTitle>
              <CardDescription>Update branch information and settings</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={branch.logo || "/placeholder.svg"} alt={branch.name} />
                    <AvatarFallback>{branch.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    {isEditing ? (
                      <Button variant="outline" size="sm">
                        Change Logo
                      </Button>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Branch Name</Label>
                    {isEditing ? (
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} />
                    ) : (
                      <div className="p-2 border rounded-md bg-muted/50">{branch.name}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Branch Email</Label>
                    {isEditing ? (
                      <Input id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    ) : (
                      <div className="p-2 border rounded-md bg-muted/50">{branch.email}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Branch Location</Label>
                    {isEditing ? (
                      <Input id="location" name="location" value={formData.location} onChange={handleInputChange} />
                    ) : (
                      <div className="p-2 border rounded-md bg-muted/50">{branch.location}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Branch Type/Category</Label>
                    {isEditing ? (
                      <Select
                        value={formData.category}
                        onValueChange={(value) => handleSelectChange("category", value)}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Restaurant">Restaurant</SelectItem>
                          <SelectItem value="Café">Café</SelectItem>
                          <SelectItem value="Bakery">Bakery</SelectItem>
                          <SelectItem value="Cooking School">Cooking School</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="p-2 border rounded-md bg-muted/50">{branch.category}</div>
                    )}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    {isEditing ? (
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full min-h-[100px] p-2 border rounded-md"
                      />
                    ) : (
                      <div className="p-2 border rounded-md bg-muted/50">{branch.description}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Branch Status</Label>
                    {isEditing ? (
                      <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Inactive">Inactive</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="p-2 border rounded-md bg-muted/50">
                        <Badge
                          variant={branch.status === "Active" ? "default" : "secondary"}
                          className={
                            branch.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }
                        >
                          {branch.status}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save Changes</Button>
                </>
              ) : (
                <Button variant="outline" className="ml-auto" onClick={() => setIsEditing(true)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Branch
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="transactions">
          <Card>
            <CardHeader className="px-6 py-5">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Transaction Logs</CardTitle>
                  <CardDescription>All transaction records for {branch.name}</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Logs
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6 py-3">Transaction ID</TableHead>
                      <TableHead className="px-6 py-3">Date</TableHead>
                      <TableHead className="px-6 py-3">Type</TableHead>
                      <TableHead className="px-6 py-3">Coupon</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Customer</TableHead>
                      <TableHead className="px-6 py-3">Amount</TableHead>
                      <TableHead className="px-6 py-3">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="px-8 py-4 font-medium">{transaction.id}</TableCell>
                        <TableCell className="px-6 py-4">{new Date(transaction.date).toLocaleDateString()}</TableCell>
                        <TableCell className="px-6 py-4">
                          <Badge variant="outline">Purchase</Badge>
                        </TableCell>
                        <TableCell className="px-6 py-4">{transaction.coupon}</TableCell>
                        <TableCell className="px-6 py-4 hidden md:table-cell">{transaction.customer}</TableCell>
                        <TableCell className="px-6 py-4">${transaction.amount}</TableCell>
                        <TableCell className="px-6 py-4">
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50"
                          >
                            {transaction.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell className="px-6 py-4 font-medium">LOG-001</TableCell>
                      <TableCell className="px-6 py-4">{new Date("2025-03-01").toLocaleDateString()}</TableCell>
                      <TableCell className="px-6 py-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Upload
                        </Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4">Two-Hour Cooking Class</TableCell>
                      <TableCell className="px-6 py-4 hidden md:table-cell">Admin</TableCell>
                      <TableCell className="px-6 py-4">-</TableCell>
                      <TableCell className="px-6 py-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Completed
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="px-6 py-4 font-medium">LOG-002</TableCell>
                      <TableCell className="px-6 py-4">{new Date("2025-04-10").toLocaleDateString()}</TableCell>
                      <TableCell className="px-6 py-4">
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          Expiry
                        </Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4">Pasta Making Workshop</TableCell>
                      <TableCell className="px-6 py-4 hidden md:table-cell">System</TableCell>
                      <TableCell className="px-6 py-4">-</TableCell>
                      <TableCell className="px-6 py-4">
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          Expired
                        </Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
