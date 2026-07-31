import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 transition-colors duration-300 dark:border-white/10 dark:bg-[#070b14]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 md:flex-row">
        {/* Logo and copyright */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-slate-950 dark:text-white"
          >
            Sushant<span className="text-blue-500">.</span>
          </a>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Sushant Khanal. All rights reserved.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </div>

        {/* Social links and back-to-top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
          >
            <FaLinkedinIn size={17} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-500 hover:-translate-y-1"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;