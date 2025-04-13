import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Download, Phone } from "lucide-react"

export default function CMSPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Carbon Molecular Sieves (CMS)</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  High-quality Carbon Molecular Sieves for efficient gas separation applications.
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
                src="/images/cms.png"
                width={700}
                height={550}
                alt="Carbon Molecular Sieves"
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
                  Carbon Molecular Sieves (CMS) are specialized carbonaceous adsorbent materials with a precise pore
                  size distribution, primarily used for gas separation processes. Unlike traditional activated carbons,
                  CMS has a narrow pore size distribution that allows for highly selective adsorption based on the
                  kinetic diameter of gas molecules.
                </p>
                <p className="text-gray-500">
                  Our CMS products are manufactured using high-quality raw materials and advanced production techniques
                  to ensure consistent performance and long service life. The unique microporous structure of our CMS
                  enables efficient separation of gases in various industrial applications.
                </p>
                <h3 className="text-xl font-bold mt-6">Applications</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Nitrogen generation from air (PSA technology)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Methane/nitrogen separation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Hydrogen purification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Air separation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Biogas upgrading</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                    <span>Natural gas processing</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Technical Specifications</h2>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Precise pore size distribution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>High selectivity for gas separation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Excellent mechanical strength</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Low dust content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>High adsorption capacity</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Long service life</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-gray-700" />
                      <span>Consistent performance</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-4">Working Principle</h3>
                  <p className="text-gray-500">
                    Carbon Molecular Sieves operate on the principle of kinetic selectivity. The separation is based on
                    the difference in diffusion rates of different gas molecules through the precisely sized micropores
                    of the CMS.
                  </p>
                  <p className="text-gray-500 mt-4">
                    For example, in nitrogen generation, oxygen molecules (with a smaller kinetic diameter) diffuse more
                    rapidly into the CMS pores than nitrogen molecules. This allows nitrogen to pass through while
                    oxygen is retained, resulting in high-purity nitrogen production.
                  </p>
                  <p className="text-gray-500 mt-4">
                    The adsorption process is typically carried out in a pressure swing adsorption (PSA) system, where
                    the CMS is regenerated by reducing the pressure, allowing the adsorbed gases to be released.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Advantages of Our CMS</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Carbon Molecular Sieves offer numerous benefits for gas separation applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">High Selectivity</h3>
                <p className="text-center text-gray-500">
                  Precisely engineered pore structure enables highly selective gas separation based on molecular size.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Durability</h3>
                <p className="text-center text-gray-500">
                  Exceptional mechanical strength and resistance to attrition ensures long operational life.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Consistent Performance</h3>
                <p className="text-center text-gray-500">
                  Maintains separation efficiency over thousands of adsorption-desorption cycles.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Low Pressure Drop</h3>
                <p className="text-center text-gray-500">
                  Optimized particle size and shape minimizes pressure drop across adsorption beds.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">High Purity Output</h3>
                <p className="text-center text-gray-500">
                  Enables production of high-purity gases for demanding industrial applications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Cost Effective</h3>
                <p className="text-center text-gray-500">
                  Reduces operational costs through efficient gas separation and long service life.
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
                  Contact our team to discuss your Carbon Molecular Sieve requirements and get a customized solution.
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
