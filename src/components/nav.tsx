'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'
import Link from 'next/link'  // Import Link for navigation

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleRedirect = () => {
    window.location.href = 'https://www.unlogged.io/blog'
  }

  const links = [
    { path: '/about', text: 'About' },
    { path: '', text: 'Blogs', onClick: handleRedirect }, // Use onClick for Blogs
    { path: '/contact', text: 'Contact' },
    { path: '/projects', text: 'Projects' },
    { path: '/certifications', text: 'Certifications' },
    { path: '/resume', text: 'Resume' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed top-0 z-50 w-full bg-bg">
      <div className="mx-auto max-w-7xl">
        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
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

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="text-gray-900 hover:text-orange-400 dark:text-white lg:hidden"
            onClick={toggleMenu}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={clsx(
            'fixed right-0 top-0 z-50 h-full w-64 transform border-l transition-transform duration-300 ease-in-out lg:hidden',
            'bg-white dark:bg-gray-900',
            'border-gray-200 dark:border-gray-800',
            isOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="p-4">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Menu
              </span>
              <button
                className="text-gray-900 hover:text-orange-400 dark:text-white"
                onClick={toggleMenu}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                link.onClick ? (
                  <button
                    key={link.text}
                    onClick={link.onClick}
                    className={clsx(
                      'rounded-md px-4 py-2 text-center font-medium transition-colors',
                      'text-gray-900 hover:bg-gray-100 hover:font-bold dark:text-white dark:hover:bg-gray-800',
                    )}
                  >
                    {link.text}
                  </button>
                ) : (
                  <a
                    key={link.path}
                    href={link.path}
                    className={clsx(
                      'rounded-md px-4 py-2 text-center font-medium transition-colors',
                      'text-gray-900 hover:bg-gray-100 hover:font-bold dark:text-white dark:hover:bg-gray-800',
                    )}
                  >
                    {link.text}
                  </a>
                )
              ))}
              <div className="mt-4 flex justify-center">
                <div className="rounded-md bg-gray-100 p-2 dark:bg-gray-800">
                  <ThemeSwitcher />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
