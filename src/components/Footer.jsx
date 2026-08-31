import { personalInfo } from '../data/portfolio'
import avatarImg from '../assets/avatar.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-14 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-md flex-shrink-0">
              <img
                src={avatarImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>{personalInfo.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-semibold">
                  {personalInfo.alias || 'Heyzun'}
                </span>
              </h3>
              <p className="text-slate-400 text-sm mt-0.5">
                Mobile & Web Developer • Building thoughtful, high-performance digital products.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {Object.entries(personalInfo.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-sm"
                aria-label={platform}
              >
                <i className={`fa-brands fa-${platform === 'whatsapp' ? 'whatsapp' : platform} text-base`} />
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-sm"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope text-sm" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/80 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm">
            &copy; {currentYear} {personalInfo.name} ({personalInfo.alias || 'Heyzun'}). Crafted with care.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
