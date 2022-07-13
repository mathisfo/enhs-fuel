import React, { useEffect, useState } from "react";
import { Label, Table } from "semantic-ui-react";

const HistoryTable = () => {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/refill/log").then((res) =>
      res.json().then((data) => setHistory(data))
    );
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Dato fylt</Table.HeaderCell>
          <Table.HeaderCell>Fly</Table.HeaderCell>
          <Table.HeaderCell>Type fuel</Table.HeaderCell>
          <Table.HeaderCell>Liter fylt</Table.HeaderCell>
          <Table.HeaderCell>Fylt av</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {history
          .map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.formatedDate}</Table.Cell>
              <Table.Cell>{item.aircraft}</Table.Cell>
              <Table.Cell>{item.fueltype}</Table.Cell>
              <Table.Cell>{item.amount}</Table.Cell>
              <Table.Cell>{item.firstname}</Table.Cell>
            </Table.Row>
          ))
          .reverse()}
      </Table.Body>
    </Table>
  );
};

export default HistoryTable;
