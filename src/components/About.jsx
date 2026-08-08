import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 dark:bg-[#080d18]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Building the web with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              creativity & purpose
            </span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I&apos;m Sushant Khanal, a Frontend Developer focused on building
              modern, responsive, and user-friendly web applications with
              React.js.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
              I enjoy turning ideas into clean and interactive interfaces using
              React.js, JavaScript, Tailwind CSS, HTML, and CSS. I focus on
              creating reusable components, responsive layouts, and smooth user
              experiences that work well across different devices.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
              Alongside frontend development, I&apos;m expanding my backend
              knowledge with Node.js and Express.js. I&apos;m also familiar with
              PHP, MongoDB, MySQL, REST APIs, and JSON, allowing me to
              understand and work across different parts of a web application.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
              Through projects such as <b>ExploreNepal, Expense Tracker, and the Swastik College website </b>, I&apos;ve
              been developing practical experience in building real-world
              applications and continuously improving my development skills.
            </p>
          </motion.div>

          {/* Skills / focus card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-blue-950/20"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              What I Do
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Frontend Development
                </h3>

                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                  Building responsive interfaces and reusable React.js
                  components with a strong focus on clean UI and user
                  experience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Modern Web Applications
                </h3>

                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                  Creating interactive applications with JavaScript, React.js,
                  Tailwind CSS, state management, and API integration.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Growing Full-Stack Skills
                </h3>

                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                  Currently expanding my backend development skills with Node.js
                  and Express.js while working with databases and server-side
                  technologies.
                </p>
              </div>
            </div>

            {/* Tech tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React.js",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "MySQL",
                "PHP",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
