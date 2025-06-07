import Link from "next/link";
import { Salad, Dumbbell, Users, BookOpen, ClipboardList, PhoneCall } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Salad className="w-8 h-8" />
          <span>Jemma's <span className="text-accent-terra">Nutritional</span> Coaching</span>
        </Link>
        <ul className="menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/posts">Blog</Link></li>
          <li className="hidden"><Link href="/onboarding">Client Onboarding</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li className="cta"><Link href="/contact" className="bg-accent-terra text-white font-bold py-2 px-4 rounded-full hover:bg-accent-olive transition-colors flex items-center">
              <PhoneCall className="w-4 h-4 mr-2" />
              Book a Call
            </Link></li>
        </ul>
      </div>
      <style jsx>{`
        .header {
          background: #fff;
          border-bottom: 1px solid #eee;
        }
        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-weight: bold;
          color: #222;
        }
        .accent {
          color: #15847d;
        }
        .menu {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
        }
        .menu li:not(:last-child) {
          margin-right: 1rem;
        }
        .cta a {
          background: #15847d;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
        }
        .hidden {
          display: none;
          }
      `}</style>
    </header>
  );
}
