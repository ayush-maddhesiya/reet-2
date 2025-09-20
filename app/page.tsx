"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Electrical from "@/components/electrical"
import GovernmentProjects from "@/components/government-projects"
import lightingmanufacturers from "@/components/lighting-manufacturers"
import PanelManufacturing from "@/components/panel-manufacturing"
import OurClients from "@/components/our-clients"
import AboutUs from "@/components/about-us"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Refs for each section for navigation
  const electricalRef = useRef<HTMLDivElement>(null)
  const governmentRef = useRef<HTMLDivElement>(null)
  const lightingRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar
        electricalRef={electricalRef}
        // governmentRef={governmentRef}
        lightingRef={lightingRef}
        panelRef={panelRef}
        clientsRef={clientsRef}
        aboutRef={aboutRef}
      />

      <Hero />

      <div ref={electricalRef} id="electrical">
        <Electrical />
      </div>

      <div ref={lightingRef} id="lighting">
        <Electrical />
      </div>
      
      {/* <div ref={governmentRef} id="government">
        <GovernmentProjects />
      </div> */}

      <div ref={panelRef} id="panel">
        <PanelManufacturing />
      </div>

      <div ref={clientsRef} id="clients">
        <OurClients />
      </div>

      <div ref={aboutRef} id="about">
        <AboutUs />
      </div>

      <Footer />

      {showScrollTop && (
        <Button
          className="fixed bottom-6 right-6 rounded-full p-3 shadow-lg"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </main>
  )
}
