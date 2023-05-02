import { useContext } from 'react';
import BranchesProvider from '../context/BranchesProvider';
import IconHour from '../assets/images/icon-hour.png';
export default function ScheduleForm() {
  const {
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

  return (
    <div>
      <form action="">
        <div>
          <img src={IconHour} alt="relógio" />
          <h4>Horário</h4>
        </div>
        <div>
          <input
            type="checkbox"
            id="morning"
            value="morning"
            name="schedule"
            checked={selectedSchedule === 'morning'}
            onChange={handleScheduleChange}
          />
          <label htmlFor="morning">Manhã</label>
          <div><p>06:00 às 12:00</p></div>
        </div>
        <div>
          <input
            type="checkbox"
            id="afternoon"
            value="afternoon"
            name="schedule"
            checked={selectedSchedule === 'afternoon'}
            onChange={handleScheduleChange}/>
          <label htmlFor="afternoon">Tarde</label>
          <div><p>12:01 às 18:00</p></div>
        </div>
        <div>
          <input
            type="checkbox"
            id="night"
            value="night"
            name="schedule"
            checked={selectedSchedule === 'night'}
            onChange={handleScheduleChange}/>
          <label htmlFor="night">Noite</label>
          <div><p>18:01 às 23:00</p></div>
        </div>
        <div>
          <input
            type="checkbox"
            id="show-all"
            name="show-all"
            checked={showClosed}
            onChange={handleAllUnitsChange}
              />
          <label htmlFor="show-all">Exibir unidades fechadas</label>
          <div><p>Resultados encontrados: 0</p></div>
        </div>
        <div>
          <button type="button">ENCONTRAR UNIDADE</button>
          <button type="button" onClick={clearFilters}>LIMPAR</button>
        </div>
      </form>
    </div>
  )
}
