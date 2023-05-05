import RequiredMask from '../assets/images/required-mask.png';
import RecommendedMask from '../assets/images/recommended-mask.png';
import RequiredTowel from '../assets/images/required-towel.png';
import RecommendedTowel from '../assets/images/recommended-towel.png';
import PartialFountain from '../assets/images/partial-fountain.png';
import ForbiddenFountain from '../assets/images/forbidden-fountain.png';
import RequiredLockerRoom from '../assets/images/required-lockerroom.png';
import PartialLockerRoom from '../assets/images/partial-lockerroom.png';
import ForbiddenLockerRoom from '../assets/images/forbidden-lockerroom.png';
import '../style/BranchCard.css';

type BranchProps = {
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

  let color;

  const addressWithoutTags = () => {
    const cleanedAddress = address.replace(/<\/?p>/gi, '').replace(/&#8211;/g, '-').replace(/<br>/gi, ' - ');
    const spanRegex = /<span\b[^>]*>\s*<strong>Obs\.:<\/strong>.*?<\/span>/gi;
    return cleanedAddress.replace(spanRegex, '');
  }

  const getScheduleStyle = () => {
    opened ? color = 'green-opened' : color = 'red-closed';
  }
  
  getScheduleStyle();

  return (
    <div className="branch-card-container">
      <div><h5 className={color}>{opened ? 'Aberto' : 'Fechado'}</h5></div>
      <div className="title-container"><h2>{title}</h2></div>
      <div className="address-container"><p className="address">{addressWithoutTags()}</p></div>
      {
        opened && (
          <div>
            <div className="branch-figures">
      <div>{mask === 'required' ? (<img src={RequiredMask} data-testid="required-mask" />) :
        (<img src={RecommendedMask} data-testid="recommended-mask" />)}
      </div>
      <div>{towel === 'required' ? (<img src={RequiredTowel} />) :
        (<img src={RecommendedTowel} data-testid="recommended-towel" />)}
      </div>
      <div>{fountain === 'partial' ? (<img src={PartialFountain} data-testid="partial-fountain"/>) :
        (<img src={ForbiddenFountain}/>)}
      </div>
      <div>
        {lockerRoom === 'allowed' && (<img src={RequiredLockerRoom} data-testid="required-locker-room"/>)}
        {lockerRoom === 'partial' && (<img src={PartialLockerRoom} />)}
        {lockerRoom === 'not_allowed' && (<img src={ForbiddenLockerRoom} />)}
      </div>
            </div>
        <div className="week-container">
          <div className="business-week">
        <div>
          <h4>{morningSchedule.weekdays}</h4>
          <p>{morningSchedule.hour}</p>
          {nightSchedule && (
          <p>{nightSchedule.hour}</p>
        )}
        </div>
        <div>
          <h4>{saturdaySchedule.weekdays}</h4>
          <p>{saturdaySchedule.hour}</p>
          </div>
        </div>
      <div>
        {
        sundaySchedule && (
          <div>
            <h4>{sundaySchedule.weekdays}</h4>
            <p>{sundaySchedule.hour}</p>
          </div>
        )
      }
      </div>
      </div>
          </div>
        )
      }
    </div>
  )
}
