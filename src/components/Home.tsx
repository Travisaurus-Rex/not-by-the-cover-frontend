import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "4rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            zIndex: 1,
            background:
              "linear-gradient(90deg, #fff 0%, #a5b4fc 50%, #fff 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Not by the Cover
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            fontSize: "1.25rem",
            maxWidth: "720px",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            marginBottom: "3rem",
            zIndex: 1,
          }}
        >
          Discover new books by story — not by cover.  
          Let words, worlds, and emotions draw you in, not the artwork.
        </motion.p>


        <motion.div
        style={{
            display: "flex",
            gap: "1.2rem",
            zIndex: 2,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="/discover"
                style={{
                background: "#3b82f6",
                padding: "0.9rem 2rem",
                borderRadius: "9999px",
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                Try the Demo →
            </motion.a>

            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="/browse"
                style={{
                background: "rgba(255,255,255,0.08)",
                padding: "0.9rem 2rem",
                borderRadius: "9999px",
                fontWeight: 600,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                Browse
            </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
