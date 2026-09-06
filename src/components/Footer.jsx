import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-800 bg-[#0F172A]">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo & About */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-wide text-white"
            >
              Saira<span className="text-blue-500">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Full-Stack Developer passionate about building
              modern, responsive and user-friendly web
              applications.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="https://github.com/Saira-akhtar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                <FiGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/saira-akhtar-65b452284/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                <FiLinkedin size={19} />
              </a>

              <a
                href="mailto:sairaffc123@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                <FiMail size={19} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition duration-300 hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Technologies
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "React.js",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Git",
                "GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-700 bg-[#111827] px-3 py-2 text-xs text-slate-400"
                >
                  {tech}
                </span>
              ))}

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {currentYear} Saira Akhtar. All rights reserved.
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-2 text-sm text-slate-400 transition duration-300 hover:text-blue-500"
          >
            Back to top

            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 transition group-hover:border-blue-500">
              <FiArrowUp size={17} />
            </span>
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;