import { useState } from "react";
import { personal } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Wire this up to Formspree: https://formspree.io
    // 1. Sign up at formspree.io → create a form → copy the endpoint URL
    // 2. Replace the fetch URL below with your endpoint
    try {
      const res = await fetch("https://formspree.io/f/xwvzznzb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-800 px-6">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-gray-500 mt-2 mb-12">
          Open to new opportunities, collaborations, or just a chat about tech.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <ContactItem
              icon={<EmailIcon />}
              label="Email"
              href={`mailto:${personal.email}`}
              text={personal.email}
            />
            <ContactItem
              icon={<GithubIcon />}
              label="GitHub"
              href={personal.github}
              text={personal.github.replace("https://", "")}
            />
            <ContactItem
              icon={<LinkedinIcon />}
              label="LinkedIn"
              href={personal.linkedin}
              text={personal.linkedin.replace("https://", "")}
            />
            <div className="pt-4">
              <p className="text-gray-500 text-sm leading-relaxed">
                The quickest way to reach me is by email. I try to respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5" htmlFor="name">Name</label>
              <input
                id="name" type="text" required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5" htmlFor="email">Email</label>
              <input
                id="email" type="email" required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5" htmlFor="message">Message</label>
              <textarea
                id="message" rows={5} required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What's on your mind?"
                className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-accent text-sm text-center">Message sent! I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please email me directly at{" "}
                <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, href, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500 mb-0.5">{label}</div>
        <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener"
          className="text-gray-300 hover:text-accent transition-colors text-sm">
          {text}
        </a>
      </div>
    </div>
  );
}

function EmailIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>;
}
function GithubIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>;
}
function LinkedinIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
}
