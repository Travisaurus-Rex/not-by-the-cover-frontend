import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));
  const [revealed, setRevealed] = useState(false);

  if (!book) {
    return (
      <div style={{ color: "#fff", textAlign: "center", padding: "4rem" }}>
        <h2>Book not found</h2>
        <Link to="/" style={{ color: "#3b82f6" }}>
          ← Back to Discover
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top left, #0d0d0d, #000 70%)",
        color: "#fff",
        height: "100vh",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "3rem",
        alignItems: "center",
        padding: "70px 8% 4rem",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "2rem",
          backdropFilter: "blur(10px)",
          height: "fit-content",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "80%",
            aspectRatio: "2/3",
            overflow: "hidden",
            borderRadius: "10px",
            marginBottom: "1.5rem",
            boxShadow: "0 0 40px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src={book.coverUrl}
            alt={book.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: revealed ? "none" : "blur(20px) brightness(0.5)",
              transition: "filter 0.6s ease",
            }}
          />
          {!revealed && (
            <button
              onClick={() => setRevealed(true)}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.55)",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.02em",
                cursor: "pointer",
                backdropFilter: "blur(4px)",
              }}
            >
              Reveal Cover
            </button>
          )}
        </div>

        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>
          {book.title}
        </h2>
        <p style={{ opacity: 0.8, marginBottom: "0.3rem" }}>
          by {book.author}
        </p>
        <p style={{ fontSize: "0.95rem", color: "#3b82f6", marginBottom: "1rem" }}>
          {book.genre}
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          {book.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.8rem",
                padding: "0.3rem 0.8rem",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ fontSize: "0.8rem", opacity: 0.5 }}>
          ISBN {book.isbn}
        </div>
      </div>
      <div
        style={{
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          paddingLeft: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          {book.hook}
        </h1>

        {book.longDescription.map((para, i) => (
          <p
            key={i}
            style={{
              color: "rgba(255,255,255,0.85)",
              marginBottom: "1.2rem",
              lineHeight: 1.8,
              fontSize: "1.05rem",
              textAlign: "justify",
              maxWidth: "90%",
            }}
          >
            {para}
          </p>
        ))}

        <Link
          to="/browse"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            color: "#3b82f6",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Back to Browse
        </Link>
      </div>
    </div>
  );
}
