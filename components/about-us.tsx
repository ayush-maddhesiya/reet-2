"use client"

import { useRef } from "react"
import { Mail, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const team = [
    {
      name: "Rahul Aakhand",
      position: "Managing Director",
      contact: "+91 81097 89795",
      image: "/akhand.jpg?height=300&width=300",
      emailid: "rahulaakhand@gmail.com",
    },
    {
      name: "Shakti Maddhesiya",
      position: "Technical Director",
      contact: "+91 79995 50626",
      image: "/shakti.jpg",
      emailid: "er.shakti.madheshiya@gmail.com",
    },
    {
      name: "Rohan Raguvanshi",
      position: "Operations Manager",
      contact: "+91 83195 43348",
      image: "/rohan.jpg?height=300&width=300",
      emailid: "rohandltc@gmail.com",
    },
    {
      name: "Rahul Choudhary",
      position: "Business Development Manager",
      contact: "+91 70000 50979",
      image: "/babba.jpg?height=300&width=300",
      emailid: "rahul39tx@gmail.com",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
          <p className="text-lg text-gray-600">
            Reet Associates is a leading provider of electrical services, panel manufacturing, and government project
            solutions with a commitment to excellence and innovation.
          </p>
        </div>

        <div
          className={`p-8 bg-white rounded-lg shadow-sm mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="text-gray-600">
                Founded in 2005, Reet Associates has grown from a small electrical services provider to a comprehensive
                solutions company serving clients across various sectors. With a focus on quality, innovation, and
                customer satisfaction, we have established ourselves as a trusted name in the industry.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals brings together expertise in electrical engineering, panel
                manufacturing, and project management to deliver solutions that exceed client expectations. We pride
                ourselves on our commitment to safety, quality, and timely delivery.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Mission</h4>
                  <p className="text-gray-600">
                    To provide innovative and reliable electrical solutions that empower our clients and contribute to a
                    sustainable future.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Vision</h4>
                  <p className="text-gray-600">
                    To be the leading provider of electrical solutions, recognized for excellence, innovation, and
                    customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://imgs.search.brave.com/F7ffmzcQScNzKOSxEqMPjSVrwGZKfXJWlWoysAf1eCA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MTQvYjYvYWEvZTQv/aW4tbi1vdXQtYnVy/Z2VyLmpwZw"
                alt="Reet Associates Team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <h3
          className={`text-2xl font-bold text-gray-900 text-center mb-8 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Meet Our Leadership Team
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-700 delay-${index * 100} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } hover:shadow-lg border-gray-200`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600 font-medium">{member.position}</p>
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{member.contact}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{member.emailid}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
