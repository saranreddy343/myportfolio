import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

/**
 * Cycles through `words`, typing and deleting each in turn.
 * Respects prefers-reduced-motion (shows first word statically).
 */
const Typewriter = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1600,
  className,
}: TypewriterProps) => {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseTime, reduce]);

  if (reduce) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {text}
      <span
        className="inline-block w-[2px] h-[0.9em] align-middle ml-1 bg-primary animate-pulse"
        aria-hidden="true"
      />
    </span>
  );
};

export default Typewriter;
