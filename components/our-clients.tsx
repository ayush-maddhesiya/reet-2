"use client"

import { useRef } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

export default function OurClients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const clients = [
    { name: "Systango Technologies Limited", logo: "/upload/Systango-Technologies-Limited.png" },
    { name: "American Chase", logo: "/upload/amrican-chase.png" },
    { name: "Avizva", logo: "/upload/avaizva.png" },
    { name: "Softude", logo: "/upload/softude.png" },
    { name: "Webvillee", logo: "/upload/webvillee.png" },
    { name: "Yash Technologies", logo: "/upload/yash-technologies.png" },
    { name: "Abbott", logo: "/upload/Abbott.png" },
    { name: "ACG", logo: "/upload/acg.png" },
    { name: "Biourja Group", logo: "/upload/biourja.png" },
    { name: "Bridgestone", logo: "/upload/bridgestone.png" },
    { name: "Johnson", logo: "/upload/johnson.png" },
    { name: "L & T", logo: "/upload/l&t.png" },
    { name: "Bank of Baroda", logo: "/upload/bank-of-baroda.png" },
    { name: "Bank of Maharashtra", logo: "/upload/bank-of-maharashtra.png" },
    { name: "UCO Bank", logo: "/upload/uco-bank.png" },
    { name: "IIT Indore", logo: "/upload/iit-indore.png" },
    { name: "Drishti IAS", logo: "/upload/drishti-ias.png" },
    { name: "LNCT Group", logo: "/upload/lnct-group.png" },
    { name: "Incuspaze Office Spaces", logo: "/upload/incuspaze-office-spaces.png" },
    { name: "Karyasthal Coworking Space", logo: "/upload/karyasthal-coworking-space.png" },
    { name: "Aavantika Gas Ltd", logo: "/upload/aavantika-gas-ltd.png" },
    { name: "Airport Authority Of India", logo: "/upload/airport-authority-of-india.png" },
    { name: "Balaji Wafers", logo: "/upload/balaji-wafers.png" },
    { name: "Iskcon", logo: "/upload/Iskcon.png" },
    { name: "Kalyan Group", logo: "/upload/kalyan-group.png" },
    { name: "Woven Gold", logo: "/upload/woven-gold.png" },
    { name: "Reliance Group", logo: "/upload/reliance-group.png" },
    { name: "Sahil Group", logo: "/upload/sahil-group.png" },
    { name: "Sky Group", logo: "/upload/sky-group.png" },
    { name: "Sony", logo: "/upload/sony.png" },
    { name: "KFC", logo: "/upload/kfc.png" },
    { name: "Pizza Hut", logo: "/upload/pizza-hut.png" },
    { name: "Burger King", logo: "/upload/burger-king.png" },
    { name: "Sayaji", logo: "/upload/sayaji.png" },
    { name: "Thyme & Whisk", logo: "/upload/thyme-whisk.png" },
    { name: "Mr DIY", logo: "/upload/mr-diy.png" },
    { name: "Mama's Boi", logo: "/upload/mamas-boi.png" },
    { name: "Dopamine Club", logo: "/upload/dopamine.png" },
    { name: "Anandam Club & Resort", logo: "/upload/anandam-club&resort.png" },
    { name: "Chai Kaapi", logo: "/upload/chai-kaapi.png" },
    { name: "Chick n Serve", logo: "/upload/chick-n-serve.png" },
    { name: "Westend Mall", logo: "/upload/westend-mall.png" },
   
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
