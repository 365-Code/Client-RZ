"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const pathname = usePathname()

  const sections = [
    { name: "home", url: "/" },
    { name: "about", url: "/#about" },
    {
      name: "collections",
      url: "/collections",
      hasDropdown: true,
      dropdownItems: [
        { name: "Tables", url: "/collections/686f761a56f7bb04e1547a7a" },
        { name: "Marble Slabs", url: "/collections/67e3d9c93b533a116b99d6f8" },
        { name: "inlay & tables", url: "/collections/686d09a90c8d4186bd551091" },
        { name: "basin", url: "/collections/67e3d5743b533a116b99d6ad" },
      ],
    },
    { name: "contact us", url: "/contact" },
  ]

  useEffect(() => {
    if (typeof window !== "undefined" && menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])

  // Track scroll position
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Intersection Observer for active sections
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50px 0px -50px 0px",
      threshold: 0.3,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => {
      const element = document.getElementById(section.name)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const isHomePage = pathname === "/"

  return (
    <>
      {/* Top Bar */}
      {/* <div className="hidden lg:block bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+917976973338" className="hover:text-yellow-400 transition-colors">
                +91 79769 73338
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:abdulriyaz1009@gmail.com" className="hover:text-yellow-400 transition-colors">
                abdulriyaz1009@gmail.com
              </a>
            </div>
          </div>
          <div className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM</div>
        </div>
      </div> */}

      {/* Main Header */}
      <header
        className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "fixed bg-white/95 backdrop-blur-md shadow-lg"
            : isHomePage
              ? "absolute bg-transparent"
              : "absolute bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                unoptimized={true}
                className="rounded-full aspect-square w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                src="/logo.png"
                alt="Makrana Premium"
                width={48}
                height={48}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold ${isScrolled || !isHomePage ? "text-gray-900" : "text-white"}`}>
                Makrana Premium
              </h1>
              <p className={`text-xs ${isScrolled || !isHomePage ? "text-gray-600" : "text-gray-300"}`}>
                Premium Marble Collection
              </p>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {sections.map((section) => (
              <div key={section.name} className="relative group">
                <Link
                  href={section.url}
                  className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === section.name && isHomePage
                      ? "bg-yellow-400/20 text-yellow-400"
                      : isScrolled || !isHomePage
                        ? "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                        : "text-white hover:text-yellow-400 hover:bg-white/10"
                  }`}
                  onMouseEnter={() => section.hasDropdown && setCollectionsOpen(true)}
                  onMouseLeave={() => section.hasDropdown && setCollectionsOpen(false)}
                >
                  <span>{section.name.charAt(0).toUpperCase() + section.name.slice(1)}</span>
                  {section.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${collectionsOpen ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {section.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-300 ${
                      collectionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setCollectionsOpen(true)}
                    onMouseLeave={() => setCollectionsOpen(false)}
                  >
                    {section.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.url}
                        className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="sm:hidden flex items-center space-x-4">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled || !isHomePage ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`lg:hidden transition-all duration-300 bg-white border-t border-gray-200 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            {sections.map((section) => (
              <div key={section.name}>
                <Link
                  href={section.url}
                  className="block py-3 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                </Link>
                {section.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {section.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.url}
                        className="block py-2 px-4 text-gray-600 hover:text-yellow-600 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
