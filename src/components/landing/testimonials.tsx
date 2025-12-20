import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Architect",
      content:
        "Makrana Premium delivered exceptional quality marble for our luxury hotel project. Their craftsmanship is unmatched.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Priya Sharma",
      role: "Interior Designer",
      content:
        "The attention to detail and quality of their marble work exceeded our expectations. Highly recommended for premium projects.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Mohammed Ali",
      role: "Homeowner",
      content:
        "Beautiful marble installation for our home. The team was professional and the quality is outstanding.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our
            <span className="block text-amber-600">Clients Say</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-amber-600 mx-auto rounded-full mb-4 sm:mb-8" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about our work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 md:p-8 relative transition-shadow duration-300 hover:shadow-xl border border-gray-200"
            >
              {/* Quote Icon */}
              <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 sm:-translate-x-4 sm:-translate-y-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
              </div>

              {/* Rating */}
              <div className="flex mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500"
                    fill="#fe9a00"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed font-medium text-sm sm:text-base">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <Avatar className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-gray-100">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name}</AvatarFallback>
                </Avatar>
                <div className="ml-3 sm:ml-4">
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
