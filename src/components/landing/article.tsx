"use client"
import Image from "next/image"
import { useState, useRef } from "react"
import { Play, Pause, Award, Gem, Users } from "lucide-react"
import { Button } from "../ui/button"

const Article = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setPlaying(true)
      } else {
        videoRef.current.pause()
        setPlaying(false)
      }
    }
  }

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Finest Makrana marble selection",
    },
    {
      icon: Gem,
      title: "Timeless Beauty",
      description: "Elegant designs that last forever",
    },
    {
      icon: Users,
      title: "Expert Craftsmanship",
      description: "Master artisans with decades of experience",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Placeholder for video - replace with actual video */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  unoptimized={true}
                  width={800}
                  height={450}
                  alt="Makrana Marble Showcase"
                  src="https://img.freepik.com/free-photo/sink_74190-3600.jpg?t=st=1711877641~exp=1711881241~hmac=2ed96b4efc12b2da05021549605501b5884d18b8d4b9cc1bb38ae0fa2fbd0d82&w=1060"
                  className="w-full h-full object-cover"
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={handleVideo}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    {playing ? (
                      <Pause className="w-8 h-8 text-white ml-0" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center">
                <Gem className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Video Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Premium Grade</div>
                  <div className="text-sm text-gray-600">A+ Quality Marble</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-600/20 rounded-full px-4 py-2 mb-6">
                <Gem className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">Heritage & Excellence</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Makrana Marble
                <span className="block text-amber-400">Timeless Elegance</span>
              </h2>

              <div className="w-20 h-1 bg-amber-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                The timeless beauty and durability of Makrana marble have made it a symbol of sophistication and
                refinement in architectural design worldwide.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Renowned for its pristine white color and exquisite veining, Makrana marble represents the pinnacle of
                luxury in interior design, chosen by architects and designers for the most prestigious projects.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 pt-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Explore Collection</Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                Watch Full Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Article