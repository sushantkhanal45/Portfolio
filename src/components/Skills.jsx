import { motion } from "framer-motion";
import { Braces, Code2, Database, GitBranch, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Braces size={22} />,
      description:
        "Building responsive, interactive, and user-friendly interfaces.",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      icon: <Server size={22} />,
      description:
        "Developing application logic and connecting frontend systems.",
      skills: [
        "Node.js",
        "Express.js",
        "PHP",
        "REST APIs",
        "JSON",
        "Authentication",
      ],
    },
    {
      title: "Database",
      icon: <Database size={22} />,
      description:
        "Designing and managing structured data for web applications.",
      skills: [
        "MongoDB",
        "MySQL",
        "Database Design",
        "SQL Queries",
        "CRUD Operations",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch size={22} />,
      description: "Using modern tools to build, manage, and deploy projects.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        // "Vite",
        "Vercel",
        "Netlify",
        "Render",
        "Backblaze B2",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-slate-50 px-6 py-20 transition-colors duration-300 dark:bg-[#070b14] sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-1/4 top-20 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Technologies I use to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              build and create.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            A combination of frontend technologies, backend tools, databases,
            and development workflows that I use to create complete web
            applications.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-100/60 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-blue-400/30 dark:hover:bg-white/[0.05]"
            >
              {/* Card icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition duration-300 group-hover:scale-105 dark:text-blue-400">
                {category.icon}
              </div>

              {/* Card title */}
              <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                {category.title}
              </h3>

              {/* Card description */}
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {category.description}
              </p>

              {/* Skill tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/30 dark:hover:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom skill statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-4 text-center dark:border-blue-400/10 dark:bg-blue-400/[0.05]"
        >
          <Code2 size={22} className="text-blue-600 dark:text-blue-400" />

          <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
            Currently focused on strengthening my React.js skills while
            expanding my backend knowledge with Node.js and Express.js.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
