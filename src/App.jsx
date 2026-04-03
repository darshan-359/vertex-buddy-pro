import { useState } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import BranchSelectionPage from './pages/BranchSelectionPage';
import OpportunitiesPage from './pages/OpportunitiesPage';

const VIEW = { HOME: 'home', BRANCHES: 'branches', OPPORTUNITIES: 'opportunities' };

export default function App() {
  const [view, setView] = useState(VIEW.HOME);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);

  function handleSelectBoard(board) {
    setSelectedBoard(board);
    setView(VIEW.BRANCHES);
  }

  function handleSelectBranch(branch) {
    setSelectedBranch(branch);
    setView(VIEW.OPPORTUNITIES);
  }

  function handleBackToBranches() {
    setSelectedBranch(null);
    setView(VIEW.BRANCHES);
  }

  function handleHome() {
    setSelectedBoard(null);
    setSelectedBranch(null);
    setView(VIEW.HOME);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onHome={handleHome} />
      <main className="flex-1">
        {view === VIEW.HOME && (
          <LandingPage onSelectBoard={handleSelectBoard} />
        )}
        {view === VIEW.BRANCHES && selectedBoard && (
          <BranchSelectionPage
            board={selectedBoard}
            onSelectBranch={handleSelectBranch}
            onBack={handleHome}
          />
        )}
        {view === VIEW.OPPORTUNITIES && selectedBranch && selectedBoard && (
          <OpportunitiesPage
            branch={selectedBranch}
            board={selectedBoard}
            onBack={handleBackToBranches}
          />
        )}
      </main>
      <footer className="text-center text-xs text-gray-400 py-4 border-t bg-white">
        © {new Date().getFullYear()} Vertex Buddy Pro · Intermediate Counselling Guide
      </footer>
    </div>
  );
}
