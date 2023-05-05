import { useContext, useEffect, useState } from 'react';
import BranchesProvider from '../context/BranchesProvider';
import getBranches from '../data/branches';
import { Branch, Context } from '../interfaces/BranchInt';
import BranchCard from './BranchCard';
import '../style/Branches.css';

export default function Branches() {
  const {
    initialBranches,
    setInitialBranches,
    branches
      } = useContext<Context>(BranchesProvider);

      const [currentPage, setCurrentPage] = useState<number>(1);
      const [branchesPerPage, setBranchesPerPage] = useState<number>(6);

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
  });

  const renderBranches = () => {
    const indexOfLastBranch = currentPage * branchesPerPage;
    const indexOfFirstBranch = indexOfLastBranch - branchesPerPage;
    const currentBranches = branches.slice(indexOfFirstBranch, indexOfLastBranch);

    if(branches.length === 0) {
      return initialBranches.map((branch: Branch) => (
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
      ));
    } else {
      return currentBranches.map((branch: Branch) => (
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
      ));
    }
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(branches.length / branchesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div className="page-container-button"><button key={number} onClick={() => setCurrentPage(number)}>{number}</button></div>
        ))}
      </div>
    );
  };

  return (
    <div>
    <div className="branches-container">
      {renderBranches()}
    </div>
    <div>{branches.length > branchesPerPage && renderPagination()}</div>
    </div>
  );
}