import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function MiniProjectCard({ project, index }) {
  if (!project) return null

  const { title, description, stack = [], github, live } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card p-5 flex flex-col h-full"
    >
      <h3 className="font-display text-lg font-semibold text-ivory mb-2">
        {title}
      </h3>

      <p className="text-slate-muted text-sm mb-4 flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((s) => (
          <span key={s} className="tag-pill">{s}</span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-3 border-t border-ink-border text-sm">
        <a href={github} target="_blank" rel="noreferrer" className="hover:text-signal">
          <FiGithub />
        </a>
        <a href={live} target="_blank" rel="noreferrer" className="hover:text-signal">
          <FiExternalLink />
        </a>
      </div>
    </motion.div>
  )
}