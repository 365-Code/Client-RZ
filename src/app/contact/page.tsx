"use client"
import { MessageSquare } from "lucide-react" // Import MessageSquare here
import { Mail, Phone, MapPin, Clock, Users, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get in
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Have questions about our premium marble products? We&apos;re here to help you find the perfect solution for
                your project.
              </p>

              {/* Quick Stats */}
              <div className="flex items-center justify-center lg:justify-start space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-blue-200 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/contact.svg?height=400&width=500"
                alt="Contact us illustration"
                width={500}
                height={400}
                className="w-full max-w-lg mx-auto"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {/* Address Card */}
      <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white dark:bg-gray-900">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-700 transition-colors">
            <MapPin className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-xl text-gray-900 dark:text-white">Visit Us</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Opposite to Modi Masjid
            <br />
            Bypass Road
            <br />
            Makrana - 341505
            <br />
            Rajasthan, India
          </p>
          <a
            href="https://maps.google.com/?q=Makrana+Bypass+Road+Modi+Masjid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="mt-4 bg-transparent">
              <Globe className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </a>
        </CardContent>
      </Card>

      {/* Phone Card */}
      <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white dark:bg-gray-900">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-700 transition-colors">
            <Phone className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-xl text-gray-900 dark:text-white">Call Us</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <a
            href="tel:+917976973338"
            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors block mb-2"
          >
            +91 79769 73338
          </a>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Available 24/7 for urgent inquiries</p>
          <a href="tel:+917976973338">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </a>
        </CardContent>
      </Card>

      {/* Email Card */}
      <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white dark:bg-gray-900">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-700 transition-colors">
            <Mail className="w-8 h-8 text-purple-600" />
          </div>
          <CardTitle className="text-xl text-gray-900 dark:text-white">Email Us</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <a
            href="mailto:abdulriyaz1009@gmail.com"
            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors block mb-2 break-all"
          >
            abdulriyaz1009@gmail.com
          </a>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">We&apos;ll respond within 24 hours</p>
          <a href="mailto:abdulriyaz1009@gmail.com">
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Our Location</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Makrana, we&apos;re easily accessible and ready to serve you with premium marble
              products.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location Details */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Opposite to Modi Masjid
                        <br />
                        Bypass Road
                        <br />
                        Makrana - 341505
                        <br />
                        Rajasthan, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="w-3/4">
                      <h4 className="font-semibold text-gray-900 mb-2">Visiting Hours</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Everyday:</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday:</span>
                          <span className="font-medium">9:00 AM - 1:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Why Visit Us?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">Expert consultation available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600">View samples in person</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-600">Custom cutting services</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Map */}
            <div className="lg:col-span-2">
              <div className="relative">
                <iframe
                  className="w-full h-[600px] rounded-xl shadow-lg border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.954976571828!2d74.71969490000001!3d27.0315886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b9de8dc3e736f%3A0x4843a9cd36e720a9!2sRK%20MOBILE%20makrana!5e0!3m2!1sen!2sin!4v1743443116598!5m2!1sen!2sin"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Map Overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900">Makrana, Rajasthan</span>
                  </div>
                </div>

                {/* Directions Button */}
                <div className="absolute bottom-4 right-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                    <Globe className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>

              {/* Map Features */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Easy to Find</div>
                  <div className="text-sm text-gray-600">Main road location</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Parking Available</div>
                  <div className="text-sm text-gray-600">Convenient access</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Showroom</div>
                  <div className="text-sm text-gray-600">View our collection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our marble products and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of marble do you offer?",
                answer:
                  "We offer a wide variety of premium marble including Makrana White, Italian Carrara, Indian Statuario, and many other exotic varieties sourced from the finest quarries.",
              },
              {
                question: "Do you provide installation services?",
                answer:
                  "Yes, we have a team of experienced professionals who can handle installation for residential and commercial projects. We ensure proper handling and installation of all marble products.",
              },
              {
                question: "What is your delivery timeframe?",
                answer:
                  "Delivery timeframes vary based on the product and location. Typically, we can deliver within 7-14 business days for standard products. Custom orders may take 3-4 weeks.",
              },
              {
                question: "Do you offer custom cutting and finishing?",
                answer:
                  "We provide custom cutting, polishing, and finishing services to meet your specific project requirements. Our skilled craftsmen can create bespoke pieces to your exact specifications.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
