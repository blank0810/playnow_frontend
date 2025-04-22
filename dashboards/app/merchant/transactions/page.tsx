"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, Calendar, Download, Eye, Filter, Search, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TransactionLogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [storeFilter, setStoreFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [dateRange, setDateRange] = useState({ from: null, to: null })

  // Sample data for transactions
  const transactions = [
    {
      id: "TRX-001",
      date: "2025-04-01",
      store: "Manhattan Branch",
      storeId: 1,
      type: "Purchase",
      coupon: "Two-Hour Cooking Class",
      customer: "John Doe",
      amount: 60,
      status: "Completed",
    },
    {
      id: "TRX-002",
      date: "2025-03-30",
      store: "Brooklyn Branch",
      storeId: 2,
      type: "Purchase",
      coupon: "Three-Course Dinner",
      customer: "Jane Smith",
      amount: 99,
      status: "Completed",
    },
    {
      id: "TRX-003",
      date: "2025-03-28",
      store: "Manhattan Branch",
      storeId: 1,
      type: "Purchase",
      coupon: "Two-Hour Cooking Class",
      customer: "Robert Johnson",
      amount: 60,
      status: "Completed",
    },
    {
      id: "TRX-004",
      date: "2025-03-25",
      store: "Queens Branch",
      storeId: 3,
      type: "Purchase",
      coupon: "Two-Hour Cooking Class",
      customer: "Emily Davis",
      amount: 60,
      status: "Completed",
    },
    {
      id: "LOG-001",
      date: "2025-03-01",
      store: "Manhattan Branch",
      storeId: 1,
      type: "Upload",
      coupon: "Two-Hour Cooking Class",
      customer: "Admin",
      amount: null,
      status: "Completed",
    },
    {
      id: "LOG-002",
      date: "2025-04-10",
      store: "Queens Branch",
      storeId: 3,
      type: "Expiry",
      coupon: "Pasta Making Workshop",
      customer: "System",
      amount: null,
      status: "Expired",
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

  // Filter transactions based on search query, store filter, type filter, and date range
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.coupon.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.customer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStore = storeFilter === "all" || transaction.storeId.toString() === storeFilter
    const matchesType = typeFilter === "all" || transaction.type.toLowerCase() === typeFilter.toLowerCase()

    let matchesDateRange = true
    if (dateRange.from && dateRange.to) {
      const transactionDate = new Date(transaction.date)
      matchesDateRange = transactionDate >= dateRange.from && transactionDate <= dateRange.to
    }

    return matchesSearch && matchesStore && matchesType && matchesDateRange
  })

  // Group transactions by store
  const transactionsByStore = stores.map((store) => {
    const storeTransactions = transactions.filter((transaction) => transaction.storeId === store.id)
    const purchaseTransactions = storeTransactions.filter((transaction) => transaction.type === "Purchase")
    const totalAmount = purchaseTransactions.reduce((sum, transaction) => sum + (transaction.amount || 0), 0)

    return {
      ...store,
      totalTransactions: storeTransactions.length,
      totalPurchases: purchaseTransactions.length,
      totalAmount,
    }
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Transaction Logs</h1>

        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Logs
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Transactions</TabsTrigger>
          <TabsTrigger value="by-store">By Store</TabsTrigger>
          <TabsTrigger value="by-type">By Type</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader className="px-8 py-6">
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>View and filter all transaction logs</CardDescription>
            </CardHeader>
            <CardContent className="px-8 py-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 px-2">
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search transactions..."
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

                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="purchase">Purchase</SelectItem>
                      <SelectItem value="upload">Upload</SelectItem>
                      <SelectItem value="expiry">Expiry</SelectItem>
                    </SelectContent>
                  </Select>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="h-9">
                        <Calendar className="h-4 w-4 mr-2" />
                        {dateRange.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, "LLL dd")} - {format(dateRange.to, "LLL dd")}
                            </>
                          ) : (
                            format(dateRange.from, "LLL dd")
                          )
                        ) : (
                          <span>Date Range</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <CalendarComponent
                        mode="range"
                        selected={{
                          from: dateRange.from,
                          to: dateRange.to,
                        }}
                        onSelect={(range) => setDateRange(range || { from: null, to: null })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6 py-3">
                        <div className="flex items-center gap-1">
                          ID
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="px-6 py-3">
                        <div className="flex items-center gap-1">
                          Date
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="px-6 py-3">Store</TableHead>
                      <TableHead className="px-6 py-3">Type</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Coupon</TableHead>
                      <TableHead className="px-6 py-3 hidden md:table-cell">Customer</TableHead>
                      <TableHead className="px-6 py-3">Amount</TableHead>
                      <TableHead className="px-6 py-3">Status</TableHead>
                      <TableHead className="px-6 py-3 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTransactions.length > 0 ? (
                      filteredTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="px-8 py-4 font-medium">{transaction.id}</TableCell>
                          <TableCell className="px-6 py-4">{new Date(transaction.date).toLocaleDateString()}</TableCell>
                          <TableCell className="px-6 py-4">
                            <div className="flex items-center">
                              <Store className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              {transaction.store}
                            </div>
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            <Badge
                              variant="outline"
                              className={
                                transaction.type === "Purchase"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : transaction.type === "Upload"
                                    ? "bg-blue-50 text-blue-700 border-blue-200"
                                    : "bg-amber-50 text-amber-700 border-amber-200"
                              }
                            >
                              {transaction.type}
                            </Badge>
                          </TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">{transaction.coupon}</TableCell>
                          <TableCell className="px-6 py-4 hidden md:table-cell">{transaction.customer}</TableCell>
                          <TableCell className="px-6 py-4">
                            {transaction.amount ? `$${transaction.amount}` : "-"}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            <Badge
                              variant="outline"
                              className={
                                transaction.status === "Completed"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : "bg-amber-50 text-amber-700 border-amber-200"
                              }
                            >
                              {transaction.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="px-6 py-4 text-right">
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/merchant/transactions/${transaction.id}`}>
                                <Eye className="h-4 w-4 mr-1" /> View
                              </Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={9} className="px-6 py-4 text-center py-8">
                          <p className="text-muted-foreground">No transactions found.</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-store">
          <Card>
            <CardHeader className="px-6 py-5">
              <CardTitle>Transactions by Store</CardTitle>
              <CardDescription>View transaction metrics for each store</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="rounded-md border overflow-hidden mb-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6 py-3">Store</TableHead>
                      <TableHead className="px-6 py-3">
                        <div className="flex items-center gap-1">
                          Total Transactions
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="px-6 py-3">
                        <div className="flex items-center gap-1">
                          Purchases
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
                    {transactionsByStore.map((store) => (
                      <TableRow key={store.id}>
                        <TableCell className="px-6 py-4">
                          <div className="font-medium">{store.name}</div>
                        </TableCell>
                        <TableCell className="px-6 py-4">{store.totalTransactions}</TableCell>
                        <TableCell className="px-6 py-4">{store.totalPurchases}</TableCell>
                        <TableCell className="px-6 py-4">${store.totalAmount.toLocaleString()}</TableCell>
                        <TableCell className="px-6 py-4 text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/merchant/branches/${store.id}/transactions`}>
                              <Eye className="h-4 w-4 mr-1" /> View Transactions
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-type">
          <Card>
            <CardHeader className="px-6 py-5">
              <CardTitle>Transactions by Type</CardTitle>
              <CardDescription>View transaction metrics by transaction type</CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Purchase Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{transactions.filter((t) => t.type === "Purchase").length}</div>
                    <p className="text-xs text-muted-foreground">
                      Total revenue: $
                      {transactions
                        .filter((t) => t.type === "Purchase")
                        .reduce((sum, t) => sum + (t.amount || 0), 0)
                        .toLocaleString()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Upload Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{transactions.filter((t) => t.type === "Upload").length}</div>
                    <p className="text-xs text-muted-foreground">
                      Total coupons uploaded: {transactions.filter((t) => t.type === "Upload").length}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Expiry Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{transactions.filter((t) => t.type === "Expiry").length}</div>
                    <p className="text-xs text-muted-foreground">
                      Total coupons expired: {transactions.filter((t) => t.type === "Expiry").length}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6 py-3">Type</TableHead>
                      <TableHead className="px-6 py-3">Count</TableHead>
                      <TableHead className="px-6 py-3">Description</TableHead>
                      <TableHead className="px-6 py-3 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="px-6 py-4">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Purchase
                        </Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        {transactions.filter((t) => t.type === "Purchase").length}
                      </TableCell>
                      <TableCell className="px-6 py-4">Coupon purchases by customers</TableCell>
                      <TableCell className="px-6 py-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setTypeFilter("purchase")
                          }}
                        >
                          <Filter className="h-4 w-4 mr-1" /> Filter
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="px-6 py-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Upload
                        </Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        {transactions.filter((t) => t.type === "Upload").length}
                      </TableCell>
                      <TableCell className="px-6 py-4">Coupon uploads by merchants</TableCell>
                      <TableCell className="px-6 py-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setTypeFilter("upload")
                          }}
                        >
                          <Filter className="h-4 w-4 mr-1" /> Filter
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="px-6 py-4">
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          Expiry
                        </Badge>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        {transactions.filter((t) => t.type === "Expiry").length}
                      </TableCell>
                      <TableCell className="px-6 py-4">Expired coupons</TableCell>
                      <TableCell className="px-6 py-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setTypeFilter("expiry")
                          }}
                        >
                          <Filter className="h-4 w-4 mr-1" /> Filter
                        </Button>
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
