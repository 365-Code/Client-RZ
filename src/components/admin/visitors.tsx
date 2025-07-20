"use client"

import { useEffect, useState } from "react"
import { Users, Globe, TrendingUp, MapPin } from "lucide-react"

export default function Visitors() {
  const [stats, setStats] = useState<{
    totalVisitors: number
    activeVisitors: number
  } | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/track")
        const data = await res.json()
        setStats(data)
      } catch (err) {
        console.error("Error fetching visitor stats:", err)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Real-Time
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Analytics
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Track your website visitors in real-time with beautiful, comprehensive analytics that help you
                understand your audience better.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600 font-medium">Live</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">Active Visitors</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stats ? (
                        stats.activeVisitors
                      ) : (
                        <span className="animate-pulse bg-gray-200 rounded w-16 h-8 inline-block"></span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <Globe className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 mb-1">Total Visitors</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stats ? (
                        stats.totalVisitors.toLocaleString()
                      ) : (
                        <span className="animate-pulse bg-gray-200 rounded w-20 h-8 inline-block"></span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/visitors.svg?height=400&width=500"
                  alt="Analytics Dashboard Illustration"
                  className="w-full max-w-lg h-auto"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>
    </div>
  )
}
