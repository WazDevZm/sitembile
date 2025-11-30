"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, MapPin } from "lucide-react"

interface Job {
  title: string
  company: string
  location: string
  duration: string
  description: string[]
}

const jobs: Job[] = [
  {
    title: "Lecturer - Mining Engineering",
    company: "The Copperbelt University",
    location: "School of Mines and Mineral Sciences, Zambia",
    duration: "2014 - Present",
    description: [
      "Training and developing over 350 engineering students in Mine Planning & Design",
      "Specializing in mining software training and ASM sustainable solutions",
      "Conducting research in artisanal and small-scale mining methodologies",
    ],
  },
  {
    title: "Co-Founder & Training Specialist",
    company: "LauncHER Engineers Hub",
    location: "Zambia",
    duration: "2019 - Present",
    description: [
      "Empowered over 3,500 youths and female engineers through mentorship programs",
      "Built a network of 40+ volunteers supporting young engineers",
      "Developed initiatives to break barriers for female engineers in STEM",
    ],
  },
  {
    title: "ILO Certified Master Trainer",
    company: "International Labour Organisation",
    location: "Regional",
    duration: "2018 - Present",
    description: [
      "Trained over 180 SMEs in business development and technical skills",
      "Expertise in marketing training interventions and conducting needs analysis",
      "Program design, implementation, and monitoring & evaluation of training initiatives",
    ],
  },
  {
    title: "Mining Engineer",
    company: "First Quantum Minerals Limited",
    location: "Zambia",
    duration: "2014 - Present",
    description: [
      "Specialized in Mine Planning & Design for large-scale operations",
      "Developed expertise in sustainable mining practices",
      "Contributed to operational efficiency and safety protocols",
    ],
  },
]

export default function Experience() {
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
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`${isVisible ? "animate-float-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Professional Experience
          </h2>

          <div className="mt-12 space-y-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="group relative p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:animate-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-muted rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="text-primary" size={20} />
                        <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                      </div>
                      <p className="text-lg text-secondary font-semibold">{job.company}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      index === 0 ? "bg-primary/10 text-primary" :
                      index === 1 ? "bg-secondary/10 text-secondary" :
                      index === 2 ? "bg-accent/10 text-accent" :
                      "bg-primary/10 text-primary"
                    }`}>
                      {job.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin size={16} />
                    {job.location}
                  </div>

                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
