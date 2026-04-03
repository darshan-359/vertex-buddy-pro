import { useState } from "react";
import { branches } from "../data/branches";

export default function Compare() {
  const [leftId, setLeftId] = useState(branches[0].id);
  const [rightId, setRightId] = useState(branches[1].id);

  const left = branches.find((b) => b.id === leftId);
  const right = branches.find((b) => b.id === rightId);

  return (
    <div className="compare-page">
      <div className="page-header">
        <h1 className="page-title">Compare Branches</h1>
        <p className="page-subtitle">Select two streams to compare them side by side.</p>
      </div>

      {/* Selectors */}
      <div className="compare-selectors">
        <BranchSelector value={leftId} onChange={setLeftId} exclude={rightId} label="Branch A" />
        <div className="vs-badge">VS</div>
        <BranchSelector value={rightId} onChange={setRightId} exclude={leftId} label="Branch B" />
      </div>

      {/* Comparison Table */}
      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th className="compare-th-label">Aspect</th>
              <th className="compare-th-branch" style={{ background: left.gradient }}>
                {left.icon} {left.label}
              </th>
              <th className="compare-th-branch" style={{ background: right.gradient }}>
                {right.icon} {right.label}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="compare-aspect">Full Name</td>
              <td>{left.fullName}</td>
              <td>{right.fullName}</td>
            </tr>
            <tr className="compare-alt">
              <td className="compare-aspect">Board</td>
              <td>{left.board}</td>
              <td>{right.board}</td>
            </tr>
            <tr>
              <td className="compare-aspect">Overview</td>
              <td>{left.description}</td>
              <td>{right.description}</td>
            </tr>
            <tr className="compare-alt">
              <td className="compare-aspect">Career Areas</td>
              <td>
                <ul className="compare-list">
                  {left.opportunities.map((o) => <li key={o.category}>{o.category}</li>)}
                </ul>
              </td>
              <td>
                <ul className="compare-list">
                  {right.opportunities.map((o) => <li key={o.category}>{o.category}</li>)}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="compare-aspect">Entrance Exams</td>
              <td>
                <div className="tag-list">
                  {left.entranceExams.map((e) => (
                    <span key={e} className="tag exam-tag" style={{ borderColor: left.color, color: left.color }}>{e}</span>
                  ))}
                </div>
              </td>
              <td>
                <div className="tag-list">
                  {right.entranceExams.map((e) => (
                    <span key={e} className="tag exam-tag" style={{ borderColor: right.color, color: right.color }}>{e}</span>
                  ))}
                </div>
              </td>
            </tr>
            <tr className="compare-alt">
              <td className="compare-aspect">Top Courses</td>
              <td>
                <div className="tag-list">
                  {left.topCourses.map((c) => (
                    <span key={c} className="tag course-tag" style={{ background: left.color }}>{c}</span>
                  ))}
                </div>
              </td>
              <td>
                <div className="tag-list">
                  {right.topCourses.map((c) => (
                    <span key={c} className="tag course-tag" style={{ background: right.color }}>{c}</span>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BranchSelector({ value, onChange, exclude, label }) {
  return (
    <div className="branch-selector-wrap">
      <label className="selector-label">{label}</label>
      <select
        className="branch-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {branches
          .filter((b) => b.id !== exclude)
          .map((b) => (
            <option key={b.id} value={b.id}>
              {b.icon} {b.label} – {b.fullName}
            </option>
          ))}
      </select>
    </div>
  );
}
