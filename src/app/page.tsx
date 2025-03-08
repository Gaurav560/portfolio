'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import memeImage from './assets/itachi.gif'

// Enhanced animated background with bubbles
const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Bubbles/particles
    const bubbles: {
      x: number
      y: number
      size: number
      color: string
      alphaValue: number // Store alpha separately
      speedX: number
      speedY: number
      pulse: number
      pulseSpeed: number
    }[] = []
    
    // Create softer-colored bubbles with different sizes
    const bubbleBaseColors = [
      'rgba(99, 102, 241,', // Indigo
      'rgba(129, 140, 248,', // Lighter indigo
      'rgba(147, 197, 253,', // Light blue
      'rgba(139, 92, 246,', // Purple
      'rgba(167, 139, 250,', // Lighter purple
    ]
    
    // Create more bubbles (30-50 for good density)
    for (let i = 0; i < 40; i++) {
      const alphaValue = Math.random() * 0.5 + 0.1;
      const baseColor = bubbleBaseColors[Math.floor(Math.random() * bubbleBaseColors.length)];
      const color = baseColor + ' ' + alphaValue + ')';
      
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 3, // Varied sizes for interest
        color,
        alphaValue,
        speedX: Math.random() * 0.5 - 0.25, // Allow horizontal movement
        speedY: Math.random() * 0.5 - 0.25, // Allow both up and down movement
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.005
      })
    }
    
    // Large glowing orbs in background
    const orbs: { x: number; y: number; radius: number; color: string; speed: number }[] = []
    const orbColors = ['rgba(99, 102, 241, 0.08)', 'rgba(139, 92, 246, 0.07)', 'rgba(147, 197, 253, 0.06)']
    
    for (let i = 0; i < 3; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 150,
        color: orbColors[Math.floor(Math.random() * orbColors.length)],
        speed: Math.random() * 0.1 + 0.02
      })
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw and update orbs
      orbs.forEach(orb => {
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, orb.color)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
        
        // Move orbs very slowly
        orb.y += orb.speed
        
        // Reset position when out of screen
        if (orb.y - orb.radius > canvas.height) {
          orb.y = -orb.radius
          orb.x = Math.random() * canvas.width
        }
      })
      
      // Draw and update bubbles
      bubbles.forEach(bubble => {
        // Pulsing effect
        bubble.pulse += bubble.pulseSpeed
        const pulseFactor = 1 + Math.sin(bubble.pulse) * 0.2
        const currentSize = bubble.size * pulseFactor
        
        // Fixed: Create gradient for bubble with proper color format
        const gradient = ctx.createRadialGradient(
          bubble.x, bubble.y, 0, 
          bubble.x, bubble.y, currentSize
        )
        
        // Get the base color without the alpha value
        const baseColorParts = bubble.color.split(',');
        const colorBase = baseColorParts.slice(0, 3).join(',') + ',';
        
        // Create modified colors with proper rgba format
        const innerAlpha = Math.min(bubble.alphaValue * 1.5, 1);
        gradient.addColorStop(0, `${colorBase} ${innerAlpha})`);
        gradient.addColorStop(0.6, bubble.color);
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, currentSize, 0, Math.PI * 2)
        ctx.fill()
        
        // Add subtle glow
        ctx.shadowColor = 'rgba(99, 102, 241, 0.3)'
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, currentSize * 0.3, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
        
        // Move bubbles
        bubble.x += bubble.speedX
        bubble.y += bubble.speedY
        
        // Boundary checks with bounce effect
        if (bubble.x < bubble.size || bubble.x > canvas.width - bubble.size) {
          bubble.speedX *= -1
        }
        
        if (bubble.y < bubble.size || bubble.y > canvas.height - bubble.size) {
          bubble.speedY *= -1
        }
      })
      
      requestAnimationFrame(animate)
    }
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}

interface TypingTextProps {
  text: string
  delay?: number
  typingSpeed?: number
  onComplete?: () => void
}

// Modified TypingText component with a softer color for name
const TypingText: React.FC<TypingTextProps> = ({
  text,
  delay = 100,
  typingSpeed = 100,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started || isComplete) return

    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
        setIsComplete(true)
        onComplete?.()
      }
    }, typingSpeed)

    return () => clearInterval(intervalId)
  }, [text, started, onComplete, isComplete, typingSpeed])

  // Function to highlight "Gaurav" with a softer gradient
  const highlightName = (text: string) => {
    if (text.includes('Gaurav')) {
      const parts = text.split('Gaurav')
      return (
        <>
          {parts[0]}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 font-extrabold">
            Gaurav
          </span>
          {parts[1]}
        </>
      )
    }
    return text
  }

  return (
    <div className="min-h-[24px]">
      {isComplete ? highlightName(text) : displayText}
    </div>
  )
}

// Skill tag with softer color
const SkillTag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="relative overflow-hidden rounded-full px-4 py-2 m-1 bg-indigo-600 text-white font-medium shadow-lg hover:scale-105 transition-transform cursor-default">
      {text}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
    </div>
  )
}

// Scroll down indicator with updated color
const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-indigo-300/70 animate-bounce">
      <span className="mb-2 text-sm">Scroll Down</span>
      <ChevronDown size={20} />
    </div>
  )
}

// Main HomePage component
const HomePage = () => {
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)
  const [showFifth, setShowFifth] = useState(false)
  const [showSkills, setShowSkills] = useState(false)
  
  // Fix for hydration errors - use client-side only rendering
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const textSequence = [
    { text: 'Hello Stranger', delay: 0 },
    { text: 'Nice to Meet you', delay: 500 },
    { text: 'My Name is Gaurav', delay: 500 },
    { text: 'Welcome to my', delay: 500 },
    { text: 'realm ;)', delay: 300 },
  ]
  
  const skills = [
    'Java+ SpringBoot', 'Python', 'Linux', 'Spring AI + PgVector',
    'Devops + AWS', 'AI Agents+ Workflow', 'PostgreSQL', 'MongoDB'
  ]
  
  // Trigger skills display after the last message
  useEffect(() => {
    if (showFifth) {
      const timer = setTimeout(() => setShowSkills(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [showFifth])
  
  // Return null during SSR to prevent hydration errors
  if (!isMounted) {
    return <div className="min-h-screen bg-black"></div>
  }
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />
      
      <main className="pt-4">
        <div className="mx-auto min-h-screen w-full max-w-7xl flex flex-col items-center justify-center relative px-4 sm:px-6">
          {/* Character with updated glow effect */}
          <div className="mb-8 relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-600 opacity-60 blur-xl animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-30 animate-spin-slow blur-md"></div>
            <div className="relative mx-auto h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[300px] md:w-[300px] overflow-hidden rounded-full border-2 border-indigo-500">
              <Image
                src={memeImage}
                alt="itachi-gif"
                fill
                className="object-contain scale-110"
                priority
              />
            </div>
          </div>

          {/* Text messages with updated backdrop */}
          <div className="z-10 my-4 md:my-8 w-full max-w-lg">
            <div className="p-4 md:p-6 rounded-xl backdrop-blur-sm bg-black/30 border border-indigo-500/30 shadow-xl">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider space-y-3 md:space-y-4">
                <TypingText
                  text={textSequence[0].text}
                  typingSpeed={100}
                  onComplete={() => setShowSecond(true)}
                />
                {showSecond && (
                  <TypingText
                    text={textSequence[1].text}
                    delay={textSequence[1].delay}
                    typingSpeed={100}
                    onComplete={() => setShowThird(true)}
                  />
                )}
                {showThird && (
                  <TypingText
                    text={textSequence[2].text}
                    delay={textSequence[2].delay}
                    typingSpeed={100}
                    onComplete={() => setShowFourth(true)}
                  />
                )}
                {showFourth && (
                  <TypingText
                    text={textSequence[3].text}
                    delay={textSequence[3].delay}
                    typingSpeed={100}
                    onComplete={() => setShowFifth(true)}
                  />
                )}
                {showFifth && (
                  <TypingText
                    text={textSequence[4].text}
                    delay={textSequence[4].delay}
                    typingSpeed={100}
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Skills section with updated colors */}
          {showSkills && (
            <div className="mt-4 z-10 w-full max-w-2xl animate-fadeIn">
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-300">My tech stack:</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2 p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-black/20 border border-indigo-500/20">
                {skills.map((skill) => (
                  <SkillTag key={skill} text={skill} />
                ))}
              </div>
            </div>
          )}
          
          <ScrollIndicator />
        </div>
      </main>
    </div>
  )
}

export default HomePage