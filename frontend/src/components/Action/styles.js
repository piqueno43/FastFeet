import styled from 'styled-components';
import { darken } from 'polished';

export const Action = styled.button`
  text-align: center;
  font-size: 16px;
  border: 0;
  background: none;
  color: #999999;
  display: flex;
  padding: 0 10px;

  & + button,
  & + a {
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid #eeeeee;
  }

  &:hover {
    color: ${darken(0.2, '#999999')};
  }

  > svg {
    margin-right: 7px;
  }
`;

export const ContainerLink = styled(Action)`
  > a {
    color: #999999;

    &:hover {
      color: ${darken(0.2, '#999999')};
    }
  }
`;
