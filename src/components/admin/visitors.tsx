"use client"

import { useEffect, useState } from "react"
import { Users, TrendingUp, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type TimeFilter = "today" | "week" | "month"

export default function Visitors() {
  const [stats, setStats] = useState<{
    totalVisitors: number
    activeVisitors: number
  } | null>(null)
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("today")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/track?period=${timeFilter}`)
        const data = await res.json()
        setStats(data)
      } catch (err) {
        console.error("Error fetching visitor stats:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()

    // Auto-refresh every 30 seconds for real-time data
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [timeFilter])

  const getFilterLabel = (filter: TimeFilter) => {
    switch (filter) {
      case "today":
        return "Today"
      case "week":
        return "This Week"
      case "month":
        return "This Month"
      default:
        return "Today"
    }
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Visitor Analytics</h2>
          <p className="text-gray-600">Real-time visitor tracking and statistics</p>
        </div>

        {/* Time Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">Live Data</span>
          </div>

          <Select value={timeFilter} onValueChange={(value: TimeFilter) => setTimeFilter(value)}>
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Today</span>
                </div>
              </SelectItem>
              <SelectItem value="week">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>This Week</span>
                </div>
              </SelectItem>
              <SelectItem value="month">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>This Month</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Active Visitors Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="p-4 bg-blue-500 rounded-full shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-700 font-semibold">Live</span>
            </div>
          </div>

          <div>
            <p className="text-blue-700 font-medium mb-2">Active Visitors</p>
            <div className="text-4xl font-bold text-blue-900 mb-2">
              {loading ? (
                <div className="animate-pulse bg-blue-200 rounded-lg w-20 h-10"></div>
              ) : (
                stats?.activeVisitors || 0
              )}
            </div>
            <p className="text-blue-600 text-sm">Currently browsing</p>
          </div>
        </div>

        {/* Total Visitors Card */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="p-4 bg-amber-500 rounded-full shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-amber-700 text-sm font-medium">{getFilterLabel(timeFilter)}</div>
          </div>

          <div>
            <p className="text-amber-700 font-medium mb-2">Total Visitors</p>
            <div className="text-4xl font-bold text-amber-900 mb-2">
              {loading ? (
                <div className="animate-pulse bg-amber-200 rounded-lg w-24 h-10"></div>
              ) : (
                stats?.totalVisitors?.toLocaleString() || 0
              )}
            </div>
            <p className="text-amber-600 text-sm">Unique visits {getFilterLabel(timeFilter).toLowerCase()}</p>
          </div>
        </div>
      </div>

      {/* Refresh Button */}
      <div className="flex justify-center mt-8">
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
          ) : (
            <TrendingUp className="w-4 h-4 mr-2" />
          )}
          Refresh Data
        </Button>
      </div>
    </div>
  )
}
