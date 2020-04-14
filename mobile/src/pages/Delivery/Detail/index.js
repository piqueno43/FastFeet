import React from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { StatusBar } from 'react-native';

import api from '~/services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCheck from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Background,
  Container,
  Content,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardDate,
  Label,
  Text,
  CardFooter,
  Button,
  LabelSmall,
  Date,
  Separator,
} from './styles';

export default function Details({ navigation, route }) {
  const id = useSelector((state) => state.auth.id);
  const { delivery } = route.params;

  async function handleCheckIn() {
    try {
      await api.put(`deliveryman/${id}/checkin/${delivery.id}`);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Atenção erro', `Não foi possível retirar o produto.`);
    }
  }

  const startDate = delivery.start_date
    ? format(parseISO(delivery.start_date), 'dd/MM/yyyy', {
        locale: pt,
      })
    : '- - / - - / - -';
  const endDate = delivery.end_date
    ? format(parseISO(delivery.end_date), 'dd/MM/yyyy', {
        locale: pt,
      })
    : '- - / - - / - -';

  const setStatus = (delivery) => {
    let text = 'Pendente';
    if (delivery.start_date) {
      text = 'Retirada';
    }
    if (delivery.end_date) {
      text = 'Entregue';
    }
    if (delivery.canceled_at) {
      text = 'Cancelada';
    }
    return <Text>{text}</Text>;
  };

  return (
    <Background>
      <Container>
        <Content>
          <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
          <Card>
            <CardHeader>
              <Icon name="local-shipping" size={24} color="#7D40E7" />
              <CardTitle>Informações da entrega</CardTitle>
            </CardHeader>
            <CardBody>
              <Label>DESTINATÁRIO</Label>
              <Text>{delivery.recipient.city}</Text>
              <Label>ENDEREÇO DE ENTREGA</Label>
              <Text>
                {delivery.recipient.street}, {delivery.recipient.number}
                {delivery.recipient.adjunct}, {delivery.recipient.district} -{' '}
                {delivery.recipient.state}, {delivery.recipient.zip_code}
              </Text>
              <Label>PRODUTO</Label>
              <Text>{delivery.product}</Text>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Icon name="event" size={24} color="#7D40E7" />
              <CardTitle>Situação da entrega</CardTitle>
            </CardHeader>
            <CardBody>
              <Label>Situação da entrega</Label>
              {setStatus(delivery)}
              <CardDate>
                <Date>
                  <Label>DATA DE RETIRADA</Label>
                  <Text>{startDate}</Text>
                </Date>
                <Date>
                  <Label>DATA DE ENTREGA</Label>
                  <Text>{endDate}</Text>
                </Date>
              </CardDate>
            </CardBody>
          </Card>
          <Card>
            <CardFooter>
              <Button
                onPress={() => navigation.navigate('ProblemNew', { delivery })}
              >
                <Icon name="highlight-off" size={24} color="#E74040" />
                <LabelSmall>Informar Problema</LabelSmall>
              </Button>
              <Separator />
              <Button
                onPress={() =>
                  navigation.navigate('ProblemDetails', { delivery })
                }
              >
                <Icon name="info-outline" size={24} color="#E7BA40" />
                <LabelSmall>Visualizar Problema</LabelSmall>
              </Button>
              <Separator />
              {delivery.start_date === null ? (
                <Button onPress={handleCheckIn}>
                  <Icon name="schedule" size={24} color="#4D85EE" />
                  <LabelSmall>Retirar produto</LabelSmall>
                </Button>
              ) : (
                <Button
                  onPress={() =>
                    navigation.navigate('DeliveryConfirm', { delivery })
                  }
                >
                  <IconCheck
                    name="check-circle-outline"
                    size={24}
                    color="#7d40e7"
                  />
                  <LabelSmall>Confirmar Entrega</LabelSmall>
                </Button>
              )}
            </CardFooter>
          </Card>
        </Content>
      </Container>
    </Background>
  );
}
