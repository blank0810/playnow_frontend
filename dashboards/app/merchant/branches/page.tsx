"use client"

import { useState } from "react"
import Link from "next/link"
import { Building, Download, Edit, Eye, MapPin, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BranchManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Sample data for stores
  const stores = [
    {
      id: 1,
      name: "Manhattan Branch",
      location: "123 Broadway, New York, NY",
      email: "manhattan@culinary.com",
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
      email: "brooklyn@culinary.com",
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
      email: "queens@culinary.com",
      category: "Restaurant",
      logo: "/placeholder.svg?height=40&width=40",
      status: "Inactive",
      totalCoupons: 20,
      soldCoupons: 5,
      remainingCoupons: 15,
    },
    {
      id: 4,
      name: "Bronx Branch",
      location: "321 Grand Concourse, Bronx, NY",
      email: "bronx@culinary.com",
      category: "Restaurant",
      logo: "/placeholder.svg?height=40&width=40",
      status: "Active",
      totalCoupons: 28,
      soldCoupons: 12,
      remainingCoupons: 16,
    },
    {
      id: 5,
      name: "Staten Island Branch",
      location: "555 Hylan Blvd, Staten Island, NY",
      email: "statenisland@culinary.com",
      category: "Restaurant",
      logo: "/placeholder.svg?height=40&width=40",
      status: "Pending",
      totalCoupons: 0,
      soldCoupons: 0,
      remainingCoupons: 0,
    },
  ]

  // Filter stores based on search query and status filter
  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || store.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Branch Management</h1>

        <div className="flex items-center gap-2 self-stretch sm:self-auto w-full sm:w-auto">
          <Button asChild>
            <Link href="/merchant/branches/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Branch
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="px-8 py-6">
          <CardTitle>All Branches</CardTitle>
          <CardDescription>Manage all your store branches from one place</CardDescription>
        </CardHeader>
        <CardContent className="px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search branches..."
                className="pl-9 w-full sm:w-[300px] rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="grid" className="mb-6">
            <TabsList className="w-auto">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>

            <TabsContent value="grid" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStores.map((store) => (
                  <Card key={store.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={store.logo || "/placeholder.svg"} alt={store.name} />
                            <AvatarFallback>{store.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{store.name}</CardTitle>
                            <CardDescription className="text-xs">{store.category}</CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant={
                            store.status === "Active"
                              ? "default"
                              : store.status === "Inactive"
                                ? "secondary"
                                : "outline"
                          }
                          className={
                            store.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : store.status === "Inactive"
                                ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          }
                        >
                          {store.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                          <span className="text-sm">{store.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{store.email}</span>
                        </div>
                        <div className="pt-2 border-t">
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                              <p className="text-xs text-muted-foreground">Total</p>
                              <p className="font-medium">{store.totalCoupons}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Sold</p>
                              <p className="font-medium">{store.soldCoupons}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Remaining</p>
                              <p className="font-medium">{store.remainingCoupons}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <div className="flex border-t divide-x">
                      <Button variant="ghost" className="flex-1 rounded-none h-10" asChild>
                        <Link href={`/merchant/branches/${store.id}`}>
                          <Eye className="h-4 w-4 mr-2" /> View
                        </Link>
                      </Button>
                      <Button variant="ghost" className="flex-1 rounded-none h-10" asChild>
                        <Link href={`/merchant/branches/${store.id}/edit`}>
                          <Edit className="h-4 w-4 mr-2" /> Edit
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="table" className="mt-6">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6 py-3">Branch</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Location</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Email</TableHead>
                      <TableHead className="px-6 py-3">Status</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Coupons</TableHead>
                      <TableHead className="px-6 py-3 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStores.length > 0 ? (
                      filteredStores.map((store) => (
                        <TableRow key={store.id}>
                          <TableCell className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={store.logo || "/placeholder.svg"} alt={store.name} />
                                <AvatarFallback>{store.name.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{store.name}</div>
                                <div className="text-sm text-muted-foreground">{store.category}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">
                            <div className="flex items-center">
                              <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              {store.location}
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">{store.email}</TableCell>
                          <TableCell className="px-6 py-4">
                            <Badge
                              variant={
                                store.status === "Active"
                                  ? "default"
                                  : store.status === "Inactive"
                                    ? "secondary"
                                    : "outline"
                              }
                              className={
                                store.status === "Active"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : store.status === "Inactive"
                                    ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                    : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                              }
                            >
                              {store.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{store.soldCoupons} sold</span>
                              <span className="text-xs text-muted-foreground">/ {store.totalCoupons} total</span>
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
                                <DropdownMenuItem asChild>
                                  <Link href={`/merchant/branches/${store.id}`}>
                                    <Eye className="h-4 w-4 mr-2" /> View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link href={`/merchant/branches/${store.id}/edit`}>
                                    <Edit className="h-4 w-4 mr-2" /> Edit Branch
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="h-4 w-4 mr-2" /> Delete Branch
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                          <p className="text-muted-foreground">No branches found.</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <CreateBranchDialog />
    </div>
  )
}

function CreateBranchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hidden">Add Branch</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Branch</DialogTitle>
          <DialogDescription>Add a new store branch to your merchant account.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Branch Name</Label>
              <Input id="name" placeholder="Enter branch name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Branch Email</Label>
              <Input id="email" type="email" placeholder="Enter branch email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Branch Location</Label>
              <Input id="location" placeholder="Enter branch address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Branch Type/Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="cafe">Café</SelectItem>
                  <SelectItem value="bakery">Bakery</SelectItem>
                  <SelectItem value="cooking_school">Cooking School</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="logo">Branch Logo</Label>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback>Logo</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Upload Logo
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Branch Status</Label>
            <Select defaultValue="active">
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Create Branch</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
