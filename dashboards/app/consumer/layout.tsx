"use client"

import React, { ReactNode } from "react"
import Link from "next/link"
import { Bell, CreditCard, Home, LogOut, Menu, Search, Settings, ShoppingBag, Ticket, User } from "lucide-react"
import { Button } from "@/components/ui-consumer/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui-consumer/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui-consumer/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-consumer/avatar"
import { Badge } from "@/components/ui-consumer/badge"
import { Separator } from "@/components/ui-consumer/separator"
import { ThemeProvider } from "@/components/theme-provider"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui-consumer/command"
import { useState, useEffect } from "react"

import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


export default function ConsumerLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

const navItems = [
  { href: "/consumer/dashboard", icon: Home, label: "Dashboard" },
  { href: "/consumer/coupons", icon: Ticket, label: "My Coupons" },
  { href: "/consumer/transactions", icon: CreditCard, label: "Transactions" },
  { href: "/consumer/account", icon: User, label: "My Account" },
  { href: "/consumer/settings", icon: Settings, label: "Settings" },
]


  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <ThemeProvider defaultTheme="light" storageKey="dealhub-theme">
      <div className="min-h-screen bg-background flex bg-gray-50">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:w-80 border-r bg-card fixed inset-y-0">


  <div className="flex items-center px-6 h-20 border-b"> 
    {/* Increased height & padding */}
    <div className="flex items-center gap-3"> 
      {/* Increased gap */}
      <div className="p-2 rounded-md">
        <img
          src="/dashboards/consumer/head-logo.png"
          alt="PlayNow Logo"
          className="h-12 w-auto object-contain"
        />
      </div>
      <span className="font-semibold text-2xl tracking-wide">
  <span className="text-black">Play</span>
  <span className="text-orange-500">Now</span>
</span>
    </div>
          </div>
          
          <nav className="flex-1 overflow-auto py-20 px-3">
  <div className="space-y-4 px-1">
    {navItems.map(({ href, icon: Icon, label }) => {
      const isActive = pathname === href
      return (
        <Button
          key={href}
          variant="ghost"
          className={cn(
            "w-full justify-start transition-all hover:text-orange-500 hover:bg-orange-100",
            isActive && "text-orange-500 bg-orange-50 font-semibold"
          )}
          asChild
        >
          <Link href={href}>
            <Icon className="h-7 w-7 mr-4" />
            <span className="text-xl">{label}</span>
          </Link>
        </Button>
      )
    })}
  </div>
</nav>
</aside>

        <div className="flex-1 flex flex-col lg:pl-64">
        <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                <div className="flex items-center px-6 h-20 border-b bg-gray-200">
                  
  <div className="flex items-center gap-3">
    <div className="p-1.5 rounded-md">
      <img
        src="/dashboards/consumer/head-logo.png"
        alt="PlayNow Logo"
        className="h-10 w-auto object-contain"
      />
    </div>
    <span className="font-semibold text-2xl tracking-wide">
      <span className="text-black">Play</span>
      <span className="text-orange-500">Now</span>
    </span>
  </div>
</div>
                  <nav className="grid gap-1 p-4">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/consumer/dashboard">
                        <Home className="h-6 w-6 mr-3" />
                        <span className="text-lg">Dashboard</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/consumer/coupons">
                        <Ticket className="h-6 w-6 mr-3" />
                        <span className="text-lg">My Coupons</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/consumer/transactions">
                        <CreditCard className="h-6 w-6 mr-3" />
                        <span className="text-lg">Transactions</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/consumer/account">
                        <User className="h-6 w-6 mr-3" />
                        <span className="text-lg">My Account</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/consumer/settings">
                        <Settings className="h-6 w-6 mr-3" />
                        <span className="text-lg">Settings</span>
                      </Link>
                    </Button>
                    <Separator className="my-2" />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            <Button
  variant="outline"
  size="sm"
  className="hidden md:flex items-center gap-2 w-80 justify-start ml-16" // Added ml-6 for margin-left
  onClick={() => setOpen(true)}
>
  <Search className="h-5 w-5" />
  <span className="text-base text-muted-foreground">Search...</span>
  <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
    <span className="text-xs">⌘</span>
  </kbd>
</Button>


            <div className="ml-auto flex items-center gap-6">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-8 w-8" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">3</Badge>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback>EA</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-lg font-medium">Ehnand Azucena</p>
                      <p className="text-sm text-muted-foreground">ehnand@azucena.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/consumer/account">
                      <User className="mr-2 h-6 w-6" />
                      <span className="text-lg">Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/consumer/coupons">
                      <Ticket className="mr-2 h-6 w-6" />
                      <span className="text-lg">My Coupons</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/consumer/settings">
                      <Settings className="mr-2 h-6 w-6" />
                      <span className="text-lg">Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-6 w-6 text-red-500" />
                    <span className="text-lg text-red-500">Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 p-4 md:p-6 max-w-7xl mx-auto w-full">{children}</main>
        </div>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search coupons, transactions..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Ticket className="mr-2 h-6 w-6" />
                <span className="text-lg">Active Coupons</span>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-6 w-6" />
                <span className="text-lg">Recent Transactions</span>
              </CommandItem>
              <CommandItem>
                <User className="mr-2 h-6 w-6" />
                <span className="text-lg">Your Profile</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </ThemeProvider>
  )
}
