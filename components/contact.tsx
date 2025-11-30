"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`relative ${isVisible ? "animate-float-up" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to collaborations in mining education, STEM advocacy, and empowering the next generation of
              engineers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <a
                href="mailto:contact@sitembile.com"
                className="group flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold text-foreground">contact@sitembile.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sitembile-ncube-kaseka"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary transition-all duration-300"
              >
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Linkedin className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-semibold text-foreground">Sitembile Ncube-Kaseka</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold text-foreground">Zambia</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-xl border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Collaboration Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
