import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StatusBar } from 'react-native';
import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Card, TextInput, SubmitProblem } from './styles';

export default function New({ route, navigation }) {
  const { delivery } = route.params;
  const [description, setDescription] = useState('');

  async function hadleSubmitProblem() {
    try {
      await api.post(`delivery/${delivery.id}/problems`, { description });
      await navigation.goBack();
    } catch (error) {
      Alert.alert(error);
    }
  }
  return (
    <Background>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
        <Card>
          <TextInput
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            value={description}
            returnKeyType="send"
            onSubmitEditing={hadleSubmitProblem}
            onChangeText={setDescription}
          />
        </Card>
        <SubmitProblem onPress={hadleSubmitProblem}>Enviar</SubmitProblem>
      </Container>
    </Background>
  );
}
