import { skillCategories } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-900">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Tech <span className="text-accent">Stack</span>
        </h2>
        <p className="text-gray-500 mt-2 mb-12">Tools and technologies I work with regularly</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card">
              <h3 className="font-mono text-accent text-sm mb-4">
                <span className="opacity-50">// </span>{cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
