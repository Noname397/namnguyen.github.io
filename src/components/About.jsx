import { personal, stats } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-800 px-6">
      <div className="section-container">
        <SectionTitle>About <span className="text-accent">Me</span></SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Text */}
          <div className="space-y-5">
            {personal.bio.map((p, i) => (
              <p key={i} className="text-gray-400 leading-relaxed">
                {p}
              </p>
            ))}

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">
                    {s.value.replace("+", "")}<span className="text-accent">+</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-2xl bg-dark-700 border-2 border-dark-600 flex items-center justify-center overflow-hidden">
                {/* Replace the div below with: <img src="/photo.jpg" alt="Nam Nguyen" className="w-full h-full object-cover" /> */}
                <span className="text-5xl font-bold text-accent font-mono">NN</span>
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-3 -right-3 w-56 h-56 rounded-2xl border-2 border-accent/30 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold text-white">
      {children}
    </h2>
  );
}
