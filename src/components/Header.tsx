"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();

  const sections = [
    { name: "home", url: "/" },
    { name: "about", url: "/#about" },
    { name: "collections", url: "/collections" },
    { name: "contact us", url: "/#contact" },
  ];

  useEffect(() => {
    if (typeof window !== undefined && menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // Track scroll position to toggle fixed header
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Intersection Observer to track sections in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section.name);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="header"
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed bg-marbleWhite/90 dark:bg-charcoalBlack/90 shadow-md backdrop-blur-md"
          : "absolute bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            unoptimized={true}
            className="rounded-full aspect-square w-[42px]"
            src="/logo.png"
            alt="Makrana Premium"
            width={150}
            height={50}
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.url}
              className={`dark:hover:text-champagneGold hover:text-champagneGold transition font-medium 
                ${!isScrolled && pathname == "/" ? "text-white" : ""}
                ${
                  activeSection === section.url && pathname === "/"
                    ? "nav-link-selected font-semibold"
                    : "nav-link"
                }`}
            >
              {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Actions (Dark Mode + Mobile Menu) */}
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-black"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* menuOpen */}
      <nav
        className={`md:hidden ${
          menuOpen ? "h-screen" : "overflow-hidden h-0"
        } transition-all absolute w-full top-16 left-0 shadow-md bg-white`}
      >
        {sections.map((section) => (
          <Link
            key={section.name}
            href={section.url}
            className="block px-6 py-3 transition"
            onClick={() => setMenuOpen(false)}
          >
            {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
