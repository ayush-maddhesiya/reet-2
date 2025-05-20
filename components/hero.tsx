import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white z-0"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Powering Your <span className="text-gray-800">Electrical</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Reet Associates provides comprehensive electrical services, panel manufacturing, and government project
              solutions with excellence and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-gray-300">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://imgs.search.brave.com/Vfi-S7dkSF6TJdPPMNuyChhsyallmuPhHiefK1UrBzk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjL2Zk/L2U4LzNjZmRlODIy/MjRjOWViOTI1N2Ji/NDkzNGVjYjA3N2M0/LmpwZw"
              alt="Reet Associates Electrical Solutions"
              className="object-cover w-full h-full"
            />
          </div>

        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">5+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">43+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">22+</h3>
            <p className="text-gray-600 mt-2">Contracts</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
