import React from "react";
import { EmptyRow } from "./style";
// import PropTypes from "prop-types";

const TableRow = ({ index, percentageFunded, amountPledged, renderFooter }) => (
  <tr>
    <td>{index}</td>
    <td>{percentageFunded}%</td>
    <td>${String(amountPledged).toLocaleString()}</td>
  </tr>
);

export default function Table({ projects, totalRecords }) {
  const emptyRows = totalRecords - projects.length;
  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <TableRow
            key={project["s.no"]}
            index={project["s.no"] + 1}
            percentageFunded={project["percentage.funded"].toFixed(2)}
            amountPledged={project["amt.pledged"]}
          />
        ))}
        {Array.from({ length: emptyRows }).map((_, index) => (
          <EmptyRow key={`empty-${index}`}>
            <td colSpan="3">{"-"}</td>
          </EmptyRow>
        ))}
      </tbody>
    </table>
  );
}

// Table.propTypes = {};
