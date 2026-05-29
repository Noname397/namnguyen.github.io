import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-600 py-8">
      <div className="section-container text-center space-y-1">
        <p className="text-gray-400 text-sm">
          Designed & built by <span className="text-accent font-medium">{personal.name}</span>
        </p>
        <p className="text-gray-600 text-xs">
          Built with React & Tailwind CSS · Hosted on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
