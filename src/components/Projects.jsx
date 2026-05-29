import { projects, personal } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-900">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <p className="text-gray-500 mt-2 mb-12">Things I've built — from full apps to weekend experiments</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="card flex flex-col group">
              <div className="flex justify-between items-start mb-4">
                <FolderIcon />
                <div className="flex gap-3">
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noopener"
                      className="text-gray-500 hover:text-accent transition-colors" title="GitHub">
                      <GithubIcon />
                    </a>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener"
                      className="text-gray-500 hover:text-accent transition-colors" title="Live Demo">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={personal.github} target="_blank" rel="noopener" className="btn-outline">
            See all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

function FolderIcon() {
  return (
    <svg className="w-10 h-10 text-accent/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
