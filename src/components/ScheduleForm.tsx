import { useContext } from 'react';
import BranchesProvider from '../context/BranchesProvider';
import getBranches from '../data/branches';
import IconHour from '../assets/images/icon-hour.png';
import '../style/ScheduleForm.css';
export default function ScheduleForm() {
  const {
    allBranches,
    branches,
    setBranches,
    setAllBranches,
    selectedSchedule,
    setSelectedSchedule,
    showClosed,
    setShowClosed
      } = useContext(BranchesProvider);

  const handleScheduleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSchedule(event.target.value);
  }

  const handleAllUnitsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowClosed(event.target.checked);
  }

  const clearFilters = () => {
    setSelectedSchedule('');
    setShowClosed(false);
  }

  const filterBranches = async () => {
    const results = await getBranches();
    let start;
    let end;
  
    switch (selectedSchedule) {
      case "morning":
        start = 6;
        end = 12;
        break;
      case "afternoon":
        start = 12;
        end = 18;
        break;
      case "night":
        start = 18;
        end = 23;
        break;
      default:
        alert('Selecione um período')
        throw new Error("Invalid period");
    }
  
    const filteredBranches = results.locations.filter(location => {
      if (location.schedules) {
        let startSchedule;
        let endSchedule;
        const daysOfWeek = ['Dom.', 'Seg. à Sex.', 'Seg. à Sex.', 'Seg. à Sex.', 'Seg. à Sex.', 'Seg. à Sex.', 'Sáb.'];
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getDay()];
          switch(dayOfWeek) {
            case "Seg. à Sex.":
              [startSchedule, endSchedule] = location.schedules[0].hour.replace(/h/g, "").split(" às ");
              break;
            case "Sáb.":
              [startSchedule, endSchedule] = location.schedules[location.schedules.length -1].hour.replace(/h/g, "").split(" às ");
              break;
              case "Dom.":
              [startSchedule, endSchedule] = location.schedules[location.schedules.length -2].hour.replace(/h/g, "").split(" às ");
              break;
              default:
          }
          if(!showClosed) return endSchedule <= end && location.opened === true;
          return endSchedule <= end;
      }
    });
    setBranches(filteredBranches);
  }

  return (
    <div className="schedule-form-container">
      <form action="">
        <div className="clock-container">
          <img src={IconHour} alt="relógio" className="clock-img" />
          <h4 className="clock-text">Horário</h4>
        </div>
        <div >
        <div className="legend-container"><h2 className="legend">Qual período quer treinar?</h2></div>
        <div className="check-container">
          <input
            className="check"
            type="checkbox"
            id="morning"
            value="morning"
            name="schedule"
            checked={selectedSchedule === 'morning'}
            onChange={handleScheduleChange}
          />
          <label htmlFor="morning" className="check-label">Manhã</label>
          <div><p className="period-time">06:00 às 12:00</p></div>
        </div>
        </div>
          <div className="check-line" />
        <div className="check-container">
          <input
            className="check"
            type="checkbox"
            id="afternoon"
            value="afternoon"
            name="schedule"
            checked={selectedSchedule === 'afternoon'}
            onChange={handleScheduleChange}/>
          <label htmlFor="afternoon" className="check-label">Tarde</label>
          <div><p className="period-time">12:01 às 18:00</p></div>
        </div>
          <div className="check-line"/>
        <div className="check-container">
          <input
            className="check"
            type="checkbox"
            id="night"
            value="night"
            name="schedule"
            checked={selectedSchedule === 'night'}
            onChange={handleScheduleChange}/>
          <label htmlFor="night" className="check-label">Noite</label>
          <div><p className="period-time">18:01 às 23:00</p></div>
        </div>
          <div className="check-line"/>
        <div>
          <input
            className="square-check"
            type="checkbox"
            id="show-all"
            name="show-all"
            checked={showClosed}
            onChange={handleAllUnitsChange}
              />
          <label htmlFor="show-all" className="check-label show-closed-label">Exibir unidades fechadas</label>
          <div className="found-results-container"><p className="found-results-text">Resultados encontrados: {branches.length}</p></div>
        </div>
        <div className="buttons-container">
          <button type="button" onClick={filterBranches} className="find-branch-button app-button">ENCONTRAR UNIDADE</button>
          <button type="button" onClick={clearFilters} className="clear-button app-button">LIMPAR</button>
        </div>
      </form>
    </div>
  )
}
