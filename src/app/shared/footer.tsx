import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-muted text-gray-600 ">
      <div className="container mx-auto px-11 py-12">
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">Company</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="hover:text-primary">About</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">Careers</Link>
              </li>
              <li>
                <Link href="/brand" className="hover:text-primary">FAQ</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">Legal</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/licensing" className="hover:text-primary">Licensing</Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-primary">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">Help center</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/discord" className="hover:text-primary">Discord Server</Link>
              </li>
              
              <li>
                <Link href="/contact" className="hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">Subscribe</h2>
            <p className="mb-4 text-sm">Stay updated with our latest features and releases</p>
            <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-md"
              />
              <Button type="submit" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-sm">
            © 2023 BusinessPro™. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}