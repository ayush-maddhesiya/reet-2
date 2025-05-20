"use client"

import { useState, useEffect, type RefObject } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavbarProps {
  electricalRef: RefObject<HTMLDivElement>
  governmentRef: RefObject<HTMLDivElement>
  panelRef: RefObject<HTMLDivElement>
  clientsRef: RefObject<HTMLDivElement>
  aboutRef: RefObject<HTMLDivElement>
}

export default function Navbar({ electricalRef, governmentRef, panelRef, clientsRef, aboutRef }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
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
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">Reet Associates</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection(electricalRef)}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Electrical
          </button>
          <button
            onClick={() => scrollToSection(governmentRef)}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Government Projects
          </button>
          <button
            onClick={() => scrollToSection(panelRef)}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Panel Manufacturing
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
          <Button className="bg-gray-900 hover:bg-gray-800">Contact Us</Button>
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
                Electrical
              </button>
              <button
                onClick={() => scrollToSection(governmentRef)}
                className="text-left text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Government Projects
              </button>
              <button
                onClick={() => scrollToSection(panelRef)}
                className="text-left text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Panel Manufacturing
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
              <Button className="w-full bg-gray-900 hover:bg-gray-800">Contact Us</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
