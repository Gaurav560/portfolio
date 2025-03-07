'use client'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import React, { useEffect, useState } from 'react'

interface TypingTextProps {
  text: string
  delay?: number
  onComplete?: () => void
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  delay = 0,
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
    }, 100)

    return () => clearInterval(intervalId)
  }, [text, started, onComplete, isComplete])

  return (
    <div className="xs:min-h-[24px] min-h-[20px]">
      {isComplete ? text : displayText}
    </div>
  )
}

export default function About() {
  const [show, setShow] = useState(true)

  const introText =
    'A quiet Saturday evening, lofi beats playing softly, rain tapping ' +  
'against the window, and a warm cup of chai by my side. The server hums ' +  
'steadily, processing requests with precision. Logs stream in real-time as I ' +  
'refine a service layer, ensuring seamless data flow and optimized performance. ' +  
'This is my flow state — architecting scalable backends, fine-tuning APIs, and ' +  
'solving complex problems with Java and Spring Boot. ' +  

'As the world flows toward AI, so do I — upskilling heavily in AI and ML, ' +  
'building intelligent agents and workflows using LLMs, Spring AI, and ' +  
'cutting-edge frameworks. ' +  

'Beyond the code, I breathe music, clear my mind through meditation, and ' +  
'push limits with running, exercise. Lately, I’ve been diving into log writing, capturing ' +  
'the latest happenings in the world with keen observation and insight.'


  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="xs:text-xs flex flex-col justify-center space-y-2 text-center text-[11px] sm:text-sm md:text-base lg:text-lg">
          <h1 className="text-4xl font-bold">Hey, I&apos;m Gaurav.</h1>
          {show && (
            <TypingText
              text={introText}
              delay={300}
              onComplete={() => setShow(true)}
            />
          )}
        </div>

        <div className="mt-12">
          <Skills />
        </div>

        <div className="mt-12">
          <Experience />
        </div>
      </main>
    </div>
  )
}