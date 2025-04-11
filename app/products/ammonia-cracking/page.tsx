import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Download, Phone } from "lucide-react"

export default function AmmoniaCrackingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/images/logo.png" alt="Gastek Engineering" width={120} height={40} />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/profile" className="text-sm font-medium hover:underline underline-offset-4">
              Profile
            </Link>
            <Link href="/#products" className="text-sm font-medium text-primary hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="/#contact">Get a Quote</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Product Specifications</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ammonia Cracking Units</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  High-quality Ammonia Cracking Units for efficient hydrogen production from ammonia.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/#contact">
                      Request Quotation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" /> Download Brochure
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/images/ammonia-cracking.png"
                width={700}
                height={550}
                alt="Ammonia Cracking Unit"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain bg-white p-4 sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Product Overview</h2>
                <p className="text-gray-500">
                  Ammonia Cracking Units are designed to produce hydrogen by cracking ammonia at high temperatures. The
                  process involves the thermal decomposition of ammonia into hydrogen and nitrogen.
                </p>
                <p className="text-gray-500">
                  Our Ammonia Cracking Units are engineered to provide a reliable and efficient source of hydrogen for
                  various industrial applications. The units are fully automatic and require minimal operator
                  intervention.
                </p>
                <h3 className="text-xl font-bold mt-6">Applications</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Heat treatment processes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Metallurgical industries</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Chemical processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Electronics manufacturing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Glass industry</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Fuel cell applications</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Technical Specifications</h2>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Process Description</h3>
                  <p className="text-gray-500 mb-4">The ammonia cracking process involves the following steps:</p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li className="text-gray-500">
                      Ammonia is fed from cylinders or a storage tank to the cracking furnace.
                    </li>
                    <li className="text-gray-500">
                      In the cracking furnace, ammonia is heated to temperatures between 800-900°C.
                    </li>
                    <li className="text-gray-500">
                      At these temperatures, ammonia (NH₃) decomposes into nitrogen (N₂) and hydrogen (H₂).
                    </li>
                    <li className="text-gray-500">
                      The resulting gas mixture contains approximately 75% hydrogen and 25% nitrogen.
                    </li>
                    <li className="text-gray-500">
                      Optional purification systems can be added to obtain higher purity hydrogen if required.
                    </li>
                  </ol>
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Standard Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Fully automatic operation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>PLC based control system</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>High-efficiency cracking furnace</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Safety interlocks and alarms</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Optional hydrogen purification system</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Capacities from 10 to 1000 Nm³/hr</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Advantages of Ammonia Cracking</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Ammonia Cracking Units offer numerous benefits for hydrogen production.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Cost Effective</h3>
                <p className="text-center text-gray-500">
                  Economical hydrogen production compared to electrolysis or steam methane reforming.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Reliable Operation</h3>
                <p className="text-center text-gray-500">
                  Simple process with minimal moving parts ensures high reliability and uptime.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Easy Storage</h3>
                <p className="text-center text-gray-500">
                  Ammonia is easier to store and transport than hydrogen, making it an efficient hydrogen carrier.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">On-Demand Production</h3>
                <p className="text-center text-gray-500">
                  Generate hydrogen as needed, eliminating the need for large hydrogen storage systems.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Scalable Solution</h3>
                <p className="text-center text-gray-500">
                  Units available in various capacities to match your specific hydrogen requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Low Maintenance</h3>
                <p className="text-center text-gray-500">
                  Minimal maintenance requirements result in lower operating costs and reduced downtime.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact our team to discuss your hydrogen requirements and get a customized solution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="tel:+15551234567">
                    <Phone className="mr-2 h-4 w-4" /> Call Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2023 Gastek Engineering. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
