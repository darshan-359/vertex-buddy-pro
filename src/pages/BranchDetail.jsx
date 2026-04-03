import { useParams, Link, Navigate } from "react-router-dom";
import { getBranchById } from "../data/branches";

export default function BranchDetail() {
  const { id } = useParams();
  const branch = getBranchById(id);

  if (!branch) return <Navigate to="/branches" replace />;

  return (
    <div className="detail-page">
      {/* Hero Banner */}
      <div className="detail-hero" style={{ background: branch.gradient }}>
        <div className="detail-hero-content">
          <Link to="/branches" className="back-link">← All Branches</Link>
          <span className="detail-icon">{branch.icon}</span>
          <h1 className="detail-title">{branch.label}</h1>
          <p className="detail-full-name">{branch.fullName}</p>
          <span className="detail-board-badge">{branch.board}</span>
        </div>
      </div>

      <div className="detail-body">
        {/* Description */}
        <section className="detail-section">
          <p className="detail-description">{branch.description}</p>
        </section>

        {/* Opportunities */}
        <section className="detail-section">
          <h2 className="section-heading">Career Opportunities</h2>
          <div className="opportunities-grid">
            {branch.opportunities.map((opp) => (
              <div key={opp.category} className="opp-card" style={{ "--accent": branch.color }}>
                <h3 className="opp-category">{opp.category}</h3>
                <ul className="opp-list">
                  {opp.careers.map((career) => (
                    <li key={career} className="opp-item">
                      <span className="opp-dot" style={{ background: branch.color }}></span>
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Entrance Exams */}
        <section className="detail-section info-row">
          <div className="info-box">
            <h2 className="section-heading">📋 Key Entrance Exams</h2>
            <div className="tag-list">
              {branch.entranceExams.map((exam) => (
                <span key={exam} className="tag exam-tag" style={{ borderColor: branch.color, color: branch.color }}>
                  {exam}
                </span>
              ))}
            </div>
          </div>

          <div className="info-box">
            <h2 className="section-heading">🎓 Top Courses</h2>
            <div className="tag-list">
              {branch.topCourses.map((course) => (
                <span key={course} className="tag course-tag" style={{ background: branch.color }}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="detail-cta">
          <Link to="/branches" className="btn-secondary">← Back to Branches</Link>
          <Link to="/compare" className="btn-primary" style={{ background: branch.gradient }}>
            Compare with Other Branches →
          </Link>
        </div>
      </div>
    </div>
  );
}
