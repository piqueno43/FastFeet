import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  a {
    cursor: pointer;
    color: black;
    float: left;
    padding: 5px 15px;
    margin: 0 2.5px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
  }
`;
export const PaginationItem = styled(Link)`
  color: ${(props) => (props.active === 'active' ? '#fff' : 'black')}!important;
  border: 1px solid
    ${(props) => (props.active === 'active' ? '#7D40E7' : '#ddd')};
  background-color: ${(props) =>
    props.active === 'active' ? '#7D40E7' : 'transparent'};
`;
