import { useState, useMemo } from 'react';
import BranchesProvider from './BranchesProvider';

export default function ContextProvider ({ children }: { children: React.ReactNode }) {
  const [allBranches, setAllBranches] = useState([]);
  const [initialBranches, setInitialBranches] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState('');
  const [showClosed, setShowClosed] = useState(false);

  const GLOBAL_CONTEXT = useMemo(() => ({
    allBranches,
    setAllBranches,
    initialBranches,
    setInitialBranches,
    branches,
    setBranches,
    selectedSchedule,
    setSelectedSchedule,
    showClosed,
    setShowClosed,
  }),
  [ allBranches,
    setAllBranches,
    initialBranches,
    setInitialBranches,
    branches,
    setBranches,
    selectedSchedule,
    setSelectedSchedule,
    showClosed,
    setShowClosed,
  ])

  return (
        <BranchesProvider.Provider value={ GLOBAL_CONTEXT }>
          {children}
        </BranchesProvider.Provider>
  )
}
