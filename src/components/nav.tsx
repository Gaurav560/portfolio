'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'
import Link from 'next/link'

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleRedirect = () => {
    window.location.href = 'https://www.unlogged.io/blog'
  }

  const links = [
    { path: '/about', text: 'About' },
    { path: '', text: 'Blogs', onClick: handleRedirect },
    { path: '/contact', text: 'Contact' },
    { path: '/projects', text: 'Projects' },
    { path: '/certifications', text: 'Certifications' },
    { path: '/resume', text: 'Resume' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Sage Green color variants
  const sageGreen = {
    light: '#B2BEB5', // Sage Green (base)
    medium: '#99A8A0', // Medium Sage Green (hover in light mode)
    dark: '#7D8A82',   // Dark Sage Green (for dark mode)
    darker: '#6A7569'  // Darker Sage Green (hover in dark mode)
  }

  return (
    <>
      {/* Spacer div to prevent content from being hidden behind fixed navbar */}
      <div className="h-16"></div>
      
      <div className="fixed top-0 z-50 w-full bg-bg backdrop-blur-lg bg-opacity-80">
        <div className="mx-auto max-w-7xl">
          {/* Improved overlay for mobile menu - darker and with blur */}
          {isOpen && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-70 backdrop-blur-sm lg:hidden"
              onClick={toggleMenu}
            />
          )}

          <div className="flex items-center justify-between p-4">
            {/* Logo with Link */}
            <Link href="/" passHref>
              <div className="text-red text-xl font-bold transition-colors hover:text-orange-400 cursor-pointer">
                gaurav.100-x.dev
              </div>
            </Link>

            {/* Desktop Navigation - Keep original orange */}
            <nav className="hidden items-center gap-2 rounded-lg bg-orange-400 p-2 shadow-lg lg:flex">
              {links.map((link) => (
                link.onClick ? (
                  <button
                    key={link.text}
                    onClick={link.onClick}
                    className="rounded-md px-4 py-2 font-medium text-gray-900 transition-colors hover:bg-orange-300"
                  >
                    {link.text}
                  </button>
                ) : (
                  <a
                    key={link.path}
                    href={link.path}
                    className={clsx(
                      'rounded-md px-4 py-2 font-medium text-gray-900 transition-colors hover:bg-orange-300',
                    )}
                  >
                    {link.text}
                  </a>
                )
              ))}
              <div className="ml-2 rounded-md bg-white px-2 py-1">
                <ThemeSwitcher />
              </div>
            </nav>

            {/* Mobile Menu Button - Keep orange but slightly softer */}
            <button
              className="rounded-full bg-orange-400 p-2 text-gray-900 hover:bg-orange-300 lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Sidebar - With Sage Green buttons */}
          <div
            className={clsx(
              'fixed right-0 top-0 z-50 h-full w-72 transform transition-transform duration-300 ease-in-out lg:hidden',
              'bg-white shadow-2xl dark:bg-gray-900 dark:border-gray-800 dark:border-l',
              isOpen ? 'translate-x-0' : 'translate-x-full',
            )}
          >
            <div className="flex h-full flex-col p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Menu
                </span>
                <button
                  className="rounded-full bg-gray-200 p-2 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  link.onClick ? (
                    <button
                      key={link.text}
                      onClick={() => {
                        toggleMenu();
                        link.onClick && link.onClick();
                      }}
                      style={{
                        backgroundColor: sageGreen.light,
                      }}
                      className={clsx(
                        'rounded-md px-6 py-3 text-center text-lg font-medium transition-colors',
                        'text-gray-900 dark:text-white',
                      )}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = sageGreen.medium}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = sageGreen.light}
                    >
                      {link.text}
                    </button>
                  ) : (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={toggleMenu}
                      style={{
                        backgroundColor: sageGreen.light,
                      }}
                      className={clsx(
                        'rounded-md px-6 py-3 text-center text-lg font-medium transition-colors',
                        'text-gray-900 dark:text-white',
                      )}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = sageGreen.medium}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = sageGreen.light}
                    >
                      {link.text}
                    </a>
                  )
                ))}
              </nav>
              
              <div className="mt-auto flex justify-center pb-8">
                <div className="rounded-full bg-gray-200 p-3 dark:bg-gray-700">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav