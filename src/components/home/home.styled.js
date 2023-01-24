import styled from "styled-components";

export const HomeContainer = styled.div`
  input {
    margin: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export const H1 = styled.h1`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: darkblue;
  color: white;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  tr,
  th,
  td {
    border: 0.15rem solid black;
  }
  thead {
    th {
      padding: 1rem;
    }
  }
  tbody {
    // background-color: darkblue;
    // height: 2rem;
  }
  // td {
  //   border: 1rem solid red;
  // }
  overflow-y: scroll;
`;

export const Td = styled.td`
  padding: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;
