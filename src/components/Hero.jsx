import { personalInfo } from '../data/portfolio'
import avatarImg from '../assets/avatar.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="smallScreen min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Intro & Details */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-blue-200/80 shadow-sm backdrop-blur-md mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 radar-dot" />
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                {personalInfo.availability || 'Available for projects'}
              </span>
              <span className="text-blue-500 text-xs font-bold">•</span>
              <span className="text-xs font-medium text-blue-600">Ho Chi Minh City</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] mb-3">
              <span className="text-slate-800 font-extrabold text-3xl sm:text-4xl block mb-1">
                {personalInfo.greeting}
              </span>
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Role Title with Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                {personalInfo.title}
              </h2>
              <span className="px-2.5 py-0.5 rounded-md bg-blue-100/90 text-blue-700 text-xs font-bold uppercase tracking-wider">
                {personalInfo.alias || 'Heyzun'}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-base md:text-lg">
              {personalInfo.tagline}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 mb-8">
              {personalInfo.stats?.slice(0, 3).map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-3 text-center border border-white/80 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-xl md:text-2xl font-black text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-[11px] md:text-xs font-medium text-slate-600 mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="gradient-bg text-white px-7 py-3.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 btn-shine flex items-center gap-2 text-sm md:text-base"
              >
                <i className="fa-solid fa-layer-group text-sm" />
                <span>View My Work</span>
              </a>
              <a
                href="#contact"
                className="bg-white/90 border-2 border-blue-600/80 text-blue-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm flex items-center gap-2 text-sm md:text-base"
              >
                <i className="fa-solid fa-paper-plane text-sm" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Connect:
              </span>
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/90 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-500 hover:shadow-md hover:scale-110 transition-all duration-300"
                  aria-label={platform}
                >
                  <i className={`fa-brands fa-${platform === 'whatsapp' ? 'whatsapp' : platform} text-base`} />
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-white/90 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-500 hover:shadow-md hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope text-sm" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait Showcase with Photo & Floating Badges */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px]">
              
              {/* Outer Glow Aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-amber-400/30 rounded-[3rem] blur-2xl -z-10 animate-pulse-slow" />

              {/* Main Avatar Card Frame */}
              <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-white/90 via-white/40 to-blue-200/50 shadow-2xl shadow-blue-600/15 backdrop-blur-xl border border-white/80">
                
                {/* Inner Image Container */}
                <div className="relative rounded-[2.1rem] overflow-hidden aspect-[4/4.5] sm:aspect-square bg-slate-900/5 group shadow-inner">
                  <img
                    src={avatarImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                    loading="eager"
                  />

                  {/* Subtle Gradient Overlays for High-End Studio Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Overlay Bottom Badge with Name & Title */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-card border border-white/30 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <h3 className="text-slate-900 font-bold text-sm sm:text-base leading-tight">
                        {personalInfo.name}
                      </h3>
                      <p className="text-blue-600 text-xs font-medium">
                        {personalInfo.title}
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs shadow-md">
                      <i className="fa-solid fa-code" />
                    </span>
                  </div>
                </div>

                {/* Floating Glass Badge 1: Top-Left (Flutter & React) */}
                <div className="absolute -top-4 -left-4 sm:-left-6 glass-badge rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 animate-float-slow z-20">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                    <i className="fa-solid fa-mobile-screen-button text-base" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                      Mobile & Web
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      Flutter • React
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badge 2: Top-Right (Downloads / Rating) */}
                <div className="absolute top-8 -right-3 sm:-right-6 glass-badge rounded-2xl px-3.5 py-2 flex items-center gap-2 animate-float-reverse z-20">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shadow-sm">
                    <i className="fa-solid fa-star text-sm" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-800">
                      200k+ Users
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500">
                      4.5★ Rated App
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badge 3: Bottom-Right (Experience) */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 glass-badge rounded-2xl px-4 py-2.5 flex items-center gap-2.5 animate-float-slow z-20">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                    <i className="fa-solid fa-bolt text-base" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-800">
                      2+ Years Exp
                    </div>
                    <div className="text-[10px] font-semibold text-emerald-600">
                      Production Ready
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block z-10">
        <a
          href="#about"
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-blue-600 hover:text-blue-700 hover:shadow-md transition-all text-sm"
          aria-label="Scroll to About"
        >
          <i className="fa-solid fa-chevron-down" />
        </a>
      </div>
    </section>
  )
}
