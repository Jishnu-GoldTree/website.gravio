"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";
import { Children, cloneElement, Fragment, isValidElement, useEffect, useRef, useState, type CSSProperties, type ReactElement, type ReactNode } from "react";

/** The soft spring every section uses when it scrolls into view. */
export const revealSpring = (delay = 0): Transition => ({
  type: "spring",
  stiffness: 400,
  damping: 80,
  mass: 1,
  delay,
});

/** Quick, slightly bouncy spring used for hovers, menus and toggles. */
export const uiSpring: Transition = { type: "spring", bounce: 0.2, duration: 0.4 };

export function Reveal({
  children,
  delay = 0,
  className,
  style,
  as = "div",
}: {
  children?: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "li";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={revealSpring(delay)}
    >
      {children}
    </Comp>
  );
}

/** Text whose letters darken one by one as the page scrolls. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const { scrollY } = useScroll();
  const letters = Array.from(text);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    const h = window.innerHeight;
    const start = 0.6 * h;
    const progress = Math.max(0, Math.min(1, (start - el.getBoundingClientRect().top) / start));
    setCount(Math.ceil(letters.length * progress));
  };

  useMotionValueEvent(scrollY, "change", update);
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div ref={ref} className={className} aria-label={text}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={false}
          animate={{ color: i < count ? "#0b2e1a" : "#9a9a9a" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {ch}
        </motion.span>
      ))}
    </div>
  );
}

/** Endless sideways strip. Children are repeated so the loop has no visible seam. */
export function Ticker({
  children,
  gap,
  speed = 50,
  className,
}: {
  children: ReactNode;
  gap: number;
  speed?: number;
  className?: string;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLUListElement>(null);
  const x = useMotionValue(-gap);
  const inView = useInView(boxRef);
  const controlsRef = useRef<ReturnType<typeof animate> | undefined>(undefined);
  // Wide screens keep both runs in one list; narrow ones keep the repeat in a list of its own.
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const q = window.matchMedia("(min-width: 810px)");
    const on = () => setWide(q.matches);
    on();
    q.addEventListener("change", on);
    return () => q.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    const el = setRef.current;
    if (!el) return;
    const start = () => {
      controlsRef.current?.stop();
      const width = el.getBoundingClientRect().width;
      const distance = wide ? (width + gap) / 2 : width + gap;
      x.set(-gap);
      controlsRef.current = animate(x, -gap - distance, {
        duration: distance / speed,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      });
    };
    start();
    const observer = new ResizeObserver(start);
    observer.observe(el);
    return () => {
      observer.disconnect();
      controlsRef.current?.stop();
    };
  }, [gap, speed, x, wide]);

  // Rest while off screen, as the original does.
  useEffect(() => {
    if (inView) controlsRef.current?.play();
    else controlsRef.current?.pause();
  }, [inView]);

  const repeat = Children.map(children, (c) =>
    isValidElement(c) ? cloneElement(c as ReactElement<{ "aria-hidden"?: boolean }>, { "aria-hidden": true }) : c,
  );

  return (
    <div ref={boxRef} className={`ticker ${className ?? ""}`}>
      <motion.div className="ticker-track" style={{ x, gap }}>
        <ul ref={setRef} className="ticker-set" style={{ gap }}>
          <Fragment key="a">{children}</Fragment>
          {wide && <Fragment key="b">{repeat}</Fragment>}
        </ul>
        {!wide && <ul className="ticker-set" style={{ gap }} aria-hidden>{repeat}</ul>}
      </motion.div>
    </div>
  );
}

/** Counts up to a number when it comes into view. */
export function CountUp({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(0);
  const shown = useTransform(value, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, value]);

  return (
    <motion.span ref={ref} className={className}>
      {shown}
    </motion.span>
  );
}

/** Gentle up-and-down drift for the closing icon. */
export function SlowFloat({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
