import { motion } from 'framer-motion'

export default function SectionHeading({ index, label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <p className="module-label">
        {index && <span className="text-slate-faint">{index}</span>} {label}
      </p>
      <h2 className="section-title !mb-4">{title}</h2>
      {description && <p className="text-slate-muted max-w-2xl leading-relaxed -mt-4 mb-10">{description}</p>}
    </motion.div>
  )
}
