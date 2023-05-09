import React from 'react';
import { Table } from 'react-bootstrap';
import '../assets/style/table.css';

function MyTable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <Table className="my-table">
      <thead>
        <tr>
          {data[0] &&
            columns.map((heading) => <th key={heading}>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={`col${index}-${column}`}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MyTable;
