import testimonialsData from "../../meta/testimonials.yml";

export type Testimonial = {
  readonly id: number;
  readonly name: string;
  readonly text: string;
};

export const testimonials: Testimonial[] = testimonialsData.testimonials;
