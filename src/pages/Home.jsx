import { Link } from "react-router-dom";
import { branches } from "../data/branches";

const highlights = [
  { icon: "🎓", title: "8 Branches Covered", desc: "MPC, BiPC, CEC, MEC, HEC, CBSE Science, Commerce & Arts" },
  { icon: "💼", title: "100+ Career Paths", desc: "Detailed opportunities for every stream and interest" },
  { icon: "📋", title: "Entrance Exams", desc: "Know which exams to target for your chosen branch" },
  { icon: "🗺️", title: "Compare Streams", desc: "Side-by-side branch comparison to make the right choice" },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🎓 Post-Intermediate Counselling</div>
          <h1 className="hero-title">
            Find Your <span className="gradient-text">Perfect Branch</span><br />
            After Intermediate
          </h1>
          <p className="hero-subtitle">
            Explore all streams — MPC, BiPC, CEC, MEC, HEC, CBSE Science / Commerce / Arts — and
            discover the career opportunities waiting for you.
          </p>
          <div className="hero-actions">
            <Link to="/branches" className="btn-primary">
              Explore All Branches →
            </Link>
            <Link to="/compare" className="btn-secondary">
              Compare Branches
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-cards">
            {branches.slice(0, 5).map((b, i) => (
              <div
                key={b.id}
                className="floating-chip"
                style={{
                  background: b.gradient,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                {b.icon} {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
        <div className="section-container">
          <h2 className="section-title">Why Use Vertex Buddy Pro?</h2>
          <div className="highlights-grid">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-card">
                <span className="highlight-icon">{h.icon}</span>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Branch Preview */}
      <section className="preview-section">
        <div className="section-container">
          <h2 className="section-title">Choose Your Stream</h2>
          <p className="section-subtitle">
            Click any branch to see detailed career opportunities, top courses, and entrance exams.
          </p>
          <div className="branch-quick-grid">
            {branches.map((b) => (
              <Link
                key={b.id}
                to={`/branch/${b.id}`}
                className="quick-chip"
                style={{ background: b.gradient }}
              >
                <span>{b.icon}</span>
                <strong>{b.label}</strong>
                <small>{b.board}</small>
              </Link>
            ))}
          </div>
          <div className="preview-cta">
            <Link to="/branches" className="btn-primary">
              View Detailed Branches →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-section">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            {[
              { step: "1", icon: "🏫", title: "Select Your Board", desc: "CBSE, State Board (AP/TS), ICSE – pick what applies to you." },
              { step: "2", icon: "📚", title: "Choose Your Stream", desc: "Browse MPC, BiPC, CEC, MEC, HEC, or CBSE streams." },
              { step: "3", icon: "🔍", title: "Explore Careers", desc: "See all career options, entrance exams, and top colleges." },
              { step: "4", icon: "🚀", title: "Make Your Decision", desc: "Use the compare tool to pick the best path for you." },
            ].map((s) => (
              <div key={s.step} className="step-card">
                <div className="step-number">{s.step}</div>
                <div className="step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
