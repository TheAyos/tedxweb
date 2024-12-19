import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HashLetterEffect from "../components/HashLetterEffect";

const Announcer = () => {
  // disables registration button when set to '#'
  const registrationLink = "#";

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden relative">
      <main className="relative z-10 min-h-screen grid desktop:grid-cols-12 laptop:grid-cols-12 tablet:grid-cols-6 mobile:grid-cols-4 gap-0">
        {/* Left column */}
        <div className="desktop:col-span-7 laptop:col-span-7 tablet:col-span-6 mobile:col-span-4 flex flex-col justify-between desktop:p-16 laptop:p-12 tablet:p-8 mobile:p-6 border-r border-white/10">
          <div>
            {/* Top tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <img
                src="logo.png"
                alt="TEDxÉcolePolytechnique"
                className="shake-effect w-3/4"
              />
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="shake-effect font-mono font-black text-[4vw] tablet:text-[10vw] mobile:text-[12vw] leading-[0.85] tracking-tighter">
                {/* <span className="block text-red-600">TEDx</span>
                <span className="block">ÉCOLE</span>
                <span className="block text-blue-600">POLYTECHNIQUE</span> */}
                <span className="red-tedx-color">2025</span>{" "}
                <span>Edition</span>{" "}
              </h1>
              <h2 className="font-mono font-black text-[10vw] sm:text-[4vw] md:text-[3vw] text-left">
                <span className="block sm:inline text-blue-600">Theme: </span>
                <HashLetterEffect words={["Evolving Patterns"]} />
              </h2>
            </motion.div>
          </div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="desktop:block laptop:block tablet:hidden mobile:hidden"
          >
            <div className="grid grid-cols-3 border-t border-white/20 pt-8">
              <div className="space-y-2 border-r border-white/10 pr-4">
                <div className="font-mono text-[10px] text-red-600 uppercase tracking-widest">
                  Previous Editions
                </div>
                <div className="font-mono text-4xl font-bold">02</div>
              </div>
              <div className="space-y-2 border-r border-white/10 px-4">
                <div className="font-mono text-[10px] text-red-600 uppercase tracking-widest">
                  Total Speakers
                </div>
                <div className="font-mono text-4xl font-bold">11</div>
              </div>
              <div className="space-y-2 pl-4">
                <div className="font-mono text-[10px] text-red-600 uppercase tracking-widest">
                  ba
                </div>
                <div className="font-mono text-4xl font-bold">oué</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="desktop:col-span-5 laptop:col-span-5 tablet:col-span-6 mobile:col-span-4 desktop:p-16 laptop:p-12 tablet:p-8 mobile:p-6 flex flex-col justify-between">
          {/* Event details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              {/* <div className="font-mono text-[10px] text-red-600 uppercase tracking-widest">
                Save the date
              </div> */}

              <span
                className="font-mono text-xs tracking-[0.2em] bg-red-600 px-4 py-2 inline-block"
                style={{ backgroundColor: "var(--tedx-red)" }}
              >
                SAVE THE DATE
              </span>

              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-sm opacity-60">DATE</span>
                  <span className="text-lg">6th May 2025</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-sm opacity-60">TIME</span>
                  <span className="text-lg">TBD</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-sm opacity-60">VENUE</span>
                  <span className="text-lg">GRAND HALL</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Link
                to={registrationLink}
                className="group block bg-red-600 hover:bg-white hover:text-black transition-all duration-300"
                onClick={(e) => registrationLink == "#" && e.preventDefault()}
                style={
                  registrationLink == "#"
                    ? {
                        pointerEvents: "none",
                        opacity: 0.7,
                        cursor: "not-allowed",
                      }
                    : undefined
                }
              >
                <div className="flex items-center justify-between p-4">
                  <span className="font-mono text-lg font-bold">
                    REGISTER NOW (COMING SOON)
                  </span>
                  <span className="font-mono text-lg transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </Link>

              <Link
                to="/editions"
                className="group block border border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <div className="flex items-center justify-between p-4">
                  <span className="font-mono text-lg">PAST EDITIONS</span>
                  <span className="font-mono text-lg transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="desktop:block laptop:block tablet:hidden mobile:hidden"
          >
            <div className="border-t border-white/20 pt-8">
              <div className="font-mono text-[10px] text-red-600 uppercase tracking-widest mb-4">
                Connect With Us
              </div>
              <div className="flex gap-6">
                {[
                  [
                    "Instagram",
                    "https://www.instagram.com/tedx.ecolepolytechnique/",
                  ],
                  [
                    "LinkedIn",
                    "https://www.linkedin.com/company/tedx%C3%A9colepolytechnique2023/posts",
                  ],
                ].map(([name, link]) => (
                  <a
                    key={name}
                    href={link}
                    className="font-mono text-sm hover:text-red-600 transition-colors duration-300"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Corner borders deco */}
      {[
        ["top", "right"],
        ["bottom", "left"],
      ].map(([x, y]) => (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`absolute ${x}-0 ${y}-0 w-32 h-32 border-${x[0]}-2 border-${y[0]}-2 border-red-600`}
        />
      ))}

      {/* lines background */}
      <div className="absolute inset-0 opacity-10">
        {Array(20)
          .fill(null)
          .map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="absolute h-[1px] w-full bg-white"
              style={{ top: `${(i + 1) * 5}%` }}
            />
          ))}
      </div>

      {/* shake effect text */}
      <style>
        {`
            .red-tedx-color {
                color: var(--tedx-red);
            }
            @keyframes shake {
                0% { transform: translate(0) }
                20% { transform: translate(-2px, 2px) }
                40% { transform: translate(-2px, -2px) }
                60% { transform: translate(2px, 2px) }
                80% { transform: translate(2px, -2px) }
                100% { transform: translate(0) }
            }
            .shake-effect:hover {
                animation: shake 0.3s cubic-bezier(.25,.46,.45,.94) both infinite;
            }
        `}
      </style>
    </section>
  );
};

export default Announcer;
