import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { Award, Users, Gem, Heart, Star, ArrowRight, Phone, Calendar, MapPin, Trophy } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

export default function AboutPage() {
  const milestones = [
    {
      year: "2000",
      title: "Foundation",
      description: "Started as a small family business with a passion for marble craftsmanship",
    },
    {
      year: "2005",
      title: "First Major Project",
      description: "Completed our first luxury hotel marble installation",
    },
    {
      year: "2010",
      title: "Expansion",
      description: "Expanded operations and established our premium showroom",
    },
    {
      year: "2015",
      title: "Recognition",
      description: "Received industry recognition for excellence in marble craftsmanship",
    },
    {
      year: "2020",
      title: "Digital Presence",
      description: "Launched online presence to serve customers globally",
    },
    {
      year: "2025",
      title: "25 Years Strong",
      description: "Celebrating 25 years of excellence with 1000+ satisfied customers",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We never compromise on quality and always strive for perfection in every piece we create.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for marble craftsmanship drives us to create beautiful, timeless pieces.",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships with our clients through transparency and reliability.",
    },
    {
      icon: Gem,
      title: "Innovation",
      description: "Blending traditional techniques with modern technology for superior results.",
    },
  ]

  const team = [
    {
      name: "Abdul Riyaz",
      role: "Founder & Master Craftsman",
      experience: "25+ Years",
      image: "/placeholder.svg?height=300&width=300",
      description: "Visionary leader with deep expertise in traditional marble craftsmanship",
    },
    {
      name: "Mohammed Ali",
      role: "Design Specialist",
      experience: "15+ Years",
      image: "/placeholder.svg?height=300&width=300",
      description: "Creative designer specializing in custom marble installations",
    },
    {
      name: "Rajesh Kumar",
      role: "Quality Manager",
      experience: "12+ Years",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ensures every piece meets our highest quality standards",
    },
  ]

  const achievements = [
    {
      icon: Trophy,
      number: "1000+",
      label: "Projects Completed",
      description: "Successfully delivered projects across residential and commercial sectors",
    },
    {
      icon: Star,
      number: "25+",
      label: "Years Experience",
      description: "Quarter-century of expertise in marble craftsmanship",
    },
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers who trust our quality and service",
    },
    {
      icon: Award,
      number: "100%",
      label: "Quality Guarantee",
      description: "Every piece backed by our commitment to excellence",
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-amber-300" />
                <span className="text-sm font-medium text-amber-200">Our Story</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Crafting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                  Excellence
                </span>
                <span className="block text-3xl lg:text-4xl font-normal text-gray-300 mt-2">Since 2000</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                For over 25 years, Makrana Premium has been at the forefront of marble craftsmanship, transforming
                spaces with the timeless beauty of premium Makrana marble.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-gray-300 text-sm">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-gray-300 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-gray-300 text-sm">Clients</div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/about.jpg"
                  alt="Makrana Premium Craftsmen at Work"
                  width={600}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-amber-600 rounded-full p-4 shadow-xl">
                <Award className="w-8 h-8 text-white" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-amber-600" />
                  <div>
                    <div className="font-bold text-gray-900">25+ Years</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Journey of
                <span className="block text-amber-600">Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-amber-600 rounded-full mb-8"></div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Founded in 2000 by <strong className="text-gray-900">Abdul Riyaz</strong>, Makrana Premium began as a
                  small family business with a simple vision: to share the extraordinary beauty of Makrana marble with
                  the world while preserving traditional craftsmanship techniques.
                </p>

                <p className="text-lg">
                  What started in a modest workshop has grown into one of Rajasthan&apos;s most trusted marble specialists,
                  serving clients across India and beyond. Our commitment to quality, authenticity, and customer
                  satisfaction has remained unchanged throughout our journey.
                </p>

                <p className="text-lg">
                  Today, we combine <strong className="text-gray-900">time-honored techniques</strong> with modern
                  precision to create marble masterpieces that stand the test of time. Every piece tells a story of
                  dedication, skill, and the natural beauty of Makrana&apos;s finest marble.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">2000</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">3rd Gen</div>
                  <div className="text-sm text-gray-600">Family Business</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Makrana Premium Workshop"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />

              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-gray-900">Makrana, Rajasthan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Through Time</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our journey from a small family business to a leading marble craftsman
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                    <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge className="bg-amber-600 hover:bg-amber-700 mb-3">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as craftsmen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The skilled craftsmen and professionals behind every masterpiece
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 hover:bg-amber-700">{member.experience}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-amber-300 mb-3">{achievement.label}</div>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experienced team bring your vision to life with premium Makrana marble craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/collections">
              <Button
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
