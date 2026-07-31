import { motion } from "framer-motion";

import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "TradeSphere",
      category: "Smart Online Marketplace",
      description:
        "A full-stack online marketplace designed to provide secure and efficient buyer-seller interactions. The platform includes product listings, search, recommendations, wishlists, cart management, messaging, offers, order management, and administrative verification.",

      features: [
        "Smart product search and recommendations",
        "Buyer-seller chat and price negotiation",
        "Wishlist, cart, and order management",
        "Product and seller verification",
      ],

      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML",
        "CSS",
        "Azure",
      ],

      github: "https://github.com/",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#070b14] sm:py-32"
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
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Projects built with
            <span className="text-blue-600 dark:text-blue-400">
              {" "}
              purpose.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
            A selection of projects where I applied frontend development,
            backend integration, database design, and problem-solving skills.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                {/* Left project preview */}
                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 p-8">
                  {/* Background decorations */}
                  <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

                  <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-violet-300/20 blur-2xl" />

                  {/* Featured label */}
                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    Featured Project
                  </div>

                  {/* Browser/project mockup */}
                  <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-slate-950/30 p-5 shadow-2xl backdrop-blur-md">
                    {/* Browser dots */}
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />

                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />

                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>

                    {/* Mock application */}
                    <div className="mt-6 rounded-xl bg-white/10 p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-blue-100">
                            Smart Marketplace
                          </p>

                          <h3 className="mt-1 text-xl font-bold text-white">
                            TradeSphere
                          </h3>
                        </div>

                        <div className="rounded-xl bg-white/10 p-3 text-white">
                          <ShoppingBag size={25} />
                        </div>
                      </div>

                      {/* Mock product cards */}
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-white/10 p-3">
                          <div className="h-2 w-16 rounded bg-white/40" />

                          <div className="mt-3 h-12 rounded bg-white/10" />

                          <div className="mt-3 h-2 w-10 rounded bg-white/30" />
                        </div>

                        <div className="rounded-lg bg-white/10 p-3">
                          <div className="h-2 w-12 rounded bg-white/40" />

                          <div className="mt-3 h-12 rounded bg-white/10" />

                          <div className="mt-3 h-2 w-14 rounded bg-white/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right project information */}
                <div className="p-7 sm:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <ShoppingBag size={24} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  {/* Key features */}
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                      Key Features
                    </h4>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
                          />

                          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                      Technologies
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/30 dark:hover:text-blue-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-9 flex flex-wrap gap-4">
                    {/* GitHub button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>

                    {/* Live demo button */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-white/15 dark:text-white dark:hover:border-blue-400/50 dark:hover:text-blue-400"
                    >
                      Live Demo

                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <FaGithub size={19} />

            View more work on GitHub

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;