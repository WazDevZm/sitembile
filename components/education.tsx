"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Calendar } from "lucide-react"

interface Education {
  degree: string
  field: string
  institution: string
  year: string
  details: string[]
}

const educationData: Education[] = [
  {
    degree: "PhD Candidate",
    field: "Mining and Mineral Engineering",
    institution: "University of South Africa/Universiteit van Suid-Afrika",
    year: "2024 - 2028",
    details: ["Doctor of Philosophy - PhD Candidate", "Research focus on sustainable mining practices"],
  },
  {
    degree: "Master's Degree",
    field: "Geotechnical Engineering with Project Management",
    institution: "University of Strathclyde, UK Scotland",
    year: "2018 - 2019",
    details: ["Master of Science (MSc)", "Specialized in geotechnical analysis and project management"],
  },
  {
    degree: "Mandela Washington Fellowship",
    field: "Organisational Leadership - Common Leadership Curriculum",
    institution: "University of Nevada, Reno, USA",
    year: "2024",
    details: ["June 2024 - August 2024", "Leadership development and organizational management"],
  },
  {
    degree: "Bachelor's Degree",
    field: "Mining Engineering",
    institution: "The Copperbelt University, Zambia",
    year: "2010 - 2014",
    details: ["Bachelor of Engineering (BEng)", "Foundation in mining operations and engineering principles"],
  },
]

export default function Education() {
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
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`${isVisible ? "animate-float-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Education & Certifications
          </h2>

          <div className="mt-12 space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="relative group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full group-hover:w-1.5 transition-all" />

                <div className="pl-8 p-6 bg-muted rounded-lg border border-border hover:border-primary group-hover:animate-lift transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-secondary font-semibold text-lg">{edu.field}</p>
                    </div>
                    <span className="flex items-center gap-2 text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-3 flex items-center gap-2">
                    <Award size={16} className="text-secondary" />
                    {edu.institution}
                  </p>

                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-secondary" />
                        {detail}
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
