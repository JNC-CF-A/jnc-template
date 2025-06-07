'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-foreground font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-lime"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-foreground font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-raspberry"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-foreground font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-orange"
          ></textarea>
        </div>
        <button type="submit" className="bg-accent-lime text-white font-bold py-2 px-4 rounded hover:bg-accent-raspberry transition-colors">
          Send Message
        </button>
      </form>
    </section>
  )
}
