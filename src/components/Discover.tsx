import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const books = [
  {
    hook: '“The stars do not speak, but they remember.”',
    summary:
      'In a quiet mountain village, a young astronomer begins hearing whispers in the constellations. As the voices grow clearer, she discovers they remember a tragedy no one else recalls.',
    genre: 'Fantasy / Adventure',
    tags: ['mystery', 'introspective', 'magical realism'],
    color: '#3b82f6',
  },
  {
    hook: '“A city forgets slower than its people.”',
    summary:
      'After a disaster wipes years from the public record, one archivist uncovers evidence that the city itself remembers. The truth is written in its walls, and the walls are starting to talk.',
    genre: 'Sci-Fi / Mystery',
    tags: ['dystopian', 'psychological', 'slow burn'],
    color: '#8b5cf6',
  },
  {
    hook: '“Love is a ghost we feed until it devours us.”',
    summary:
      'When two strangers begin dreaming the same life, they fall in love across dimensions — but each dream makes the other fade from reality. To stay together, one must stop dreaming entirely.',
    genre: 'Romance / Drama',
    tags: ['romance', 'surreal', 'tragic'],
    color: '#ec4899',
  },
];

const styles = {
  page: {
    position: 'relative',
    height: '100vh',
    background: '#0a0a0a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    color: '#fff',
    textAlign: 'center',
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: '0 2rem',
  },
  hook: {
    fontSize: '2.8rem',
    lineHeight: 1.2,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    maxWidth: '900px',
    marginBottom: '1.5rem',
  },
  summary: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: 'rgba(255,255,255,0.75)',
    maxWidth: '720px',
    margin: '0 auto 1.2rem auto',
  },
  genre: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: '1rem',
    marginBottom: '2.2rem',
  },
  tags: {
    display: 'flex',
    gap: '0.6rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '2.5rem',
  },
  tag: {
    fontSize: '0.8rem',
    padding: '0.35rem 0.9rem',
    borderRadius: '9999px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: 'rgba(255,255,255,0.65)',
    textTransform: 'lowercase',
    letterSpacing: '0.03em',
  },
  buttonRow: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  buttonBase: {
    padding: '0.85rem 1.8rem',
    borderRadius: '9999px',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transformOrigin: 'center',
  },
  blob: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(120px)',
    opacity: 0.25,
  },
};

export default function Discover() {
  const [index, setIndex] = useState(0);
  const current = books[index];

  const nextBook = () => setIndex((i) => (i + 1) % books.length);
  const viewBook = () => alert(`Open details for: ${current.hook}`);

  return (
    <div style={styles.page}>
      {/* background glow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current.color}
          style={{
            ...styles.blob,
            width: '70vw',
            height: '70vw',
            background: current.color,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25, scale: [1, 1.1, 1] }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </AnimatePresence>

      {/* story card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            position: 'relative',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 style={styles.hook}>{current.hook}</h1>
          <p style={styles.summary}>{current.summary}</p>
          <p style={styles.genre}>{current.genre}</p>

          <div style={styles.tags}>
            {current.tags.map((tag, i) => (
              <motion.span
                key={i}
                style={styles.tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.25 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* buttons row */}
          <div style={styles.buttonRow}>
            <motion.button
              style={{
                ...styles.buttonBase,
                background: current.color,
                border: '1px solid transparent',
                color: '#fff',
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: current.color,
                filter: 'brightness(1.1)',
              }}
              whileTap={{ scale: 0.97 }}
              onClick={viewBook}
            >
              View More
            </motion.button>

            <motion.button
              style={{
                ...styles.buttonBase,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.12)',
              }}
              whileTap={{ scale: 0.97 }}
              onClick={nextBook}
            >
              Next →
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}