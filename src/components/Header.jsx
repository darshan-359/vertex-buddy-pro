export default function Header({ onHome }) {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={onHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none">
          <span className="text-2xl">🎓</span>
          <div>
            <p className="text-lg font-bold leading-none">Vertex Buddy Pro</p>
            <p className="text-xs text-indigo-200">Intermediate Counselling Guide</p>
          </div>
        </button>
        <span className="hidden sm:block text-sm bg-white/20 rounded-full px-3 py-1">
          After Intermediate? We've got you covered.
        </span>
      </div>
    </header>
  );
}
