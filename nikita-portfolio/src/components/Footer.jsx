import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-border py-6 sm:py-8">
      <div className="container-wrap flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* LEFT */}
        <p className="font-mono text-xs text-signal transition-colors text-center sm:text-left">
          © {new Date().getFullYear()} {profile.name}.
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-slate-faint">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-signal transition-colors text-lg"
          >
            <FiGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-signal transition-colors text-lg"
          >
            <FiLinkedin />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="text-signal transition-colors text-lg"
          >
            <FiMail />
          </a>
        </div>

      </div>
    </footer>
  );
}