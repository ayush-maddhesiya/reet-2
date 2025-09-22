"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
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
              <a href="mailto:associatesreet@gmail.com" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+918109789795" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="sms:+918109789795" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 4c0-1.105.895-2 2-2h16a2 2 0 012 2v16a2 2 0 01-2 2H6l-4 4V4z" />
                </svg>
              </a>
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
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Right: Contact Details */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h3 className="text-xl font-bold">Contact Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center lg:justify-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-gray-400" />
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

        {/* Bottom Contact */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 space-y-2">
          <p>© {new Date().getFullYear()} Reet Associates. All rights reserved.</p>
          <p>Contact us: <a href="tel:+918109789795" className="underline hover:text-white">+91 8109789795</a> | <a href="mailto:associatesreet@gmail.com" className="underline hover:text-white">associatesreet@gmail.com</a></p>
        </div>
      </div>
    </footer>
  )
}
