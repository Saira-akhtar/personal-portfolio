import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      description: "Semantic and accessible web structure",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      description: "Responsive and modern styling",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      description: "Dynamic and interactive web applications",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      description: "Component-based frontend development",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      description: "Utility-first responsive UI design",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      description: "Server-side JavaScript development",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      description: "REST APIs and backend development",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      description: "NoSQL database management",
    },
    {
      name: "REST APIs",
      icon: <span className="text-xl font-bold">API</span>,
      description: "Connecting frontend and backend services",
    },
  ];

  // NEW: modern frontend tooling used in the LearnHub LMS integration challenge
  const stateManagementSkills = [
    {
      name: "TanStack Query",
      icon: <span className="text-lg font-bold">TQ</span>,
      description: "Server-state caching, refetching and mutations",
    },
    {
      name: "Zustand",
      icon: <span className="text-lg font-bold">Zu</span>,
      description: "Lightweight global client-state management",
    },
    {
      name: "React Hook Form",
      icon: <span className="text-lg font-bold">RHF</span>,
      description: "Performant form state and validation handling",
    },
    {
      name: "Zod",
      icon: <span className="text-lg font-bold">Zod</span>,
      description: "Schema-based form and data validation",
    },
    {
      name: "Axios",
      icon: <span className="text-lg font-bold">Ax</span>,
      description: "HTTP client with interceptors for API requests",
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      name: "Postman",
      icon: <SiPostman />,
    },
    {
      name: "Vite",
      icon: <SiVite />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ];

  const SkillCard = ({ skill }) => {
    return (
      <div className="group rounded-xl border border-slate-800 bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-2xl text-blue-500 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {skill.icon}
          </div>

          <h3 className="font-semibold text-white">
            {skill.name}
          </h3>
        </div>

        {skill.description && (
          <p className="text-sm leading-6 text-slate-400">
            {skill.description}
          </p>
        )}
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="bg-[#0F172A] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            My Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technologies I Work With
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            I use modern technologies and development tools to
            build responsive, scalable and user-friendly web
            applications.
          </p>
        </div>

        {/* Frontend */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-800" />

            <h3 className="text-lg font-semibold text-white">
              Frontend Development
            </h3>

            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {frontendSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-800" />

            <h3 className="text-lg font-semibold text-white">
              Backend & Database
            </h3>

            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {backendSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </div>

        {/* State Management & Data Fetching */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-800" />

            <h3 className="text-lg font-semibold text-white">
              State Management & Data Fetching
            </h3>

            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stateManagementSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-800" />

            <h3 className="text-lg font-semibold text-white">
              Tools & Workflow
            </h3>

            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {tools.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stack */}
        <div className="mt-20 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            My Main Stack
          </p>

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            MERN Stack
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            MongoDB, Express.js, React.js and Node.js —
            combined to create complete full-stack web
            applications.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["MongoDB", "Express.js", "React.js", "Node.js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-[#111827] px-4 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;