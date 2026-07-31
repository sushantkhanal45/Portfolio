import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
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
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Let&apos;s build something
            <span className="text-blue-600 dark:text-blue-400">
              {" "}
              great together.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
            I&apos;m currently looking for React.js internship opportunities
            and would be happy to connect, collaborate, or discuss potential
            projects.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-9"
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Let&apos;s connect
            </h3>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
              Whether you have an internship opportunity, a project idea, or
              simply want to connect, feel free to reach out.
            </p>

            {/* Email */}
            <a
              href="mailto:your-email@example.com"
              className="group mt-9 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition group-hover:scale-105 dark:text-blue-400">
                <Mail size={21} />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Email
                </p>

                <p className="mt-1 font-medium text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  your-email@example.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Location
                </p>

                <p className="mt-1 font-medium text-slate-900 dark:text-white">
                  Nepal
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 border-t border-slate-200 pt-7 dark:border-white/10">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Find me online
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Your name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="What would you like to discuss?"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message here..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Send Message

              <Send size={18} />
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500 dark:text-slate-500">
              The contact form will be connected to an email service in the
              next step.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;