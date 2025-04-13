import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Calendar, MapPin, Building } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
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
            <Link href="/#products" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/projects" className="text-sm font-medium text-primary hover:underline underline-offset-4">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Projects</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Successful Implementations</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our portfolio of successful projects delivered across various industries worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              {/* Project 1 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Pharmaceutical Industry</div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    High-Purity Nitrogen System for Pharmaceutical Manufacturing
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Completed: January 2023</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Location: Mumbai, India</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="mr-1 h-4 w-4" />
                      <span>Client: Leading Pharmaceutical Manufacturer</span>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    We designed and installed a custom PSA Nitrogen Generation System for a leading pharmaceutical
                    manufacturer. The system delivers 500 Nm³/hr of high-purity nitrogen (99.999%) for various
                    applications including blanketing, packaging, and process control.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-bold">Key Achievements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Reduced nitrogen costs by 60% compared to liquid nitrogen supply</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Achieved ROI within 14 months</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Zero production downtime during installation and commissioning</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Pharmaceutical Nitrogen System"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                />
              </div>

              {/* Project 2 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Food Packaging Nitrogen System"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Food & Beverage Industry</div>
                  <h2 className="text-3xl font-bold tracking-tighter">Nitrogen Generation System for Food Packaging</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Completed: August 2022</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Location: Delhi, India</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="mr-1 h-4 w-4" />
                      <span>Client: Major Food Processing Company</span>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    We supplied and installed a turnkey Membrane Nitrogen Generation System for a major food processing
                    company. The system provides nitrogen for modified atmosphere packaging (MAP) to extend the shelf
                    life of packaged foods.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-bold">Key Achievements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Increased packaging line efficiency by 25%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Extended product shelf life by up to 300%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Eliminated logistics issues associated with cylinder delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Steel Industry</div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Large-Scale PSA Oxygen Plant for Steel Manufacturing
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Completed: March 2023</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Location: Jamshedpur, India</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="mr-1 h-4 w-4" />
                      <span>Client: Major Steel Manufacturer</span>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    We designed, manufactured, and commissioned a large-scale PSA Oxygen Plant for a major steel
                    manufacturer. The plant produces 300 Nm³/hr of oxygen at 93% purity for use in the steel
                    manufacturing process.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-bold">Key Achievements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Reduced oxygen costs by 45% compared to liquid oxygen</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Improved process efficiency by providing consistent oxygen supply</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Achieved 99.9% uptime since installation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Steel Industry Oxygen Plant"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                />
              </div>

              {/* Project 4 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Chemical Industry Hydrogen Plant"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Chemical Industry</div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Hydrogen Purification System for Chemical Processing
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Completed: November 2022</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Location: Gujarat, India</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="mr-1 h-4 w-4" />
                      <span>Client: Chemical Processing Company</span>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    We supplied a PSA Hydrogen Purification System for a chemical processing company. The system
                    purifies hydrogen from process gas streams to achieve 99.999% purity for use in critical chemical
                    reactions.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-bold">Key Achievements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Increased hydrogen recovery rate by 30%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Improved product quality through higher purity hydrogen</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                        <span>Reduced operational costs by recycling process gas</span>
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
                <h2 className="text-3xl font-bold tracking-tighter">Ready to Start Your Project?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact our team to discuss your gas generation requirements and get a customized solution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
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
