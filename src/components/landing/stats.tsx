import { Award, Users, Clock, Gem } from "lucide-react"

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Happy Clients",
      description: "Trusted by homeowners and architects",
    },
    {
      icon: Award,
      number: "25+",
      label: "Years Experience",
      description: "Decades of marble craftsmanship",
    },
    {
      icon: Gem,
      number: "500+",
      label: "Projects Completed",
      description: "From residential to commercial",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Expert Support",
      description: "Always here to help you",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-amber-700" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-amber-600/20 rounded-full mx-auto animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
