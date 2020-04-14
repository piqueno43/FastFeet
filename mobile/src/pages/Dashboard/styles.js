import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 20px;
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 10 },
})``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #444444;
`;
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Links = styled.View`
  display: flex;
  flex-direction: row;
`;
export const Link = styled(RectButton)`
  margin-left: 15px;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.active ? '#7D40E7' : '#999999')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;
