import { MessageSquare, Palette, Hammer, CheckCircle } from "lucide-react"

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description:
        "We discuss your vision, requirements, and preferences to understand your project needs.",
    },
    {
      icon: Palette,
      title: "Design & Planning",
      description:
        "Our experts create detailed designs and select the perfect marble for your project.",
    },
    {
      icon: Hammer,
      title: "Craftsmanship",
      description:
        "Master artisans carefully craft your marble pieces with precision and attention to detail.",
    },
    {
      icon: CheckCircle,
      title: "Installation",
      description:
        "Professional installation ensures perfect placement and finishing of your marble masterpiece.",
    },
  ]

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Crafting
            <span className="block text-amber-600">Process</span>
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-amber-600 mx-auto rounded-full mb-4 sm:mb-8" />

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From consultation to final installation, every step meets our
            highest standards of quality and craftsmanship.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center h-full">
                {/* Icon + Step */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                  </div>

                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-amber-200 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
