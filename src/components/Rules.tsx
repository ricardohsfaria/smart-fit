import RequiredMask from '../assets/images/required-mask.png';
import RecommendedMask from '../assets/images/recommended-mask.png';
import RequiredTowel from '../assets/images/required-towel.png';
import RecommendedTowel from '../assets/images/recommended-towel.png';
import PartialFountain from '../assets/images/partial-fountain.png';
import ForbiddenFountain from '../assets/images/forbidden-fountain.png';
import RequiredLockerRoom from '../assets/images/required-lockerroom.png';
import PartialLockerRoom from '../assets/images/partial-lockerroom.png';
import ForbiddenLockerRoom from '../assets/images/forbidden-lockerroom.png';

export default function Rules() {
  return (
    <div>
        <div>
            <h5>Máscara</h5>
            <div>
                <img src={RequiredMask} alt="máscara verde" />
                <p>Obrigatório</p>
            </div>
            <div>
                <img src={RecommendedMask} alt="máscara cinza" />
                <p>Recomendado</p>
            </div>
        </div>
        <div>
            <h5>Toalha</h5>
            <div>
                <img src={RequiredTowel} alt="toalha verde" />
                <p>Obrigatório</p>
            </div>
            <div>
                <img src={RecommendedTowel} alt="toalha cinza" />
                <p>Recomendado</p>
            </div>
        </div>
        <div>
            <h5>Bebedouro</h5>
            <div>
                <img src={PartialFountain} alt="garrafa amarela" />
                <p>Parcial</p>
            </div>
            <div>
                <img src={ForbiddenFountain} alt="garrafa vermelha" />
                <p>Proibido</p>
            </div>
        </div>
        <div>
            <h5>Vestiários</h5>
            <div>
                <img src={RequiredLockerRoom} alt="cabide verde" />
                <p>Liberado</p>
            </div>
            <div>
                <img src={PartialLockerRoom} alt="cabide amarelo" />
                <p>Parcial</p>
            </div>
            <div>
                <img src={ForbiddenLockerRoom} alt="cabide vermelho" />
                <p>Fechado</p>
            </div>
        </div>
    </div>
  )
}
