import { aboutText, coreKnowledge, highlights, techLogos, personalInfo } from '../data/portfolio'
import avatarImg from '../assets/avatar.png'

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/70 relative">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-user text-xs" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            About <span className="gradient-textHeader">Me</span>
          </h2>
          <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Profile Card & Bio Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          {/* Left Column: Personal Profile Showcase Card (4 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-card rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between border border-white/90 relative overflow-hidden group">
              {/* Subtle top background decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl -z-10 pointer-events-none" />

              <div>
                {/* Avatar with status indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-md">
                      <img
                        src={avatarImg}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <span
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-sm radar-dot"
                      title="Available for work"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {personalInfo.fullName || personalInfo.name}
                    </h3>
                    <p className="text-blue-600 text-sm font-semibold">
                      {personalInfo.title}
                    </p>
                    <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-200">
                      Alias: {personalInfo.alias || 'Heyzun'}
                    </span>
                  </div>
                </div>

                {/* Quick Info Attributes */}
                <div className="space-y-3 pt-4 border-t border-slate-100 text-sm">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100/60">
                    <span className="text-slate-500 flex items-center gap-2">
                      <i className="fa-solid fa-location-dot text-blue-500 w-4" /> Location:
                    </span>
                    <span className="font-semibold text-slate-700 text-right">Ho Chi Minh City, VN</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100/60">
                    <span className="text-slate-500 flex items-center gap-2">
                      <i className="fa-solid fa-briefcase text-blue-500 w-4" /> Experience:
                    </span>
                    <span className="font-semibold text-slate-700">2+ Years</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100/60">
                    <span className="text-slate-500 flex items-center gap-2">
                      <i className="fa-solid fa-code text-blue-500 w-4" /> Focus:
                    </span>
                    <span className="font-semibold text-slate-700">Mobile & Web Apps</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-500 flex items-center gap-2">
                      <i className="fa-solid fa-circle-check text-emerald-500 w-4" /> Status:
                    </span>
                    <span className="font-semibold text-emerald-600">Available for Hire</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3">
                <a
                  href="#contact"
                  className="flex-1 gradient-bg text-white py-2.5 px-4 rounded-xl text-center text-sm font-semibold hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                >
                  Contact Me
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 bg-white/80 transition-colors flex items-center justify-center text-sm"
                  title="Send Email"
                >
                  <i className="fa-solid fa-envelope" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Core Knowledge Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Bio Narrative Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/90">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-xs shadow-sm">
                  <i className="fa-solid fa-sparkles" />
                </span>
                Engineering with passion & precision
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
                {aboutText.paragraph1}
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {aboutText.paragraph2}
              </p>
            </div>

            {/* Core Knowledge Breakdown */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <i className="fa-solid fa-cubes text-blue-600" />
                Core Knowledge Areas
              </h4>

              <div className="grid sm:grid-cols-3 gap-4">
                {/* UI/UX Design */}
                <div className="glass-card rounded-2xl p-4 border border-white/80 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm">
                    <i className="fa-brands fa-figma text-lg text-purple-600" />
                    <span>UI/UX Design</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {coreKnowledge.uiDesign.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-100 rounded-lg text-xs font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div className="glass-card rounded-2xl p-4 border border-white/80 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm">
                    <i className="fa-brands fa-react text-lg text-cyan-600" />
                    <span>Frontend Web</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {coreKnowledge.frontend.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-[11px] font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend & Mobile */}
                <div className="glass-card rounded-2xl p-4 border border-white/80 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm">
                    <i className="fa-solid fa-server text-lg text-emerald-600" />
                    <span>Backend & Cloud</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {coreKnowledge.backend.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-lg text-[11px] font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Logos Bar */}
        <div className="glass-card rounded-3xl p-6 max-w-6xl mx-auto mb-16 border border-white/90">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Technologies & Frameworks I Work With
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8">
            {techLogos.map((logo) => (
              <div
                key={logo.name}
                className="w-10 h-10 sm:w-11 sm:h-11 p-2 rounded-xl bg-white shadow-sm border border-slate-100 hover:scale-125 hover:shadow-md transition-all duration-300 flex items-center justify-center group"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain filter group-hover:drop-shadow"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`glass-card rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 float-${(index % 4) + 1} border border-white/90`}
            >
              <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/20">
                <i className={`fa-solid ${item.icon} text-white text-xl`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
