import React, { useState, useMemo } from 'react';
import BranchesProvider from './BranchesProvider';

export default function ContextProvider ({ children }) {
  const [initialBranches, setInitialBranches] = useState([]);
  const [branches, setBranches] = useState([]);

  const GLOBAL_CONTEXT = useMemo(() => ({
    initialBranches,
    setInitialBranches,
    branches,
    setBranches,
  }),
  [ initialBranches,
    setInitialBranches,
    branches,
    setBranches,
  ])

  return (
        <BranchesProvider.Provider value={ GLOBAL_CONTEXT }>
          {children}
        </BranchesProvider.Provider>
  )
}
