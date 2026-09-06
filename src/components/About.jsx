import {
  FiUser,
  FiCode,
  FiDatabase,
  FiLayers,
  FiArrowRight,
} from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#111827] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get to Know Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            {/* Intro */}
            <div className="mb-8 flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500">
                <FiUser size={24} />
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Hello, I'm Saira Akhtar
                </h3>

                <p className="leading-7 text-slate-400">
                  I'm a Software Engineering graduate and a passionate
                  Full-Stack Developer who enjoys creating modern and
                  user-friendly web applications.
                </p>
              </div>

            </div>

            {/* Description */}
            <div className="space-y-5 text-slate-400 leading-7">

              <p>
                I work across both frontend and backend development,
                building complete web applications from the user
                interface to the server-side logic and database.
              </p>

              <p>
                My main focus is on writing clean, maintainable code
                and creating responsive applications that provide a
                smooth experience across different devices.
              </p>

              <p>
                I am continuously learning new technologies and
                improving my development skills by working on
                real-world projects.
              </p>

            </div>

            {/* Button */}
            <a
              href="#skills"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition hover:text-blue-400"
            >
              Explore My Skills

              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* Right Side */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Frontend */}
            <div className="group rounded-2xl border border-slate-800 bg-[#0F172A] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-600/50">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 transition group-hover:bg-blue-600 group-hover:text-white">
                <FiCode size={24} />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                Frontend Development
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                Building responsive and interactive interfaces
                using React.js, JavaScript, HTML and CSS.
              </p>

            </div>

            {/* Backend */}
            <div className="group rounded-2xl border border-slate-800 bg-[#0F172A] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-600/50">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 transition group-hover:bg-blue-600 group-hover:text-white">
                <FiLayers size={24} />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                Backend Development
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                Developing REST APIs and server-side applications
                using Node.js and Express.js.
              </p>

            </div>

            {/* Database */}
            <div className="group rounded-2xl border border-slate-800 bg-[#0F172A] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-600/50">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 transition group-hover:bg-blue-600 group-hover:text-white">
                <FiDatabase size={24} />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                Database
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                Working with MongoDB to design and manage
                application data efficiently.
              </p>

            </div>

            {/* Full Stack */}
            <div className="group rounded-2xl border border-slate-800 bg-[#0F172A] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-600/50">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 transition group-hover:bg-blue-600 group-hover:text-white">
                <FiLayers size={24} />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                Full-Stack Development
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                Connecting frontend, backend, APIs and databases
                to create complete web applications.
              </p>

            </div>

          </div>

        </div>


      </div>
    </section>
  );
};

export default About;