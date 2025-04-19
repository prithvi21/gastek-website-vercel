import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail } from "lucide-react"
import { Footer } from "@/components/footer"

export default function CareersPage() {
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Join Our Team</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Careers at Gastek Engineering</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our team of talented professionals and be part of a company that's been setting industry
                  benchmarks since 1993.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Current Opportunities</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our current job openings and find the perfect role for your skills and experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Process Engineer</CardTitle>
                  <CardDescription>Engineering Department</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-500">
                    We're looking for a Process Engineer with experience in gas separation technologies to join our
                    engineering team.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>5+ years experience in process engineering</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>B.Tech/M.Tech in Chemical Engineering</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Knowledge of PSA technology preferred</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sales Engineer</CardTitle>
                  <CardDescription>Sales Department</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-500">
                    Join our sales team to help clients find the right gas generation solutions for their specific
                    needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>3+ years in technical sales</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Engineering background preferred</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Excellent communication skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>General Application</CardTitle>
                  <CardDescription>All Departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-500">
                    Don't see a position that matches your skills? Submit your CV for future opportunities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>We're always looking for talented individuals</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Engineering, sales, and technical roles</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Fresh graduates and experienced professionals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">
                To apply for any of these positions, please send your CV and cover letter to the email below with the
                position title in the subject line:
              </p>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-gray-700" />
                <a href="mailto:careers@gastekengg.com" className="text-gray-700 hover:text-gray-900 font-medium">
                  careers@gastekengg.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Join Gastek Engineering?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a dynamic work environment with opportunities for growth and development.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white">
                <h3 className="text-xl font-bold">Professional Growth</h3>
                <p className="text-center text-gray-500">
                  Continuous learning opportunities and career advancement paths for all employees
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white">
                <h3 className="text-xl font-bold">Innovative Environment</h3>
                <p className="text-center text-gray-500">
                  Work on cutting-edge gas generation technologies and contribute to sustainable solutions
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white">
                <h3 className="text-xl font-bold">Global Impact</h3>
                <p className="text-center text-gray-500">
                  Our products serve critical industries worldwide, making a difference in multiple sectors
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
