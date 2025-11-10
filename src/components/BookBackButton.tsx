import { Link, useLocation } from 'react-router-dom';

export default function BookBackButton() {
    const location = useLocation();
    const fromDiscover = location.state?.from === 'discover';

    if (fromDiscover) {
        return (
            <Link to="/" style={{ color: "#3b82f6" }}>
            ← Back to Discover
            </Link>
        )
    }

    return (
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
    )
}