import Link from "next/link";
import { SocialList } from "./SocialList";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Jemma's Nutritional Coaching. All rights reserved.</p>
        <SocialList />
      </div>
      <style jsx>{`
        .footer {
          background: #2c3e50;
          color: #ecf0f1;
        }
        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 769px) {
          .container {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}
