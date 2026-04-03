const colorMap = {
  blue:   { header: 'from-blue-600 to-indigo-600',   badge: 'bg-blue-100 text-blue-700',   accent: 'text-blue-600'   },
  green:  { header: 'from-green-600 to-teal-600',    badge: 'bg-green-100 text-green-700',  accent: 'text-green-600'  },
  teal:   { header: 'from-teal-600 to-cyan-600',     badge: 'bg-teal-100 text-teal-700',    accent: 'text-teal-600'   },
  orange: { header: 'from-orange-500 to-amber-500',  badge: 'bg-orange-100 text-orange-700',accent: 'text-orange-600' },
  pink:   { header: 'from-pink-500 to-rose-500',     badge: 'bg-pink-100 text-pink-700',    accent: 'text-pink-600'   },
  purple: { header: 'from-purple-600 to-violet-600', badge: 'bg-purple-100 text-purple-700',accent: 'text-purple-600' },
  yellow: { header: 'from-yellow-500 to-amber-400',  badge: 'bg-yellow-100 text-yellow-700',accent: 'text-yellow-600' },
  red:    { header: 'from-red-500 to-rose-600',      badge: 'bg-red-100 text-red-700',      accent: 'text-red-600'    },
};

function SectionHeading({ icon, title }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xl">{icon}</span>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );
}

function TagList({ items, color }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={`text-sm px-3 py-1 rounded-full font-medium ${color}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function OpportunitiesPage({ branch, board, onBack }) {
  const c = colorMap[branch.color] ?? colorMap.blue;

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero banner */}
      <div className={`bg-gradient-to-r ${c.header} text-white`}>
        <div className="max-w-4xl mx-auto px-4 py-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white font-medium mb-6 transition-colors"
          >
            ← Back to {board.name} Branches
          </button>
          <div className="flex items-start gap-4">
            <span className="text-5xl">{branch.icon}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">{branch.name}</h1>
              <p className="text-white/80 max-w-2xl">{branch.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {branch.subjects.map((s) => (
                  <span key={s} className="bg-white/20 rounded-full px-3 py-0.5 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 mt-10 space-y-10">

        {/* Career Opportunities */}
        <section className="bg-white rounded-2xl shadow p-6">
          <SectionHeading icon="💼" title="Career Opportunities" />
          <div className="grid sm:grid-cols-2 gap-4">
            {branch.careers.map((career) => (
              <div key={career.title} className="flex gap-3 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <span className={`text-2xl ${c.accent} shrink-0`}>✦</span>
                <div>
                  <p className="font-semibold text-gray-800">{career.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{career.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section className="bg-white rounded-2xl shadow p-6">
          <SectionHeading icon="📖" title="Recommended Courses" />
          <TagList items={branch.courses} color={c.badge} />
        </section>

        {/* Entrance Exams */}
        <section className="bg-white rounded-2xl shadow p-6">
          <SectionHeading icon="📝" title="Key Entrance Exams" />
          <TagList items={branch.exams} color={c.badge} />
        </section>

        {/* Top Colleges */}
        <section className="bg-white rounded-2xl shadow p-6">
          <SectionHeading icon="🏛️" title="Top Colleges / Institutes" />
          <TagList items={branch.topColleges} color={c.badge} />
        </section>

        {/* CTA */}
        <div className={`bg-gradient-to-r ${c.header} text-white rounded-2xl p-6 text-center`}>
          <p className="text-lg font-bold mb-1">Ready to take the next step? 🚀</p>
          <p className="text-white/80 text-sm">
            Research each course, visit college websites and speak with professionals in your chosen field before deciding.
          </p>
          <button
            onClick={onBack}
            className="mt-4 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-6 py-2 text-sm font-semibold"
          >
            ← Explore other branches
          </button>
        </div>
      </div>
    </div>
  );
}
