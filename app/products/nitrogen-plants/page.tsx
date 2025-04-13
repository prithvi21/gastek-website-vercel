import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Download, Phone } from "lucide-react"
import { Footer } from "@/components/footer"

export default function NitrogenPlantsPage() {
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
            <Link href="/projects" className="text-sm font-medium hover:underline underline-offset-4">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">PSA Nitrogen Plants</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  High-quality Nitrogen Generation Systems designed for various industrial applications, available in
                  PSA and Membrane technologies.
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
                src="/images/psa-nitrogen-plant.png"
                width={700}
                height={550}
                alt="PSA Nitrogen Plant"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain bg-white p-4 sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Nitrogen Generation Technologies</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer two advanced technologies for nitrogen generation to suit your specific requirements.
                </p>
              </div>
            </div>

            <div className="grid gap-12 lg:gap-16">
              {/* PSA Nitrogen Generator Section */}
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Technology 1</div>
                  <h2 className="text-3xl font-bold tracking-tighter">PSA Nitrogen Generator</h2>
                  <p className="text-gray-500">
                    Gastek Engineering is a leading manufacturer of PSA Nitrogen Plants. Our plants are designed to
                    produce nitrogen gas with purity ranging from 95% to 99.999%, catering to various industrial
                    applications. The PSA technology offers an economical and reliable solution for on-site nitrogen
                    generation.
                  </p>
                  <p className="text-gray-500">
                    Our PSA Nitrogen Plants separate nitrogen from compressed air using Carbon Molecular Sieves (CMS).
                    The process is based on the principle of Pressure Swing Adsorption, where oxygen, moisture, and
                    other impurities are adsorbed by the CMS, allowing nitrogen to pass through.
                  </p>
                  <div className="rounded-lg border p-6">
                    <h3 className="text-xl font-bold mb-4">PSA Nitrogen Generator Specifications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Flow rates: 1-5000 Nm³/hr</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Purity: 95-99.999%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Pressure: 4-7 bar(g)</span>
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
                        <span>Touch screen HMI</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Oxygen analyzer for purity monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  src="/images/psa-nitrogen-generator.png"
                  width={600}
                  height={450}
                  alt="PSA Nitrogen Generator"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-contain bg-white p-4 sm:w-full"
                />
              </div>

              {/* Membrane Nitrogen Generator Section */}
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                <Image
                  src="/images/membrane-nitrogen-gen.png"
                  width={600}
                  height={450}
                  alt="Membrane Nitrogen Generator"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-contain bg-white p-4 sm:w-full lg:order-first"
                />
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Technology 2</div>
                  <h2 className="text-3xl font-bold tracking-tighter">Membrane Nitrogen Generator</h2>
                  <p className="text-gray-500">
                    Membrane Nitrogen Generators utilize hollow fiber membrane technology to separate nitrogen from
                    compressed air. The membrane consists of bundles of hollow fibers, with each fiber having a
                    selective permeable layer that allows oxygen, water vapor, and other gases to permeate through the
                    membrane wall faster than nitrogen.
                  </p>
                  <p className="text-gray-500">
                    This technology is ideal for applications requiring lower purity nitrogen with flow rates from small
                    to medium. Membrane systems are compact, have no moving parts, and require minimal maintenance,
                    making them perfect for continuous operation in various industrial settings.
                  </p>
                  <div className="rounded-lg border p-6">
                    <h3 className="text-xl font-bold mb-4">Membrane Nitrogen Generator Specifications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Flow rates: 1-500 Nm³/hr</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Purity: 95-99.5%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Pressure: 6-10 bar(g)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>No moving parts</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Instant start-up</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Low maintenance requirements</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Compact design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Applications</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our nitrogen generation systems are used across a wide range of industries and applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Food & Beverage</h3>
                <p className="text-center text-gray-500">
                  Food packaging, wine production, edible oil processing, and beverage dispensing.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Electronics</h3>
                <p className="text-center text-gray-500">
                  Wave soldering, reflow ovens, and semiconductor manufacturing.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Pharmaceuticals</h3>
                <p className="text-center text-gray-500">Blanketing, packaging, and storage of sensitive materials.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Chemical Processing</h3>
                <p className="text-center text-gray-500">Reactor blanketing, purging, and process control.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Metal Processing</h3>
                <p className="text-center text-gray-500">Heat treatment, laser cutting, and annealing processes.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Oil & Gas</h3>
                <p className="text-center text-gray-500">
                  Pipeline purging, tank blanketing, and enhanced oil recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Choosing the Right Technology</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Selecting between PSA and Membrane technology depends on your specific requirements.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Choose PSA Technology When:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>High purity nitrogen (up to 99.999%) is required</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Large flow rates are needed</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Energy efficiency is a priority</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Long-term operation with consistent purity is essential</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Choose Membrane Technology When:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Lower purity nitrogen (95-99.5%) is acceptable</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Smaller flow rates are required</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Compact installation space is limited</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Immediate start-up and minimal maintenance are priorities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Advantages of On-Site Nitrogen Generation</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our nitrogen generation systems offer numerous benefits over traditional nitrogen supply methods.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Cost Effective</h3>
                <p className="text-center text-gray-500">
                  Significant cost savings compared to cylinder or liquid nitrogen supply, with typical ROI of 12-24
                  months.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-center text-gray-500">
                  Continuous supply of nitrogen without dependence on external suppliers, eliminating delivery delays.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Safety</h3>
                <p className="text-center text-gray-500">
                  Eliminates handling of high-pressure cylinders and cryogenic liquids, reducing workplace hazards.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Flexibility</h3>
                <p className="text-center text-gray-500">
                  Adjustable flow rates and purity levels to meet changing production requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Low Maintenance</h3>
                <p className="text-center text-gray-500">
                  Simple operation with minimal moving parts, resulting in high reliability and low maintenance costs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Environmentally Friendly</h3>
                <p className="text-center text-gray-500">
                  Reduces carbon footprint by eliminating transportation of cylinders or liquid nitrogen.
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
                  Contact our team to discuss your nitrogen requirements and get a customized solution.
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
      <Footer />
    </div>
  )
}
