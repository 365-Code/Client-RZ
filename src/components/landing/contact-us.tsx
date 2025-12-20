"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get in
            <span className="block text-amber-600">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-amber-600 mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with premium marble? Contact us for consultations, quotes, or any questions
            about our collections.
          </p>
        </div>

        {/* Grid: Contact Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {[ 
              {
                icon: MapPin,
                title: "Visit Our Showroom",
                content: (
                  <>
                    Opposite to Modi Masjid
                    <br />
                    Bypass Road, Makrana - 341505
                    <br />
                    Rajasthan, India
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Call Us",
                content: (
                  <a href="tel:+917976973338" className="text-gray-600 hover:text-amber-600 transition-colors">
                    +91 79769 73338
                  </a>
                ),
              },
              {
                icon: Mail,
                title: "Email Us",
                content: (
                  <a
                    href="mailto:abdulriyaz1009@gmail.com"
                    className="text-gray-600 hover:text-amber-600 transition-colors break-all"
                  >
                    abdulriyaz1009@gmail.com
                  </a>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.954976571828!2d74.71969490000001!3d27.0315886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b9de8dc3e736f%3A0x4843a9cd36e720a9!2sRK%20MOBILE%20makrana!5e0!3m2!1sen!2sin!4v1743443116598!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
