import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 pt-20 transition-colors duration-300 dark:bg-[#070b14]"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />

        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/10" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Availability badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 dark:border-blue-400/20 dark:bg-blue-400/10"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />

            <span className="text-sm font-medium text-blue-700 dark:text-blue-200">
              Open to React.js Internship Opportunities
            </span>
          </motion.div> */}

          {/* Introduction */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            Sushant
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              Khanal
            </span>
          </h1>

          {/* Job title */}
          <h2 className="mt-7 text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-300">
            React.js Developer & Frontend Developer
          </h2>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            I build modern, responsive, and user-friendly web applications using React.js, JavaScript, and Tailwind CSS while continuously expanding my backend development skills.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              View My Work
              <ArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition duration-300 hover:border-blue-400 hover:bg-blue-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-blue-400/50 dark:hover:bg-white/10"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/sushantkhanal45"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:border-blue-400/40 dark:hover:text-blue-400"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sushantkhanal45/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:border-blue-400/40 dark:hover:text-blue-400"
            >
              <FaLinkedinIn size={19} />
            </a>

            {/* Email */}
            <a
              href="skkhanal45@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none dark:hover:border-blue-400/40 dark:hover:text-blue-400"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right-side visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="relative hidden justify-center lg:flex"
        >
          {/* Main card */}
          <div className="relative flex h-80 w-80 items-center justify-center rounded-[2.5rem] border border-slate-200 bg-white/70 shadow-2xl shadow-blue-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-blue-950/30">
            <div className="absolute inset-5 rounded-[2rem] border border-blue-500/10 dark:border-blue-400/10" />

            <div className="text-center">
              <p className="text-7xl font-black text-blue-600 dark:text-blue-400">
                &lt;/&gt;
              </p>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                React Developer
              </p>
            </div>
          </div>

          {/* React badge */}
          <div className="absolute -right-3 top-10 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0c1220]/90">
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Building with
            </p>

            <p className="mt-1 font-semibold text-blue-600 dark:text-blue-300">
              React.js
            </p>
          </div>

          {/* TradeSphere badge */}
          <div className="absolute -bottom-3 -left-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0c1220]/90">
            <p className="text-xs text-slate-500">Featured project</p>

            <p className="mt-1 font-semibold text-violet-600 dark:text-violet-300">
              TradeSphere
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
