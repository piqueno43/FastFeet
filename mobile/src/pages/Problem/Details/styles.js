import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled.View`
  background-color: #7d40e7;
  position: relative;
  height: 155px;
`;

export const Card = styled.SafeAreaView`
  border-radius: 4px;
  margin: 10px 20px;
  padding: 15px;
  background-color: #fff;
  top: 90px;
  border: 1px solid #0000001a;
`;

export const Title = styled.Text`
  top: 80px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;

export const Detail = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;
export const Text = styled.Text`
  font-size: 16px;
  margin: 0 auto;
  color: #7d40e7;
`;
