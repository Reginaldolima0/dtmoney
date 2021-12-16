import { Container } from "./styles";
import EntradasImg from '../../assets/entradas.svg'
import SaidasImg from '../../assets/saídas.svg'
import TotalImg from '../../assets/total.svg'

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="Icone de Entrada" />
                </header>
                <strong >1.000$</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidasImg} alt="Icone de Saídas" />
                </header>
                <strong>1.000$</strong>
            </div>
            <div className="Total">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Icone de Total" />
                </header>
                <strong>1.000$</strong>
            </div>
        </Container>
    )
}