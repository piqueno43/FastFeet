import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
`;
export const Info = styled.View`
  margin-top: 15px;
  align-self: stretch;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Name = styled.Text`
  font-size: 22px;
`;

export const LogoutButton = styled(Button)`
  align-self: stretch;
  background: #e74040;
  margin-top: 30px;
`;
