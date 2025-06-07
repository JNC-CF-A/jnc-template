import Link from "next/link";
import { Salad, Dumbbell, Users, BookOpen, ClipboardList, PhoneCall } from 'lucide-react';
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <nav className="container flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Salad className="w-8 h-8" />
          <span>Jemma's <span className="text-accent-terra">Nutritional</span> Coaching</span>
        </Link>
        <ul className="flex space-x-4 items-center no-bullet-list">
          <li><Link href="/" className="hover:text-accent-sage transition-colors">Home</Link></li>
          <li><Link href="/services" className="hover:text-accent-sage transition-colors">Services</Link></li>
          <li><Link href="/about" className="hover:text-accent-sage transition-colors">About</Link></li>
          <li><Link href="/posts" className="hover:text-accent-sage transition-colors">Blog</Link></li>
          <li><Link href="/onboarding" className="hover:text-accent-sage transition-colors">Client Onboarding</Link></li>
          <li><Link href="/contact" className="hover:text-accent-sage transition-colors">Contact</Link></li>
          <li>
            <Link href="/contact" className="bg-accent-terra text-white font-bold py-2 px-4 rounded-full hover:bg-accent-olive transition-colors flex items-center">
              <PhoneCall className="w-4 h-4 mr-2" />
              Book a Call
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
