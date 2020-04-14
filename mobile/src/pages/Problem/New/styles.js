import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  background-color: #7d40e7;

  height: 155px;
`;

export const Card = styled.View`
  border-radius: 4px;
  margin: 10px 20px;
  padding: 15px;
  background-color: #fff;
  top: 80px;
  border: 1px solid #0000001a;
`;

export const TextInput = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 20,
})`
  height: 300px;
`;
export const SubmitProblem = styled(Button)`
  top: 80px;
  background: #7d40e7;
  margin: 0 20px;
  align-self: stretch;
`;
