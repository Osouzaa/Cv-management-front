// style.js
import styled from "styled-components";

export const TableContainer = styled.div`
  margin-left: 19vw;
  margin-top: 10vw;
`;

export const StyledTable = styled.table`
  width: 98%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  color: #000;
  border: 1px solid #dddddd;
  padding: 20px;
  font-weight: bold;

`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid #dddddd;
  text-align: center;
  padding: 15px;

  &.info {
    color: #5842d6;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
