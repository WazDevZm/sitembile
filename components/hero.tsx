"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Sitembile Ncube-Kaseka"
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    setIsLoaded(true)
    
    const typeText = () => {
      let currentIndex = 0
      setIsTypingComplete(false)
      setShowCursor(true)
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setIsTypingComplete(true)
          
          // Wait 3 seconds, then restart
          setTimeout(() => {
            setDisplayedText("")
            setShowCursor(true)
            setTimeout(typeText, 500)
          }, 3000)
        }
      }, 100)
    }
    
    typeText()
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Right - Large Image - Behind content */}
      <div className={`${isLoaded ? "animate-fade-in" : "opacity-0"} hidden lg:block absolute right-0 top-0 w-1/2 h-screen`}>
        <div className="relative h-full pt-16">
          <img
            src="/Sitembile.png"
            alt="Sitembile Ncube-Kaseka"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-20">
          {/* Left content */}
          <div className={`${isLoaded ? "animate-fade-in" : "opacity-0"} space-y-6`}>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-playfair">
                <span className="text-foreground">
                  {displayedText.includes("Ncube") ? displayedText.split(" ")[0] + " " : displayedText}
                </span>
                {displayedText.includes("Ncube") && (
                  <span className="text-primary">
                    {displayedText.split(" ").slice(1).join(" ")}
                  </span>
                )}
                {showCursor && <span className="animate-blink text-primary">|</span>}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Mining Engineer | Lecturer | STEM Advocate
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                Training & Development Specialist with expertise in Mine Planning & Design, ASM Solutions, and
                empowering the next generation of engineers through education and mentorship.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
            >
              Get In Touch
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Mobile Image */}
          <div className={`${isLoaded ? "animate-fade-in" : "opacity-0"} lg:hidden`}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/Sitembile.png"
                alt="Sitembile Ncube-Kaseka"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
