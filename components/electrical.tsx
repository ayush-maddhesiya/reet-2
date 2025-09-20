"use client"

import { useRef } from "react"
import { Lightbulb, Wrench, Factory, PhoneCall } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

export default function Electrical() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const services = [
    {
      title: "Electrical Consultant & Service Provider",
      description:
        "Expert electrical solutions for industrial, commercial, and residential projects—built on safety, efficiency, and reliability.",
       icon:<Wrench className="h-10 w-10 text-gray-800" />,
    },
    {
      title: "Lighting Manufacturers & Suppliers",
      description: "Manufacturers & suppliers of advanced lighting solutions for commercial, industrial, and residential projects.",
      icon: <Lightbulb className="h-10 w-10 text-gray-800" />,
    },
    {
      title: "Electrical Panel Manufacturers",
      description:
        "Leading Electrical Panel Manufacturers with Expert Technical Support and Reliable Solutions.",
      icon: <Factory className="h-10 w-10 text-gray-800" />,
    },
    {
      title: "Maintenance and Support",
      description:
        "24/7 service and proactive care to keep your electrical systems efficient and trouble-free.",
      icon: <PhoneCall className="h-10 w-10 text-gray-800" />,
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div
          className={`space-y-4 text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Electrical Services</h2>
          <p className="text-lg text-gray-600">
            Our comprehensive electrical services are designed to meet the diverse needs of our clients.
            We create lighting layouts, manage installations and wiring systems, and provide hassle-free ongoing maintenance.
            In addition, we offer efficient lighting solutions and manufacture high-quality electrical panels to ensure seamless performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } hover:shadow-lg border-gray-200`}
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-16 p-8 bg-white rounded-lg shadow-md transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Electrical Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Certified Professionals</h4>
              <p className="text-gray-600">
                Our team consists of certified electrical professionals with years of experience.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Quality Materials</h4>
              <p className="text-gray-600">We use only high-quality materials that meet industry standards.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Timely Delivery</h4>
              <p className="text-gray-600">We commit to completing projects on time without compromising quality.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Cost-Effective Solutions</h4>
              <p className="text-gray-600">
                Our solutions are designed to be cost-effective without sacrificing quality.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">24/7 Support</h4>
              <p className="text-gray-600">We provide round-the-clock support for emergencies and maintenance.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Customized Approach</h4>
              <p className="text-gray-600">We tailor our services to meet the specific needs of each client.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
