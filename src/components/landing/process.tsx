import { MessageSquare, Palette, Hammer, CheckCircle } from "lucide-react"

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We discuss your vision, requirements, and preferences to understand your project needs.",
    },
    {
      icon: Palette,
      title: "Design & Planning",
      description: "Our experts create detailed designs and select the perfect marble for your project.",
    },
    {
      icon: Hammer,
      title: "Craftsmanship",
      description: "Master artisans carefully craft your marble pieces with precision and attention to detail.",
    },
    {
      icon: CheckCircle,
      title: "Installation",
      description: "Professional installation ensures perfect placement and finishing of your marble masterpiece.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Crafting
            <span className="block text-amber-600">Process</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final installation, we ensure every step meets our highest standards of quality
            and craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-amber-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
