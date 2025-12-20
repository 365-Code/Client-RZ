import { Loader2, Package, ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Loading Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="relative">
              <Image
                width={400}
                height={300}
                src="/loading.svg?height=300&width=400"
                alt="Loading products"
                className="w-80 h-60 mx-auto opacity-90"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 animate-bounce">
                <div className="bg-blue-100 rounded-full p-3">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="absolute -bottom-2 -left-4 animate-bounce delay-500">
                <div className="bg-purple-100 rounded-full p-2">
                  <ShoppingBag className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div className="absolute top-8 -left-8 animate-bounce delay-1000">
                <div className="bg-green-100 rounded-full p-2">
                  <Sparkles className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Curating Amazing Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re handpicking the best products just for you. This
              won&apos;t take long!
            </p>
          </div>

          {/* Animated Loader */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Loading products...</p>
          </div>
        </div>

        {/* Skeleton Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Skeleton */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
              </div>

              {/* Content Skeleton */}
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                <div className="flex items-center justify-between pt-2">
                  <div className="h-5 bg-gray-200 rounded-full w-16"></div>
                  <div className="h-8 bg-gray-200 rounded-full w-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Loading Messages */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
            <p className="text-sm text-gray-600 font-medium">
              Almost there... preparing your shopping experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
