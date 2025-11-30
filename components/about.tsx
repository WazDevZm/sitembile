"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div ref={ref} className={`relative ${isVisible ? "animate-float-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Bio */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                I best describe myself as a Training and Development Specialist with over 10 years of experience as a Mining Engineer. My expertise ranges from training and developing over 350 engineering students as a Lecturer at The Copperbelt University, training over 180 SMEs as an ILO-certified Master Trainer, and mentoring over 3,500 youths and female engineers through our initiatives.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                My specialization is in Mine Planning & Design, mining software training, and artisanal and small-scale mining (ASM) solutions. I gained valuable industry experience with First Quantum Minerals Limited before transitioning to academia at The Copperbelt University's School of Mines and Mineral Sciences.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                As Co-Founder of LauncHER Engineers Hub, I'm passionate about breaking down barriers for young female engineers and innovators. Our non-profit has reached over 3,500 youths in engineering with 40+ dedicated volunteers, creating pathways for the next generation of engineering leaders.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {[
                { title: "Education", desc: "350+ students trained", color: "primary" },
                { title: "Mentorship", desc: "3,500+ youths empowered", color: "secondary" },
                { title: "Leadership", desc: "ILO Master Trainer", color: "accent" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 bg-muted rounded-lg border border-border hover:border-${item.color} hover:animate-lift transition-all duration-300`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <h3 className={`font-semibold text-${item.color} mb-1`}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
