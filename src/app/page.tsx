'use client'

import {
  SiGithub,
  SiLinkedin,
  SiSubstack,
  SiMedium,
  SiX,
  SiHashnode,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiSpringboot,
  SiTerraform,
  SiPython,
} from '@icons-pack/react-simple-icons'
import { Mail, ExternalLink, Sun, Moon } from 'lucide-react'
import { FaJava, FaAws } from 'react-icons/fa6'
import Image from 'next/image'
import memeImage from './assets/meme.png'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const socialLinks = [
  { icon: SiGithub, href: 'https://github.com/Gaurav560', label: 'GitHub' },
  { icon: SiX, href: 'https://x.com/1809157Gaurav', label: 'Twitter' },
  { icon: SiLinkedin, href: 'https://www.linkedin.com/in/gaurav4044/', label: 'LinkedIn' },
  { icon: SiMedium, href: 'https://medium.com/@1809157_26884', label: 'Medium' },
  { icon: SiSubstack, href: 'https://techinsightsbygaurav.substack.com/', label: 'Substack' },
  { icon: SiHashnode, href: 'https://javaexpert.hashnode.dev/', label: 'Hashnode' },
]

const skills = [
  { icon: FaJava, name: 'Java' },
  { icon: SiSpringboot, name: 'Spring Boot' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiRedis, name: 'Redis' },
  { icon: SiApachekafka, name: 'Kafka' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiKubernetes, name: 'Kubernetes' },
  { icon: FaAws, name: 'AWS' },
  { icon: SiTerraform, name: 'Terraform' },
  { icon: SiPython, name: 'Python' },
]

const experiences = [
  {
    role: 'Backend Developer (Java & Spring Boot)',
    company: 'Telusko',
    period: 'November 2023 - Present',
    description: 'Led the development of a real-time, bi-directional application for an EdTech startup. Reduced latency for US clients by 40% with AWS Global Accelerator. Integrated Spring AI with Anthropic API. Designed entire backend architecture using RDS PostgreSQL and in-memory message broker.',
    link: 'https://www.telusko.com/',
  },
  {
    role: 'Technical Writer & Blogger',
    company: 'Unlogged (Freelance)',
    period: 'January 2024 - Present',
    description: 'Creating in-depth technical blogs on Java and Spring ecosystem, with several pieces ranking in the top 10 globally on Google. Published guides on Java 22-24 features, WebSockets, GraalVM, and more. Average SEO score of over 85%.',
    link: 'https://www.unlogged.io/blog',
  },
]

const certifications = [
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', status: 'In Progress' },
  { name: 'Spring Professional', issuer: 'VMware', status: 'Planned' },
  { name: 'Kubernetes Administrator', issuer: 'CNCF', status: 'Planned' },
]

const recentBlogs = [
  { date: 'Jan 20, 2026', title: 'WebSockets with Spring Boot: A Complete Guide', link: 'https://www.unlogged.io/post/websockets-with-spring-boot-building-real-time-applications' },
  { date: 'Jan 12, 2026', title: 'Java 24 Features: What\'s New', link: 'https://www.unlogged.io/post/java-24-features' },
  { date: 'Dec 28, 2025', title: 'GraalVM Native Image with Spring Boot', link: 'https://www.unlogged.io/post/graalvm-native-image-spring-boot' },
  { date: 'Dec 15, 2025', title: 'Z Garbage Collector Deep Dive', link: 'https://www.unlogged.io/post/zgc-deep-dive' },
  { date: 'Dec 01, 2025', title: 'MongoDB with Spring Boot: Best Practices', link: 'https://www.unlogged.io/post/mongodb-spring-boot' },
  { date: 'Nov 20, 2025', title: 'Managing Technical Debt in Large Codebases', link: 'https://www.unlogged.io/post/technical-debt' },
]

const recentReads = [
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', type: 'book' },
  { title: 'Database Internals', author: 'Alex Petrov', type: 'book' },
  { title: 'The Raft Consensus Algorithm', author: 'Diego Ongaro', type: 'paper' },
  { title: 'Dynamo: Amazon\'s Highly Available Key-value Store', author: 'Amazon', type: 'paper' },
  { title: 'MapReduce: Simplified Data Processing', author: 'Google', type: 'paper' },
  { title: 'The Log: What every software engineer should know', author: 'Jay Kreps', type: 'article' },
]

const currentlyReading = [
  { title: 'System Design Interview Vol 2', author: 'Alex Xu' },
  { title: 'Fundamentals of Software Architecture', author: 'Mark Richards' },
  { title: 'Building Microservices', author: 'Sam Newman' },
]

export default function HomePage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleEmailClick = () => {
    window.location.href = 'mailto:hey@gauravsh.in'
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-secondary)]">
      {/* Theme Toggle */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:rotate-180 transition-all duration-500"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun size={20} className="text-[var(--accent)]" />
          ) : (
            <Moon size={20} className="text-[var(--accent)]" />
          )}
        </button>
      )}

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
          <div className="flex-1">
            <h1 className="font-serif text-4xl md:text-[3.5rem] font-normal text-[var(--text-primary)] mb-5 leading-tight italic">
              Hey, I am Gaurav
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[var(--accent)] font-serif italic tracking-tight leading-relaxed">
              backend systems, java, and spring boot. always building.
            </h2>
            
            {/* Bio */}
            <div className="text-[var(--text-secondary)] leading-[1.85] space-y-5 text-[15px] mb-10">
              <p>
                I am a software engineer passionate about <span className="text-[var(--accent)] font-medium">Backend Systems</span> and{' '}
                <span className="text-[var(--accent)] font-medium">System Architecture</span>. Currently working as a Backend Developer, 
                building real-time applications with Java, Spring Boot, and distributed systems.
              </p>
              <p>
                I also spend time on technical writing, publishing{' '}
                <a href="https://www.unlogged.io/blog" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:underline font-medium">my work on Unlogged</a>. 
                My areas of interest include databases, system design, and distributed systems.
              </p>
              <p>
                I keep diving deep into engineering details and share my learnings across my{' '}
                <a href="https://techinsightsbygaurav.substack.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:underline font-medium">Substack</a>
                {' '}and{' '}
                <a href="https://medium.com/@1809157_26884" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:underline font-medium">Medium</a>.
              </p>
            </div>

            {/* Social Links - All in one row, responsive */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {socialLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full border text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    idx === 0 ? 'hover:border-gray-500 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white' :
                    idx === 1 ? 'hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-400' :
                    idx === 2 ? 'hover:border-blue-600 hover:bg-blue-600/10 hover:text-blue-600' :
                    idx === 3 ? 'hover:border-green-500 hover:bg-green-500/10 hover:text-green-500' :
                    idx === 4 ? 'hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500' :
                    'hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-500'
                  } border-[var(--border)] text-[var(--text-secondary)]`}
                >
                  <link.icon size={14} className="sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                  <span className="hidden xs:inline sm:inline">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Hire Me CTA Button - Brutalist Style */}
            <a
              href="#contact"
              className="brutalist-button mt-6 sm:mt-8"
            >
              <div className="hire-icon">💼</div>
              <div className="button-text">
                <span>Open to Work</span>
                <span>Hire Me!</span>
              </div>
            </a>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[var(--accent)]/20 transition-shadow duration-500">
              <img
                src="https://avatars.githubusercontent.com/u/50236270"
                alt="Gaurav"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Skills Section - Magic Colorful Buttons */}
        <section className="mt-20">
          <h3 className="font-serif text-2xl text-[var(--text-primary)] italic mb-6">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <div
                key={skill.name}
                className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border cursor-default transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  idx === 0 ? 'hover:border-red-500 hover:bg-red-500/10 hover:text-red-500 dark:hover:text-red-400' :
                  idx === 1 ? 'hover:border-green-500 hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400' :
                  idx === 2 ? 'hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400' :
                  idx === 3 ? 'hover:border-red-600 hover:bg-red-600/10 hover:text-red-600 dark:hover:text-red-400' :
                  idx === 4 ? 'hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400' :
                  idx === 5 ? 'hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-400' :
                  idx === 6 ? 'hover:border-blue-600 hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-blue-400' :
                  idx === 7 ? 'hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500' :
                  idx === 8 ? 'hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400' :
                  'hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-600 dark:hover:text-yellow-400'
                } border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]`}
              >
                <skill.icon size={20} className="transition-transform group-hover:scale-110 group-hover:rotate-12" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-20">
          <h3 className="font-serif text-2xl text-[var(--text-primary)] italic mb-8">Experience</h3>
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group pl-6 border-l-2 border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                  {exp.role} @ <span className="text-[var(--accent)]">{exp.company}</span>
                </h4>
                <p className="text-sm text-[var(--text-faint)] mt-1 font-mono">{exp.period}</p>
                <p className="text-[var(--text-muted)] mt-3 leading-relaxed text-[15px]">{exp.description}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--link)] hover:underline text-sm mt-3"
                  >
                    {exp.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mt-20">
          <h3 className="font-serif text-2xl text-[var(--text-primary)] italic mb-6">Certifications</h3>
          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:shadow-md"
              >
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">{cert.name}</h4>
                  <p className="text-sm text-[var(--text-faint)]">{cert.issuer}</p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  cert.status === 'In Progress' 
                    ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' 
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)]'
                }`}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section - Spiderman Meme */}
        <section id="contact" className="mt-20 scroll-mt-8">
          <div className="py-8 sm:py-12 px-4 sm:px-8 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border)]">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center gap-8 sm:gap-16 text-[var(--text-faint)] text-xs sm:text-sm mb-3">
                <p className="max-w-[120px] sm:max-w-[140px]">You looking for a good developer</p>
                <p className="max-w-[120px] sm:max-w-[140px]">Me looking for a good job</p>
              </div>
              
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto h-[200px] sm:h-[250px] md:h-[300px]">
                <Image
                  src={memeImage}
                  alt="spiderman-meme"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">Let&apos;s get in touch!</p>
                <p className="text-[var(--text-muted)] text-sm sm:text-base">Feel free to slide into my DMs.</p>
              </div>

              <button
                onClick={handleEmailClick}
                className="mt-6 inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#2bd2a6] hover:bg-[#25b892] text-[#1a1a1a] font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-xl text-sm sm:text-base"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                <span>hey@gauravsh.in</span>
              </button>
            </div>
          </div>
        </section>

        {/* Recent Blogs & Reads Section */}
        <section className="mt-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Recent Blog Posts */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-serif text-2xl text-[var(--text-primary)] italic">Recent blog posts</h3>
                <span className="text-[var(--text-faint)]">•</span>
                <a 
                  href="https://www.unlogged.io/blog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--link)] hover:underline text-sm"
                >
                  Full archive →
                </a>
              </div>
              <p className="text-[var(--text-muted)] text-sm mb-5">Things I have written recently.</p>
              <ul className="space-y-3">
                {recentBlogs.map((blog, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm group">
                    <span className="text-[var(--accent)]">•</span>
                    <span className="text-[var(--text-faint)] font-mono text-xs whitespace-nowrap">{blog.date}</span>
                    <span className="text-[var(--text-faint)]">:</span>
                    <a 
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--link)] hover:text-[var(--accent)] transition-colors leading-tight"
                    >
                      {blog.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Reads */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-serif text-2xl text-[var(--text-primary)] italic">Recent reads</h3>
                <span className="text-[var(--text-faint)]">•</span>
                <span className="text-[var(--link)] text-sm cursor-pointer hover:underline">Bookshelf →</span>
              </div>
              <p className="text-[var(--text-muted)] text-sm mb-5">Papers & books I have read recently.</p>
              <ul className="space-y-3">
                {recentReads.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-[var(--accent)]">•</span>
                    <span className="text-[var(--link)] hover:text-[var(--accent)] transition-colors cursor-pointer">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Currently Reading Section */}
        <section className="mt-20">
          <h3 className="font-serif text-2xl text-[var(--text-primary)] italic mb-4">Currently reading 📚</h3>
          <p className="text-[var(--text-muted)] text-sm mb-5">Books on my desk right now.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {currentlyReading.map((book, idx) => (
              <div
                key={idx}
                className="p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all"
              >
                <h4 className="font-medium text-[var(--text-primary)] text-sm">{book.title}</h4>
                <p className="text-[var(--text-faint)] text-xs mt-1">by {book.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
            <p className="text-[var(--text-faint)] text-sm">© {new Date().getFullYear()} Gaurav. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {socialLinks.slice(0, 4).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[var(--text-faint)] transition-colors ${link.color}`}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}