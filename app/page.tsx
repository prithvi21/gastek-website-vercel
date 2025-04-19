import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Award, Shield, Zap, ChevronDown } from "lucide-react"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { useScroll } from "@/hooks/use-scroll"

export default function Home() {
  const scrolled = useScroll()
  return (
    <div className="flex flex-col min-h-screen">
      {/* Modern Header with Transparent Background - Fixed positioning */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/50" : "bg-transparent"}`}
      >
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2 py-6 mt-2 -ml-2">
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
          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className={`text-base font-medium ${scrolled ? "text-sky-500" : "text-white"} hover:text-sky-400 transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/profile"
              className={`text-base font-medium ${scrolled ? "text-gray-700" : "text-white"} hover:text-sky-400 transition-colors`}
            >
              Profile
            </Link>
            <Link
              href="#products"
              className={`text-base font-medium ${scrolled ? "text-gray-700" : "text-white"} hover:text-sky-400 transition-colors`}
            >
              Products
            </Link>
            <Link
              href="/projects"
              className={`text-base font-medium ${scrolled ? "text-gray-700" : "text-white"} hover:text-sky-400 transition-colors`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`text-base font-medium ${scrolled ? "text-gray-700" : "text-white"} hover:text-sky-400 transition-colors`}
            >
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className={`${scrolled ? "bg-sky-400 hover:bg-sky-500" : "bg-white/20 text-white hover:bg-white/30"} transition-all shadow-lg hover:shadow-xl text-base`}
          >
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Rest of the content remains unchanged */}
        {/* Hero Section with Full-Screen Background - Using the new image */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae0b2f53-d84a-45f9-8965-149ef5522849-rbFpBA0lIqYNoQQo67xNKQLrWpEVno.png"
              alt="Gastek Engineering - Swing your fortunes up with a swing in pressure"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="container relative z-20 px-4 md:px-6 py-24 md:py-32 mt-20">
            <div className="max-w-3xl space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 pt-[28rem] pl-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-sky-400 text-white hover:bg-sky-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <Link href="#products">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white text-white bg-sky-500/30 hover:bg-sky-500/50 transition-all"
                >
                  <Link href="#contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <Link href="#about" className="text-white/80 hover:text-white">
              <ChevronDown className="h-8 w-8" />
            </Link>
          </div>
        </section>

        {/* About Section with Modern Cards */}
        <section id="about" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-800 font-medium">
                  About Us
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">30 Years of Excellence</h2>
                <p className="text-xl text-gray-600 md:text-xl/relaxed max-w-[900px] mx-auto">
                  Founded in 1993, Gastek Engineering is a well-known company involved in manufacturing and exporting of
                  Nitrogen Gas Generator, PSA Nitrogen Gas Generator, PSA Oxygen Gas Generator and Ammonia Cracking
                  Units.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group flex flex-col items-center space-y-4 rounded-2xl border border-gray-200 p-8 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40">
                <div className="rounded-full bg-sky-100 p-4 transition-colors group-hover:bg-sky-200">
                  <Award className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Quality Assurance</h3>
                <p className="text-center text-gray-500">
                  ISO 9001:2015 certified manufacturing processes ensuring highest quality standards
                </p>
              </div>
              <div className="group flex flex-col items-center space-y-4 rounded-2xl border border-gray-200 p-8 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40">
                <div className="rounded-full bg-sky-100 p-4 transition-colors group-hover:bg-sky-200">
                  <Zap className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-center text-gray-500">
                  Continuous research and development to improve product efficiency
                </p>
              </div>
              <div className="group flex flex-col items-center space-y-4 rounded-2xl border border-gray-200 p-8 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40">
                <div className="rounded-full bg-sky-100 p-4 transition-colors group-hover:bg-sky-200">
                  <Shield className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-center text-gray-500">Trusted by industries worldwide with 24/7 technical support</p>
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-sky-200 text-sky-600 hover:bg-sky-50 transition-all"
              >
                <Link href="/profile">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section with Consistent Card Heights and Image Sizes */}
        <section id="products" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-800 font-medium">
                  Our Products
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Product Range</h2>
                <p className="text-xl text-gray-600 md:text-xl/relaxed max-w-[900px] mx-auto">
                  Our comprehensive range of gas generation and purification systems designed for various industrial
                  applications.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* Product Card 1 - Fixed height and consistent image size */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all bg-white rounded-2xl flex flex-col h-full">
                <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-400 text-white p-6">
                  <CardTitle className="text-2xl">PSA Nitrogen Plants</CardTitle>
                  <CardDescription className="text-blue-100">Pressure Swing Adsorption Technology</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-6 overflow-hidden rounded-xl h-48 flex items-center justify-center bg-white">
                    <Image
                      src="/images/psa-nitrogen-plant.png"
                      width={300}
                      height={200}
                      alt="PSA Nitrogen Plant"
                      className="object-contain h-full w-auto max-w-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Flow rates: 1-5000 Nm³/hr</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Purity: 95-99.999%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Energy efficient design</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                  <Button className="w-full bg-sky-500 hover:bg-sky-600" asChild>
                    <Link href="/products/nitrogen-plants">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Product Card 2 - Fixed height and consistent image size */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all bg-white rounded-2xl flex flex-col h-full">
                <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-400 text-white p-6">
                  <CardTitle className="text-2xl">PSA Oxygen Plants</CardTitle>
                  <CardDescription className="text-blue-100">Medical & Industrial Grade Oxygen</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-6 overflow-hidden rounded-xl h-48 flex items-center justify-center bg-white">
                    <Image
                      src="/images/psa-oxygen-plant.png"
                      width={300}
                      height={200}
                      alt="PSA Oxygen Plant"
                      className="object-contain h-full w-auto max-w-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Flow rates: 1-500 Nm³/hr</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Purity: up to 93%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Medical & industrial applications</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                  <Button className="w-full bg-sky-500 hover:bg-sky-600" asChild>
                    <Link href="/products/oxygen-plants">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Product Card 3 - Fixed height and consistent image size */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all bg-white rounded-2xl flex flex-col h-full">
                <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-400 text-white p-6">
                  <CardTitle className="text-2xl">Heat of Compression Dryer</CardTitle>
                  <CardDescription className="text-blue-100">Energy Efficient Air Drying</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-6 overflow-hidden rounded-xl h-48 flex items-center justify-center bg-white">
                    <Image
                      src="/images/hoc-dryer.png"
                      width={300}
                      height={200}
                      alt="Heat of Compression Dryer"
                      className="object-contain h-full w-auto max-w-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Capacity: 100-10000 CFM</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>No external power required</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Low maintenance operation</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                  <Button className="w-full bg-sky-500 hover:bg-sky-600" asChild>
                    <Link href="/products/hoc-dryer">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Product Card 4 - Fixed height and consistent image size */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all bg-white rounded-2xl flex flex-col h-full">
                <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-400 text-white p-6">
                  <CardTitle className="text-2xl">Ammonia Cracking Units</CardTitle>
                  <CardDescription className="text-blue-100">Hydrogen Generation from Ammonia</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-6 overflow-hidden rounded-xl h-48 flex items-center justify-center bg-white">
                    <Image
                      src="/images/ammonia-cracking.png"
                      width={300}
                      height={200}
                      alt="Ammonia Cracking Unit"
                      className="object-contain h-full w-auto max-w-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>High-efficiency cracking furnace</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Fully automatic operation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Optional hydrogen purification</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                  <Button className="w-full bg-sky-500 hover:bg-sky-600" asChild>
                    <Link href="/products/ammonia-cracking">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Product Card 5 - Fixed height and consistent image size */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all bg-white rounded-2xl flex flex-col h-full">
                <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-400 text-white p-6">
                  <CardTitle className="text-2xl">PSA Hydrogen Plants</CardTitle>
                  <CardDescription className="text-blue-100">High-Purity Hydrogen Generation</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-6 overflow-hidden rounded-xl h-48 flex items-center justify-center bg-white">
                    <Image
                      src="/images/psa-hydrogen.png"
                      width={300}
                      height={200}
                      alt="PSA Hydrogen Plant"
                      className="object-contain h-full w-auto max-w-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Purity: up to 99.9999%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Capacity: 10-10,000 Nm³/hr</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>High hydrogen recovery rate</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                  <Button className="w-full bg-sky-500 hover:bg-sky-600" asChild>
                    <Link href="/products/hydrogen-plants">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Product Card 6 - Fixed height and consistent image size */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all bg-white rounded-2xl flex flex-col h-full">
                <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-400 text-white p-6">
                  <CardTitle className="text-2xl">Carbon Molecular Sieves</CardTitle>
                  <CardDescription className="text-blue-100">Advanced Gas Separation Media</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-6 overflow-hidden rounded-xl h-48 flex items-center justify-center bg-white">
                    <Image
                      src="/images/cms.png"
                      width={300}
                      height={200}
                      alt="Carbon Molecular Sieves"
                      className="object-contain h-full w-auto max-w-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Precise pore size distribution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>High selectivity for gas separation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-sky-500 flex-shrink-0" />
                      <span>Long service life</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                  <Button className="w-full bg-sky-500 hover:bg-sky-600" asChild>
                    <Link href="/products/cms">View Specifications</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-16 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-sky-200 text-sky-600 hover:bg-sky-50 transition-all"
              >
                <Link href="#">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section with Modern Design */}
        <section id="projects" className="w-full py-24 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-800 font-medium">
                  Our Projects
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Successful Implementations</h2>
                <p className="text-xl text-gray-600 md:text-xl/relaxed max-w-[900px] mx-auto">
                  From concept to completion, we deliver turnkey nitrogen gas solutions for diverse industrial
                  applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 py-12 md:grid-cols-2">
              <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-600 transition-colors">
                  Custom Engineering & Design
                </h3>
                <p className="text-gray-600 text-lg">
                  Our engineering team works with you to understand your requirements and design the optimal nitrogen
                  solution for your specific project needs.
                </p>
              </div>
              <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-600 transition-colors">
                  Installation & Commissioning
                </h3>
                <p className="text-gray-600 text-lg">
                  Professional installation services ensure your equipment is set up correctly and operating at peak
                  efficiency from day one.
                </p>
              </div>
              <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-600 transition-colors">
                  Turnkey Project Management
                </h3>
                <p className="text-gray-600 text-lg">
                  Complete project management from initial consultation to final handover, ensuring seamless
                  implementation.
                </p>
              </div>
              <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-600 transition-colors">
                  Ongoing Support & Optimization
                </h3>
                <p className="text-gray-600 text-lg">
                  Comprehensive maintenance programs and technical support to ensure your systems continue to perform
                  optimally.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-sky-200 text-sky-600 hover:bg-sky-50 transition-all"
              >
                <Link href="/projects">
                  See Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trusted Brands Section with Modern Design */}
        <section id="trusted-brands" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-800 font-medium">
                  Our Partners
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Trusted by Leading Brands</h2>
                <p className="text-xl text-gray-600 md:text-xl/relaxed max-w-[900px] mx-auto">
                  We're proud to work with industry leaders across various sectors worldwide.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-12 py-12">
              <div className="flex items-center justify-center p-4 transition-all hover:scale-110">
                <Image
                  src="/images/brands/tata.png"
                  width={120}
                  height={60}
                  alt="Tata Logo"
                  className="aspect-[2/1] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 transition-all hover:scale-110">
                <Image
                  src="/images/brands/reliance.png"
                  width={120}
                  height={60}
                  alt="Reliance Industries Logo"
                  className="aspect-[2/1] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 transition-all hover:scale-110">
                <Image
                  src="/images/brands/divis.png"
                  width={120}
                  height={60}
                  alt="Divi's Laboratories Logo"
                  className="aspect-[2/1] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 transition-all hover:scale-110">
                <Image
                  src="/images/brands/adani.png"
                  width={120}
                  height={60}
                  alt="Adani Logo"
                  className="aspect-[2/1] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 transition-all hover:scale-110">
                <Image
                  src="/images/brands/gail.png"
                  width={120}
                  height={60}
                  alt="GAIL India Limited Logo"
                  className="aspect-[2/1] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 transition-all hover:scale-110">
                <Image
                  src="/images/brands/jubilant.png"
                  width={120}
                  height={60}
                  alt="Jubilant FoodWorks Logo"
                  className="aspect-[2/1] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 transition-all hover:scale-110">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emami-u7aj6PY4SNxIxwpoERRMHLn3d0nCU0.jpeg"
                  width={120}
                  height={60}
                  alt="Emami Logo"
                  className="aspect-[2/1] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center justify-center p-4 transition-all hover:scale-110">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Punj_Lloyd-4iDL6InD0Mdxah4V4zTKRhkjgIERm6.webp"
                  width={120}
                  height={60}
                  alt="Punj Lloyd Logo"
                  className="aspect-[2/1] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Modern Design */}
        <section id="contact" className="w-full py-24 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-800 font-medium">
                  Contact Us
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-xl text-gray-600 md:text-xl/relaxed max-w-[900px] mx-auto">
                  Have questions or ready to discuss your gas generation requirements? Our team is here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 py-12 lg:grid-cols-2">
              <div className="grid gap-10">
                <div className="group flex items-start gap-6 transition-all">
                  <div className="rounded-full bg-sky-100 p-4 group-hover:bg-sky-200 transition-colors">
                    <Phone className="h-6 w-6 text-sky-600" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Phone</h3>
                    <p className="text-gray-600 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="group flex items-start gap-6 transition-all">
                  <div className="rounded-full bg-sky-100 p-4 group-hover:bg-sky-200 transition-colors">
                    <Mail className="h-6 w-6 text-sky-600" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Email</h3>
                    <a
                      href="mailto:sales@gastekengg.com"
                      className="text-gray-600 text-lg hover:text-sky-600 transition-colors"
                    >
                      sales@gastekengg.com
                    </a>
                  </div>
                </div>
                <div className="group flex items-start gap-6 transition-all">
                  <div className="rounded-full bg-sky-100 p-4 group-hover:bg-sky-200 transition-colors">
                    <MapPin className="h-6 w-6 text-sky-600" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Address</h3>
                    <a
                      href="https://www.google.com/maps/search/704-705,+Modicorp+Tower,+Nehru+Place,+New+Delhi,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-lg hover:text-sky-600 transition-colors"
                    >
                      704-705, Modicorp Tower, 98, Nehru Place, New Delhi, Delhi 110019, India
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 p-8 shadow-lg">
                <ContactForm />
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <a
                href="https://www.linkedin.com/company/gastek-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-sky-600 transition-colors group"
              >
                <div className="rounded-full bg-sky-100 p-2 group-hover:bg-sky-200 transition-colors">
                  <Image src="/images/linkedin-logo.png" width={24} height={24} alt="LinkedIn" className="rounded-sm" />
                </div>
                <span className="text-lg">Follow us on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
