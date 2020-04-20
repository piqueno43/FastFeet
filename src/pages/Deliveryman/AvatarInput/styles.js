import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 0 1 100%;
  justify-content: center;

  label {
    color: #dddddd;
    max-width: 150px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px dashed #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      max-height: 150px;
      max-width: 150px;
      border-radius: 50%;
    }

    input {
      display: none;
    }
  }
`;
