const colorMap = {
  blue:   { bg: 'bg-blue-100',   border: 'border-blue-400',   text: 'text-blue-700',   badge: 'bg-blue-600'   },
  green:  { bg: 'bg-green-100',  border: 'border-green-400',  text: 'text-green-700',  badge: 'bg-green-600'  },
  teal:   { bg: 'bg-teal-100',   border: 'border-teal-400',   text: 'text-teal-700',   badge: 'bg-teal-600'   },
  orange: { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-700', badge: 'bg-orange-600' },
  pink:   { bg: 'bg-pink-100',   border: 'border-pink-400',   text: 'text-pink-700',   badge: 'bg-pink-600'   },
  purple: { bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-700', badge: 'bg-purple-600' },
  yellow: { bg: 'bg-yellow-100', border: 'border-yellow-400', text: 'text-yellow-700', badge: 'bg-yellow-600' },
  red:    { bg: 'bg-red-100',    border: 'border-red-400',    text: 'text-red-700',    badge: 'bg-red-600'    },
};

export default function BranchCard({ branch, onClick }) {
  const c = colorMap[branch.color] ?? colorMap.blue;
  return (
    <button
      onClick={() => onClick(branch)}
      className={`w-full text-left rounded-2xl border-2 ${c.border} ${c.bg} p-5 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-offset-2`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{branch.icon}</span>
        <div>
          <h3 className={`text-lg font-bold ${c.text}`}>{branch.name}</h3>
          <p className="text-xs text-gray-500">{branch.subjects.join(' · ')}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 line-clamp-2">{branch.description}</p>
      <span className={`mt-3 inline-block text-xs text-white px-3 py-1 rounded-full ${c.badge}`}>
        Explore opportunities →
      </span>
    </button>
  );
}
