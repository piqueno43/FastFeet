import styled from 'styled-components';
import { lighten } from 'polished';

export const Badge = styled.span`
  width: 35px;
  height: 35px;
  background: ${(props) => lighten(0.2, props.color)};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  padding: 8px;
  margin-right: 15px;
  font-weight: bold;
  border-radius: 50%;
  font-size: 16px;
`;

export const BadgeLarger = styled(Badge)`
  margin-right: 0;
  width: 150px;
  height: 150px;
  font-size: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
`;
