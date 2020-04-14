import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Badge = styled.View`
  width: 68px;
  height: 68px;
  background: ${(props) => lighten(0.4, props.color)};
  padding: 8px;
  border-radius: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 31px;
  color: ${(props) => lighten(0.2, props.color)};
`;

export const BadgeLarger = styled(Badge)`
  width: 150px;
  height: 150px;
  font-size: 66px;
  border-radius: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: normal;
`;
export const TextLarger = styled(Text)`
  font-size: 60px;
  color: ${(props) => lighten(0.2, props.color)};
`;
