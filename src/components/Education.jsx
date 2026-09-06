import {
  FiBookOpen,
  FiCalendar,
  FiAward,
  FiCode,
  FiPenTool,
} from "react-icons/fi";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0F172A] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Education & Learning
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My Education & Learning Journey
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My academic background and continuous learning journey
            in software engineering, full-stack development and
            UI/UX design.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 md:block" />

          {/* ================= EDUCATION ================= */}

          <div className="relative mb-12 md:pl-16">

            {/* Timeline Icon */}
            <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#0F172A] bg-blue-600 text-white md:flex">
              <FiBookOpen size={18} />
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-7 transition duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5">

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>

                  {/* Date */}
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-500">
                    <FiCalendar size={14} />
                    2022 — 2026
                  </span>

                  {/* Degree */}
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Bachelor of Science in Software Engineering
                  </h3>

                  {/* University */}
                  <p className="mt-2 text-base font-medium text-blue-400">
                    Software Engineering
                  </p>

                </div>

                {/* Award Icon */}
                <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 sm:flex">
                  <FiAward size={24} />
                </div>

              </div>

              {/* Description */}
              <div className="mt-6 border-t border-slate-800 pt-6">

                <p className="leading-7 text-slate-400">
                  Completed a Bachelor's degree in Software
                  Engineering with a focus on programming,
                  software development, web technologies,
                  databases and software engineering principles.
                </p>

                {/* Areas */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {[
                    "Software Engineering",
                    "Web Development",
                    "Programming",
                    "Database Systems",
                    "Software Design",
                    "System Development",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-700 bg-[#0F172A] px-3 py-2 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          </div>

          {/* ================= FULL STACK ================= */}

          <div className="relative mb-12 md:pl-16">

            {/* Timeline Icon */}
            <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#0F172A] bg-blue-600 text-white md:flex">
              <FiCode size={18} />
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-7 transition duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5">

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-500">
                    <FiCalendar size={14} />
                    Continuous Learning
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Full-Stack Web Development
                  </h3>

                  <p className="mt-2 text-base font-medium text-blue-400">
                    Self-Learning & Practical Projects
                  </p>

                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 sm:flex">
                  <FiCode size={24} />
                </div>

              </div>

              <div className="mt-6 border-t border-slate-800 pt-6">

                <p className="leading-7 text-slate-400">
                  Developing practical full-stack applications
                  while continuously improving my knowledge of
                  frontend, backend, APIs, databases and modern
                  development tools.
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {[
                    "React.js",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST APIs",
                    "Git",
                    "GitHub",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-700 bg-[#0F172A] px-3 py-2 text-xs text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          </div>

          {/* ================= UI UX ================= */}

          <div className="relative md:pl-16">

            {/* Timeline Icon */}
            <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#0F172A] bg-blue-600 text-white md:flex">
              <FiPenTool size={18} />
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-7 transition duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5">

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-500">
                    <FiCalendar size={14} />
                    Continuous Learning
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    UI/UX Design
                  </h3>

                  <p className="mt-2 text-base font-medium text-blue-400">
                    Design Practice & Self-Learning
                  </p>

                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 sm:flex">
                  <FiPenTool size={24} />
                </div>

              </div>

              <div className="mt-6 border-t border-slate-800 pt-6">

                <p className="leading-7 text-slate-400">
                  Exploring UI/UX design principles and creating
                  clean, intuitive and user-friendly interfaces.
                  I focus on understanding user needs and
                  translating ideas into practical digital
                  experiences.
                </p>

                {/* Design Skills */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {[
                    "Figma",
                    "UI Design",
                    "UX Design",
                    "Wireframing",
                    "Prototyping",
                    "User Flow",
                    "Responsive Design",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-700 bg-[#0F172A] px-3 py-2 text-xs text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">

          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
            <FiBookOpen size={24} />
          </div>

          <h3 className="text-xl font-bold text-white">
            Always Learning, Always Building
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            I believe in continuous learning and improving my
            skills through practical projects, new technologies
            and real-world development challenges.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Education;