"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Boxes, Package } from "lucide-react"
import Visitors from "@/components/admin/visitors"

export default function AdminDashboard() {
  const router = useRouter()

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">Manage products and categories with ease.</p>
        </div>

        {/* Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Products Management */}
          <Card
            className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-white"
            onClick={() => router.push("/admin/products")}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">Manage Products</CardTitle>
                <p className="text-gray-600 mt-2">Add, edit, and delete products with an intuitive interface.</p>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
              >
                Go to Products
              </Button>
            </CardContent>
          </Card>

          {/* Categories Management */}
          <Card
            className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-white"
            onClick={() => router.push("/admin/categories")}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">Manage Categories</CardTitle>
                <p className="text-gray-600 mt-2">Organize products by category efficiently.</p>
              </div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Boxes className="w-8 h-8 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
              >
                Go to Categories
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Visitors Analytics */}
        <div className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden">
          <Visitors />
        </div>
      </div>
    </div>
  )
}
