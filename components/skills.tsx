"use client"

import { useEffect, useRef, useState } from "react"

interface SkillCategory {
  category: string
  skills: { name: string; level: number }[]
}

const skillsData: SkillCategory[] = [
  {
    category: "Mine Planning & Design",
    skills: [
      { name: "Mine Planning & Design", level: 95 },
    ],
  },
  {
    category: "Training & Development",
    skills: [
      { name: "Training & Development", level: 93 },
    ],
  },
  {
    category: "ASM Solutions",
    skills: [
      { name: "ASM Solutions", level: 90 },
    ],
  },
  {
    category: "Mining Software",
    skills: [
      { name: "Mining Software", level: 92 },
    ],
  },
  {
    category: "STEM Advocacy",
    skills: [
      { name: "STEM Advocacy", level: 95 },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`${isVisible ? "animate-float-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Skills & Expertise
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skillsData.map((category, catIndex) => (
              <div
                key={catIndex}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:animate-lift text-center"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-primary">{category.skills[0].level}%</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
                  <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: isVisible ? `${category.skills[0].level}%` : "0%",
                        transitionDelay: `${catIndex * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
