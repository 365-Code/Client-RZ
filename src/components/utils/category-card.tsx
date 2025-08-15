import Link from "next/link"
import Image from "next/image"
import type { CategoryType } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

interface CategoryCardProps {
  category: CategoryType
  showNewBadge?: boolean
}

export default function CategoryCard({ category, showNewBadge = false }: CategoryCardProps) {
  // Check if category is new (created within last 30 days)
  const isNew = () => {
    if (!category.createdAt) return false
    const createdDate = new Date(category.createdAt)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - createdDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 30
  }

  return (
    <Link href={"/collections/" + category.id} className="block group">
      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
        <div className="relative overflow-hidden">
          <Image
            unoptimized
            src={category.imageUrl || "/placeholder.svg"}
            alt={category.name}
            width={600}
            height={400}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* New Badge - Only show if showNewBadge is true AND category is actually new */}
          {showNewBadge && isNew() && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-green-500 hover:bg-green-600 shadow-lg">
                <Sparkles className="w-3 h-3 mr-1" />
                New
              </Badge>
            </div>
          )}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white text-xl font-bold capitalize mb-2 group-hover:text-amber-300 transition-colors">
              {category.name}
            </h3>
            <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Discover exquisite {category.name.toLowerCase()} pieces
            </p>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="p-4 bg-white">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm capitalize">{category.name}</span>
            <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
