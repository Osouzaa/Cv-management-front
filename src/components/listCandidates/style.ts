// style.js

import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  max-width: 73.4vw;
  margin: 20px auto;

  @media (min-width: 2560px) {
    max-width: 80vw;
    margin-top: 3%;
    margin-left: 20.2%;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
 
  thead {
    border-radius: 10px;
  }
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 13px;
  text-align: left;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  border: 1px solid #ddd;
`;

export const TableHeaderCentered = styled(TableHeader)`
  text-align: center;
`;

export const TableHeaderBreakWord = styled(TableHeader)`
  word-break: break-word;
`;

export const TableHeaderSmall = styled(TableHeader)`
  width: 50px;
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 13px;
  word-break: break-word;
  font-size: 12px;
  text-align: center;

  &.idade {
    text-align: center;
  }

  &.email {
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.info {
    color: #007bff;
    cursor: pointer;
    text-decoration: underline;
  }

  &.nome {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TableDataRow = styled.tr`
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const TableHeaderSpecial = styled(TableHeader)`
  background-color: #fff;
  transition: background-color 0.3s, box-shadow 0.3s;

  th {
    border: none;
  }
`;

export const TableBody = styled.tbody`
  tr {
    transition: background-color 0.3s;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  td {
    border: none;
    border-bottom: 1px solid #ddd;
  }

  td:first-child {
    border-left: 1px solid #ddd;
  }

  td:last-child {
    border-right: 1px solid #ddd;
  }
`;
