import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import TestimonialsSection from "../components/TestimonialsSection";
import TestimonialSlider from "../components/TestimonialSlider";

export default function TestimonialsPage() {
  const url = "/testimonials";
  const title = "Testimonials";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Testimonials</h1>
        <TestimonialSlider />
        <TestimonialsSection />
      </div>
    </Layout>
  );
}
