import { skillCategories } from '../data/portfolio'

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-sm font-medium text-blue-600">{level}%</span>
      </div>
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 gradient-textHeader">
          Skills
        </h2>
        <div className="w-20 h-1 gradient-bg mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-6 flex items-center gap-2">
                <i className="fa-solid fa-layer-group" />
                {category.title}
              </h3>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
