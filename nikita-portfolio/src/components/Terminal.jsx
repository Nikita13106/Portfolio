import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";

const lines = [
  { cmd: "whoami" },
  { out: profile.name },
  { cmd: "load --profile" },
  { out: "Full Stack Developer (MERN)" },
  { out: "AIML Student, 3rd Year - TCET" },
  { cmd: 'focus --current' },
  { out: "Backend Systems · APIs · System Design · AIML" },
  { cmd: "_", cursor: true },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const delay = lines[visibleLines]?.cmd ? 550 : 350;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="card overflow-hidden shadow-2xl relative">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-border bg-ink-panel2">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-xs text-slate-faint">
          nikita@portfolio: ~/about
        </span>
      </div>

      <div className="p-6 font-mono text-sm leading-8 min-h-[280px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {line.cmd && line.cmd !== "_" && (
              <p>
                <span className="text-signal">➜</span>{" "}
                <span className="text-amber">~</span>{" "}
                <span className="text-ivory">{line.cmd}</span>
              </p>
            )}
            {line.out && (
              <p
                className={
                  line.accent ? "text-signal pl-5" : "text-slate-muted pl-5"
                }
              >
                {line.out}
              </p>
            )}
            {line.cmd === "_" && (
              <p>
                <span className="text-signal">➜</span>{" "}
                <span className="text-amber">~</span>{" "}
                <span className="inline-block w-2 h-4 bg-signal align-middle animate-blink" />
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
