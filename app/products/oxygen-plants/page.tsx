import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Download, Phone } from "lucide-react"

export default function OxygenPlantsPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">PSA Oxygen Plants</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  High-quality Pressure Swing Adsorption (PSA) and Vacuum Pressure Swing Adsorption (VPSA) Oxygen Plants
                  for various industrial applications.
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
                src="/images/psa-oxygen-plant.png"
                width={700}
                height={550}
                alt="PSA Oxygen Plant"
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
                  We are manufacturing State of Arts PSA / VPSA Oxygen Plants. The Oxygen Plants work on Pressure Swing
                  Adsorption Principle using molecular silver.
                </p>
                <p className="text-gray-500">
                  Our PSA Oxygen Plants provide a reliable and cost-effective solution for on-site oxygen generation.
                  With purity up to 93% easily achievable, these plants are ideal for various industrial and medical
                  applications.
                </p>
                <h3 className="text-xl font-bold mt-6">Applications</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Colour and B&W picture tube/glass shell Industry</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Lamp/compact fluorescent lamp Industry</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Vials & ampoules</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Brazing application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Fish farming</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Effluent & waste water treatment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Chemical oxidation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Ozone Generation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>LPC enrichment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Steel Industries</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Technical Specifications</h2>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Salient Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Fully Automatic</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>No fuel is required</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Low capital & running cost</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Purity upto 93% is easily achievable</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Flow rates: 1-500 Nm³/hr</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Pressure: 4-7 bar(g)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>PLC based control system</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Touch screen HMI</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Oxygen analyzer for purity monitoring</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Process Diagram</h3>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      width={500}
                      height={300}
                      alt="PSA Oxygen Plant Process Diagram"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="mt-4 text-center text-gray-500">Schematic diagram of PSA Oxygen Plant process</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Advantages of PSA Oxygen Plants</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our PSA Oxygen Plants offer numerous benefits over traditional oxygen supply methods.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Cost Effective</h3>
                <p className="text-center text-gray-500">
                  Low capital and running costs compared to cylinder or liquid oxygen supply, with quick return on
                  investment.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-center text-gray-500">
                  Continuous supply of oxygen without dependence on external suppliers, eliminating delivery delays.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Fully Automatic</h3>
                <p className="text-center text-gray-500">
                  Automated operation with minimal operator intervention required, ensuring consistent performance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">No Fuel Required</h3>
                <p className="text-center text-gray-500">
                  Operates on electricity only, eliminating the need for fuel and associated costs and hazards.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">High Purity</h3>
                <p className="text-center text-gray-500">
                  Achieves oxygen purity up to 93%, suitable for most industrial and medical applications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Environmentally Friendly</h3>
                <p className="text-center text-gray-500">
                  Reduces carbon footprint by eliminating transportation of cylinders or liquid oxygen.
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
                  Contact our team to discuss your oxygen requirements and get a customized solution.
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
