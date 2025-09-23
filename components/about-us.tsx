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
      designation: "Electrical Consultant and Contractor",
      contact: "+91 81097 89795",
      image: "/akhand.jpg",
      email: "rahulaakhand@gmail.com",
    },
    {
      name: "Shakti Maddhesiya",
      position: "Managing Director",
      designation: "Lighting Manufacturers",
      contact: "+91 79995 50626",
      image: "/shakti.jpg",
      email: "er.shakti.madheshiya@gmail.com",
    },
    {
      name: "Rohan Raguvanshi",
      position: "Managing Director",
      designation: "Electrical Panel Manufacturers",
      contact: "+91 83195 43348",
      image: "/rohan.jpg",
      email: "rohandltc@gmail.com",
    },
    {
      name: "Rahul Choudhary",
      position: "Managing Director",
      designation: "Maintenance and Support",
      contact: "+91 70000 50979",
      image: "/babba.jpg",
      email: "rahul39tx@gmail.com",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div
          className={`space-y-4 text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Reet Associates</h2>
          <p className="text-lg text-gray-600">
            Reet Associates is a leading provider of electrical solutions, panel manufacturing, and government project services, committed to excellence, innovation, and client satisfaction.
          </p>
        </div>

        {/* Our Story */}
        <div
          className={`p-8 bg-white rounded-lg shadow-lg mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="text-gray-600">
                Established in 2021, Reet Associates has evolved from a small electrical services provider to a full-service solutions company catering to a wide range of industries. Our focus on quality, innovation, and timely delivery has earned the trust of our clients nationwide.
              </p>
              <p className="text-gray-600">
                Our multidisciplinary team combines expertise in electrical engineering, panel manufacturing, and project management to deliver high-impact solutions. Safety, precision, and customer satisfaction are at the core of everything we do.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Mission</h4>
                  <p className="text-gray-600">
                    To provide innovative and reliable electrical solutions that empower clients and contribute to sustainable development.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Vision</h4>
                  <p className="text-gray-600">
                    To be recognized as a leading provider of electrical solutions known for excellence, innovation, and client satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/team-group.jpg"
                alt="Reet Associates Team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <h3
          className={`text-2xl font-bold text-gray-900 text-center mb-12 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Meet Our Leadership Team
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-700 delay-${index * 100} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } hover:shadow-2xl border-gray-200`}
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
                <p className="text-gray-600 font-medium">{member.designation}</p>
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href={`tel:${member.contact}`} className="hover:text-gray-900">{member.contact}</a>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href={`mailto:${member.email}`} className="hover:text-gray-900">{member.email}</a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
