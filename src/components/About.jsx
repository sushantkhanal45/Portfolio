import { motion } from "framer-motion";
import { Code2, Layers3, Lightbulb } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: <Code2 size={22} />,
      title: "Clean Development",
      description:
        "Building organized, responsive, and maintainable web interfaces.",
    },
    {
      icon: <Layers3 size={22} />,
      title: "Component-Based UI",
      description:
        "Creating reusable React components for scalable frontend applications.",
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Problem Solving",
      description:
        "Turning ideas and requirements into practical digital solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#070b14] sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Building ideas into
            <span className="text-blue-600 dark:text-blue-400">
              {" "}
              meaningful experiences.
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          {/* About description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              I am an aspiring frontend developer with a strong interest in
              building modern, responsive, and user-friendly web applications. I
              enjoy working with React.js and turning ideas into clean,
              functional digital experiences.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
              My experience developing TradeSphere, a smart online marketplace,
              helped me strengthen my skills in frontend development, backend
              integration, database management, search functionality, and
              recommendation systems. I enjoy learning new technologies and
              continuously improving the way I design and build applications.
            </p>

            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition duration-300 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Explore my projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* Strength cards */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {strengths.map((strength, index) => (
              <motion.article
                key={strength.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:border-blue-400/50 hover:bg-white hover:shadow-lg hover:shadow-blue-100/60 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/30 dark:hover:bg-white/[0.05] dark:hover:shadow-none"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition duration-300 group-hover:scale-110 dark:text-blue-400">
                  {strength.icon}
                </div>

                {/* Title */}
                <h3 className="mt-5 font-semibold text-slate-950 dark:text-white">
                  {strength.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {strength.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
