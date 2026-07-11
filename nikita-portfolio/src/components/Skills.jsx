import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-wrap">
        <SectionHeading label="skills.json" title="Toolkit" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-amber mb-5">
                {group.category}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ivory">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
