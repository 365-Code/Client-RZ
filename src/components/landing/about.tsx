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
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-amber-800 text-xs sm:text-sm font-medium">
                  About Our Legacy
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Elevating Marble
                <span className="block text-amber-600">
                  Craftsmanship Since 2000
                </span>
              </h2>

              <div className="w-14 sm:w-20 h-1 bg-amber-600 rounded-full mb-6 sm:mb-8" />
            </div>

            {/* Text */}
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-sm sm:text-base md:text-lg">
                At <strong className="text-gray-900">Makrana Premium</strong>, we
                blend heritage techniques with modern precision to create
                exquisite marble craftsmanship trusted for over two decades.
              </p>

              <p className="text-sm sm:text-base md:text-lg">
                From custom installations to intricate inlays, every creation
                reflects our commitment to{" "}
                <strong className="text-gray-900">
                  luxury, elegance, and durability
                </strong>
                .
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8 border-t border-gray-200">
              {[
                { value: "25+", label: "Years" },
                { value: "1000+", label: "Projects" },
                { value: "100%", label: "Quality" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/collections">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 text-sm sm:text-base"
              >
                Discover Our Collection
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/about.jpg"
                alt="Marble Handicraft"
                width={600}
                height={600}
                className="w-full h-[280px] sm:h-[400px] lg:h-[520px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-amber-100 rounded-full flex items-center justify-center shadow-lg">
              <Gem className="w-8 h-8 sm:w-12 sm:h-12 text-amber-600" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:-left-6 bg-white rounded-xl p-4 sm:p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                <div>
                  <div className="text-sm sm:text-base font-bold text-gray-900">
                    Expert Team
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Master Craftsmen
                  </div>
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
