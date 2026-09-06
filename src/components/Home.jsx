import {
  FiArrowRight,
  FiDownload,
  FiCode,
} from "react-icons/fi";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0F172A] pt-20"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 -z-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>

              <span className="text-sm text-slate-300">
                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

              Hi, I'm{" "}
              <span className="text-blue-500">
                Saira Akhtar
              </span>

              <br />

              <span className="text-slate-200">
                Full-Stack Developer
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I build modern, responsive and scalable web applications
              using React, Node.js, Express and MongoDB. I enjoy turning
              ideas into clean, functional and user-friendly digital
              experiences.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-700"
              >
                View My Projects

                <FiArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={18}
                />
              </a>

              <a
                href="/Saira_Akhtar_FullStack.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                <FiDownload size={18} />
                Download CV
              </a>

            </div>

            

          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

              {/* Developer Card */}
              <div className="relative w-[300px] rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-2xl sm:w-[380px]">

                {/* Card Header */}
                <div className="mb-6 flex items-center gap-2">

                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                  <span className="h-3 w-3 rounded-full bg-green-500"></span>

                </div>

                {/* Code Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-500">
                  <FiCode size={32} />
                </div>

                {/* Fake Code */}
                <div className="space-y-3 font-mono text-sm">

                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-green-400">
                      "Saira Akhtar"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-green-400">
                      "Full-Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">frontend:</span>{" "}
                    <span className="text-green-400">
                      "React.js"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">backend:</span>{" "}
                    <span className="text-green-400">
                      "Node.js"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">database:</span>{" "}
                    <span className="text-green-400">
                      "MongoDB"
                    </span>
                  </p>

                  <p>{"}"}</p>

                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-slate-700 pt-5">

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-slate-500">
                      Building the web
                    </span>

                    <span className="text-blue-500">
                      {"</>"}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;