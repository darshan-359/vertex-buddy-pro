import { boards } from '../data/branches';

const boardColors = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-400',   text: 'text-blue-700',   icon: '🏫' },
  green:  { bg: 'bg-green-50',  border: 'border-green-400',  text: 'text-green-700',  icon: '📚' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-700', icon: '🎓' },
};

export default function LandingPage({ onSelectBoard }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center">
        <div className="text-6xl mb-4">🎓</div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          What's Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Next Step?
          </span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          You've completed your Intermediate / Class 12. Now is the time to pick the right path.
          Select your board below to explore branches and career opportunities tailored for you.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { label: 'Branches Covered', value: '10+' },
            { label: 'Career Options', value: '50+' },
            { label: 'Entrance Exams', value: '20+' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl shadow px-8 py-4 text-center">
              <p className="text-3xl font-bold text-indigo-600">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Board selection */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-8">
          🏛️ Select Your Board
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {boards.map((board) => {
            const c = boardColors[board.color] ?? boardColors.blue;
            return (
              <button
                key={board.id}
                onClick={() => onSelectBoard(board)}
                className={`rounded-2xl border-2 ${c.border} ${c.bg} p-6 text-center hover:shadow-xl transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-offset-2`}
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className={`text-xl font-bold ${c.text} mb-1`}>{board.name}</h3>
                <p className="text-sm text-gray-500">{board.fullName}</p>
              </button>
            );
          })}
        </div>

        {/* Info banner */}
        <div className="mt-12 bg-indigo-600 rounded-2xl text-white p-6 flex flex-col sm:flex-row items-center gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <p className="font-bold text-lg">Not sure which board you belong to?</p>
            <p className="text-indigo-200 text-sm">
              CBSE and ICSE are central boards. If you studied in Andhra Pradesh or Telangana under the state syllabus, choose <strong>State Board</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
