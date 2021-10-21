import { useContext } from "react";
import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { dateConvert, moneyConvert } from "../../utils"

export function TransactionsTable() {
  const { transactions} = useTransactions();
  return (
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
          {transactions.map(
            ({ id, title, type, amount, category, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  {moneyConvert(amount) }
                </td>
                <td>{category}</td>
                <td>
                  {dateConvert(createdAt)}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Container>
  );
}
