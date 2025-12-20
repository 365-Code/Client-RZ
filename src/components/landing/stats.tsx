import { stats } from "@/lib/constant"
import { Award, Users, Clock, Gem } from "lucide-react"

const Stats = () => {
  

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Trusted by Thousands
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-amber-600 mx-auto rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group px-4 py-6 sm:py-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="relative mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-amber-700" />
                </div>

                {/* Ping */}
                <div className="absolute inset-0 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-amber-600/20 rounded-full mx-auto animate-ping opacity-0 group-hover:opacity-100" />
              </div>

              {/* Number */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-base sm:text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
