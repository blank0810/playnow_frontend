"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, Download, MapPin, Printer, QrCode, Search, SlidersHorizontal, Tag } from "lucide-react"
import { Button } from "@/components/ui-consumer/button"
import { Input } from "@/components/ui-consumer/input"
import { Badge } from "@/components/ui-consumer/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui-consumer/tabs"
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
import { ScrollArea } from "@/components/ui-consumer/scroll-area"
import { Card, CardContent } from "@/components/ui-consumer/card"

// Import the PDF generator utilities
import { generateCouponPDF, printCoupon } from "../utils/pdf-generator"

export default function CouponsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

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
      description:
        "Learn to cook gourmet meals with a professional chef in this hands-on cooking class. All ingredients and equipment provided.",
      terms: [
        "Valid for one person",
        "Must be 18 or older",
        "Reservation required",
        "Subject to availability",
        "Cannot be combined with other offers",
      ],
      redemptionHistory: [{ date: null, status: "Not Redeemed" }],
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
      description:
        "Indulge in a full day of relaxation with our premium spa package including a 60-minute massage and rejuvenating facial.",
      terms: [
        "Valid for one person",
        "Must be 18 or older",
        "Reservation required",
        "Subject to availability",
        "Cannot be combined with other offers",
      ],
      redemptionHistory: [{ date: null, status: "Not Redeemed" }],
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
      description:
        "Enjoy an elegant three-course dinner for two with a bottle of premium wine at our award-winning restaurant.",
      terms: [
        "Valid for two people",
        "Reservation required",
        "Subject to availability",
        "Cannot be combined with other offers",
        "Gratuity not included",
      ],
      redemptionHistory: [{ date: null, status: "Not Redeemed" }],
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
      description:
        "Capture your special moments with a professional photographer in our studio or at an outdoor location of your choice.",
      terms: [
        "Valid for up to 4 people",
        "Includes 5 digital photos",
        "Additional photos available for purchase",
        "Reservation required",
        "Subject to availability",
      ],
      redemptionHistory: [{ date: null, status: "Expired" }],
    },
    {
      id: 5,
      title: "Two Tickets to Broadway Show",
      merchant: "Theater District",
      location: "New York",
      originalPrice: 300,
      discountedPrice: 180,
      discount: "40%",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      reviewCount: 215,
      purchased: "2025-03-05",
      expires: "2025-06-05",
      status: "Active",
      code: "SHOW40X345",
      category: "Entertainment",
      description:
        "Experience the magic of Broadway with two premium tickets to one of the season's most popular shows.",
      terms: [
        "Valid for two people",
        "Subject to availability",
        "Specific dates may be excluded",
        "Cannot be combined with other offers",
        "Seats assigned at box office",
      ],
      redemptionHistory: [{ date: null, status: "Not Redeemed" }],
    },
    {
      id: 6,
      title: "One-Month Gym Membership with Personal Training",
      merchant: "Fitness Center",
      location: "New York",
      originalPrice: 200,
      discountedPrice: 99,
      discount: "50%",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.3,
      reviewCount: 67,
      purchased: "2025-02-15",
      expires: "2025-05-15",
      status: "Redeemed",
      code: "GYM50X678",
      category: "Health & Fitness",
      description:
        "Get fit with a one-month gym membership including two personal training sessions to help you achieve your fitness goals.",
      terms: [
        "Valid for one person",
        "Must be 18 or older",
        "New members only",
        "Cannot be combined with other offers",
        "Personal training sessions must be scheduled in advance",
      ],
      redemptionHistory: [{ date: "2025-02-20", status: "Redeemed" }],
    },
  ]

  // Filter coupons based on search query and category
  const filteredCoupons = coupons.filter((coupon) => {
    const matchesSearch =
      coupon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.merchant.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || coupon.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Sort coupons
  const sortedCoupons = [...filteredCoupons].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.purchased).getTime() - new Date(a.purchased).getTime()
    } else if (sortBy === "expiring") {
      return new Date(a.expires).getTime() - new Date(b.expires).getTime()
    } else if (sortBy === "price-high") {
      return b.discountedPrice - a.discountedPrice
    } else if (sortBy === "price-low") {
      return a.discountedPrice - b.discountedPrice
    }
    return 0
  })

  // Get active coupons
  const activeCoupons = sortedCoupons.filter((coupon) => coupon.status === "Active")

  // Get expired coupons
  const expiredCoupons = sortedCoupons.filter((coupon) => coupon.status === "Expired")

  // Get redeemed coupons
  const redeemedCoupons = sortedCoupons.filter((coupon) => coupon.status === "Redeemed")

  // Categories for filter
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Restaurants", label: "Restaurants" },
    { value: "Beauty & Spas", label: "Beauty & Spas" },
    { value: "Activities", label: "Activities" },
    { value: "Health & Fitness", label: "Health & Fitness" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Services", label: "Services" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">My Coupons</h1>

        <div className="flex flex-col sm:flex-row items-center gap-2 self-stretch sm:self-auto w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search coupons..."
              className="pl-9 w-full sm:w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
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
                  onClick={() => setSortBy("expiring")}
                  className={sortBy === "expiring" ? "bg-accent" : ""}
                >
                  Expiring Soon
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("price-high")}
                  className={sortBy === "price-high" ? "bg-accent" : ""}
                >
                  Price: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("price-low")}
                  className={sortBy === "price-low" ? "bg-accent" : ""}
                >
                  Price: Low to High
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="active" className="text-green-500">Active ({activeCoupons.length})</TabsTrigger>
          <TabsTrigger value="redeemed" className="text-blue-500">Redeemed ({redeemedCoupons.length})</TabsTrigger>
          <TabsTrigger value="expired" className="text-red-500">Expired ({expiredCoupons.length})</TabsTrigger>
          <TabsTrigger value="all" className="text-gray-500">All ({sortedCoupons.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activeCoupons.length > 0 ? (
            activeCoupons.map((coupon) => <CouponCard key={coupon.id} coupon={coupon} />)
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No active coupons found.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="redeemed" className="space-y-4">
          {redeemedCoupons.length > 0 ? (
            redeemedCoupons.map((coupon) => <CouponCard key={coupon.id} coupon={coupon} />)
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No redeemed coupons found.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          {expiredCoupons.length > 0 ? (
            expiredCoupons.map((coupon) => <CouponCard key={coupon.id} coupon={coupon} />)
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No expired coupons found.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {sortedCoupons.length > 0 ? (
            sortedCoupons.map((coupon) => <CouponCard key={coupon.id} coupon={coupon} />)
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No coupons found.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CouponCard({ coupon }) {
  return (
    <Card className="overflow-hidden transform transition-transform duration-200 hover:scale-105">
    <div className="flex flex-col sm:flex-row">
      <div className="sm:w-1/4 lg:w-1/5">
        <div className="relative h-40 sm:h-full">
          <Image src={coupon.image || "/placeholder.svg"} alt={coupon.title} fill className="object-cover" />
          <div className="absolute top-2 left-2 bg-orange-500 text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
            {coupon.discount} OFF
          </div>
        </div>
      </div>
      <div className="sm:w-3/4 lg:w-4/5 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{coupon.title}</h3>
            <Badge
              variant={
                coupon.status === "Active" ? "default" : coupon.status === "Redeemed" ? "outline" : "secondary"
              }
            >
              {coupon.status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{coupon.merchant}</p>
          <div className="flex items-center text-xs text-muted-foreground mt-2">
            <MapPin className="h-3 w-3 mr-1" />
            {coupon.location}
          </div>
          <p className="text-sm mt-3 line-clamp-2">{coupon.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 pt-4 border-t">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              Purchased: {new Date(coupon.purchased).toLocaleDateString()}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              Expires: {new Date(coupon.expires).toLocaleDateString()}
            </div>
          </div>
          <div className="flex gap-2 mt-3 sm:mt-0">

            <Dialog>
  <DialogTrigger asChild>
    <Button
      className="bg-white text-orange-500 hover:bg-white focus:ring-white hover:text-orange-500 border border-orange-500"
      size="sm"
    >
      <Tag className="h-4 w-4 mr-2" />
      View Details
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>{coupon.title}</DialogTitle>
      <DialogDescription>{coupon.merchant}</DialogDescription>
    </DialogHeader>
    <ScrollArea className="max-h-[60vh]">
      <div className="grid gap-4 py-4">
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image
            src={coupon.image || "/placeholder.svg"}
            alt={coupon.title}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold mb-2">Description</h4>
          <p className="text-sm">{coupon.description}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Terms & Conditions</h4>
          <ul className="text-sm list-disc pl-5 space-y-1">
            {coupon.terms.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Coupon Details</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-muted-foreground">Status:</p>
              <Badge
                variant={
                  coupon.status === "Active"
                    ? "default"
                    : coupon.status === "Redeemed"
                    ? "outline"
                    : coupon.status === "Expired"
                    ? "destructive"
                    : "secondary"
                }
              >
                {coupon.status}
              </Badge>
            </div>
            <div>
              <p className="text-muted-foreground">Code:</p>
              <p className="font-mono font-medium">{coupon.code}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Purchased:</p>
              <p>{new Date(coupon.purchased).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Expires:</p>
              <p>{new Date(coupon.expires).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        {coupon.status === "Active" && (
          <div className="flex justify-center">
            <div className="bg-accent p-4 rounded-lg w-48 h-48 flex flex-col items-center justify-center ">
              <QrCode className="h-24 w-24 text-primary mb-2" />
              <p className="text-sm font-medium text-center">Scan to redeem</p>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
    <DialogFooter>
    <Button
  variant="outline"
  onClick={() => printCoupon(coupon)}
  className="border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-600 transform transition-transform duration-200 hover:scale-105"
>
  <Printer className="h-4 w-4 mr-2 text-orange-500" />
  Print
</Button>
      <Button onClick={() => generateCouponPDF(coupon)}>
        <Download className="h-4 w-4 mr-2" />
        Download
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>



              {coupon.status === "Active" && (
                <Button size="sm">
                  <QrCode className="h-4 w-4 mr-2" />
                  Redeem
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
