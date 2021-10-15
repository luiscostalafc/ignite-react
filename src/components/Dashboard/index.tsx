import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable/inde';

import { Container } from './styles';


export function Dashboard() {
  return (
    <Container>
     <Summary/>
     <TransactionsTable />
    </Container>
  );
}