"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-marbleWhite dark:bg-charcoalBlack px-6 my-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-charcoalBlack dark:text-marbleWhite sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-slateGray">
          Have a question or need directions? You can contact us using the
          details below.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="flex sm:flex-row flex-col gap-4 justify-around sm:items-center">
            <div className="flex items-center gap-4">
              <MapPin className="text-burntUmber shrink-0" />
              <p className="md:text-lg text-charcoalBlack dark:text-marbleWhite">
                Opposite to Modi Masjid Bypass Road, Makrana - 341505 India
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-burntUmber shrink-0" />
              <a
                href="tel:+918290542702"
                className="md:text-lg text-nowrap text-charcoalBlack dark:text-marbleWhite"
              >
                +91 79769 73338
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={35} className="text-burntUmber shrink-0" />
              <a
                href="mailto:abdulriyaz1009@gmail.com?subject=Inquiry&body=Hello, I have a question about..."
                className="md:text-lg text-charcoalBlack dark:text-marbleWhite hover:text-burntUmber transition"
              >
                abdulriyaz1009@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.954976571828!2d74.71969490000001!3d27.0315886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b9de8dc3e736f%3A0x4843a9cd36e720a9!2sRK%20MOBILE%20makrana!5e0!3m2!1sen!2sin!4v1743443116598!5m2!1sen!2sin"
              allowFullScreen={true}
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
