import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Web Site</td>
                        <td className="ClasseEntradas">$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Caldo de Cana</td>
                        <td className="ClasseSaidas">$12</td>
                        <td>Alimentação</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel de Carro</td>
                        <td className="ClasseSaidas">$1.000</td>
                        <td>Transporte</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Estacionamento</td>
                        <td className="ClasseSaidas">$7</td>
                        <td>Transporte</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}