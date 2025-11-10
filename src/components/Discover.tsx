import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { books } from "../data/books.ts";
import { getGenreColor } from "../utils/getGenreColor.ts";
import { Link } from "react-router-dom";

const styles: Record<string, React.CSSProperties> = {
  page: {
    position: "relative",
    height: "100vh",
    width: "100%",
    background: "#0a0a0a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    color: "#fff",
    textAlign: "center",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "0 2rem",
  },
  hook: {
    fontSize: "5rem",
    lineHeight: 1.2,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    maxWidth: "900px",
    marginBottom: "1.5rem",
  },
  summary: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.75)",
    maxWidth: "720px",
    margin: "0 auto 1.2rem auto",
  },
  genre: {
    color: "rgba(255,255,255,0.55)",
    fontSize: "1rem",
    marginBottom: "2.2rem",
  },
  tags: {
    display: "flex",
    gap: "0.6rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "2.5rem",
  },
  tag: {
    fontSize: "0.8rem",
    padding: "0.35rem 0.9rem",
    borderRadius: "9999px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.65)",
    textTransform: "lowercase",
    letterSpacing: "0.03em",
  },
  buttonRow: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  buttonBase: {
    padding: "0.85rem 1.8rem",
    borderRadius: "9999px",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
    transformOrigin: "center",
  },
  blob: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(120px)",
    opacity: 0.25,
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
    },
  },
  exit: {
    opacity: 0,
    y: 25,
    transition: {
      duration: 0.25,
    },
  },
};

export default function Discover() {
  const [index, setIndex] = useState(0);
  const current = books[index];
  const color = getGenreColor(current.genre);

  const nextBook = () => setIndex((i) => (i + 1) % books.length);

  return (
    <div style={styles.page}>
      <motion.div
        style={{
          ...styles.blob,
          width: "70vw",
          height: "70vw",
          background: color,
        }}
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: "relative",
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.h1 style={styles.hook} variants={itemVariants}>
            {current.hook}
          </motion.h1>
          <motion.p style={styles.summary} variants={itemVariants}>
            {current.summary}
          </motion.p>
          <motion.p style={styles.genre} variants={itemVariants}>
            {current.genre}
          </motion.p>
          <motion.div style={styles.tags} variants={itemVariants}>
            {current.tags.map((tag, i) => (
              <motion.span key={i} style={styles.tag} variants={itemVariants}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
          <motion.div style={styles.buttonRow} variants={itemVariants}>
            <Link
              to={`/book/${current.id}`}
              state={{ from: 'discover'}}
              style={{
                ...styles.buttonBase,
                background: color,
                border: "1px solid transparent",
                color: "#fff",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              View More
            </Link>

            <motion.button
              style={{
                ...styles.buttonBase,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={nextBook}
            >
              Next →
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
