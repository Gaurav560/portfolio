'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import memeImage from '../assets/meme.png'

interface TypingTextProps {
  text: string
  delay?: number
  onComplete?: () => void
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  delay = 100,
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
    }, 35)

    return () => clearInterval(intervalId)
  }, [text, started, onComplete, isComplete])

  return (
    <div className="xs:min-h-[24px] min-h-[20px] font-bold">
      {isComplete ? text : displayText}
    </div>
  )
}

interface MailIconProps extends React.SVGProps<SVGSVGElement> {}

const MailIcon: React.FC<MailIconProps> = (props) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const Contact = () => {
  const [isClient, setIsClient] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleEmailClick = () => {
    window.location.href = 'mailto:hey@gauravsh.in'
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen px-2 text-black dark:text-white sm:px-4">
      <div className="mx-auto mt-8 flex w-full max-w-[1200px] flex-col justify-start sm:mt-16 md:mt-24">
        <div className="xs:h-[350px] mx-auto flex h-[300px] select-none flex-col text-[#A9A9A9] sm:h-[400px]">
          <div className="flex justify-around text-center">
            <p className="xs:w-[140px] xs:text-xs mx-2 mt-3 w-[120px] text-[10px] font-bold sm:mx-4 sm:mt-5 sm:w-[160px] sm:text-sm">
              You looking for a good developer
            </p>
            <p className="xs:w-[140px] xs:text-xs mx-2 mt-3 w-[120px] text-[10px] font-bold sm:mx-4 sm:mt-5 sm:w-[160px] sm:text-sm">
              Me looking for a good job
            </p>
          </div>
          <div className="xs:h-[250px] xs:w-[320px] relative m-auto h-[200px] w-[280px] sm:h-[350px] sm:w-[400px] md:h-[450px] md:w-[450px]">
            <Image
              src={memeImage}
              alt="spiderman-meme"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="xs:text-xs flex flex-col justify-center space-y-2 text-center text-[11px] sm:text-sm md:text-base lg:text-lg">
          <TypingText
            text="Let's get in touch."
            onComplete={() => setShowSecond(true)}
          />
          {showSecond && (
            <TypingText
              text="Feel free to slide into my dms."
              delay={300}
              onComplete={() => setShowThird(true)}
            />
          )}
          {showThird && (
            <TypingText
              text="Social links available at the bottom of the page."
              delay={300}
            />
          )}
        </div>

        <div
          onClick={handleEmailClick}
          className="xs:h-[60px] mx-auto mt-4 h-[50px] w-[90%] cursor-pointer rounded-xl bg-[#2bd2a6] fill-white shadow-md shadow-red-500/50 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:fill-black hover:text-black hover:shadow-white sm:mt-6 sm:h-[65px] sm:w-[80%] sm:rounded-2xl md:mt-8 lg:w-[50%]"
        >
          <div className="flex h-full w-full select-none items-center justify-center">
            <MailIcon className="xs:w-[25px] mx-2 w-[20px] fill-inherit sm:mx-3 sm:w-[30px]" />
            <p className="xs:text-[11px] mx-2 text-[9px] font-bold sm:mx-3 sm:text-sm">
              hey@gauravsh.in
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact