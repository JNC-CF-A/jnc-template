import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";

type Props = {
  children: React.ReactNode;
  showBreadcrumb?: boolean;
};
export default function Layout({ children, showBreadcrumb = true }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Header />
      {showBreadcrumb && <Breadcrumb />}
      <main>{children}</main>
      <Footer />
      <style jsx>
        {`
          .root {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            box-sizing: border-box;
          }
          main {
            flex: 1 0 auto;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
}
