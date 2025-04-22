"use client"

import { jsPDF } from "jspdf"
import "jspdf-autotable"

// Helper function to format date
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString()
}

// Generate PDF for a coupon
export const generateCouponPDF = (coupon) => {
  const doc = new jsPDF()

  // Add logo/header
  doc.setFontSize(20)
  doc.setTextColor(100, 100, 100)
  doc.text("DealHub", 105, 15, { align: "center" })

  doc.setFontSize(16)
  doc.setTextColor(0, 0, 0)
  doc.text("Coupon Details", 105, 30, { align: "center" })

  // Add coupon information
  doc.setFontSize(12)
  doc.text(`Coupon: ${coupon.title}`, 20, 50)
  doc.text(`Merchant: ${coupon.merchant}`, 20, 60)
  doc.text(`Location: ${coupon.location}`, 20, 70)
  doc.text(`Discount: ${coupon.discount}`, 20, 80)
  doc.text(`Original Price: $${coupon.originalPrice}`, 20, 90)
  doc.text(`Discounted Price: $${coupon.discountedPrice}`, 20, 100)
  doc.text(`Purchased: ${formatDate(coupon.purchased)}`, 20, 110)
  doc.text(`Expires: ${formatDate(coupon.expires)}`, 20, 120)
  doc.text(`Status: ${coupon.status}`, 20, 130)
  doc.text(`Code: ${coupon.code}`, 20, 140)

  // Add terms and conditions
  doc.setFontSize(14)
  doc.text("Terms & Conditions", 20, 160)

  doc.setFontSize(10)
  let yPos = 170
  coupon.terms.forEach((term) => {
    doc.text(`• ${term}`, 20, yPos)
    yPos += 10
  })

  // Add footer
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text("Generated from DealHub - " + new Date().toLocaleString(), 105, 280, { align: "center" })

  // Save the PDF
  doc.save(`coupon-${coupon.code}.pdf`)
}

// Generate PDF for a transaction
export const generateTransactionPDF = (transaction) => {
  const doc = new jsPDF()

  // Add logo/header
  doc.setFontSize(20)
  doc.setTextColor(100, 100, 100)
  doc.text("DealHub", 105, 15, { align: "center" })

  doc.setFontSize(16)
  doc.setTextColor(0, 0, 0)
  doc.text("Transaction Receipt", 105, 30, { align: "center" })

  // Add transaction information
  doc.setFontSize(12)
  doc.text(`Transaction ID: ${transaction.id}`, 20, 50)
  doc.text(`Date: ${formatDate(transaction.date)}`, 20, 60)
  doc.text(`Merchant: ${transaction.merchant}`, 20, 70)
  doc.text(`Coupon: ${transaction.coupon}`, 20, 80)
  doc.text(`Payment Method: ${transaction.paymentMethod}`, 20, 90)
  if (transaction.cardLast4) {
    doc.text(`Card: **** **** **** ${transaction.cardLast4}`, 20, 100)
  }
  doc.text(`Reference: ${transaction.reference}`, 20, 110)
  doc.text(`Status: ${transaction.status}`, 20, 120)

  // Add price breakdown
  doc.setFontSize(14)
  doc.text("Price Breakdown", 20, 140)

  doc.setFontSize(12)
  doc.text(`Original Price: $${transaction.originalPrice.toFixed(2)}`, 20, 155)
  doc.text(
    `Discount (${transaction.discount}): -$${(transaction.originalPrice - transaction.amount).toFixed(2)}`,
    20,
    165,
  )

  doc.setLineWidth(0.5)
  doc.line(20, 170, 190, 170)

  doc.setFontSize(14)
  doc.text(`Total Paid: $${transaction.amount.toFixed(2)}`, 20, 180)

  // Add footer
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text("Generated from DealHub - " + new Date().toLocaleString(), 105, 280, { align: "center" })

  // Save the PDF
  doc.save(`receipt-${transaction.id}.pdf`)
}

// Generate PDF for transactions list
export const generateTransactionsListPDF = (transactions) => {
  const doc = new jsPDF()

  // Add logo/header
  doc.setFontSize(20)
  doc.setTextColor(100, 100, 100)
  doc.text("DealHub", 105, 15, { align: "center" })

  doc.setFontSize(16)
  doc.setTextColor(0, 0, 0)
  doc.text("Transactions History", 105, 30, { align: "center" })

  // Calculate totals
  const totalSpent = transactions.reduce((sum, transaction) => {
    return transaction.status === "Refunded" ? sum : sum + transaction.amount
  }, 0)

  const totalSaved = transactions.reduce((sum, transaction) => {
    return transaction.status === "Refunded" ? sum : sum + (transaction.originalPrice - transaction.amount)
  }, 0)

  // Add summary
  doc.setFontSize(12)
  doc.text(`Total Transactions: ${transactions.length}`, 20, 45)
  doc.text(`Total Spent: $${totalSpent.toFixed(2)}`, 20, 55)
  doc.text(`Total Saved: $${totalSaved.toFixed(2)}`, 20, 65)
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 75)

  // Add transactions table
  const tableColumn = ["ID", "Date", "Merchant", "Amount", "Status"]
  const tableRows = transactions.map((transaction) => [
    transaction.id,
    formatDate(transaction.date),
    transaction.merchant,
    `$${transaction.amount.toFixed(2)}`,
    transaction.status,
  ])

  // @ts-ignore - jspdf-autotable types are not included
  doc.autoTable({
    startY: 85,
    head: [tableColumn],
    body: tableRows,
    theme: "grid",
    headStyles: { fillColor: [100, 100, 100] },
  })

  // Add footer
  const finalY = (doc as any).lastAutoTable.finalY || 200
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text("Generated from DealHub - " + new Date().toLocaleString(), 105, finalY + 15, { align: "center" })

  // Save the PDF
  doc.save("transactions-history.pdf")
}

// Print function for coupons
export const printCoupon = (coupon) => {
  const printWindow = window.open("", "_blank")

  if (!printWindow) {
    alert("Please allow popups to print the coupon")
    return
  }

  printWindow.document.write(`
    <html>
      <head>
        <title>Coupon - ${coupon.code}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #666; }
          .title { font-size: 20px; margin: 20px 0; }
          .coupon-details { margin-bottom: 30px; }
          .coupon-details p { margin: 8px 0; }
          .terms { margin-top: 30px; }
          .terms h3 { margin-bottom: 10px; }
          .terms ul { padding-left: 20px; }
          .terms li { margin-bottom: 5px; }
          .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
          .code { font-family: monospace; font-size: 16px; font-weight: bold; padding: 10px; border: 1px dashed #ccc; display: inline-block; }
          @media print {
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">DealHub</div>
          <button class="no-print" onclick="window.print()">Print Coupon</button>
        </div>
        
        <h2 class="title">${coupon.title}</h2>
        
        <div class="coupon-details">
          <p><strong>Merchant:</strong> ${coupon.merchant}</p>
          <p><strong>Location:</strong> ${coupon.location}</p>
          <p><strong>Discount:</strong> ${coupon.discount}</p>
          <p><strong>Original Price:</strong> $${coupon.originalPrice}</p>
          <p><strong>Discounted Price:</strong> $${coupon.discountedPrice}</p>
          <p><strong>Purchased:</strong> ${formatDate(coupon.purchased)}</p>
          <p><strong>Expires:</strong> ${formatDate(coupon.expires)}</p>
          <p><strong>Status:</strong> ${coupon.status}</p>
          <p><strong>Coupon Code:</strong> <span class="code">${coupon.code}</span></p>
        </div>
        
        <div class="terms">
          <h3>Terms & Conditions</h3>
          <ul>
            ${coupon.terms.map((term) => `<li>${term}</li>`).join("")}
          </ul>
        </div>
        
        <div class="footer">
          Generated from DealHub - ${new Date().toLocaleString()}
        </div>
      </body>
    </html>
  `)

  printWindow.document.close()

  // Trigger print after content is loaded
  printWindow.onload = () => {
    printWindow.focus()
    printWindow.print()
  }
}

// Print function for transactions
export const printTransaction = (transaction) => {
  const printWindow = window.open("", "_blank")

  if (!printWindow) {
    alert("Please allow popups to print the receipt")
    return
  }

  printWindow.document.write(`
    <html>
      <head>
        <title>Receipt - ${transaction.id}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #666; }
          .title { font-size: 20px; margin: 20px 0; }
          .transaction-details { margin-bottom: 30px; }
          .transaction-details p { margin: 8px 0; }
          .breakdown { margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; }
          .breakdown .total { font-weight: bold; margin-top: 10px; font-size: 16px; }
          .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
          @media print {
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">DealHub</div>
          <button class="no-print" onclick="window.print()">Print Receipt</button>
        </div>
        
        <h2 class="title">Transaction Receipt</h2>
        
        <div class="transaction-details">
          <p><strong>Transaction ID:</strong> ${transaction.id}</p>
          <p><strong>Date:</strong> ${formatDate(transaction.date)}</p>
          <p><strong>Merchant:</strong> ${transaction.merchant}</p>
          <p><strong>Coupon:</strong> ${transaction.coupon}</p>
          <p><strong>Payment Method:</strong> ${transaction.paymentMethod}</p>
          ${transaction.cardLast4 ? `<p><strong>Card:</strong> **** **** **** ${transaction.cardLast4}</p>` : ""}
          <p><strong>Reference:</strong> ${transaction.reference}</p>
          <p><strong>Status:</strong> ${transaction.status}</p>
        </div>
        
        <div class="breakdown">
          <h3>Price Breakdown</h3>
          <p>Original Price: $${transaction.originalPrice.toFixed(2)}</p>
          <p>Discount (${transaction.discount}): -$${(transaction.originalPrice - transaction.amount).toFixed(2)}</p>
          <p class="total">Total Paid: $${transaction.amount.toFixed(2)}</p>
        </div>
        
        <div class="footer">
          Generated from DealHub - ${new Date().toLocaleString()}
        </div>
      </body>
    </html>
  `)

  printWindow.document.close()

  // Trigger print after content is loaded
  printWindow.onload = () => {
    printWindow.focus()
    printWindow.print()
  }
}
