import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Main Footer Content */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white p-2 rounded-md mb-6">
              <Image src="/images/logo.png" width={120} height={120} alt="Gastek Engineering" className="h-auto" />
            </div>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Manufacturer and exporter of high-quality gas generation systems since 1993, setting industry benchmarks
              worldwide.
            </p>
            <div className="mt-4">
              <Link
                href="https://www.linkedin.com/company/gastek-engineering"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/images/linkedin-logo.png" width={24} height={24} alt="LinkedIn" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/nitrogen-plants" className="text-gray-400 hover:text-white transition-colors">
                  PSA Nitrogen Plants
                </Link>
              </li>
              <li>
                <Link href="/products/oxygen-plants" className="text-gray-400 hover:text-white transition-colors">
                  PSA Oxygen Plants
                </Link>
              </li>
              <li>
                <Link href="/products/hydrogen-plants" className="text-gray-400 hover:text-white transition-colors">
                  PSA Hydrogen Plants
                </Link>
              </li>
              <li>
                <Link href="/products/hoc-dryer" className="text-gray-400 hover:text-white transition-colors">
                  HOC Dryer
                </Link>
              </li>
              <li>
                <Link href="/products/ammonia-cracking" className="text-gray-400 hover:text-white transition-colors">
                  Ammonia Cracking Units
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-white transition-colors">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=Ht9qNQVz7co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Company Video
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-bold mb-6 text-center">Contact Us</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-gray-400" />
              <a href="tel:+15551234567" className="text-white hover:text-gray-300 transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-gray-400" />
              <a href="mailto:sales@gastekengg.com" className="text-white hover:text-gray-300 transition-colors">
                sales@gastekengg.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-gray-400" />
              <a
                href="https://www.google.com/maps/search/704-705,+Modicorp+Tower,+Nehru+Place,+New+Delhi,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                704-705, Modicorp Tower, Nehru Place, New Delhi, India
              </a>
            </div>
          </div>
        </div>

        {/* ISO Certification */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center">
            <Image src="/images/quality-img.png" width={24} height={24} alt="ISO Certified" className="mr-2" />
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Gastek Engineering. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
