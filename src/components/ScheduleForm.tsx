import IconHour from '../assets/images/icon-hour.png';
import getBranches from '../data/branches.js';
export default function ScheduleForm() {

  const showAllBranches = async () => {
    const results = await getBranches();
    console.log(results.locations);
  }

  return (
    <div>
      <form action="">
        <div>
          <img src={IconHour} alt="relógio" />
          <h4>Horário</h4>
        </div>
        <div>
          <input type="checkbox" id="morning" name="morning"/>
          <label htmlFor="morning">Manhã</label>
          <div><p>06:00 às 12:00</p></div>
        </div>
        <div>
          <input type="checkbox" id="afternoon" name="afternoon"/>
          <label htmlFor="afternoon">Tarde</label>
          <div><p>12:01 às 18:00</p></div>
        </div>
        <div>
          <input type="checkbox" id="night" name="night"/>
          <label htmlFor="night">Noite</label>
          <div><p>18:01 às 23:00</p></div>
        </div>
        <div>
          <input type="checkbox" id="show-all" name="show-all" />
          <label htmlFor="show-all">Exibir unidades fechadas</label>
          <div><p>Resultados encontrados: 0</p></div>
        </div>
        <div>
          <button type="button" onClick={showAllBranches}>ENCONTRAR UNIDADE</button>
          <button type="button">LIMPAR</button>
        </div>
      </form>
    </div>
  )
}
