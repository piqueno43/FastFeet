import React, { useState, useEffect, useCallback } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import Background from '~/components/Background';
import Delivery from '~/components/Delivery';

import DeliveryHeader from './DeliveryHeader';
import { Container, Title, List, Header, Links, Link, Text } from './styles';

export default function Dashboard({ navigation }) {
  const id = useSelector((state) => state.auth.id);
  const profile = useSelector((state) => state.user.profile);

  const [deliverys, setDeliverys] = useState([]);

  const [initial, setInitial] = useState('pending');

  async function loadDeliverys() {
    const response = await api.post(`deliveryman/${id}`);

    setDeliverys(response.data);
  }

  async function loadDelivered() {
    const response = await api.get(`deliveryman/${id}/${initial}`);

    setDeliverys(response.data);
  }

  useEffect(() => {
    if (initial === 'deliveries') {
      loadDelivered();
    } else {
      loadDeliverys();
    }
  }, [initial]);

  return (
    <Background>
      <DeliveryHeader profile={profile} />
      <Container>
        <Header>
          <Title>Entregas</Title>
          <Links>
            <Link onPress={() => setInitial('pending')}>
              <Text active={initial === 'pending' ? true : false}>
                Pendentes
              </Text>
            </Link>
            <Link onPress={() => setInitial('deliveries')}>
              <Text active={initial === 'deliveries' ? true : false}>
                Entregues
              </Text>
            </Link>
          </Links>
        </Header>

        <List
          data={deliverys.delivery}
          keyExtractor={(delivery) => String(delivery.id)}
          renderItem={({ item: delivery }) => (
            <Delivery delivery={delivery} navigation={navigation} />
          )}
        />
      </Container>
    </Background>
  );
}
