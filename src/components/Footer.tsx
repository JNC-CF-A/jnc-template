import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Jemma's Nutritional Coaching. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-terra transition-colors">
            <Facebook />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-terra transition-colors">
            <Instagram />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-terra transition-colors">
            <Linkedin />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-terra transition-colors">
            <Twitter />
          </Link>
        </div>
      </div>
    </footer>
  )
}
