import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { CheckCircle, Award, Users, Gem } from "lucide-react"

const About = () => {
  const features = [
    "Heritage techniques with modern precision",
    "Premium quality Makrana marble",
    "Custom designs and installations",
    "Expert craftsmanship since 2000",
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-50 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-amber-800 text-sm font-medium">About Our Legacy</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Elevating Marble
                <span className="block text-amber-600">Craftsmanship Since 2000</span>
              </h2>

              <div className="w-20 h-1 bg-amber-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                At <strong className="text-gray-900">Makrana Premium</strong>, we specialize in exquisite marble
                craftsmanship, blending heritage techniques with modern precision. For over two decades, we have been
                the trusted choice for those seeking
                <strong className="text-gray-900"> luxury, elegance, and durability</strong>.
              </p>

              <p className="text-lg">
                From stunning countertops to custom sculptures and intricate inlays, our commitment to excellence
                ensures every creation stands the test of time.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Quality</div>
              </div>
            </div>

            <Link href="/collections">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                Discover Our Collection
              </Button>
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                unoptimized={true}
                width={600}
                height={600}
                src="/about.jpg"
                alt="Marble Handicraft"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center shadow-lg">
              <Gem className="w-12 h-12 text-amber-600" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-amber-600" />
                <div>
                  <div className="font-bold text-gray-900">Expert Team</div>
                  <div className="text-sm text-gray-600">Master Craftsmen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About