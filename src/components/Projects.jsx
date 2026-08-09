import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import exploreNepalImage from "../assets/projects/explorenepal.png";
import expenseTrackerImage from "../assets/projects/expense-tracker.png";
import swastikCollegeImage from "../assets/projects/swastik-college.png";

const Projects = () => {
  const projects = [
    {
      title: "ExploreNepal",
      category: "Travel Exploration Platform",
      description:
        "A responsive travel platform for discovering popular destinations across Nepal. Users can search and filter destinations, view detailed information, save favorites, and check destination-specific weather information.",
      image: exploreNepalImage,
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST API"],
      features: [
        "Destination search & filtering",
        "Detailed destination pages",
        "Favorites functionality",
        "Weather API integration",
      ],
      github: "#",
      demo: "#",
    },

    {
      title: "Expense Tracker",
      category: "Expense Management Application",
      description:
        "A responsive expense management application that allows users to track, organize, and manage their expenses through a clean and intuitive interface.",
      image: expenseTrackerImage,
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      features: [
        "Add, edit & delete expenses",
        "Expense sorting & filtering",
        "Category-based organization",
        "Responsive user interface",
      ],
      github: "#",
      demo: "#",
    },

    {
      title: "Swastik College Website",
      category: "Full-Stack College Website",
      description:
        "A full-stack, CMS-driven college website with a custom admin panel for managing courses, faculty, notices, events, galleries, testimonials, downloads, and blog content.",
      image: swastikCollegeImage,
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      features: [
        "Custom admin panel",
        "JWT-based authentication",
        "Dynamic section visibility",
        "CMS-driven content management",
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-slate-50 px-6 py-20 transition-colors duration-300 dark:bg-[#070b14] sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Projects built with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              purpose.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            A selection of projects where I applied frontend development,
            backend integration, APIs, databases, and responsive UI design.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-100/60 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-blue-400/30"
            >
              {/* Real Project Screenshot */}
              <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Category */}
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mt-5">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Key Features
                  </p>

                  <ul className="mt-3 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm leading-5 text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
                  >
                    <FaGithub size={17} />
                    View Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
