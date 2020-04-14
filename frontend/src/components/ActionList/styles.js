import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;
`;

export const List = styled.div`
  position: absolute;
  width: max-content;
  min-width: 150px;
  max-width: 200px;
  left: calc(50% - 100px);
  top: calc(100% + 10px);
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: 1;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    /* box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.1); */
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
`;
