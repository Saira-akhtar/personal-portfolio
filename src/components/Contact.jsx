import { useForm } from "@formspree/react";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqpkpqoy");

  return (
    <section id="contact" className="bg-[#111827] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Contact Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Work Together
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project idea, job opportunity or just want to connect? Feel
            free to send me a message.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* ================= LEFT SIDE ================= */}

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-800 bg-[#0F172A] p-7">
              <h3 className="text-2xl font-bold text-white">Get In Touch</h3>

              <p className="mt-4 leading-7 text-slate-400">
                I'm always open to discussing new projects, development
                opportunities, collaborations and interesting ideas.
              </p>

              {/* Contact Information */}
              <div className="mt-8 space-y-6">
                {/* Email */}
                <a
                  href="mailto:sairah.webdev@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FiMail size={21} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-slate-300 transition group-hover:text-blue-400">
                      sairah.webdev@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923011555373"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FiPhone size={21} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-slate-300 transition group-hover:text-blue-400">
                      +92 3011555373
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <FiMapPin size={21} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 border-t border-slate-800 pt-7">
                <p className="mb-4 text-sm font-medium text-slate-400">
                  Connect with me
                </p>

                <div className="flex gap-3">
                  {/* GitHub */}
                  <a
                    href="https://github.com/Saira-akhtar"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition duration-300 hover:border-blue-500 hover:text-blue-500"
                  >
                    <FiGithub size={20} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/saira-akhtar-65b452284/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition duration-300 hover:border-blue-500 hover:text-blue-500"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="lg:col-span-3">
            {/* Success Message */}
            {state.succeeded ? (
              <div className="rounded-2xl border border-green-500/20 bg-[#0F172A] p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  ✓
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>

                <p className="mt-3 text-slate-400">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-800 bg-[#0F172A] p-7 sm:p-8"
              >
                {/* Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-[#111827] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-[#111827] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-[#111827] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                  />
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    rows="6"
                    required
                    className="w-full resize-none rounded-lg border border-slate-700 bg-[#111827] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                  />
                </div>

                {/* Error */}
                {state.errors && state.errors.length > 0 && (
                  <div className="mt-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <FiSend size={18} />

                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
