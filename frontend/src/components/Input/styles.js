import styled from 'styled-components';

export const InputContainer = styled.div`
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 14px;
    color: #444444;
    font-weight: bold;
  }
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
`;
