import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-wrap">
        <SectionHeading label="about.md" title="From AIML coursework to shipped systems" />

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-slate-muted leading-relaxed"
          >
            <p>
              I started my degree in AI &amp; Machine Learning at{' '}
              <span className="text-ivory">{profile.college}</span>, expecting to spend most of
              my time in notebooks and models. Instead, I found myself drawn to the systems that
              carry that intelligence to actual users - the APIs, the databases, the interfaces
              people click on.
            </p>
            <p>
              That pull turned into a deliberate shift toward full-stack development. I picked up
              the MERN stack, started reading about scale and architecture, and began treating
              every project as a chance to practice designing systems, not just wiring up
              features. System design is currently the thing I spend the most deliberate hours on,
              alongside DSA and backend engineering.
            </p>
            <p>
              Outside of code, I lead technical direction for two student communities - planning
              event calendars, mentoring teams, and running sessions for 70+ participants at a
              time. Building software and building the people around it turned out to be the same
              skill, practiced in different rooms.
            </p>
          </motion.div>

          <div className="hidden lg:block w-px bg-ink-border self-stretch" />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="card p-6 space-y-5 font-mono text-sm"
          >
            <div>
              <p className="text-slate-faint text-xs uppercase tracking-wider mb-1">Currently</p>
              <p className="text-ivory">Vice Chairperson, GFG Committee</p>
              <p className="text-ivory">Technical Head, SuperAI Club</p>
            </div>
            <div className="h-px bg-ink-border" />
            <div>
              <p className="text-slate-faint text-xs uppercase tracking-wider mb-1">Focus areas</p>
              <p className="text-signal"> DSA · Full Stack · System Design </p>
            </div>
            <div className="h-px bg-ink-border" />
            <div>
              <p className="text-slate-faint text-xs uppercase tracking-wider mb-1">Based in</p>
              <p className="text-ivory">Mumbai, India</p>
            </div>
            <div className="h-px bg-ink-border" />
            <div>
              <p className="text-slate-faint text-xs uppercase tracking-wider mb-1">Open to</p>
              <p className="text-ivory">MERN / Full Stack Internships</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
