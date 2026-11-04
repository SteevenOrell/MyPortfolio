import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const DURATION = 6000;

const ICONS = {
  success: <path d="M5 12.5 10 17.5 19 7" />,
  error: <path d="M12 7v6M12 16.5v.5" />,
  warning: <path d="M12 7v5.5l3 2" />,
};

// Small notification card shown after the contact form is sent (or fails).
// notice: { type: 'success' | 'error' | 'warning', title, text } or null.
function Notice({ notice, onClose, closeLabel }) {
  const reduce = useReducedMotion();

  // Close on its own after a few seconds.
  const id = notice?.id;
  useEffect(() => {
    if (!id) return;
    const timer = setTimeout(onClose, DURATION);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <div className="sw-notice-region">
      <AnimatePresence>
        {notice && (
          <motion.div
            key={notice.id}
            className={`sw-notice sw-notice--${notice.type}`}
            // Errors are announced immediately, success politely.
            role={notice.type === 'success' ? 'status' : 'alert'}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="sw-notice__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[notice.type]}
              </svg>
            </span>
            <div className="sw-notice__body">
              <p className="sw-notice__title">{notice.title}</p>
              <p className="sw-notice__text">{notice.text}</p>
            </div>
            <button type="button" className="sw-notice__close" onClick={onClose} aria-label={closeLabel}>
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            {!reduce && (
              <motion.span
                className="sw-notice__timer"
                aria-hidden="true"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: DURATION / 1000, ease: 'linear' }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Notice;
