import React, { useMemo } from 'react';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Status,
  Title,
  Line,
  Header,
  Circle,
  TimeLine,
  TimeLineText,
  Info,
  TimeDate,
  TimeTextSmall,
  TimeFormatData,
  MoreButton,
} from './styles';

export default function Delivery({ navigation, delivery }) {
  const dateFormatted = useMemo(
    () => (date) =>
      format(new Date(date), 'dd/MM/yyyy', {
        locale: pt,
      }),
    []
  );

  return (
    <Container>
      <Status>
        <Header>
          <Icon name="local-shipping" size={20} color="#7D40E7" />
          <Title>{delivery.product}</Title>
        </Header>
        <Line>
          <Circle active={true} />
          <Circle active={delivery.start_date ? true : false} />
          <Circle active={delivery.end_date ? true : false} />
        </Line>
        <TimeLine>
          <TimeLineText>Aguardando Retirada</TimeLineText>
          <TimeLineText>Retirada</TimeLineText>
          <TimeLineText>Entregue</TimeLineText>
        </TimeLine>
      </Status>
      <Info>
        <TimeDate>
          <TimeTextSmall>Data</TimeTextSmall>
          <TimeFormatData>{dateFormatted(delivery.createdAt)}</TimeFormatData>
        </TimeDate>
        <TimeDate>
          <TimeTextSmall>Cidade</TimeTextSmall>
          <TimeFormatData>{delivery.recipient.city}</TimeFormatData>
        </TimeDate>
        <MoreButton
          onPress={() => {
            navigation.navigate('DeliveryDetail', { delivery });
          }}
        >
          Ver detalhes
        </MoreButton>
      </Info>
    </Container>
  );
}
