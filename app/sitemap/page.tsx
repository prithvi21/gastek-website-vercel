import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function SitemapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2 mt-2 -ml-2">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GASTEK_LOGO.png-VH4fb4NK8Jf45ayY41PIzcvkTN7whI.webp"
                alt="Gastek Engineering"
                width={80}
                height={80}
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-base font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/profile" className="text-base font-medium hover:underline underline-offset-4">
              Profile
            </Link>
            <Link href="/#products" className="text-base font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/projects" className="text-base font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="/#contact" className="text-base font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild className="text-base">
            <Link href="/#contact">Get a Quote</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sitemap</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Navigate through our website with ease.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
              {/* Main Pages */}
              <div>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Main Pages</h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-blue-600 hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile" className="text-blue-600 hover:underline">
                      Company Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-blue-600 hover:underline">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-blue-600 hover:underline">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Products */}
              <div>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Products</h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/products/nitrogen-plants" className="text-blue-600 hover:underline">
                      PSA Nitrogen Plants
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/oxygen-plants" className="text-blue-600 hover:underline">
                      PSA Oxygen Plants
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/hydrogen-plants" className="text-blue-600 hover:underline">
                      PSA Hydrogen Plants
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/hoc-dryer" className="text-blue-600 hover:underline">
                      HOC Dryer
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/ammonia-cracking" className="text-blue-600 hover:underline">
                      Ammonia Cracking Units
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/cms" className="text-blue-600 hover:underline">
                      Carbon Molecular Sieves
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Other Pages */}
              <div>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Other Pages</h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/#contact" className="text-blue-600 hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
