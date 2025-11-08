import BookCard from "../components/BookCard";
import { books } from "../data/books";

export default function Browse() {
  return (
    <div
      style={{
        marginTop: "50px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2rem",
        padding: "3rem",
        aspectRatio: "5 / 3", // ensures width > height
        minHeight: "250px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "20px",
      }}
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
