"use client"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const ContactUs = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in
            <span className="block text-amber-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space with premium marble? Contact us for consultations, quotes, or any questions
            about our collections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Visit Our Showroom</h4>
                  <p className="text-gray-600">
                    Opposite to Modi Masjid
                    <br />
                    Bypass Road, Makrana - 341505
                    <br />
                    Rajasthan, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                  <a href="tel:+917976973338" className="text-gray-600 hover:text-amber-600 transition-colors">
                    +91 79769 73338
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                  <a
                    href="mailto:abdulriyaz1009@gmail.com"
                    className="text-gray-600 hover:text-amber-600 transition-colors break-all"
                  >
                    abdulriyaz1009@gmail.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 9:00 AM - 4:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* <div className="flex space-x-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white flex-1">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 flex-1 bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div> */}
          </div>

          {/* Map */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.954976571828!2d74.71969490000001!3d27.0315886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b9de8dc3e736f%3A0x4843a9cd36e720a9!2sRK%20MOBILE%20makrana!5e0!3m2!1sen!2sin!4v1743443116598!5m2!1sen!2sin"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs