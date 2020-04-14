import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* background-color: #7d40e7; */
  height: 155px;
`;

export const Background = styled.View`
  margin: 0 20px;
  /* flex: 1; */
  /* align-content: center; */
`;

export const Content = styled.View`
  margin: 0 20px;
  /* flex: 1; */
  /* align-content: center; */
`;
export const Card = styled.View`
  min-height: 150px;
  max-height: 400px;
  border-radius: 4px;
  margin: 20px auto;
  /* position: relative; */
  /* top: 100px; */
  /* overflow: hidden; */
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const TakePictureButton = styled(RectButton)`
  background: rgba(000, 000, 000, 0.5);
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-self: center;
  padding: 18px;
  justify-content: center;
`;

export const SubmitButton = styled(Button)`
  background: #7d40e7;
  align-self: stretch;
`;

export const Pending = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
export const PendingText = styled.Text`
  /* color: #7d40e7; */
  font-weight: bold;
`;

export const Image = styled.ImageBackground`
  width: 300px;
  min-height: 150px;
  max-height: 400px;
  flex: 1;
  margin-bottom: 15px;
  flex-direction: column;
  justify-content: flex-end;
  /* align-content: space-between; */
`;
