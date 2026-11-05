"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "./Art";
import { uiSpring } from "./motion";

const arrowFile = (color: string) => (color === "#ffffff" ? "white" : color === "#0f7a3d" ? "red" : "ink");

export const Arrow = ({ size = 24, color = "#0b2e1a" }: { size?: number; color?: string }) => (
  <Icon name={`arrow-${arrowFile(color)}`} size={size} />
);

type Variant = "primary" | "white" | "ghost" | "outline" | "onDark";

type Paint = { backgroundColor: string; boxShadow: string };

const looks: Record<Variant, { rest: Paint; hover: Paint; text: string; hoverText: string }> = {
  primary: {
    rest: { backgroundColor: "rgba(15,122,61,1)", boxShadow: "inset 0 0 0 1px rgba(11,46,26,0)" },
    hover: { backgroundColor: "rgba(15,122,61,0)", boxShadow: "inset 0 0 0 1px rgba(11,46,26,1)" },
    text: "#ffffff",
    hoverText: "#0b2e1a",
  },
  white: {
    rest: { backgroundColor: "rgba(255,255,255,1)", boxShadow: "inset 0 0 0 1px rgba(15,122,61,1)" },
    hover: { backgroundColor: "rgba(15,122,61,1)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,1)" },
    text: "#0f7a3d",
    hoverText: "#ffffff",
  },
  ghost: {
    rest: { backgroundColor: "rgba(255,255,255,0)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,1)" },
    hover: { backgroundColor: "rgba(255,255,255,1)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,1)" },
    text: "#ffffff",
    hoverText: "#0b2e1a",
  },
  outline: {
    rest: { backgroundColor: "rgba(15,122,61,0)", boxShadow: "inset 0 0 0 1px rgba(11,46,26,0.4)" },
    hover: { backgroundColor: "rgba(15,122,61,1)", boxShadow: "inset 0 0 0 1px rgba(15,122,61,1)" },
    text: "#0b2e1a",
    hoverText: "#ffffff",
  },
  onDark: {
    rest: { backgroundColor: "rgba(15,122,61,1)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0)" },
    hover: { backgroundColor: "rgba(255,255,255,1)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,1)" },
    text: "#ffffff",
    hoverText: "#0b2e1a",
  },
};

function Inner({ label, variant, arrow }: { label: string; variant: Variant; arrow: boolean }) {
  const look = looks[variant];
  return (
    <>
      <div className="btn-labels">
        <motion.span
          className="btn-stack"
          variants={{ rest: { y: 0 }, hover: { y: -34 } }}
          transition={uiSpring}
        >
          <span style={{ color: look.text }}>{label}</span>
          <span style={{ color: look.hoverText }} aria-hidden>
            {label}
          </span>
        </motion.span>
      </div>
      {arrow && (
        <div className="btn-arrow">
          <motion.span variants={{ rest: { x: 0, y: 0 }, hover: { x: 24, y: -24 } }} transition={uiSpring}>
            <Arrow color={look.text} />
          </motion.span>
          <motion.span variants={{ rest: { x: -24, y: 24 }, hover: { x: 0, y: 0 } }} transition={uiSpring}>
            <Arrow color={look.hoverText} />
          </motion.span>
        </div>
      )}
    </>
  );
}

const MotionLink = motion.create(Link);

export function Button({
  href,
  label,
  variant = "primary",
  arrow = true,
  block = false,
  className = "",
}: {
  href: string;
  label: string;
  variant?: Variant;
  arrow?: boolean;
  block?: boolean;
  className?: string;
}) {
  const look = looks[variant];
  return (
    <MotionLink
      href={href}
      className={`btn ${block ? "btn-block" : ""} ${className}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      variants={{ rest: look.rest, hover: look.hover }}
      transition={uiSpring}
    >
      <Inner label={label} variant={variant} arrow={arrow} />
    </MotionLink>
  );
}

/** Same look, drawn inside a card that is already a link, so it must not be a link itself. */
export function FakeButton({ label, variant = "primary", block = false, arrow = true }: { label: string; variant?: Variant; block?: boolean; arrow?: boolean }) {
  const look = looks[variant];
  return (
    <motion.div
      className={`btn ${block ? "btn-block" : ""}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{ rest: look.rest, hover: look.hover }}
      transition={uiSpring}
    >
      <Inner label={label} variant={variant} arrow={arrow} />
    </motion.div>
  );
}

export function SubmitButton({ label, onLight = false }: { label: string; onLight?: boolean }) {
  const look = looks.primary;
  return (
    <motion.button
      type="submit"
      className="btn btn-submit"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        rest: look.rest,
        hover: onLight ? look.hover : { backgroundColor: "rgba(255,255,255,1)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,1)" },
      }}
      transition={uiSpring}
    >
      <Inner label={label} variant="primary" arrow />
    </motion.button>
  );
}
