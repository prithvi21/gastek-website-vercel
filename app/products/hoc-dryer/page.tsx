import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Download, Phone } from "lucide-react"

export default function HocDryerPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Heat of Compression Dryer</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Advanced Heat of Compression (HOC) dryers based on adsorption principle for efficient air drying.
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
                src="/images/hoc-dryer.png"
                width={700}
                height={550}
                alt="Heat of Compression Dryer"
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
                  The Heat of Compression dryers (HOC) are the latest generation chemical dryers based on adsorption
                  principle. It does not have complex valvings & is eliminated with purge loss drawback as in heatless
                  type dryer.
                </p>
                <p className="text-gray-500">
                  The hot air from the Compressor at 120°C and higher temp, is used directly for regeneration of the
                  desiccant. After regeneration, this air is cooled down to 40°C and then it is dried in second tower.
                  Thus, the use of heaters is eliminated.
                </p>
                <p className="text-gray-500">
                  For eg. in the 6+6 Hrs. Cycle the hot air is fed for regeneration for 4 Hrs. and for balance 2 Hr. a
                  changeover takes place where the air is first cooled in cooler, then dried and before going to the
                  outlet, cools the regenerated desiccant bed, thus bringing it down to ambient temperature. This cycle
                  is reversed for the next 6Hrs. where the Adsorber drying the air in the previous cycle goes for
                  regeneration and vice versa.
                </p>
                <h3 className="text-xl font-bold mt-6">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>No complex valvings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Eliminated purge loss drawback</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>No external heaters required</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Energy efficient operation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Reliable performance</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Technical Specifications</h2>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Standard Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Capacity: 100-10000 CFM</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>No external power required</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Low maintenance operation</span>
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
                      <span>Dew point monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Efficient cycle operation</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Working Principle</h3>
                  <p className="text-gray-500">
                    The HOC dryer utilizes the heat generated during air compression to regenerate the desiccant. The
                    cycle operates in two phases:
                  </p>
                  <ol className="space-y-2 mt-4 list-decimal pl-5">
                    <li className="text-gray-500">
                      <span className="font-medium text-gray-900">Drying Phase:</span> Compressed air passes through one
                      tower where moisture is adsorbed by the desiccant.
                    </li>
                    <li className="text-gray-500">
                      <span className="font-medium text-gray-900">Regeneration Phase:</span> Hot air from the compressor
                      (120°C+) passes through the second tower to regenerate the saturated desiccant.
                    </li>
                    <li className="text-gray-500">
                      <span className="font-medium text-gray-900">Cooling Phase:</span> After regeneration, the tower is
                      cooled down to ambient temperature before switching back to drying phase.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Advantages of HOC Dryers</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Heat of Compression Dryers offer numerous benefits over traditional air drying methods.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Energy Efficient</h3>
                <p className="text-center text-gray-500">
                  Utilizes waste heat from compression process, eliminating the need for external heaters.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">No Purge Loss</h3>
                <p className="text-center text-gray-500">
                  Eliminates the purge loss drawback common in heatless type dryers, improving overall efficiency.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Simplified Design</h3>
                <p className="text-center text-gray-500">
                  No complex valving systems, resulting in more reliable operation and reduced maintenance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Low Operating Cost</h3>
                <p className="text-center text-gray-500">
                  Reduced energy consumption and maintenance requirements lead to lower overall operating costs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Consistent Performance</h3>
                <p className="text-center text-gray-500">
                  Delivers reliable drying performance with stable dew point throughout the operation cycle.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Long Service Life</h3>
                <p className="text-center text-gray-500">
                  Durable construction and optimized regeneration cycle extends the life of the desiccant and equipment.
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
                  Contact our team to discuss your air drying requirements and get a customized solution.
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
