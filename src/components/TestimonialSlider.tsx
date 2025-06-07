'use client'

import { useState, useEffect } from 'react'
import { testimonials } from '../lib/testimonials'

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = testimonials[currentIndex]

  return (
    <div className="max-w-2xl mx-auto text-center">
      <blockquote className="transition-opacity duration-300">
        <p className="text-lg font-medium text-primary-foreground mb-4">"{testimonial.text}"</p>
        <cite className="text-accent-terra font-semibold">- {testimonial.name}</cite>
      </blockquote>
    </div>
  )
}