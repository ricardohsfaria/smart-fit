import RequiredMask from '../assets/images/required-mask.png';
import RecommendedMask from '../assets/images/recommended-mask.png';
import RequiredTowel from '../assets/images/required-towel.png';
import RecommendedTowel from '../assets/images/recommended-towel.png';
import PartialFountain from '../assets/images/partial-fountain.png';
import ForbiddenFountain from '../assets/images/forbidden-fountain.png';
import RequiredLockerRoom from '../assets/images/required-lockerroom.png';
import PartialLockerRoom from '../assets/images/partial-lockerroom.png';
import ForbiddenLockerRoom from '../assets/images/forbidden-lockerroom.png';
import '../style/Rules.css';

export default function Rules() {
  return (
    <div className="rules-container">
        <div className="rule-container">
            <div className="rule-title"><h5>Máscara</h5></div>
            <div className="figures">
            <div>
                <div className="figure-container"><img src={RequiredMask} alt="máscara verde" className="figure-image" /></div>
                <p>Obrigatório</p>
                
            </div>
            <div>
                <div className="figure-container"><img src={RecommendedMask} alt="máscara cinza" className="figure-image" /></div>
                <p >Recomendado</p>
            </div>
        </div>
            </div>
        <div className="rule-container">
            <div className="rule-title"><h5>Toalha</h5></div>
            <div className="figures">
            <div>
                <div className="figure-container"><img src={RequiredTowel} alt="toalha verde" className="figure-image" /></div>
                <p>Obrigatório</p>
            </div>
            <div>
                <div className="figure-container"><img src={RecommendedTowel} alt="toalha cinza" className="figure-image" /></div>
                <p>Recomendado</p>
            </div>
            </div>
        </div>
        <div className="rule-container">
            <div className="rule-title"><h5>Bebedouro</h5></div>
            <div className="figures">
            <div>
                <div className="figure-container"><img src={PartialFountain} alt="garrafa amarela" className="figure-image" /></div>
                <p>Parcial</p>
            </div>
            <div>
                <div className="figure-container"><img src={ForbiddenFountain} alt="garrafa vermelha" className="figure-image" /></div>
                <p>Proibido</p>
            </div>
            </div>
        </div>
        <div className="rule-container">
            <div className="rule-title"><h5>Vestiários</h5></div>
            <div className="figures">
            <div>
                <div className="figure-container"><img src={RequiredLockerRoom} alt="cabide verde" className="figure-image" /></div>
                <p>Liberado</p>
            </div>
            <div>
                <div className="figure-container"><img src={PartialLockerRoom} alt="cabide amarelo" className="figure-image" /></div>
                <p>Parcial</p>
            </div>
            <div>
                <div className="figure-container"><img src={ForbiddenLockerRoom} alt="cabide vermelho" className="figure-image" /></div>
                <p>Fechado</p>
            </div>
            </div>
        </div>
    </div>
  )
}
