"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 79769 73338",
      secondary: "Available for consultation",
      action: "tel:+917976973338",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "abdulriyaz1009@gmail.com",
      secondary: "We'll respond within 24 hours",
      action: "mailto:abdulriyaz1009@gmail.com",
      color: "bg-green-500",
    },
    {
      icon: MapPin,
      title: "Visit Showroom",
      primary: "Opposite to Modi Masjid",
      secondary: "Bypass Road, Makrana - 341505",
      action: "https://maps.google.com/?q=Makrana+Premium+Marble",
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
              <Phone className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-medium text-amber-200">Get In Touch</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                Marble Experts
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space with premium Makrana marble? Our expert craftsmen are here to bring your
              vision to life with personalized consultation and exceptional service.
            </p>

            {/* Quick Stats */}
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24hrs</div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 text-lg">Multiple ways to reach us. Choose what works best for you.</p>
            </div>

            <div className="space-y-6 mb-12">
              {contactInfo
                .filter((info) => info.title !== "Business Hours")
                .map((info, index) => (
                  <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          {info.action ? (
                            <a
                              href={info.action}
                              className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                              target={info.action.startsWith("http") ? "_blank" : undefined}
                              rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {info.primary}
                            </a>
                          ) : (
                            <p className="text-gray-900 font-medium">{info.primary}</p>
                          )}
                          <p className="text-gray-600 text-sm mt-1">{info.secondary}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Map */}
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full h-80"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.954976571828!2d74.71969490000001!3d27.0315886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b9de8dc3e736f%3A0x4843a9cd36e720a9!2sRK%20MOBILE%20makrana!5e0!3m2!1sen!2sin!4v1743443116598!5m2!1sen!2sin"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Makrana Premium Location"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-gray-900">Makrana Premium</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of marble do you specialize in?",
                answer:
                  "We specialize in premium Makrana marble, including white marble, Italian marble, Indian marble, and granite. Each piece is carefully selected for quality and beauty.",
              },
              {
                question: "Do you provide installation services?",
                answer:
                  "Yes, we provide complete installation services with our expert craftsmen. We handle everything from design consultation to final installation.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and size. Simple installations may take 1-2 weeks, while custom designs can take 4-6 weeks. We'll provide a detailed timeline during consultation.",
              },
              {
                question: "Do you offer custom designs?",
                answer:
                  "We specialize in custom marble designs tailored to your specific requirements. Our expert craftsmen can bring any vision to life.",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
