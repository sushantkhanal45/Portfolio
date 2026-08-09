import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  Send,
  XCircle,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("");
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-slate-50 px-6 py-20 transition-colors duration-300 dark:bg-[#070b14] sm:py-24"
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            Let&apos;s Connect
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Have a project or collaboration in mind?
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
            I&apos;m open to React.js internship opportunities, frontend
            projects, collaborations, and exciting ideas. Send me a message, and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-9"
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Let&apos;s work together
            </h3>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
              Have an internship opportunity, a frontend project, or an idea you
              would like to collaborate on? Feel free to send me a message.
            </p>

            {/* Email */}
            <a
              href="mailto:skkhanal45@gmail.com"
              className="group mt-8 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition duration-300 group-hover:scale-105 dark:text-blue-400">
                <Mail size={21} />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Email
                </p>

                <p className="mt-1 font-medium text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  skkhanal45@gmail.com
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
                  Bhaktapur, Nepal
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 border-t border-slate-200 pt-7 dark:border-white/10">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Find me online
              </p>

              <div className="mt-4 flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/sushantkhanal45"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
                >
                  <FaGithub size={19} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sushantkhanal45/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right contact form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-9"
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
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                htmlFor="title"
                className="text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Subject
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Project, internship, collaboration..."
                required
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
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or collaboration idea..."
                required
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600"
              />
            </div>

            {/* Success message */}
            {status === "success" && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 size={19} />

                <span>
                  Your message was sent successfully. Thank you for reaching
                  out!
                </span>
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                <XCircle size={19} />

                <span>
                  The message could not be sent. Please try again or contact me
                  directly by email.
                </span>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSending}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? (
                <>
                  <LoaderCircle size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
