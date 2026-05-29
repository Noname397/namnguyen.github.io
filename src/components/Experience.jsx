import { experience, personal } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark-800">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Experience <span className="text-accent">&</span> Education
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-dark-600 hidden sm:block" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <div key={i} className="sm:pl-14 relative">
                {/* Timeline dot */}
                <div
                  className={`hidden sm:flex absolute left-0 w-8 h-8 rounded-full border-2 items-center justify-center text-xs font-bold
                    ${item.type === "education"
                      ? "border-purple-500 bg-purple-500/10 text-purple-400"
                      : "border-accent bg-accent/10 text-accent"
                    }`}
                >
                  {item.type === "education" ? "🎓" : "💼"}
                </div>

                <div className="card">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.role}</h3>
                      <span className={`text-sm font-medium ${item.type === "education" ? "text-purple-400" : "text-accent"}`}>
                        {item.company}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-gray-500 shrink-0 mt-1">{item.date}</span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-accent shrink-0">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a href={personal.resumeFile} download className="btn-primary">
            Download Full Resume (PDF) ↓
          </a>
        </div>
      </div>
    </section>
  );
}
