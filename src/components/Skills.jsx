import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout size={24} />,
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
      icon: <Server size={24} />,
      description:
        "Developing application logic and connecting frontend systems.",
      skills: [
        "PHP",
        "REST APIs",
        "Authentication",
        "Form Validation",
        "Backend Integration",
      ],
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      description:
        "Designing and managing structured data for web applications.",
      skills: [
        "MySQL",
        "Database Design",
        "SQL Queries",
        "CRUD Operations",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch size={24} />,
      description:
        "Using modern tools to build, manage, and deploy projects.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vite",
        "XAMPP",
        "Azure",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-slate-100 px-6 py-24 transition-colors duration-300 dark:bg-[#0a0f1c] sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Technologies I use to
            <span className="text-blue-600 dark:text-blue-400">
              {" "}
              build and create.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
            A combination of frontend technologies, backend tools, databases,
            and development workflows that I use to create complete web
            applications.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-100/70 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-blue-400/30 dark:hover:bg-white/[0.05]"
            >
              {/* Card icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition duration-300 group-hover:scale-110 dark:text-blue-400">
                {category.icon}
              </div>

              {/* Card title */}
              <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">
                {category.title}
              </h3>

              {/* Card description */}
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                {category.description}
              </p>

              {/* Skill tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/30 dark:hover:text-blue-300"
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 text-center dark:border-blue-400/10 dark:bg-blue-400/[0.05]"
        >
          <Code2
            size={22}
            className="text-blue-600 dark:text-blue-400"
          />

          <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
            Currently focused on improving my React.js skills and building
            modern, scalable frontend applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;