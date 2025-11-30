"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Zap } from "lucide-react"

interface Project {
  title: string
  category: string
  description: string
  impact: string
  year: string
}

const projectsData: Project[] = [
  {
    title: "LauncHER Engineers Hub",
    category: "Social Impact",
    description: "Co-founded non-profit organization empowering young female engineers and innovators in STEM careers",
    impact: "3,500+ youths reached, 40+ volunteers, breaking barriers for women in engineering",
    year: "2019 - Present",
  },
  {
    title: "Engineering Student Development Program",
    category: "Education",
    description: "Comprehensive training and development program at The Copperbelt University School of Mines",
    impact: "350+ engineering students trained in Mine Planning & Design and mining software",
    year: "2014 - Present",
  },
  {
    title: "SME Master Training Initiative",
    category: "Capacity Building",
    description: "ILO-certified training program for small and medium enterprises in technical and business skills",
    impact: "180+ SMEs trained with follow-up services and M&E implementation",
    year: "2018 - Present",
  },
  {
    title: "ASM Sustainable Mining Solutions",
    category: "Research & Development",
    description: "Developing sustainable practices and training programs for artisanal and small-scale mining operations",
    impact: "Improved safety standards and environmental compliance in ASM sector",
    year: "2015 - Present",
  },
]

export default function Projects() {
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
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`${isVisible ? "animate-float-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Notable Projects
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary transition-all duration-300 hover:animate-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-muted opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <Zap className="text-secondary group-hover:rotate-12 transition-transform" size={20} />
                  </div>

                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                        Impact
                      </p>
                      <p className="text-secondary font-semibold">{project.impact}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{project.year}</p>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors pt-2"
                  >
                    Learn more <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
