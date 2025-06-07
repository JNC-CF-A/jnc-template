'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../lib/testimonials'

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <blockquote className="text-center">
                <p className="text-lg font-medium text-primary-foreground mb-4">"{testimonial.text}"</p>
                <cite className="text-accent-terra font-semibold">- {testimonial.name}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <button onClick={goToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <ChevronLeft className="w-6 h-6 text-accent-sage" />
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <ChevronRight className="w-6 h-6 text-accent-sage" />
      </button>
    </div>
  )
}
