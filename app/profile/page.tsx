import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Users, Globe, FileCheck } from "lucide-react"

export default function ProfilePage() {
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
            <Link href="/profile" className="text-sm font-medium text-primary hover:underline underline-offset-4">
              Profile
            </Link>
            <Link href="/#products" className="text-sm font-medium hover:underline underline-offset-4">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Company Profile</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Gastek Engineering (P) Ltd.</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 1993, Gastek is a well-known company involved in manufacturing and exporting of Nitrogen
                  Gas Generator, PSA Nitrogen Gas Generator, PSA Oxygen Gas Generator and Ammonia Cracking Units.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our History</h2>
                <p className="text-gray-500">
                  We have earned healthy reputation in the market through our quality offerings. Our range of products
                  are known worldwide. Our quality offerings have earned us clients from overseas.
                </p>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-gray-700" />
                  <span className="font-medium">Established in 1993</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gray-700" />
                  <span className="font-medium">ISO 9001:2015 Certified Company</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-gray-700" />
                  <span className="font-medium">Exporting to countries worldwide</span>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Gastek Engineering Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Products</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Owing to quality, we serve the needs of clients through the wide range of products which are PSA
                  nitrogen plants, PSA/VPSA Oxygen plants, Ammonia cracking units and HOC hair dryers. We offer amazing
                  line of products which can well satisfy our clients.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/#products">View Our Product Range</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Collaboration</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are well name in the field of manufacturing and exporting of chemical plants.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-gray-500">
                  Our collaboration with Carbotech, Germany, have enabled us to produce products which are international
                  quality standards. Our offering are amazing and unique which can be found no where.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button variant="outline" asChild>
                    <Link href="#">View/Download License Certificate</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[150px] w-[300px]">
                  <Image
                    src="/placeholder.svg?height=150&width=300"
                    alt="Carbotech Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Quality</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Gastek believes in delivering quality. Company take care that the products are up to the mark.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-gray-500">
                  We make the products according to stringent quality policy in delivering Plants matching international
                  standards. Company is ISO 9001:2015 certified. We never compromise on quality and offers are client
                  outstanding.
                </p>
                <p className="text-gray-500">
                  Exports chemical plant, steel plant equipment, shell chemical plant, chemical plant machinery. Company
                  is regular exporter of these equipments having supplied to many countries.
                </p>
                <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-gray-700" />
                  <span className="font-medium">Stringent Quality Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gray-700" />
                  <span className="font-medium">ISO 9001:2015 Certified</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[150px] w-[300px]">
                  <Image
                    src="/placeholder.svg?height=150&width=300"
                    alt="ISO Certification"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Clientele</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We have a varied clientele from diverse industries.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Users className="h-6 w-6 text-gray-700" />
                      <div>
                        <h3 className="text-xl font-bold">Industries We Serve</h3>
                        <p className="text-gray-500">
                          We have a varied clientele from diverse industries like steel, pharmaceuticals, chemicals,
                          food packaging and more. Our products are supplied to leading industries in India and Abroad
                          chemical plant, steel plant equipment, shell chemical plant, chemical plant machinery. We have
                          wide range of products including Punj Lloyd, Ciba, Ultam, Emami, TATA etc.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                      <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0">
                        <Image
                          src="/placeholder.svg?height=60&width=120"
                          width={120}
                          height={60}
                          alt="Client Logo"
                          className="aspect-[2/1] object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0">
                        <Image
                          src="/placeholder.svg?height=60&width=120"
                          width={120}
                          height={60}
                          alt="Client Logo"
                          className="aspect-[2/1] object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0">
                        <Image
                          src="/placeholder.svg?height=60&width=120"
                          width={120}
                          height={60}
                          alt="Client Logo"
                          className="aspect-[2/1] object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0">
                        <Image
                          src="/placeholder.svg?height=60&width=120"
                          width={120}
                          height={60}
                          alt="Client Logo"
                          className="aspect-[2/1] object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
