"use client"

import { useState, useEffect, type RefObject } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavbarProps {
  electricalRef: RefObject<HTMLDivElement>
  lightingRef: RefObject<HTMLDivElement>
  panelRef: RefObject<HTMLDivElement>
  clientsRef: RefObject<HTMLDivElement>
  aboutRef: RefObject<HTMLDivElement>
  contactRef: RefObject<HTMLDivElement> // contact section
}

export default function Navbar({
  electricalRef,
  lightingRef,
  panelRef,
  clientsRef,
  aboutRef,
  contactRef,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo image: replace path with your desired format (e.g., PNG/WebP/GIF) */}
          <img src="/assets/logo.webp" alt="Reet Associates" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection(electricalRef)}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Electrical Solution
          </button>
          <button
            onClick={() => scrollToSection(lightingRef)}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Lighting Manufacturers
          </button>
          <button
            onClick={() => scrollToSection(panelRef)}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Panel Manufacturers
          </button>
          <button
            onClick={() => scrollToSection(clientsRef)}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Our Clients
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            About Us
          </button>
          <Button
            onClick={() => scrollToSection(contactRef)}
            className="bg-gray-300 hover:bg-white"
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <nav className="flex flex-col space-y-6 mt-10">
              <button
                onClick={() => scrollToSection(electricalRef)}
                className="text-left text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Electrical Solution
              </button>
              <button
                onClick={() => scrollToSection(lightingRef)}
                className="text-left text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Lighting Manufacturers
              </button>
              <button
                onClick={() => scrollToSection(panelRef)}
                className="text-left text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Panel Manufacturers
              </button>
              <button
                onClick={() => scrollToSection(clientsRef)}
                className="text-left text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Our Clients
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-left text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="w-full bg-gray-900 text-white hover:bg-gray-800"
              >
                Contact Us
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
