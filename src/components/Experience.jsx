import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 gradient-textHeader">
          Experience
        </h2>
        <div className="w-20 h-1 gradient-bg mx-auto mb-12 rounded-full" />

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 w-4 h-4 gradient-bg rounded-full border-4 border-white shadow-md md:-translate-x-1/2 z-10" />

              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}
              >
                <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 pricing-card">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-3 py-1 rounded-full">
                      <i className="fa-solid fa-location-dot mr-1" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.title}</h3>
                  <h4 className="text-blue-600 font-semibold mb-4">{exp.company}</h4>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                        <i className="fa-solid fa-check text-blue-500 mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
