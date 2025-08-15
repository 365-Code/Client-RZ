import MasonryLayout from "../utils/masonry-layout";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Award, Sparkles, Users } from "lucide-react";
import { staticCategories } from "@/lib/constant";
import CategoryCard from "../utils/category-card";

export const ShopProducts = () => {
  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-amber-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-medium text-amber-200">
                Our Collections
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Marble
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                Elegance
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our exquisite collections of handcrafted marble
              masterpieces. Each piece tells a story of traditional
              craftsmanship and timeless beauty from the heart of Makrana.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-gray-300 text-sm">Collections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-300 text-sm">Unique Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-gray-300 text-sm">Years Crafting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Handpicked marble from the finest quarries of Makrana, ensuring
                exceptional quality and durability.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-600">
                Skilled artisans with generations of experience create each
                piece with meticulous attention to detail.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-lg border border-amber-200">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Custom Designs
              </h3>
              <p className="text-gray-600">
                Bespoke marble creations tailored to your vision and space
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>


      
      <div className="container mx-auto px-6">
        {/* <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-50 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-amber-800 text-sm font-medium">
              Our Collections
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our
            <span className="block text-amber-600">Marble Collections</span>
          </h2>

          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of marble collections, each
            piece crafted with precision and artistic excellence.
          </p>
        </div> */}

        <MasonryLayout breakpoints={{ 1200: 3, 768: 2, 500: 1 }}>
          {staticCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              showNewBadge={index < 2} // Show new badge only for first 2 categories
            />
          ))}
        </MasonryLayout>

        <div className="text-center mt-16">
          <Link href="/collections">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
            >
              View All Collections
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
