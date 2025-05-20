"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useInView } from "@/hooks/use-in-view"

export default function OurClients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const clients = {
    electrical: [
      {
        name: "Metro City Hospital",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Complete electrical infrastructure and backup power systems.",
      },
      {
        name: "Skyline Office Towers",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Lighting and power distribution for a 30-story office complex.",
      },
      {
        name: "Grand Hotel Chain",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Energy-efficient lighting and electrical systems for 12 hotels.",
      },
      {
        name: "Retail Plaza",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Comprehensive electrical solutions for a shopping complex.",
      },
    ],
    panel: [
      {
        name: "Industrial Manufacturing Co.",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Custom control panels for automated production lines.",
      },
      {
        name: "Chemical Processing Plant",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Specialized electrical panels for hazardous environments.",
      },
      {
        name: "Automotive Assembly",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Motor control centers and distribution panels.",
      },
      {
        name: "Food Processing Facility",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Hygienic electrical panels meeting industry standards.",
      },
    ],
    government: [
      {
        name: "Municipal Corporation",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Street lighting and traffic signal infrastructure.",
      },
      {
        name: "State Power Department",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Substation control panels and distribution systems.",
      },
      {
        name: "Defense Research Lab",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Specialized electrical systems for research facilities.",
      },
      {
        name: "Public Transportation Authority",
        logo: "/placeholder.svg?height=100&width=200",
        description: "Electrical infrastructure for transit stations.",
      },
    ],
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container">
        <div
          className={`space-y-4 text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Clients</h2>
          <p className="text-lg text-gray-600">
            We're proud to have partnered with leading organizations across various sectors, delivering exceptional
            electrical solutions tailored to their unique needs.
          </p>
        </div>

        <Tabs
          defaultValue="electrical"
          className={`transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="electrical" className="text-sm md:text-base">
                Electrical Services
              </TabsTrigger>
              <TabsTrigger value="panel" className="text-sm md:text-base">
                Panel Manufacturing
              </TabsTrigger>
              {/* <TabsTrigger value="government" className="text-sm md:text-base">
                Government Projects
              </TabsTrigger> */}
            </TabsList>
          </div>

          <TabsContent value="electrical" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clients.electrical.map((client, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-gray-200">
                  <CardHeader className="flex items-center justify-center pb-2">
                    <div className="h-16 flex items-center justify-center">
                      <img src={client.logo || "/placeholder.svg"} alt={client.name} className="max-h-full" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="text-lg mb-2">{client.name}</CardTitle>
                    <p className="text-sm text-gray-600">{client.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="panel" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clients.panel.map((client, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-gray-200">
                  <CardHeader className="flex items-center justify-center pb-2">
                    <div className="h-16 flex items-center justify-center">
                      <img src={client.logo || "/placeholder.svg"} alt={client.name} className="max-h-full" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="text-lg mb-2">{client.name}</CardTitle>
                    <p className="text-sm text-gray-600">{client.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="government" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clients.government.map((client, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-gray-200">
                  <CardHeader className="flex items-center justify-center pb-2">
                    <div className="h-16 flex items-center justify-center">
                      <img src={client.logo || "/placeholder.svg"} alt={client.name} className="max-h-full" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="text-lg mb-2">{client.name}</CardTitle>
                    <p className="text-sm text-gray-600">{client.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div
          className={`mt-16 p-8 bg-gray-50 rounded-lg shadow-sm text-center transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growing List of Satisfied Clients</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Whether you need electrical services, custom panel manufacturing, or solutions for government projects, Reet
            Associates is your trusted partner for quality, reliability, and excellence.
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
