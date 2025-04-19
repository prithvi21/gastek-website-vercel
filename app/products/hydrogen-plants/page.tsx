import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Download, Phone } from "lucide-react"

export default function HydrogenPlantsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2 mt-2 -ml-2">
            <Link href="/" className="transition-transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GASTEK_LOGO.png-VH4fb4NK8Jf45ayY41PIzcvkTN7whI.webp"
                alt="Gastek Engineering"
                width={80}
                height={80}
                className="h-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-base font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/profile" className="text-base font-medium hover:underline underline-offset-4">
              Profile
            </Link>
            <Link href="/#products" className="text-base font-medium text-primary hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/#projects" className="text-base font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="/#contact" className="text-base font-medium hover:underline underline-offset-4">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">PSA Hydrogen Plants</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  High-purity hydrogen generation systems using Pressure Swing Adsorption technology.
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
                src="/images/psa-hydrogen.png"
                width={700}
                height={550}
                alt="PSA Hydrogen Plant"
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
                  PSA Hydrogen Plants use Pressure Swing Adsorption technology to purify hydrogen from various feed
                  gases. The process involves selective adsorption of impurities on molecular sieves, allowing pure
                  hydrogen to pass through.
                </p>
                <p className="text-gray-500">
                  Our PSA Hydrogen Plants can achieve hydrogen purities up to 99.9999%, making them suitable for a wide
                  range of applications requiring high-purity hydrogen. The systems are fully automatic and designed for
                  continuous operation.
                </p>
                <h3 className="text-xl font-bold mt-6">Applications</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Hydrogenation processes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Fuel cell applications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Metallurgical processes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Electronics manufacturing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Chemical processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Pharmaceutical industry</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Technical Specifications</h2>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Process Description</h3>
                  <p className="text-gray-500 mb-4">
                    The PSA hydrogen purification process involves the following steps:
                  </p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li className="text-gray-500">
                      Feed gas (reformate) containing hydrogen and impurities enters the PSA system.
                    </li>
                    <li className="text-gray-500">
                      The gas passes through adsorber vessels containing molecular sieve adsorbents.
                    </li>
                    <li className="text-gray-500">
                      Impurities such as CO, CO₂, CH₄, N₂, and water vapor are selectively adsorbed.
                    </li>
                    <li className="text-gray-500">Pure hydrogen passes through and is collected as product gas.</li>
                    <li className="text-gray-500">
                      The adsorber vessels are regenerated by depressurization and purging, creating a continuous cycle.
                    </li>
                  </ol>
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Standard Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Hydrogen purity: up to 99.9999%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Capacity: 10-10,000 Nm³/hr</span>
                    </li>
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
                      <span>High hydrogen recovery rate</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Low maintenance requirements</span>
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
                <h2 className="text-3xl font-bold tracking-tighter">Advantages of PSA Hydrogen Plants</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our PSA Hydrogen Plants offer numerous benefits for hydrogen purification.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">High Purity</h3>
                <p className="text-center text-gray-500">
                  Achieve hydrogen purities up to 99.9999%, suitable for the most demanding applications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Energy Efficient</h3>
                <p className="text-center text-gray-500">
                  Low energy consumption compared to alternative purification methods like cryogenic separation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Modular Design</h3>
                <p className="text-center text-gray-500">
                  Scalable systems that can be expanded to meet increasing hydrogen demand.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Continuous Operation</h3>
                <p className="text-center text-gray-500">
                  Multiple adsorber vessels operating in sequence ensure uninterrupted hydrogen supply.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Automatic Control</h3>
                <p className="text-center text-gray-500">
                  PLC-based control system with minimal operator intervention required.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Quick Startup</h3>
                <p className="text-center text-gray-500">
                  Rapid startup and shutdown capabilities for flexible operation.
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
                  Contact our team to discuss your hydrogen purification requirements and get a customized solution.
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
            <Link
              href="https://www.youtube.com/watch?v=Ht9qNQVz7co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Company Video
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
