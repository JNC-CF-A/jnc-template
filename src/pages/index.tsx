import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import TestimonialSlider from "../components/TestimonialSlider";
import WorkWithMeSection from "../components/WorkWithMeSection";
import ContactForm from "../components/ContactForm";
import Link from "next/link";



export default function Index() {
  return (
    <Layout showBreadcrumb={false}>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />

      <section className="hero">
        <div className="overlay">
          <h1>
            Hi, We're Jemma's Nutritional Coaching<span className="fancy">.</span>
          </h1>
          <span className="handle">@jemmasnutritionalcoaching</span>
          <h2>Coaching for a healthy life.</h2>
          <Link href="/services" className="explore">
            Explore Our Services
          </Link>
        </div>
      </section>

      <section className="testimonials max-w-2xl mx-auto text-center bg-secondary p-6 rounded-lg">
        <h2>What Our Clients Say</h2>
        <TestimonialSlider />
      </section>

      <WorkWithMeSection />

      <section className="contact">
        <ContactForm />
      </section>

      <style jsx>{`
        .hero {
          background: url('/images/hero-image.jpg') center/cover no-repeat;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .overlay {
          color: #ffffff;
        }
        .overlay h1 {
          font-size: 2.5rem;
          font-weight: 500;
          margin: 2.5rem 0 0 0;
        }
        .overlay h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
          margin-bottom: 1rem;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: block;
          margin-top: 0.275em;
          color: #ffffff;
          letter-spacing: 0.05em;
        }
        .explore {
          display: inline-block;
          margin-top: 1rem;
          background: var(--accent-orange);
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 0.25rem;
          text-decoration: none;
          transition: background-color 150ms;
        }
        .explore:hover {
          background: var(--accent-olive);
        }
        .testimonials {
          padding: 3rem 1rem;
          text-align: center;
        }
        .testimonials h2 {
          margin-bottom: 2rem;
        }
        .contact {
          padding: 3rem 1rem;
        }
        @media (min-width: 769px) {
          .overlay h1 {
            font-size: 3rem;
          }
          .overlay h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
