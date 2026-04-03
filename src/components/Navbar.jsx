import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">🎓</span>
        <span className="brand-text">Vertex Buddy Pro</span>
      </Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/branches" className="nav-link">Branches</Link>
        <Link to="/compare" className="nav-link">Compare</Link>
      </div>
    </nav>
  );
}
