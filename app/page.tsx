import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Award, Shield, Zap } from "lucide-react"

export default function Home() {
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
            <Link href="/" className="text-sm font-medium text-primary hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/profile" className="text-sm font-medium hover:underline underline-offset-4">
              Profile
            </Link>
            <Link href="#products" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  ISO 9001:2015 Certified Company
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Swing your Fortunes up with swing in Pressure
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Gastek Engineering is a renowned manufacturer and exporter of high-quality Nitrogen Gas Generators,
                  PSA Oxygen Plants, and related products, setting industry benchmarks since 1993.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#products">
                      Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=700"
                width={700}
                height={550}
                alt="Nitrogen Gas Generator"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">30 Years of Excellence</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 1993, Gastek Engineering is a well-known company involved in manufacturing and exporting of
                  Nitrogen Gas Generator, PSA Nitrogen Gas Generator, PSA Oxygen Gas Generator and Ammonia Cracking
                  Units.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Award className="h-12 w-12 text-gray-700" />
                <h3 className="text-xl font-bold">Quality Assurance</h3>
                <p className="text-center text-gray-500">
                  ISO 9001:2015 certified manufacturing processes ensuring highest quality standards
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Zap className="h-12 w-12 text-gray-700" />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-center text-gray-500">
                  Continuous research and development to improve product efficiency
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Shield className="h-12 w-12 text-gray-700" />
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-center text-gray-500">Trusted by industries worldwide with 24/7 technical support</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/profile">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Products</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Product Range</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive range of gas generation and purification systems designed for various industrial
                  applications.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>PSA Nitrogen Plants</CardTitle>
                  <CardDescription>Pressure Swing Adsorption Technology</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/psa-nitrogen-plant.png"
                    width={300}
                    height={200}
                    alt="PSA Nitrogen Plant"
                    className="mb-4 aspect-video overflow-hidden rounded-lg object-contain bg-white p-2"
                  />
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
                      <span>Energy efficient design</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/products/nitrogen-plants">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PSA Oxygen Plants</CardTitle>
                  <CardDescription>Medical & Industrial Grade Oxygen</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/psa-oxygen-plant.png"
                    width={300}
                    height={200}
                    alt="PSA Oxygen Plant"
                    className="mb-4 aspect-video overflow-hidden rounded-lg object-contain bg-white p-2"
                  />
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Flow rates: 1-500 Nm³/hr</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Purity: up to 93%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Medical & industrial applications</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/products/oxygen-plants">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Heat of Compression Dryer</CardTitle>
                  <CardDescription>Energy Efficient Air Drying</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/hoc-dryer.png"
                    width={300}
                    height={200}
                    alt="Heat of Compression Dryer"
                    className="mb-4 aspect-video overflow-hidden rounded-lg object-contain bg-white p-2"
                  />
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
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/products/hoc-dryer">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ammonia Cracking Units</CardTitle>
                  <CardDescription>Hydrogen Generation from Ammonia</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/ammonia-cracking.png"
                    width={300}
                    height={200}
                    alt="Ammonia Cracking Unit"
                    className="mb-4 aspect-video overflow-hidden rounded-lg object-contain bg-white p-2"
                  />
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>High-efficiency cracking furnace</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Fully automatic operation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Optional hydrogen purification</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/products/ammonia-cracking">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PSA Hydrogen Plants</CardTitle>
                  <CardDescription>High-Purity Hydrogen Generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/psa-hydrogen.png"
                    width={300}
                    height={200}
                    alt="PSA Hydrogen Plant"
                    className="mb-4 aspect-video overflow-hidden rounded-lg object-contain bg-white p-2"
                  />
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Purity: up to 99.9999%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Capacity: 10-10,000 Nm³/hr</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>High hydrogen recovery rate</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/products/hydrogen-plants">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="#">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Successful Implementations</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From concept to completion, we deliver turnkey nitrogen gas solutions for diverse industrial
                  applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Custom Engineering & Design</h3>
                <p className="text-gray-500">
                  Our engineering team works with you to understand your requirements and design the optimal nitrogen
                  solution for your specific project needs.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Installation & Commissioning</h3>
                <p className="text-gray-500">
                  Professional installation services ensure your equipment is set up correctly and operating at peak
                  efficiency from day one.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Turnkey Project Management</h3>
                <p className="text-gray-500">
                  Complete project management from initial consultation to final handover, ensuring seamless
                  implementation.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Ongoing Support & Optimization</h3>
                <p className="text-gray-500">
                  Comprehensive maintenance programs and technical support to ensure your systems continue to perform
                  optimally.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="trusted-brands" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Partners</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Leading Brands</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're proud to work with industry leaders across various sectors worldwide.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center gap-8 py-12">
              <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0">
                <Image
                  src="/images/brands/tata.png"
                  width={120}
                  height={60}
                  alt="Tata Logo"
                  className="aspect-[2/1] object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0">
                <Image
                  src="/images/brands/reliance.png"
                  width={120}
                  height={60}
                  alt="Reliance Industries Logo"
                  className="aspect-[2/1] object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0">
                <Image
                  src="/images/brands/divis.png"
                  width={120}
                  height={60}
                  alt="Divi's Laboratories Logo"
                  className="aspect-[2/1] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to discuss your gas generation requirements? Our team is here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 py-12 lg:grid-cols-2">
              <div className="grid gap-8">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-gray-700" />
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Phone</h3>
                    <p className="text-gray-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-gray-700" />
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Email</h3>
                    <p className="text-gray-500">sales@gastekengg.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-gray-700" />
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Address</h3>
                    <p className="text-gray-500">704-705, Modicorp Tower, 98, Nehru Place, New Delhi, Delhi 110019, India</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Your email address" type="email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea className="min-h-[150px]" id="message" placeholder="Tell us about your requirements" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Gastek Engineering. All rights reserved.
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
