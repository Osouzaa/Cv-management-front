import styled from "styled-components"

export const Container = styled.div  `
    display: flex;
    justify-content: center;
    align-items: center;

`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const StyledTableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const StyledTableData = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;