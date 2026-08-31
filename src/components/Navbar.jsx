import { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '../data/portfolio'
import avatarImg from '../assets/avatar.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map((link) => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-md py-2.5 backdrop-blur-xl' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
        {/* Brand Logo with Avatar */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img
                src={avatarImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white radar-dot" />
          </div>
          <div>
            <span className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors block leading-tight">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider block">
              {personalInfo.alias || 'Heyzun'} • Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className={`nav-link text-sm font-semibold transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Quick Contact Action Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            className="gradient-bg text-white px-4 py-2 rounded-xl text-xs font-bold hover:scale-105 shadow-md shadow-blue-500/20 transition-all ml-2"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/80 border border-slate-200 text-slate-700 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 shadow-xl border border-white/90 animate-fade-in-up">
          <div className="flex items-center gap-3 pb-3 mb-2 border-b border-slate-200/60 px-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
              <img src={avatarImg} alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">{personalInfo.name}</div>
              <div className="text-xs text-blue-600 font-medium">{personalInfo.title}</div>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className={`block py-2.5 px-4 rounded-xl font-medium text-sm transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 mt-2 border-t border-slate-200/60">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className="block w-full py-2.5 text-center gradient-bg text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20"
            >
              Hire Me / Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
