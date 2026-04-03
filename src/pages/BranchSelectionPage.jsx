import BranchCard from '../components/BranchCard';
import { branchesByBoard } from '../data/branches';

export default function BranchSelectionPage({ board, onSelectBranch, onBack }) {
  const branches = branchesByBoard[board.id] ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-6 transition-colors"
        >
          ← Back to Boards
        </button>

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
            {board.fullName}
          </h1>
          <p className="text-gray-500">Choose your stream / branch to explore careers and opportunities</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} onClick={onSelectBranch} />
          ))}
        </div>

        {branches.length === 0 && (
          <p className="text-center text-gray-400 mt-16 text-lg">
            No branches available for this board yet.
          </p>
        )}
      </div>
    </div>
  );
}
