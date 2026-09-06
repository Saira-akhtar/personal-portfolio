import {
  FiGithub,
  
  FiArrowUpRight,
  FiShoppingBag,
  FiCheckSquare,
  FiGrid,
  FiBookOpen,
} from "react-icons/fi";

import {
  FaReact,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "LearnHub LMS",
      category: "Frontend Integration Challenge",

      description:
        "A full-stack learning management system where I integrated a React 19 frontend with a JWT-secured NestJS REST API — wiring auth, role-based routes, course enrollment and a live student dashboard using modern data-fetching and form-handling patterns.",

      icon: <FiBookOpen size={32} />,

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />,
        },
        {
          name: "TanStack Query",
          icon: <span className="text-xs font-bold">TQ</span>,
        },
        {
          name: "Zustand",
          icon: <span className="text-xs font-bold">Zu</span>,
        },
        {
          name: "React Hook Form",
          icon: <span className="text-xs font-bold">RHF</span>,
        },
        {
          name: "Zod",
          icon: <span className="text-xs font-bold">Zod</span>,
        },
        {
          name: "Axios",
          icon: <span className="text-xs font-bold">Ax</span>,
        },
        {
          name: "NestJS",
          icon: <span className="text-xs font-bold">Nest</span>,
        },
      ],

      github: "https://github.com/Saira-akhtar/learnhub-lms",

      featured: true,
    },

    {
      title: "StyleHive",
      category: "Full-Stack E-Commerce",

      description:
        "A complete fashion e-commerce platform where users can browse products, manage their cart, place orders, apply coupons, submit reviews and manage their profiles.",

      icon: <FiShoppingBag size={32} />,

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
      ],

      github: "https://github.com/Saira-akhtar/StyleHive",
      
      featured: true,
    },

    {
      title: "Task Manager",
      category: "Full-Stack Web Application",

      description:
        "A task management application that allows users to create, update, delete and manage their tasks through a responsive interface connected to a RESTful backend API.",

      icon: <FiCheckSquare size={32} />,

      technologies: [
        {
          name: "React.js",
          icon: <FaReact />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
      ],

      github: "https://github.com/",
      

      featured: true,
    },

    {
      title: "Tic Tac Toe",
      category: "JavaScript Game",

      description:
        "A browser-based Tic Tac Toe game built with JavaScript featuring an interactive game board, player turns, winning combinations and game reset functionality.",

      icon: <FiGrid size={32} />,

      technologies: [
        {
          name: "HTML5",
          icon: <span className="font-bold">HTML</span>,
        },
        {
          name: "CSS3",
          icon: <span className="font-bold">CSS</span>,
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
        },
      ],

      github: "https://github.com/Saira-akhtar/tic-tac-toe-game",
      live: "https://saira-akhtar.github.io/tic-tac-toe-game/",

      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#111827] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            My Work
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A selection of projects that demonstrate my experience
            with frontend, backend and full-stack web development.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 lg:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0F172A] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 ${
                project.featured ? "lg:col-span-1" : "lg:col-span-2"
              }`}
            >

              {/* Top Line */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

              {/* Project Header */}
              <div className="flex items-start justify-between gap-4">

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {project.icon}
                </div>

                {/* Arrow */}
                <FiArrowUpRight
                  size={23}
                  className="text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
                />

              </div>

              {/* Category */}
              <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-blue-500">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-2xl font-bold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 min-h-[100px] text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (
                  <span
                    key={technology.name}
                    className="flex items-center gap-2 rounded-lg border border-slate-700 bg-[#111827] px-3 py-2 text-xs text-slate-300 transition hover:border-blue-500/50"
                  >
                    <span className="text-blue-500">
                      {technology.icon}
                    </span>

                    {technology.name}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg  bg-blue-600 border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition duration-300 hover:border-blue-500 hover:text-blue-500"
                >
                  <FiGithub size={17} />
                  GitHub
                </a>

                

              </div>

            </div>
          ))}

        </div>

        {/* GitHub Button */}
        <div className="mt-14 text-center">

          <a
            href="https://github.com/Saira-akhtar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:border-blue-500 hover:text-blue-500"
          >
            <FiGithub size={18} />
            View More Projects
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;