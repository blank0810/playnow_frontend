"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export default function CouponUploadPage() {
  const router = useRouter()
  const [selectedStore, setSelectedStore] = useState("")
  const [uploadMethod, setUploadMethod] = useState("individual")
  const [couponName, setCouponName] = useState("")
  const [originalPrice, setOriginalPrice] = useState("")
  const [discountedPrice, setDiscountedPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState(null)
  const [csvFile, setCsvFile] = useState(null)
  const [jsonData, setJsonData] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)

  // Sample data for stores
  const stores = [
    { id: 1, name: "Manhattan Branch" },
    { id: 2, name: "Brooklyn Branch" },
    { id: 3, name: "Queens Branch" },
    { id: 4, name: "Bronx Branch" },
    { id: 5, name: "Staten Island Branch" },
  ]

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCsvUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setCsvFile(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsUploading(true)

    // Simulate API call
    setTimeout(() => {
      setIsUploading(false)
      setUploadSuccess(true)

      // Reset form after success
      setTimeout(() => {
        if (uploadMethod === "individual") {
          setSelectedStore("")
          setCouponName("")
          setOriginalPrice("")
          setDiscountedPrice("")
          setQuantity("")
          setDescription("")
          setDate(null)
          setPreviewImage(null)
        } else if (uploadMethod === "csv") {
          setCsvFile(null)
        } else {
          setJsonData("")
        }
        setUploadSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Upload Coupons</h1>
      </div>

      <Card className="border-2 border-dashed">
        <CardHeader className="px-8 py-6">
          <CardTitle>Select Upload Method</CardTitle>
          <CardDescription>Choose how you want to upload your coupons</CardDescription>
        </CardHeader>

        <CardContent className="px-8 py-6">
          <Tabs defaultValue="individual" onValueChange={setUploadMethod} className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="individual">Individual</TabsTrigger>
              <TabsTrigger value="csv">CSV Upload</TabsTrigger>
              <TabsTrigger value="json">JSON Upload</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>

        <CardFooter className="px-8 py-6 flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/merchant/coupons">Cancel</Link>
          </Button>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload {uploadMethod === "individual" ? "Coupon" : "Coupons"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function Download({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-download", className)}
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}
