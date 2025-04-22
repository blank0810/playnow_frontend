"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Store,
  Building,
  Tag,
  FileText,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  Home,
  PlusCircle,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "@/components/theme-provider"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function MerchantLayout({ children }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

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

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="dealhub-merchant-theme">
      <SidebarProvider>
        <div className="flex min-h-screen bg-background">
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2 px-6 py-4">
                <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                  <Store className="h-5 w-5" />
                </div>
                <span className="font-semibold text-xl">DealHub</span>
                <Badge variant="outline" className="ml-2 rounded-full">
                  Merchant
                </Badge>
              </div>
            </SidebarHeader>

            <SidebarContent className="px-3">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/merchant/dashboard")} className="px-3 py-2">
                    <Link href="/merchant/dashboard">
                      <Home className="h-4 w-4 mr-3" />
                      Dashboard
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/merchant/branches")} className="px-3 py-2">
                    <Link href="/merchant/branches">
                      <Building className="h-4 w-4 mr-3" />
                      Branch Management
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/merchant/coupons")} className="px-3 py-2">
                    <Link href="/merchant/coupons">
                      <Tag className="h-4 w-4 mr-3" />
                      Coupon Management
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={isActive("/merchant/coupons/upload")}
                        className="px-3 py-2 pl-10"
                      >
                        <Link href="/merchant/coupons/upload">Upload Coupons</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={isActive("/merchant/coupons/reports")}
                        className="px-3 py-2 pl-10"
                      >
                        <Link href="/merchant/coupons/reports">Coupon Reports</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/merchant/transactions")} className="px-3 py-2">
                    <Link href="/merchant/transactions">
                      <FileText className="h-4 w-4 mr-3" />
                      Transaction Logs
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/merchant/settings")} className="px-3 py-2">
                    <Link href="/merchant/settings">
                      <Settings className="h-4 w-4 mr-3" />
                      Settings
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>

            <SidebarFooter>
              <div className="p-6 border-t">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Merchant" />
                    <AvatarFallback>CI</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Culinary Institute</p>
                    <p className="text-xs text-muted-foreground">Premium Merchant</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Log out</span>
                </Button>
              </div>
            </SidebarFooter>
          </Sidebar>

          <div className="flex-1 flex flex-col">
            <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-8 sm:px-10">
              <SidebarTrigger />

              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex items-center gap-1"
                onClick={() => setOpen(true)}
              >
                <Search className="h-3.5 w-3.5" />
                <span className="ml-1">Search...</span>
                <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>

              <div className="ml-auto flex items-center gap-2">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center">2</Badge>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Merchant" />
                        <AvatarFallback>CI</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline">Culinary Institute</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">Culinary Institute</p>
                        <p className="text-xs text-muted-foreground">culinary@example.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/merchant/profile">
                        <Store className="mr-2 h-4 w-4" />
                        <span>Business Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/merchant/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>

            <main className="flex-1 p-8 md:p-10 max-w-7xl mx-auto w-full">{children}</main>
          </div>

          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Search stores, coupons, transactions..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Quick Actions">
                <CommandItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Add New Store</span>
                </CommandItem>
                <CommandItem>
                  <Tag className="mr-2 h-4 w-4" />
                  <span>Upload Coupons</span>
                </CommandItem>
                <CommandItem>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  <span>View Reports</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Stores">
                <CommandItem>
                  <Store className="mr-2 h-4 w-4" />
                  <span>Manhattan Branch</span>
                </CommandItem>
                <CommandItem>
                  <Store className="mr-2 h-4 w-4" />
                  <span>Brooklyn Branch</span>
                </CommandItem>
                <CommandItem>
                  <Store className="mr-2 h-4 w-4" />
                  <span>Queens Branch</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
