import { motion } from 'framer-motion'
import { HiOutlineArrowDown } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/content'
import Terminal from './Terminal'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
      <div className="container-wrap w-full grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        
        {/* LEFT */}
        <div className="text-center lg:text-left">
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="module-label justify-center lg:justify-start"
          >
            system.status — available for internships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mt-5 leading-[1.15] break-words"
          >
            Hi, I&apos;m {profile.name.split(' ')[0]}.
            <br />
            I build <span className="text-signal">full-stack systems</span>,
            <br className="hidden sm:block" />
            not just interfaces.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-muted text-base sm:text-lg mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-8"
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto justify-center">
              View Projects
            </a>
            <a href={profile.resumeUrl} download className="btn-secondary w-full sm:w-auto justify-center">
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-start items-center gap-5 mt-8 text-slate-muted"
          >
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors text-xl">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors text-xl">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-signal transition-colors text-xl">
              <FiMail />
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full max-w-md mx-auto lg:max-w-none"
        >
          <Terminal />
        </motion.div>
      </div>

      {/* SCROLL ICON */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { duration: 1.8, repeat: Infinity } }}
        className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-faint hover:text-signal transition-colors"
      >
        <HiOutlineArrowDown size={22} />
      </motion.a>
    </section>
  )
}