import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-wrap">
        <SectionHeading
          label="experience/"
          title="Leadership & Technical Experience"
          description="Leading, building, and teaching across multiple technical communities."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-border hidden sm:block" />

          <div className="space-y-8">
            {experience.map((role, i) => (
              <motion.div
                key={`${role.org}-${role.duration}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative sm:pl-10"
              >
                {/* Timeline Dot */}
                <span
                  className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 hidden sm:block ${
                    role.current
                      ? 'bg-signal border-signal shadow-glow'
                      : 'bg-ink border-ink-border'
                  }`}
                />

                <div className="card p-6">
                  {/* Top Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold text-ivory">
                      {role.role}{' '}
                      <span className="text-slate-muted font-normal">
                        — {role.org}
                      </span>
                    </h3>

                    <div className="flex items-center gap-2">
                      {role.type && (
                        <span className="tag-pill text-xs">
                          {role.type}
                        </span>
                      )}
                      <span className="tag-pill">{role.duration}</span>
                    </div>
                  </div>

                  {/* Optional one-liner fallback */}
                  {role.oneLiner && (
                    <p className="text-slate-muted text-sm mb-4">
                      {role.oneLiner}
                    </p>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {role.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm text-slate-muted leading-relaxed"
                      >
                        <span className="text-signal mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}