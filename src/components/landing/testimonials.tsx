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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="block text-amber-600">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 relative transition-shadow duration-300 hover:shadow-xl border border-gray-200"
            >
              {/* Quote Icon */}
              <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                <Quote className="w-8 h-8 text-gray-500" />
              </div>

              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500"
                    fill="#fe9a00"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author Information */}
              <div className="flex items-center">
                <Avatar className="w-14 h-14 rounded-full border-2 border-gray-100">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
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
