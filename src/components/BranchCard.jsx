import { Link } from "react-router-dom";

export default function BranchCard({ branch }) {
  return (
    <Link to={`/branch/${branch.id}`} className="branch-card" style={{ "--card-color": branch.color }}>
      <div className="branch-card-header" style={{ background: branch.gradient }}>
        <span className="branch-icon">{branch.icon}</span>
      </div>
      <div className="branch-card-body">
        <h3 className="branch-label">{branch.label}</h3>
        <p className="branch-full-name">{branch.fullName}</p>
        <span className="branch-board-badge">{branch.board}</span>
        <p className="branch-excerpt">{branch.description.slice(0, 120)}…</p>
        <div className="branch-card-footer">
          <span className="explore-btn">Explore Opportunities →</span>
        </div>
      </div>
    </Link>
  );
}
