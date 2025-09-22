"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const openGoogleMaps = () => {
    const address = encodeURIComponent(
      "217, Second Floor, Arbitto Mall, PU4, Near C-21 Mall, Scheme No 54, Indore, Madhya Pradesh 452010"
    )
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank")
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Left: Company Info */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-bold">Reet Associates</h3>
            <p className="text-gray-300">
              Providing comprehensive electrical solutions with excellence and reliability since 2021.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                {/* Facebook Icon */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                {/* Instagram Icon */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608C4.52 2.5 5.787 2.225 7.153 2.163 8.418 2.105 8.798 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 5.78.127 4.663.35 3.735 1.278c-.928.928-1.15 2.045-1.208 3.317C2.012 5.668 2 6.071 2 9.337v5.326c0 3.266.012 3.669.07 4.949.058 1.272.28 2.389 1.208 3.317.928.928 2.045 1.15 3.317 1.208 1.28.058 1.683.07 4.949.07s3.669-.012 4.949-.07c1.272-.058 2.389-.28 3.317-1.208.928-.928 1.15-2.045 1.208-3.317.058-1.28.07-1.683.07-4.949s-.012-3.669-.07-4.949c-.058-1.272-.28-2.389-1.208-3.317-.928-.928-2.045-1.15-3.317-1.208C15.669.012 15.266 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a href="mailto:associatesreet@gmail.com" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+918109789795" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={openGoogleMaps}
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <MapPin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#electrical" className="text-gray-300 hover:text-white transition-colors">Electrical Services</Link></li>
              <li><Link href="#lighting" className="text-gray-300 hover:text-white transition-colors">Lighting Manufacturers</Link></li>
              <li><Link href="#panel" className="text-gray-300 hover:text-white transition-colors">Panel Manufacturers</Link></li>
              <li><Link href="#clients" className="text-gray-300 hover:text-white transition-colors">Our Clients</Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Right: Contact Details */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h3 className="text-xl font-bold">Contact Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center lg:justify-start">
                <span className="text-gray-300">
                  217, Second Floor, Arbitto Mall, PU4,<br />
                  Near C-21 Mall, Scheme No 54,<br />
                  Indore, Madhya Pradesh 452010
                </span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <a href="tel:+918109789795" className="text-gray-300 hover:text-white">+91 8109789795</a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <a href="mailto:associatesreet@gmail.com" className="text-gray-300 hover:text-white">associatesreet@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
