import { useContext, useEffect } from 'react';
import BranchesProvider from '../context/BranchesProvider';
import getBranches from '../data/branches';
import { Branch, Schedule } from '../interfaces/BranchInt';
import BranchCard from './BranchCard';

export default function Branches() {
  const { initialBranches, setInitialBranches } = useContext(BranchesProvider);

  const showInitialBranches = async () => {
    const results = await getBranches();
    const branches = [
      results.locations[78],
      results.locations[45],
      results.locations[39],
    ];
    setInitialBranches(branches);
  };

  useEffect(() => {
    if (initialBranches.length === 0) {
      showInitialBranches();
    }
  }, [initialBranches]);

  return (
    <div>
      {initialBranches.length> 0 && initialBranches.map((branch: Branch) => (
        <BranchCard
        key={branch.id}
        opened={branch.opened}
        title={branch.title}
        address={branch.content}
        mask={branch.mask}
        towel={branch.towel}
        fountain={branch.fountain}
        lockerRoom={branch.locker_room}
        morningSchedule={branch.schedules[0]}
        nightSchedule={branch.schedules[1]}
        saturdaySchedule={branch.schedules[2]}
        sundaySchedule={branch.schedules[3]}
         />
      ))}
    </div>
  );
}
