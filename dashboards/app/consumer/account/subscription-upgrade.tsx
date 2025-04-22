"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui-consumer/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function SubscriptionUpgrade({ currentPlan, onUpgradeComplete }) {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [upgradeStep, setUpgradeStep] = useState("select-plan") // select-plan, payment, confirmation
  const [isProcessing, setIsProcessing] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  // Available plans
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 0,
      billingCycle: "Free",
      features: ["Up to 3 coupons per month", "Standard customer support", "Basic deal access"],
      recommended: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: 9.99,
      billingCycle: "Monthly",
      features: [
        "Up to 10 coupons per month",
        "Early access to exclusive deals",
        "No processing fees",
        "Priority customer support",
        "Personalized deal recommendations",
      ],
      recommended: true,
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: 19.99,
      billingCycle: "Monthly",
      features: [
        "Unlimited coupons",
        "VIP access to all deals",
        "No processing fees",
        "24/7 priority support",
        "Personalized deal recommendations",
        "Exclusive member-only events",
      ],
      recommended: false,
    },
  ]

  const handlePlanSelect = (planId) => {
    const plan = plans.find((p) => p.id === planId)
    setSelectedPlan(plan)
  }

  const handleContinueToPayment = () => {
    setUpgradeStep("payment")
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setUpgradeStep("confirmation")
    }, 1500)
  }

  const handleUpgradeComplete = () => {
    setIsDialogOpen(false)
    setUpgradeStep("select-plan")
    setSelectedPlan(null)
    onUpgradeComplete(selectedPlan)
  }

  const resetFlow = () => {
    setUpgradeStep("select-plan")
    setSelectedPlan(null)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>Upgrade Plan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {upgradeStep === "select-plan" && (
          <>
            <DialogHeader>
              <DialogTitle>Upgrade Your Subscription</DialogTitle>
              <DialogDescription>
                Choose a plan that works for you. You can upgrade or downgrade at any time.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <RadioGroup value={selectedPlan?.id} onValueChange={handlePlanSelect}>
                {plans.map((plan) => (
                  <div key={plan.id} className="mb-4">
                    <Card className={plan.recommended ? "border-primary" : ""}>
                      <CardHeader className="pb-2">
                        <div className="flex items-start">
                          <RadioGroupItem value={plan.id} id={plan.id} className="mt-1" />
                          <div className="ml-3 flex-1">
                            <Label htmlFor={plan.id} className="text-base font-medium">
                              {plan.name}
                              {plan.recommended && (
                                <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                  Recommended
                                </span>
                              )}
                            </Label>
                            <CardDescription>
                              <span className="text-lg font-bold">${plan.price}</span>
                              <span className="text-muted-foreground">/{plan.billingCycle.toLowerCase()}</span>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sm">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleContinueToPayment} disabled={!selectedPlan}>
                Continue
              </Button>
            </DialogFooter>
          </>
        )}

        {upgradeStep === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle>Payment Details</DialogTitle>
              <DialogDescription>
                Enter your payment information to upgrade to the {selectedPlan?.name} plan.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handlePaymentSubmit}>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    value={paymentDetails.cardName}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cardName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={paymentDetails.cardNumber}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={paymentDetails.expiryDate}
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={paymentDetails.cvv}
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Plan</span>
                    <span>{selectedPlan?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Billing Cycle</span>
                    <span>{selectedPlan?.billingCycle}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      ${selectedPlan?.price}/{selectedPlan?.billingCycle.toLowerCase()}
                    </span>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={resetFlow}>
                  Back
                </Button>
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Upgrade Now"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}

        {upgradeStep === "confirmation" && (
          <>
            <DialogHeader>
              <DialogTitle>Subscription Upgraded!</DialogTitle>
              <DialogDescription>
                Your subscription has been successfully upgraded to the {selectedPlan?.name} plan.
              </DialogDescription>
            </DialogHeader>
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="bg-green-100 rounded-full p-3 mb-4">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Thank You for Your Upgrade</h3>
              <p className="text-center text-muted-foreground mb-4">
                Your new plan is now active. You can start enjoying all the benefits of the {selectedPlan?.name} plan
                immediately.
              </p>
              <Alert>
                <AlertTitle>What's Next?</AlertTitle>
                <AlertDescription>
                  You'll receive a confirmation email shortly with details of your new subscription.
                </AlertDescription>
              </Alert>
            </div>
            <DialogFooter>
              <Button onClick={handleUpgradeComplete}>Done</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
