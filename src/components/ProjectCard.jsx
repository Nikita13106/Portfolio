import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const { title, description, highlights, stack, github, live, featured, status } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="card p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
    >
      {/* LEFT SIDE */}
      <div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
          {featured && (
            <span className="module-label !mb-0">flagship project</span>
          )}
          {status && (
            <span className="tag-pill !text-signal !border-signal/30">
              {status}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-ivory mb-3 sm:mb-4 break-words">
          {title}
        </h3>

        <p className="text-slate-muted text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {stack.map((s) => (
            <span key={s} className="tag-pill">
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !py-2.5 w-full sm:w-auto justify-center"
          >
            <FiGithub /> Code
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-2.5 w-full sm:w-auto justify-center"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-ink-panel2 rounded-lg border border-ink-border p-5 sm:p-6 flex flex-col justify-center">
        <p className="module-label mb-3 sm:mb-4">
          {featured ? 'why it matters' : 'key highlights'}
        </p>

        <ul className="space-y-2 sm:space-y-3">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex gap-3 text-sm text-slate-muted leading-relaxed"
            >
              <span className="text-signal mt-1 shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}