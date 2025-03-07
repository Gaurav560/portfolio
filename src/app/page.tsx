'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import memeImage from './assets/itachi.gif'

interface TypingTextProps {
  text: string
  delay?: number
  typingSpeed?: number
  onComplete?: () => void
}

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

  return (
    <div className="xs:min-h-[24px] min-h-[20px]">
      {isComplete ? text : displayText}
    </div>
  )
}

export default function Home() {
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)
  const [showFifth, setShowFifth] = useState(false)

  const textSequence = [
    { text: 'Hello Stranger', delay: 0 },
    { text: 'Nice to Meet you', delay: 500 },
    { text: 'My Name is Gaurav', delay: 500 },
    { text: 'Welcome to my', delay: 500 },
    { text: 'realm ;)', delay: 300 },
  ]
  const CircleButton = ({ text }: { text: string }) => (
    <div className="mx-auto flex h-18 w-18 flex-col justify-center rounded-full bg-[#FB933D] text-center text-[11px] shadow-lg shadow-purple-500/50 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black hover:shadow-white md:h-32 md:w-32 md:text-base">
      <p className="cursor-default select-none px-2">{text}</p>
    </div>
  )
  return (
    <div className="flex min-h-screen flex-col bg-bg font-base">
      <main className="flex-1">
        <div className="mx-auto mt-[-96px] h-screen w-full max-w-[1240px] text-center">
          <div className="flex h-full">
            {/* Left circles */}
            <div className="mt-10 flex font-bold w-[20%] flex-col justify-evenly">
              <CircleButton text="Java+ SpringBoot" />
              <CircleButton text="Linux" />
              <CircleButton text="Devops + AWS" />
              <CircleButton text="PostgreSQL" />
            </div>

            {/* Center content */}
            <div className="flex w-[60%] flex-col items-center justify-center">
              <div className="relative mx-auto h-[200px] w-[200px] md:h-[450px] md:w-[450px]">
                <Image
                  src={memeImage}
                  alt="itachi-gif"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-8 flex flex-col space-y-4 text-center text-2xl font-extrabold">
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

            {/* Right circles */}
            <div className="mt-10 flex w-[20%] flex-col justify-evenly font-bold">
              <CircleButton text="Python" />
              <CircleButton text="Spring AI + PgVector" />
              <CircleButton text="AI Agents+ Workflow" />
              <CircleButton text="MongoDB" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
