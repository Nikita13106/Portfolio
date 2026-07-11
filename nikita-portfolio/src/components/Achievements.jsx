import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { achievements, achievementNotes } from '../data/content'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="container-wrap">
        <SectionHeading label="achievements.log" title="Highlights" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 text-center"
            >
              <p className="font-display text-4xl font-bold text-signal mb-2">{a.stat}</p>
              <p className="text-sm text-slate-muted leading-snug">{a.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="card p-6 sm:p-8"
        >
          <ul className="space-y-4">
            {achievementNotes.map((note) => (
              <li key={note} className="flex gap-3 text-slate-muted leading-relaxed">
                <span className="text-amber mt-1 shrink-0">◆</span>
                {note}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
