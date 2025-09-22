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

export default function Lightingmanufacturers() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const lighting = [
    {
      name: "Indoor Lighting",
      description: "Energy-efficient indoor lighting solutions designed for offices, homes, and commercial spaces.",
      image:
        "https://imgs.search.brave.com/BSDRz9iKR2IikWs-ClHJp6DG9A__mMkUlitp5uOazKQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzA0LzA0LzUy/LzM2MF9GXzExMDQw/NDUyOTJfRk9WcEZX/bHM4SDFJOWhETW9S/dHJ3cmV4alNqR2xQ/TnYuanBn",
    },
    {
      name: "Outdoor Lighting",
      description: "Durable outdoor lighting systems built for reliability and performance in all weather conditions.",
      image:
        "https://imgs.search.brave.com/EoNtgkaCo0u4gIs22lOKdU7jNonRFGo83Lc_kOZZo8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZHluYW1pY3JlcC5j/b20vaHMtZnMvaHVi/ZnMvRWxlY3RyaWNh/bCUyMFBvd2VyJTIw/UGFuZWxfUERVLTEu/anBlZz93aWR0aD00/NDkmaGVpZ2h0PTMw/MCZuYW1lPUVsZWN0/cmljYWwlMjBQb3dl/ciUyMFBhbmVsX1BE/VS0xLmpwZWc",
    },
    {
      name: "Pole Lighting",
      description: "High-performance pole lighting solutions ideal for streets, highways, and industrial areas.",
      image:
        "https://imgs.search.brave.com/qQUAy0Bn6OT2t8ZYGFc2vVVK3z6_ehk7VgLnwytXDQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmV4ZXJ0aGVybS5j/b20vaHMtZnMvaHVi/ZnMvRXhlcnRoZXJt/JTIwMjAyMy9JbWFn/ZS9zaHV0dGVyc3Rv/Y2tfMTU3OTkxMDk4/OS5qcGc_d2lkdGg9/MjAwMCZuYW1lPXNo/dXR0ZXJzdG9ja18x/NTc5OTEwOTg5Lmpw/Zw?height=300&width=400",
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
            Lighting Manufacturers
          </h2>
          <p className="text-lg text-gray-600">
            Reet Associates specializes in advanced lighting manufacturing,
            delivering innovative and high-quality solutions tailored to your
            specific needs.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`space-y-6 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Excellence in Lighting Manufacturing
            </h3>
            <p className="text-gray-600">
              Our state-of-the-art facility is equipped with modern technology
              and staffed by skilled professionals. We design and manufacture
              lighting solutions that meet the highest standards of efficiency,
              safety, and durability.
            </p>
            <ul className="space-y-3">
              {[
                "ISO-certified production processes",
                "Rigorous quality control and testing",
                "Compliance with international standards",
                "Custom design and engineering support",
                "On-time delivery and installation assistance",
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
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <img
              src="https://imgs.search.brave.com/1i0V5Fcw8T200qa2qp04svBYw1ixb5FCS0J5KUBCq1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pZXZw/b3dlci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDQv/VG9wLUVsZWN0cmlj/YWwtQ29udHJvbC1Q/YW5lbC1NYW51ZmFj/dHVyZXJzLmpwZw"
              alt="Lighting manufacturing facility"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Lighting Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lighting.map((item, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${delays[index % delays.length]} hover:shadow-lg border-gray-200`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.name} product`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {item.description}
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
