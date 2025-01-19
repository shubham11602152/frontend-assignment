import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
  }
  table {
    width: 80%;
    margin: 20px auto;
    border-collapse: collapse;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  th, td {
    padding: 12px 20px;
    text-align: left;
    border: 1px solid #ddd;
  }
  th {
    background-color: #007BFF;
    color: white;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover{
    background-color:rgba(0, 123, 255, 0.3);
  }
`;

export default GlobalStyles;
