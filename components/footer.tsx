import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-12 md:py-12">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Gastek Engineering</h3>
          <p className="text-sm text-gray-500">
            Manufacturer and exporter of high-quality gas generation systems since 1993.
          </p>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/company/gastek-engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <Image src="/images/linkedin-logo.png" width={24} height={24} alt="LinkedIn" className="rounded-sm" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <div className="space-y-2 text-sm text-gray-500">
            <p className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+15551234567" className="hover:text-gray-700">
                +1 (555) 123-4567
              </a>
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              <a href="mailto:sales@gastekengg.com" className="hover:text-gray-700">
                sales@gastekengg.com
              </a>
            </p>
            <p className="flex items-start">
              <MapPin className="mr-2 h-4 w-4 mt-0.5" />
              <span>704-705, Modicorp Tower, Nehru Place, New Delhi, India</span>
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <p>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </p>
            <p>
              <Link href="/profile" className="text-gray-500 hover:text-gray-700">
                Company Profile
              </Link>
            </p>
            <p>
              <Link href="/projects" className="text-gray-500 hover:text-gray-700">
                Projects
              </Link>
            </p>
            <p>
              <Link href="/careers" className="text-gray-500 hover:text-gray-700">
                Careers
              </Link>
            </p>
            <p>
              <Link
                href="https://www.youtube.com/watch?v=Ht9qNQVz7co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                Company Video
              </Link>
            </p>
          </div>
        </div>

        <div className="space-y-3 md:col-span-3 lg:col-span-1">
          <h3 className="text-lg font-medium">ISO Certified</h3>
          <p className="text-sm text-gray-500">
            Gastek Engineering is an ISO 9001:2015 certified company committed to maintaining the highest quality
            standards.
          </p>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-sm text-gray-500">© 2025 Gastek Engineering. All rights reserved.</p>
      </div>
    </footer>
  )
}
