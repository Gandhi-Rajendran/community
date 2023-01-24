import styled from "styled-components";

export const HomeContainer = styled.div`
  input {
    margin: 1rem;
  }
`;

export const H1 = styled.h1`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: darkblue;
  color: white;
`;

export const TableContainer = styled.table`
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
export const Footer = styled.footer`
  // text-align: center;
  display: flex;
  justify-content: center;
  margin: 1rem;
`;
