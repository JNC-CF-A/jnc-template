"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-accent-lime hover:text-accent-raspberry transition-colors">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          const isLast = index === segments.length - 1;
          const title = segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={segment} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              {isLast ? (
                <span className="text-gray-700" aria-current="page">{title}</span>
              ) : (
                <Link href={href} className="text-accent-lime hover:text-accent-raspberry transition-colors">
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
