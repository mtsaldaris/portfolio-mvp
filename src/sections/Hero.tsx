'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated background lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 dark:from-brand-dark-primary/20 dark:to-brand-dark-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-brand-secondary/20 to-brand-primary/20 dark:from-brand-dark-secondary/20 dark:to-brand-dark-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text dark:text-brand-dark-text">
              Hey, I&apos;m <span className="text-brand-primary dark:text-brand-dark-primary">Myron</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-muted dark:text-brand-dark-muted">
              <span className="text-brand-primary dark:text-brand-dark-primary">{"{ "}</span>
              Full Stack
              <span className="text-brand-primary dark:text-brand-dark-primary">{" }"}</span> Developer
            </h2>
            <p className="text-lg text-brand-muted dark:text-brand-dark-muted max-w-lg">
              With expertise in <span className="text-brand-primary dark:text-brand-dark-primary">Node.js</span>, 
              <span className="text-brand-primary dark:text-brand-dark-primary"> React</span>, and 
              <span className="text-brand-primary dark:text-brand-dark-primary"> TypeScript</span>, 
              I create web solutions that are both innovative and robust. Passionate about clean code and 
              <span className="text-brand-primary dark:text-brand-dark-primary"> scalable architecture</span>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/myrontsaldaris"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/myron-tsaldaris"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://twitter.com/myrontsaldaris"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-brand-text dark:text-brand-dark-text hover:text-brand-primary dark:hover:text-brand-dark-primary transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-lg bg-brand-light/10 dark:bg-brand-dark/10"
            >
              <p className="text-2xl font-bold text-brand-primary dark:text-brand-dark-primary">X+</p>
              <p className="text-sm text-brand-muted dark:text-brand-dark-muted">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 rounded-lg bg-brand-light/10 dark:bg-brand-dark/10"
            >
              <p className="text-2xl font-bold text-brand-primary dark:text-brand-dark-primary">X+</p>
              <p className="text-sm text-brand-muted dark:text-brand-dark-muted">Projects Completed</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Circular frame for portrait */}
          <div className="relative w-full max-w-[480px] mx-auto aspect-square">
            {/* Additional design elements */}
            <motion.div
              className="absolute -inset-4 rounded-full opacity-30"
              style={{
                background: 'linear-gradient(45deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2), rgba(236,72,153,0.2))',
                filter: 'blur(20px)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(255,255,255,0.1)',
                transform: 'scale(1.1)',
              }}
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Animated background circle */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 50%, rgba(236,72,153,0.2) 100%)',
                filter: 'blur(30px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Portrait container */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-light/10 to-brand-dark/10 dark:from-brand-dark/10 dark:to-brand-light/10 backdrop-blur-sm overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Code icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-brand-primary dark:bg-brand-dark-primary rounded-2xl flex items-center justify-center shadow-lg"
              style={{
                boxShadow: "0 12px 36px -10px rgba(0, 0, 0, 0.25)",
                border: '2px solid rgba(255,255,255,0.1)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25l3.75 3.75-3.75 3.75M7.5 15.75 3.75 12l3.75-3.75" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}