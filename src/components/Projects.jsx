import { projectCategories } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 gradient-textHeader">
          Projects
        </h2>
        <div className="w-20 h-1 gradient-bg mx-auto mb-4 rounded-full" />
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          A selection of public products, client web deliveries, and mobile applications.
        </p>

        <div className="max-w-7xl mx-auto space-y-16">
          {projectCategories.map((category) => (
            <div key={category.title}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-3">
                  <i className={`fa-solid ${category.icon} text-blue-600`} />
                  {category.title}
                </h3>
                <p className="text-slate-600 mt-2">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project) => (
            <div
              key={project.name}
              className="group glass rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 pricing-card"
            >
              <div className="relative overflow-hidden gallery-item h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {(project.url || project.github) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <a
                    href={project.url || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <i className={`${project.url ? 'fa-solid fa-arrow-up-right-from-square' : 'fa-brands fa-github'} mr-1`} />
                    {project.linkLabel || 'View on GitHub'}
                  </a>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
