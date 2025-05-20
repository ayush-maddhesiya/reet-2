"use client"

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export default function GovernmentProjects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const projects = [
    {
      name: "Municipal Street Lighting Project",
      description:
        "Complete overhaul of street lighting systems across 5 districts, implementing energy-efficient LED technology.",
      type: "Public Infrastructure",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Government Hospital Electrical Systems",
      description:
        "Installation of backup power systems and electrical infrastructure for a 500-bed government hospital.",
      type: "Healthcare",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Smart Traffic Signal Network",
      description: "Design and implementation of smart traffic signal systems with remote monitoring capabilities.",
      type: "Smart City",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Military Base Power Distribution",
      description: "Secure power distribution network for military installations with redundant systems.",
      type: "Defense",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Public School Modernization",
      description:
        "Electrical system upgrades for 15 public schools, including smart classroom technology integration.",
      type: "Education",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Government Office Complex",
      description:
        "Complete electrical solutions for a new government administrative complex, including energy management systems.",
      type: "Administrative",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container">
        <div
          className={`space-y-4 text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Government Projects</h2>
          <p className="text-lg text-gray-600">
            Reet Associates has a proven track record of successfully executing government projects across various
            sectors, from public infrastructure to defense installations.
          </p>
        </div>

        <div
          className={`p-8 bg-gray-50 rounded-lg shadow-sm mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Government Services</h3>
          <p className="text-gray-600 mb-6">
            Reet Associates offers comprehensive electrical solutions for government bodies at all levels. From
            streetlights to critical infrastructure, we deliver reliable, efficient, and secure electrical systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Public Infrastructure</h4>
              <p className="text-gray-600">Street lighting, traffic signals, and public space electrical systems.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Administrative Buildings</h4>
              <p className="text-gray-600">
                Complete electrical solutions for government offices and administrative complexes.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Defense Installations</h4>
              <p className="text-gray-600">
                Secure and reliable electrical systems for military and defense facilities.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Healthcare Facilities</h4>
              <p className="text-gray-600">Critical power systems for government hospitals and healthcare centers.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Educational Institutions</h4>
              <p className="text-gray-600">Modern electrical infrastructure for public schools and universities.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Smart City Initiatives</h4>
              <p className="text-gray-600">
                Innovative electrical solutions for smart city projects and urban development.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-700 delay-${index * 100} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } hover:shadow-lg border-gray-200`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-2">
                  {project.type}
                </div>
                <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-gray-800 hover:text-gray-600 hover:bg-transparent">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-gray-900 hover:bg-gray-800">View All Government Projects</Button>
        </div>
      </div>
    </section>
  )
}
