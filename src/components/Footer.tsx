import Logo from "../assets/images/logo.svg";
import '../style/Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <img src={Logo} alt="smart fit" />
        <p>Todos os direitos reservados - 2023</p>
    </div>
  )
}
