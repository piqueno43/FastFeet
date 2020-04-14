import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 30px;
  padding-bottom: 10px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 44px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const SmallText = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const LogoutButton = styled(RectButton)`
  background: transparent;
`;
