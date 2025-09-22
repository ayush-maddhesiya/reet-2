"use client"

import { useRef } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

export default function OurClients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

    const clients = [
    { name: "Systango Technologies Limited", logo: "/upload/Systango-Technologies-Limited.png" },
    { name: "Skyline Office Towers", logo: "/upload/skyline-office-towers.png" },
    { name: "Grand Hotel Chain", logo: "/upload/grand-hotel-chain.png" },
    { name: "Retail Plaza", logo: "/upload/retail-plaza.png" },
    { name: "Industrial Manufacturing Co.", logo: "/upload/industrial-manufacturing.png" },
    { name: "Chemical Processing Plant", logo: "/upload/chemical-plant.png" },
    { name: "Automotive Assembly", logo: "/upload/automotive-assembly.png" },
    { name: "Food Processing Facility", logo: "/upload/food-processing.png" },
    { name: "Municipal Corporation", logo: "/upload/municipal-corporation.png" },
    { name: "State Power Department", logo: "/upload/state-power.png" },
    { name: "Defense Research Lab", logo: "/upload/defense-lab.png" },
    { name: "Public Transportation Authority", logo: "/upload/public-transport.png" },
   ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Heading */}
        <div
          className={`space-y-4 text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Clients</h2>
          <p className="text-lg text-gray-600">
            We're proud to have partnered with leading organizations across various sectors.
          </p>
        </div>

        {/* Clients Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {clients.map((client, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow border-gray-200"
            >
              <CardHeader className="flex flex-col items-center justify-center p-0">
                <div className="h-16 w-32 flex items-center justify-center">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardTitle className="text-center text-sm mt-2">{client.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Highlight Section */}
        <div
          className={`mt-16 p-8 bg-gray-50 rounded-lg shadow-sm text-center transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Whether you need electrical services, custom panel manufacturing, or solutions for government projects, 
            Reet Associates is your trusted partner for quality, reliability, and excellence.
          </p>
          <div className="inline-flex items-center justify-center space-x-2 text-gray-500">
            <span className="text-4xl font-bold text-gray-900">200+</span>
            <span className="text-lg">Satisfied Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
