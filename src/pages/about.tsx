import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import Image from "next/image";
import Script from "next/script";

export default function AboutPage() {
  const url = "/about";
  const title = "About Us";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "HealthAndBeautyBusiness",
      name: "Jemma's Nutritional Coaching",
      description:
        "Expert nutritional coaching to help you achieve your health and wellness goals.",
      founder: {
        "@type": "Person",
        name: "Jemma Smith",
        jobTitle: "Founder & Lead Nutritionist",
      },
      employee: [
        {
          "@type": "Person",
          name: "John Doe",
          jobTitle: "Nutritionist & Wellness Coach",
        },
      ],
    },
  };

  return (
    <Layout>
      <BasicMeta
        url={url}
        title={title}
        description="Learn about Jemma's Nutritional Coaching, our mission, and our expert team dedicated to your health and wellness."
      />
      <OpenGraphMeta
        url={url}
        title="About Jemma's Nutritional Coaching"
        description="Discover our mission and meet our expert team of nutritional coaches"
        image="/about-og-image.jpg"
      />
      <TwitterCardMeta
        url={url}
        title="About Jemma's Nutritional Coaching"
        description="Discover our mission and meet our expert team of nutritional coaches"
      />
      <Script
        id="json-ld-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          About Jemma's Nutritional Coaching
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Jemma's Nutritional Coaching, our mission is to empower individuals
            to achieve optimal health through personalized nutrition guidance. We
            believe that proper nutrition is the foundation of a healthy,
            fulfilling life, and we're dedicated to helping our clients build
            that foundation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Jemma Smith"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jemma Smith</h3>
              <p className="text-gray-600 mb-2">Founder & Lead Nutritionist</p>
              <p className="text-gray-700">
                With over 15 years of experience in nutrition and dietetics,
                Jemma founded Jemma's Nutritional Coaching to bring personalized
                nutrition coaching to a wider audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="John Doe"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600 mb-2">Nutritionist & Wellness Coach</p>
              <p className="text-gray-700">
                John specializes in sports nutrition and has helped numerous
                athletes optimize their performance through tailored nutrition
                plans.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-gray-700 mb-4">
            We believe in a holistic, evidence-based approach to nutrition. Our
            coaching goes beyond just meal plans – we educate our clients on the
            'why' behind our recommendations, empowering them to make informed
            decisions about their health.
          </p>
          <p className="text-gray-700 mb-4">
            Our personalized approach takes into account your unique lifestyle,
            preferences, and health goals. We work closely with you to create
            sustainable changes that lead to long-term health benefits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
          <p className="text-gray-700 mb-4">
            Ready to start your journey towards better health? Contact us today
            to schedule a consultation and learn how Jemma's Nutritional
            Coaching can help you achieve your nutrition and wellness goals.
          </p>
          <a
            href="/contact"
            className="bg-accent-lime text-white font-bold py-2 px-4 rounded hover:bg-accent-raspberry transition-colors inline-block"
          >
            Contact Us
          </a>
        </section>
      </div>
    </Layout>
  );
}
