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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`${isVisible ? "animate-float-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Professional Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of impact, innovation, and dedication to mining engineering and STEM education
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-24">
              {jobs.map((job, index) => {
                const isLeft = index % 2 === 0
                const colors = [
                  { dot: "bg-primary", ring: "ring-primary/20", badge: "bg-primary/10 text-primary" },
                  { dot: "bg-secondary", ring: "ring-secondary/20", badge: "bg-secondary/10 text-secondary" },
                  { dot: "bg-accent", ring: "ring-accent/20", badge: "bg-accent/10 text-accent" },
                  { dot: "bg-primary", ring: "ring-primary/20", badge: "bg-primary/10 text-primary" },
                ]
                const color = colors[index % colors.length]

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col`}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-6 h-6 rounded-full ${color.dot} ring-8 ${color.ring} ring-offset-4 ring-offset-background`} />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-[calc(50%-3rem)] ${
                        isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                      }`}
                    >
                      <div className="group relative p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                        {/* Decorative corner accent */}
                        <div className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-20 h-20 ${color.badge} opacity-10 rounded-2xl blur-2xl group-hover:opacity-20 transition-opacity`} />

                        <div className="relative">
                          {/* Duration Badge */}
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${color.badge}`}>
                            <div className={`w-2 h-2 rounded-full ${color.dot} animate-pulse`} />
                            {job.duration}
                          </div>

                          {/* Job Title */}
                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                            <div className={`p-2 rounded-lg ${color.badge}`}>
                              <Briefcase className={color.dot.replace("bg-", "text-")} size={20} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{job.title}</h3>
                          </div>

                          {/* Company */}
                          <p className="text-lg font-semibold text-secondary mb-2">{job.company}</p>

                          {/* Location */}
                          <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${isLeft ? "md:justify-end" : ""}`}>
                            <MapPin size={16} />
                            <span className="text-sm">{job.location}</span>
                          </div>

                          {/* Description */}
                          <ul className={`space-y-3 ${isLeft ? "md:items-end" : ""}`}>
                            {job.description.map((item, i) => (
                              <li
                                key={i}
                                className={`flex items-start gap-3 text-muted-foreground ${
                                  isLeft ? "md:flex-row-reverse md:text-right" : ""
                                }`}
                              >
                                <span className={`w-2 h-2 rounded-full ${color.dot} mt-1.5 flex-shrink-0`} />
                                <span className="text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Timeline Dot */}
                    <div className="md:hidden flex items-center justify-center my-4">
                      <div className={`w-4 h-4 rounded-full ${color.dot} ring-4 ${color.ring}`} />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Timeline End Marker */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bottom-0 z-10">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
