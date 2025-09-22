"use client"

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

export default function Panelmanufacturers() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const panels = [
    {
      name: "Industrial Control Panels",
      description:
        "Custom-designed control panels like PCC Panel, SS Panel, MCC Panel, APFCR Panel and PLC Panel.",
      image: "/upload/industrial-panel.jpg",
      alt: "Industrial Control Panel",
    },
    {
      name: "Power Distribution Panels",
      description:
        "Reliable power distribution panels for commercial and industrial facilities like Meter Panel, D.G. Synchronization Panel and AMF Panel.",
      image: "/upload/power-panel.jpg",
      alt: "Power Distribution Panel",
    },
    {
      name: "Motor Control Panels",
      description:
        "Centralized control and distribution of power for motors like VFD Panel, Soft Starter Panel and Pump Starter Panel.",
      image: "/upload/motor-panel.jpg",
      alt: "Motor Control Panel",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Section Heading */}
        <div
          className={`space-y-4 text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Panel Manufacturers
          </h2>
          <p className="text-lg text-gray-600">
            Reet Associates specializes in custom electrical panel
            manufacturing, delivering high-quality solutions tailored to your
            specific requirements.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`space-y-6 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Custom Panel Manufacturing Excellence
            </h3>
            <p className="text-gray-600">
              Our state-of-the-art panel manufacturing facility is equipped with
              the latest technology and staffed by experienced professionals. We
              design and build custom electrical panels that meet the highest
              standards of quality, safety, and reliability.
            </p>
            <ul className="space-y-3">
              {[
                "ISO-certified manufacturing processes",
                "Rigorous quality control and testing",
                "Compliance with international standards",
                "Custom design and engineering services",
                "On-time delivery and installation support",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Image
              src="/upload/facility-panel.jpg"
              alt="Panel Manufacturing Facility"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-700 delay-${
                index * 100
              } ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:shadow-lg border-gray-200`}
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{panel.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {panel.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-gray-800 hover:text-gray-600 hover:bg-transparent"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

       
