import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { books } from "../data/books";
import { getGenreColor } from "../utils/getGenreColor";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div
        style={{
          color: "#fff",
          textAlign: "center",
          paddingTop: "5rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h2>Book not found</h2>
        <Link to="/" style={{ color: "#3b82f6", textDecoration: "none" }}>
          ← Back to Discover
        </Link>
      </div>
    );
  }

  const color = getGenreColor(book.genre);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#0a0a0a",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "900px",
          width: "100%",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(15px)",
          padding: "3rem",
          boxShadow: "0 0 60px rgba(0,0,0,0.3)",
        }}
      >
        <img
            src={
                book.coverUrl ||
                (book.isbn
                ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`
                : "/images/placeholder.jpg")
            }
            alt={book.title}
            style={{
                width: "320px",
                borderRadius: "12px",
                marginBottom: "2rem",
                boxShadow: `0 0 25px ${color}40`,
                objectFit: "cover",
            }}
            />


        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          {book.hook || book.title}
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "1rem",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.6,
          }}
        >
          {book.summary}
        </p>

        <p style={{ color: color, marginBottom: "2rem", fontWeight: 600 }}>
          {book.genre}
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          {book.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.85rem",
                padding: "0.4rem 0.9rem",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to="/discover"
          style={{
            color: "#fff",
            background: color,
            border: "none",
            borderRadius: "9999px",
            padding: "0.9rem 2rem",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: `0 0 20px ${color}60`,
          }}
        >
          ← Back to Discover
        </Link>
      </motion.div>
    </div>
  );
}
