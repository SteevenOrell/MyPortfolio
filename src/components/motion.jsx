import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Moves its content vertically while the element crosses the viewport.
// speed > 0 moves slower than the page (sinks), speed < 0 moves faster (rises).
export function Parallax({ children, speed = 0.2, className = '', style, as = 'div' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);
  const Tag = motion[as];
  return (
    <Tag ref={ref} className={className} style={reduce ? style : { ...style, y }}>
      {children}
    </Tag>
  );
}

// Media (image or video) that drifts inside a clipped frame — the classic parallax card.
export function ParallaxMedia({ children, className = '', strength = 12 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  return (
    <div ref={ref} className={`sw-pmedia ${className}`}>
      <motion.div className="sw-pmedia__inner" style={reduce ? undefined : { y, height: `${100 + strength * 2}%`, top: `-${strength}%` }}>
        {children}
      </motion.div>
    </div>
  );
}

// Large text that slides horizontally as the section scrolls past.
export function DriftText({ children, className = '', distance = 25 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [`${distance}%`, `-${distance}%`]);
  return (
    <div ref={ref} className={`sw-drift ${className}`} aria-hidden="true">
      <motion.span style={reduce ? undefined : { x }}>{children}</motion.span>
    </div>
  );
}

// Fades and lifts content in once when it enters the viewport.
export function Reveal({ children, delay = 0, y = 40, className = '', as = 'div' }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
