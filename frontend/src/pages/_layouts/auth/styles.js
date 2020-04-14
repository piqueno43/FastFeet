import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  border-radius: 4px;

  > img {
    margin-top: 60px;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;

    background: #fff;
    padding: 30px;

    label {
      font-weight: bold;
      text-align: left;
      margin-top: 15px;
      margin-bottom: 10px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #999;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(153, 153, 153, 1);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7D40E7')};
      }
    }
  }
`;
