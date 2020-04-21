import styled from 'styled-components';

export const ContainerModal = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 200px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContentModal = styled.div`
  background-color: #fff;
  margin: auto;
  padding: 25px;
  border-radius: 4px;
  max-width: 450px;
  width: 450px;
  text-align: left;
  font-size: 16px;

  h6 {
    font-size: 14px;
  }

  strong,
  h6 {
    margin: 4px 0;
  }

  hr {
    border: 1px solid #eeeeee;
    margin: 12px 0;
  }

  img {
    max-width: 230px;
    display: flex;
    margin: 0 auto;
  }
`;

export const CloseModal = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
