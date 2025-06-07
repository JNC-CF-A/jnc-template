import Link from "next/link";
import { useRouter } from "next/router";

export default function Breadcrumb() {
  const router = useRouter();
  const segments = router.asPath.split("/").filter((s) => s !== "");

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="list">
        <li className="item">
          <Link href="/" className="home-link">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const title = segment.charAt(0).toUpperCase() + segment.slice(1);
          return (
            <li key={index} className="item">
              <span className="separator">&gt;</span>
              {isLast ? (
                <span className="current" aria-current="page">
                  {title}
                </span>
              ) : (
                <Link href={href} className="link">
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <style jsx>{`
        .breadcrumb {
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .item {
          display: flex;
          align-items: center;
        }
        .separator {
          margin: 0 0.5rem;
          color: #9b9b9b;
        }
        .home-link,
        .link {
          color: #15847d;
          text-decoration: none;
        }
        .home-link:hover,
        .link:hover {
          color: #ed64a6;
        }
        .current {
          color: #4a4a4a;
        }
      `}</style>
    </nav>
  );
}
