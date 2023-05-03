// import { useContext, useEffect } from 'react';
// import BranchesProvider from '../context/BranchesProvider';
import RequiredMask from '../assets/images/required-mask.png';
import RecommendedMask from '../assets/images/recommended-mask.png';
import RequiredTowel from '../assets/images/required-towel.png';
import RecommendedTowel from '../assets/images/recommended-towel.png';
import PartialFountain from '../assets/images/partial-fountain.png';
import ForbiddenFountain from '../assets/images/forbidden-fountain.png';
import RequiredLockerRoom from '../assets/images/required-lockerroom.png';
import PartialLockerRoom from '../assets/images/partial-lockerroom.png';
import ForbiddenLockerRoom from '../assets/images/forbidden-lockerroom.png';

interface BranchProps {
  opened: boolean;
  title: string;
  address: string;
  mask: string;
  towel: string;
  fountain: string;
  lockerRoom: string;
  morningSchedule: {
    weekdays: string,
    hour: string
  },
  nightSchedule: {
    weekdays: string,
    hour: string
  },
  saturdaySchedule: {
    weekdays: string,
    hour: string
  },
  sundaySchedule: {
    weekdays: string,
    hour: string
  }
}


export default function BranchCard(props: BranchProps) {
  // const { initialBranches } = useContext(BranchesProvider);

  const {
    opened,
    title,
    address,
    mask,
    towel,
    fountain,
    lockerRoom,
    morningSchedule,
    nightSchedule,
    saturdaySchedule,
    sundaySchedule
  } = props;

  const addressWithoutTags = () => {
    return address.replace(/<\/?p>/gi, '').replace(/&#8211;/g, '-').replace(/<br>/gi, ' - ');
  }

  return (
    <div>
      <div><h5>{opened ? 'Aberto' : 'Fechado'}</h5></div>
      <div><h3>{title}</h3></div>
      <div>{addressWithoutTags()}</div>
      {
        opened && (
          <div>
      <div>{mask === 'required' ? (<img src={RequiredMask} />) :
        (<img src={RecommendedMask}/>)}
      </div>
      <div>{towel === 'required' ? (<img src={RequiredTowel} />) :
        (<img src={RecommendedTowel}/>)}
      </div>
      <div>{fountain === 'partial' ? (<img src={PartialFountain} />) :
        (<img src={ForbiddenFountain}/>)}
      </div>
      <div>
        {lockerRoom === 'allowed' && (<img src={RequiredLockerRoom} />)}
        {lockerRoom === 'partial' && (<img src={PartialLockerRoom} />)}
        {lockerRoom === 'not_allowed' && (<img src={ForbiddenLockerRoom} />)}
      </div>
      <div>
        <div>
          <p>{morningSchedule.weekdays}</p>
          <p>{morningSchedule.hour}</p>
        </div>
        {nightSchedule && (
          <div>
          <p>{nightSchedule.hour}</p>
        </div>
        )}
        <div>
          <p>{saturdaySchedule.weekdays}</p>
          <p>{saturdaySchedule.hour}</p>
        </div>
      </div>
      <div>
        {
        sundaySchedule && (
          <div>
            <p>{sundaySchedule.weekdays}</p>
            <p>{sundaySchedule.hour}</p>
          </div>
        )
      }
      </div>
          </div>
        )
      }
    </div>
  )
}
