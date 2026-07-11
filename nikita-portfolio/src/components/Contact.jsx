import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: 'GitHub', value: '@Nikita13106', href: profile.github, icon: FiGithub },
  { label: 'LinkedIn', value: 'in/nikita1310', href: profile.linkedin, icon: FiLinkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-wrap">
        <SectionHeading
          label="contact.sh"
          title="Let's build something"
          description="Open to MERN and full-stack internship opportunities — reach out directly, I read everything myself."
        />

        {/* ✅ Responsive Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-4 sm:p-5 flex items-center justify-between group"
            >
              {/* LEFT */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-ink-panel2 border border-ink-border flex items-center justify-center text-signal text-base sm:text-lg shrink-0">
                  <link.icon />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] sm:text-xs text-slate-faint uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-ivory text-xs sm:text-sm truncate">
                    {link.value}
                  </p>
                </div>
              </div>

              {/* RIGHT ICON */}
              <FiArrowUpRight className="text-slate-faint text-sm sm:text-base shrink-0 group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}