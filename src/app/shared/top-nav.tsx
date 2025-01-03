'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          BusinessPro
        </Link>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links and Buttons */}
        <nav
          className={`absolute left-0 top-16 z-40 w-full bg-background px-4 py-6 shadow-md md:static md:flex md:items-center md:space-x-4 md:bg-transparent md:p-0 md:shadow-none ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="space-y-4 md:flex md:space-y-0 md:space-x-4 lg:space-x-8 lg:mx-auto">
            <li>
              <Link href="/features" className="block text-lg md:text-base">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="block text-lg md:text-base">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="block text-lg md:text-base">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-lg md:text-base">
                Contact
              </Link>
            </li>
          </ul>

        
          <div className="mt-6 flex flex-row items-center md:mt-0 md:space-x-4">
  <Button variant='ghost' asChild>
    <Link href="/auth/login">Log In</Link>
  </Button>
  <Button asChild>
    <Link href="/auth/signup">Sign Up</Link>
  </Button>
</div>
        </nav>
      </div>
    </header>
  )
}
