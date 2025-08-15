import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Clock, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg?height=1080&width=1920"
          alt="Luxury Marble Showroom"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Animated Background Elements - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/5 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse animation-delay-500"></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-bounce animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-amber-400/20 rounded-full animate-bounce animation-delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Main Heading with Better Typography */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none">Makrana</h1>
          <div className="relative inline-block">
            <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400">
              Premium
            </span>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-bold text-amber-300/20 blur-sm">
              Premium
            </div>
          </div>
        </div>

        {/* Enhanced Elegant Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent w-24"></div>
          <div className="mx-6 flex space-x-2">
            <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse animation-delay-400"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent w-24"></div>
        </div>

        {/* Enhanced Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          Experience the exceptional quality of <span className="text-amber-300 font-medium">Makrana marble</span> that
          truly elevates the elegance of any space.
          <span className="block mt-2">Renowned worldwide for its pristine beauty and timeless craftsmanship.</span>
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/collections">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Collections
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="tel:+917976973338">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-medium bg-white/5 hover:border-white/50 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-white/90 group hover:text-white transition-colors duration-300">
            <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center group-hover:bg-amber-600/30 transition-colors duration-300">
              <Users className="w-6 h-6 text-amber-300" />
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-300">Satisfied Clients</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 text-white/90 group hover:text-white transition-colors duration-300">
            <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center group-hover:bg-amber-600/30 transition-colors duration-300">
              <Award className="w-6 h-6 text-amber-300" />
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 text-white/90 group hover:text-white transition-colors duration-300">
            <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center group-hover:bg-amber-600/30 transition-colors duration-300">
              <Clock className="w-6 h-6 text-amber-300" />
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
        <div className="text-white/60 text-xs mt-2 font-medium">Scroll</div>
      </div>
    </section>
  )
}

export default Hero