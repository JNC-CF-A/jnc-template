import { testimonials } from "../lib/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="my-12 bg-secondary py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary-foreground">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-secondary p-6 rounded-lg shadow-md">
              <p className="text-secondary-foreground mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-accent-orange">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
