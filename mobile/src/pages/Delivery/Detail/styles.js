import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Content = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;
export const Background = styled.SafeAreaView`
  flex: 1;
  background: #7d40e7;
  /* max-height: 90px; */
`;

export const Card = styled.View`
  border-radius: 4px;
  margin: 10px 20px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #0000001a;
`;

export const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 5px;
  align-self: center;
`;

export const CardBody = styled.View``;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #999999;
  margin-top: 5px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-top: 5px;
`;

export const CardDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Date = styled.View`
  margin-top: 15px;
`;

export const CardFooter = styled(CardDate)``;

export const Button = styled(RectButton)`
  align-items: center;
  width: 30%;
`;

export const LabelSmall = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #999999;
`;
export const Separator = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 1px;
  height: 100%;
  background: #0000001a;
`;
