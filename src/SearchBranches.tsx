import Logo from "./assets/images/logo.svg";
import Branches from "./components/Branches";
import Footer from "./components/Footer";
import Rules from "./components/Rules";
import ScheduleForm from "./components/ScheduleForm";
import "./style/SearchBranches.css";

export default function SearchBranches() {
  return (
    <div>
      <header className="header">
        <img src={Logo} alt="smart fit" className="header-logo"/>
      </header>
      <div>
        <h1 className="reopening-title">REABERTURA</h1>
        <h1 className="smartfit-title">SMARTFIT</h1>
        <div className="line" />
        <p className="presentation">O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo</p>
      </div>
      <ScheduleForm />
      <Rules />
      <Branches />
      <Footer />
      </div>
  )
}
