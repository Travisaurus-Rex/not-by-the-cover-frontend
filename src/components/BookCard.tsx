import { getGenreColor } from "../utils/getGenreColor";

type BookCardProps = {
  book: {
    id: number;
    title: string;
    hook: string;
    summary: string;
    genre: string;
    tags: string[];
    color: string;
  };
  onClick?: () => void;
};

export default function BookCard({ book, onClick }: BookCardProps) {
  const color = getGenreColor(book.genre);

  return (
    <div
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#fff",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        cursor: onClick ? "pointer" : "default",
        backdropFilter: "blur(12px)",
        transition: "transform 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = `${color}88`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
      }
    >
      <div>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          {book.hook}
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.5,
            marginBottom: "1rem",
          }}
        >
          {book.summary}
        </p>

        <p
          style={{
            fontSize: "0.9rem",
            color: color,
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          {book.genre}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {book.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.75rem",
                padding: "0.3rem 0.8rem",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.7)",
                textTransform: "lowercase",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
        <button
          style={{
            background: color,
            color: "#fff",
            border: "none",
            borderRadius: "9999px",
            padding: "0.6rem 1.4rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          View Details →
        </button>
      </div>
    </div>
  );
}
