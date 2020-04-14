import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 10px;
  border: 1px solid #f8f9fd;
`;

export const Status = styled.View`
  padding: 15px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.Text`
  display: flex;
  flex-direction: row;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 15px;
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 1px;
  background: #7d40e7;
  margin: 0 auto;
  width: 85%;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const Circle = styled.View`
  align-self: center;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 1px solid #7d40e7;
  background: ${(props) => (props.active ? '#7d40e7' : '#fff')};
`;
export const TimeLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeLineText = styled.Text`
  font-size: 8px;
  color: #999999;
  width: 60px;
  text-align: center;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fd;
  padding: 20px;
`;

export const TimeDate = styled.View``;

export const TimeTextSmall = styled.Text`
  font-size: 8px;
  color: #999999;
`;

export const TimeFormatData = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;

export const MoreButton = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
