import styled from "styled-components";

class Table {
  static StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
  `;

  static THead = styled.thead`
    background-color: #1f4f4f;
    color: #ddd;
    font-size: 0.9rem;
    text-align: left;
  `;

  static TBody = styled.tbody``;

  static TR = styled.tr`
    border-bottom: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  `;

  static TD = styled.td`
    padding: 20px 0px;
    color: white;
  `;

  static TH = styled.th`
    padding: 20px 0px;
    color: white;
  `;
}

export default Table;
