import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-[#0F172A]/95 backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Saira<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons + Hire Me */}
        <div className="hidden items-center gap-5 md:flex">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition hover:text-blue-500"
          >
            <FiGithub size={21} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition hover:text-blue-500"
          >
            <FiLinkedin size={21} />
          </a>

          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-blue-700"
          >
            Hire Me
          </a>

        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-[#0F172A] px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-300 transition hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-5 border-t border-slate-800 pt-5">

              <a
                href="https://github.com/Saira-akhtar"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-500"
              >
                <FiGithub size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/saira-akhtar-65b452284/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-500"
              >
                <FiLinkedin size={21} />
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Hire Me
              </a>

            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;