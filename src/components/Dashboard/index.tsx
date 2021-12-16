import { Summary } from "../Summary";
import { TransactionTable } from "../../components/TransactionsTable";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TransactionTable/>
        </Container>
    );
}