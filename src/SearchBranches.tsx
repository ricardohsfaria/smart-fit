import Logo from "./assets/images/logo.svg";
import Branches from "./components/Branches";
import Footer from "./components/Footer";
import Rules from "./components/Rules";
import ScheduleForm from "./components/ScheduleForm";
import "./SearchBranches.css";

export default function SearchBranches() {
  return (
    <div>
      <header>
        <img src={Logo} alt="smart fit" />
      </header>
      <div>
        <h1>REABERTURA</h1>
        <h1>SMARTFIT</h1>
        <div />
        <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo</p>
      </div>
      <ScheduleForm />
      <Rules />
      <Branches />
      <Footer />
      </div>
  )
}
