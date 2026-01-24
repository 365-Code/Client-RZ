"use client"

import type { ReactNode } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Package, Boxes, Settings, User, LogOut, Home, LayoutDashboard } from "lucide-react"
import Image from "next/image"

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const currentTab = pathname.split("/").at(-1) || ""

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      {/* Enhanced Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left Section - Navigation */}
            <div className="flex items-center space-x-6">
              {/* Back to Dashboard Button */}
              <Link href="/admin/dashboard">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
              </Link>

              {/* Divider */}
              <div className="h-8 w-px bg-gray-300"></div>

              {/* Brand Section */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Makrana Premium"
                    width={40}
                    height={40}
                    className="rounded-full w-12 h-12 border-2 border-amber-200"

                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="hidden md:block">
                  <h1 className="font-bold text-gray-900 text-lg">Makrana Premium</h1>
                  <p className="text-xs text-gray-600">Management Panel</p>
                </div>
              </div>
            </div>

            {/* Right Section - User Controls */}
            <div className="flex items-center space-x-2">
              <Link href="/" target="_blank">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                  <Home className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">View Site</span>
                </Button>
              </Link>

              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <Settings className="w-4 h-4" />
              </Button>

              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <User className="w-4 h-4" />
              </Button>

              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Enhanced Navigation Tabs */}
        <Tabs defaultValue={currentTab} className="w-full">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-1 mb-8">
            <TabsList className="grid h-16 w-full grid-cols-2 bg-gray-50 rounded-lg p-1">
              <Link href="/admin/products?page=1" className="h-full">
                <TabsTrigger
                  value="products"
                  className="w-full h-full flex items-center justify-center space-x-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-amber-700 transition-all duration-200 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg data-[state=active]:bg-blue-500">
                      <Package className="w-5 h-5 text-blue-600 data-[state=active]:text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Products</div>
                      <div className="text-xs text-gray-500">Manage inventory</div>
                    </div>
                  </div>
                </TabsTrigger>
              </Link>

              <Link href="/admin/categories?page=1" className="h-full">
                <TabsTrigger
                  value="categories"
                  className="w-full h-full flex items-center justify-center space-x-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-amber-700 transition-all duration-200 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg data-[state=active]:bg-green-500">
                      <Boxes className="w-5 h-5 text-green-600 data-[state=active]:text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Categories</div>
                      <div className="text-xs text-gray-500">Organize products</div>
                    </div>
                  </div>
                </TabsTrigger>
              </Link>
            </TabsList>
          </div>

          {/* Content Area */}
          <TabsContent value={currentTab} className="mt-0">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">{children}</div>
          </TabsContent>
        </Tabs>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mt-6">
          <Link href="/admin/dashboard" className="hover:text-amber-600 transition-colors">
            Dashboard
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium capitalize">
            {currentTab === "products" ? "Products Management" : "Categories Management"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
