import { useState } from "react";
import BranchCard from "../components/BranchCard";
import { branches } from "../data/branches";

const boards = ["All", "State Board", "CBSE"];

export default function Branches() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = branches.filter((b) => {
    const matchBoard =
      filter === "All" ||
      b.board.toLowerCase().includes(filter.toLowerCase());
    const matchSearch =
      search === "" ||
      b.label.toLowerCase().includes(search.toLowerCase()) ||
      b.fullName.toLowerCase().includes(search.toLowerCase());
    return matchBoard && matchSearch;
  });

  return (
    <div className="branches-page">
      <div className="page-header">
        <h1 className="page-title">Explore All Branches</h1>
        <p className="page-subtitle">
          Select a stream to view detailed career opportunities, entrance exams, and top courses.
        </p>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <div className="filter-chips">
          {boards.map((b) => (
            <button
              key={b}
              className={`filter-chip ${filter === b ? "active" : ""}`}
              onClick={() => setFilter(b)}
            >
              {b}
            </button>
          ))}
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="🔍 Search branch…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <div className="empty-state">
          <span>😕</span>
          <p>No branches found. Try a different filter or search term.</p>
        </div>
      ) : (
        <div className="branches-grid">
          {filtered.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      )}
    </div>
  );
}
