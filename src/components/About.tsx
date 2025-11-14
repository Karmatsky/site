import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Building thoughtful, performant web experiences
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              I’m a frontend-focused engineer who enjoys crafting clean,
              accessible UIs with modern tooling. I care about fast load times,
              smooth interactions, and designs that scale.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Recently I’ve been working with TypeScript, React, and Vite,
              exploring animation with Framer Motion, and tightening DX with
              robust typing and reusable component patterns.
            </p>
            <ul className="flex flex-wrap gap-2 mb-8">
              {[
                "TypeScript",
                "React",
                "Tailwind",
                "Framer Motion",
                "Vite",
                "Accessibility",
              ].map((skill) => (
                <li
                  key={skill}
                  className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 text-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div
                aria-hidden
                className="absolute -inset-6 bg-gradient-to-tr from-slate-200 via-slate-100 to-white rounded-3xl blur-2xl"
              />
              <figure className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 shadow-sm border border-slate-800/40 flex items-center justify-center">
                <img
                  src="/images/portrait.jpg"
                  alt="Portrait of Savely Karmatsky"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <span
                  aria-hidden
                  className="text-white/90 text-5xl font-semibold select-none"
                >
                  SK
                </span>
              </figure>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
