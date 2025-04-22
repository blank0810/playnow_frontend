"use client"

import { useState } from "react"
import { Download, Eye, Printer, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui-consumer/button"
import { Input } from "@/components/ui-consumer/input"
import { Badge } from "@/components/ui-consumer/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui-consumer/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui-consumer/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui-consumer/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui-consumer/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-consumer/card"
import { Separator } from "@/components/ui-consumer/separator"
// Import the PDF generator utilities
import { generateTransactionPDF, generateTransactionsListPDF, printTransaction } from "../utils/pdf-generator"

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [dateRange, setDateRange] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  // Sample data for transactions
  const transactions = [
    {
      id: "TRX-001",
      date: "2025-04-01",
      merchant: "Culinary Institute",
      coupon: "Two-Hour Cooking Class with Professional Chef",
      amount: 60,
      status: "Completed",
      paymentMethod: "Credit Card",
      cardLast4: "4242",
      reference: "REF123456",
      discount: "50%",
      originalPrice: 120,
    },
    {
      id: "TRX-002",
      date: "2025-03-15",
      merchant: "Luxury Spa & Wellness",
      coupon: "Full Day Spa Package with Massage and Facial",
      amount: 125,
      status: "Completed",
      paymentMethod: "PayPal",
      cardLast4: null,
      reference: "REF789012",
      discount: "50%",
      originalPrice: 250,
    },
    {
      id: "TRX-003",
      date: "2025-02-20",
      merchant: "Gourmet Restaurant",
      coupon: "Three-Course Dinner for Two with Wine",
      amount: 99,
      status: "Completed",
      paymentMethod: "Credit Card",
      cardLast4: "1234",
      reference: "REF345678",
      discount: "45%",
      originalPrice: 180,
    },
    {
      id: "TRX-004",
      date: "2025-02-15",
      merchant: "Fitness Center",
      coupon: "One-Month Gym Membership with Personal Training",
      amount: 99,
      status: "Completed",
      paymentMethod: "Credit Card",
      cardLast4: "5678",
      reference: "REF901234",
      discount: "50%",
      originalPrice: 200,
    },
    {
      id: "TRX-005",
      date: "2025-03-05",
      merchant: "Theater District",
      coupon: "Two Tickets to Broadway Show",
      amount: 180,
      status: "Completed",
      paymentMethod: "Credit Card",
      cardLast4: "4242",
      reference: "REF567890",
      discount: "40%",
      originalPrice: 300,
    },
    {
      id: "TRX-006",
      date: "2025-01-10",
      merchant: "Capture Studios",
      coupon: "One-Hour Professional Photo Session",
      amount: 75,
      status: "Refunded",
      paymentMethod: "Credit Card",
      cardLast4: "9876",
      reference: "REF234567",
      discount: "50%",
      originalPrice: 150,
    },
  ]

  // Filter transactions based on search query and date range
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.coupon.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase())

    if (dateRange === "all") return matchesSearch

    const transactionDate = new Date(transaction.date)
    const today = new Date()

    if (dateRange === "last30") {
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(today.getDate() - 30)
      return matchesSearch && transactionDate >= thirtyDaysAgo
    } else if (dateRange === "last90") {
      const ninetyDaysAgo = new Date()
      ninetyDaysAgo.setDate(today.getDate() - 90)
      return matchesSearch && transactionDate >= ninetyDaysAgo
    } else if (dateRange === "year") {
      const startOfYear = new Date(today.getFullYear(), 0, 1)
      return matchesSearch && transactionDate >= startOfYear
    }

    return matchesSearch
  })

  // Sort transactions
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === "amount-high") {
      return b.amount - a.amount
    } else if (sortBy === "amount-low") {
      return a.amount - b.amount
    }
    return 0
  })

  // Calculate total spent
  const totalSpent = filteredTransactions.reduce((sum, transaction) => {
    return transaction.status === "Refunded" ? sum : sum + transaction.amount
  }, 0)

  // Calculate total saved
  const totalSaved = filteredTransactions.reduce((sum, transaction) => {
    return transaction.status === "Refunded" ? sum : sum + (transaction.originalPrice - transaction.amount)
  }, 0)

  // Calculate average discount
  const averageDiscount =
    filteredTransactions.length > 0
      ? Math.round((totalSaved / filteredTransactions.reduce((sum, t) => sum + t.originalPrice, 0)) * 100)
      : 0

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>

        <div className="flex flex-col sm:flex-row items-center gap-2 self-stretch sm:self-auto w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search transactions..."
              className="pl-9 w-full sm:w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="last30">Last 30 Days</SelectItem>
                <SelectItem value="last90">Last 90 Days</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="sr-only">Sort</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setSortBy("newest")}
                  className={sortBy === "newest" ? "bg-accent" : ""}
                >
                  Newest First
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("oldest")}
                  className={sortBy === "oldest" ? "bg-accent" : ""}
                >
                  Oldest First
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("amount-high")}
                  className={sortBy === "amount-high" ? "bg-accent" : ""}
                >
                  Amount: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("amount-low")}
                  className={sortBy === "amount-low" ? "bg-accent" : ""}
                >
                  Amount: Low to High
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
      <Card className="p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-200">
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center space-x-2">
      <h3 className="text-base font-semibold text-green-600">Total Spent</h3>
    </div>
    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
      ${totalSpent.toFixed(2)}
    </span>
  </div>
  <CardContent className="p-0">
    <div className="flex flex-col items-center text-center mt-2">
      <div className="text-3xl font-bold text-gray-900">${totalSpent.toFixed(2)}</div>
      <p className="text-sm text-muted-foreground">From {filteredTransactions.length} transactions</p>
    </div>
  </CardContent>
</Card>


<Card className="p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-200">
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center space-x-2">
      <h3 className="text-base font-semibold text-blue-600">Total Saved</h3>
    </div>
    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
      {averageDiscount}% off
    </span>
  </div>
  <CardContent className="p-0">
    <div className="flex flex-col items-center text-center mt-2">
      <div className="text-3xl font-bold text-gray-900">${totalSaved.toFixed(2)}</div>
      <p className="text-sm text-muted-foreground">Average {averageDiscount}% discount</p>
    </div>
  </CardContent>
</Card>


<Card className="p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
  <CardHeader className="pb-2">
    <CardTitle className="text-sm font-bold text-gray-700">Export Options</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="flex gap-4">
      <Button
        variant="outline"
        className="flex-1 border-orange-500 hover:border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-500 transform transition-transform duration-200 hover:scale-105"
        onClick={() => generateTransactionsListPDF(filteredTransactions)}
      >
        <Download className="h-4 w-4 mr-2" />
        CSV
      </Button>
      <Button
        variant="outline"
        className="flex-1 bg-orange-500 text-white hover:bg-orange-500 hover:text-white transform transition-transform duration-200 hover:scale-105"
        onClick={() => window.print()}
      >
        <Printer className="h-4 w-4 mr-2" />
        Print
      </Button>
    </div>
  </CardContent>
</Card>


      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>View and manage your purchase history</CardDescription>
        </CardHeader>

 <CardContent>
  <div className="rounded-md border shadow-sm hover:shadow-md transition-shadow duration-100 p-4">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Merchant</TableHead>
          <TableHead className="hidden md:table-cell">Coupon</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedTransactions.length > 0 ? (
          sortedTransactions.map((transaction) => (
            <TableRow
          key={transaction.id}
          className="hover:bg-gray-100 transition-transform duration-200"
          style={{
          transition: 'transform 75ms ease',
          }}
          onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.01)';
          }}
          onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          }}
          >




              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
              <TableCell>{transaction.merchant}</TableCell>
              <TableCell className="hidden md:table-cell max-w-[200px] truncate">{transaction.coupon}</TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant={transaction.status === "Completed" ? "default" : "destructive"}>
                  {transaction.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="transform transition-transform duration-200 hover:scale-110">
                      <Eye className="h-4 w-4 text-orange-500" />
                      <span className="sr-only">View Details</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Transaction Details</DialogTitle>
                      <DialogDescription>
                        {transaction.id} - {new Date(transaction.date).toLocaleDateString()}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Merchant</h4>
                          <p>{transaction.merchant}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Status</h4>
                          <Badge variant={transaction.status === "Completed" ? "default" : "destructive"}>
                            {transaction.status}
                          </Badge>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Coupon</h4>
                          <p>{transaction.coupon}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Reference</h4>
                          <p className="font-mono">{transaction.reference}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Payment Method</h4>
                          <p>
                            {transaction.paymentMethod}
                            {transaction.cardLast4 && ` (**** ${transaction.cardLast4})`}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Date</h4>
                          <p>{new Date(transaction.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Price Breakdown</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Original Price:</span>
                            <span>${transaction.originalPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span>Discount ({transaction.discount}):</span>
                            <span>-${(transaction.originalPrice - transaction.amount).toFixed(2)}</span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between font-bold">
                            <span>Total Paid:</span>
                            <span>${transaction.amount.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600 transform transition-transform duration-200 hover:scale-105"
                        onClick={() => printTransaction(transaction)}
                      >
                        <Printer className="h-4 w-4 mr-2" />
                        Print Receipt
                      </Button>

                      <Button onClick={() => generateTransactionPDF(transaction)}>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button variant="ghost" size="icon" onClick={() => generateTransactionPDF(transaction)}>
                  <Download className="h-4 w-4 text-orange-500" />
                  <span className="sr-only">Download</span>
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-8">
              <p className="text-muted-foreground">No transactions found.</p>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
</CardContent>


      </Card>
    </div>
  )
}
