import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { darken, lighten } from 'polished';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0
  }

  html, body, #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast--success {
    font-weight:bold;
    color: #fff !important;
    background-color: #7d40e7 !important;
    border-color: ${darken(0.5, '#7d40e7')} !important;
  }
  .Toastify__toast--error {
    color: #721c24 !important;
    background-color: #f8d7da !important;
    border-color: #f5c6cb !important;
  }
  .Toastify__toast--info {
    color: #004085 !important;
    background-color: #cce5ff !important;
    border-color: #b8daff !important;
  }
  .Toastify__toast--warning {
    color: #856404 !important;
    background-color: #fff3cd !important;
    border-color: #ffeeba !important;
  }

`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  color: #666;
  font-size: 16px;
  /* border-collapse: separate; */
  border-spacing: 0 20px;

  thead {
    font-weight: bold;
  }

  tbody {
    tr {
      border: none;
      background: #fff;
    }
  }

  th,
  td {
    text-align: left;
    border-radius: 4px;
    border: none;
    padding: 10px 15px;
    height: 57px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 16px;

  h2 {
    font-size: 24px;
    padding-top: 30px;
    padding-bottom: 30px;
    color: #444;
  }

  nav {
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 42px;
      margin: 0 0 10px;
      background-color: #7d40e7;
      font-weight: bold;
      padding: 10px 20px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${(props) =>
          props.color ? darken(0.03, props.color) : darken(0.03, '#7D40E7')};
      }
    }

    label {
      position: relative;
      > svg {
        position: absolute;
        left: 10px;
        top: 10px;
      }
      input {
        background: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 4px;
        height: 42px;
        padding: 10px 15px;
        padding-left: 40px;
        color: #999999;
        font-weight: bold;
        margin: 0 0 10px;

        &::placeholder {
          color: #999999;
        }
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  flex: 0 1 ${(props) => (props.size ? props.size : '100%')};

  & + div {
    margin-left: 15px;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  h2 {
    width: 50%;
  }
  nav {
    flex: 0 1 30%;
    align-self: center;
    justify-content: flex-end;

    a + a,
    button + button,
    a + button {
      margin-left: 15px;
    }
  }
`;

export const WrapperForm = styled.div`
  margin: 0 auto;
  background: #fff;
  padding: 20px 30px;

  label {
    font-size: 14px;
    color: #444444;
    font-weight: bold;
    padding-bottom: 10px;
    padding-top: 10px;

    input {
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 12px 15px;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 15px;

      &::placeholder {
        color: #999999;
        font-size: 16px;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  margin: 0 0 10px;
  background: ${(props) => (props.color ? props.color : '#7D40E7')};
  font-weight: bold;
  padding: 10px 20px;
  color: #fff;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${(props) =>
      props.color ? darken(0.03, props.color) : darken(0.03, '#7D40E7')};
  }
`;

export const GoBackButton = styled(Link)`
  background: #ccc;

  &:hover {
    background: darken(0.03, '#ccc');
  }
`;

export const Status = styled.div`
  background: ${(props) => lighten(0.33, props.background)};
  padding: 2.5px 7.5px;
  border-radius: 12px;
  position: relative;
  text-align: center;
  font-size: 14px;

  strong {
    color: ${(props) => props.background};
    margin-left: 10px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 7.5px;
    top: 10px;
    width: 8px;
    height: 8px;
    background: ${(props) => props.background};
    border-radius: 50%;
  }
`;
