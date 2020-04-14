import React, { useState, useEffect, useMemo } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';

import {
  Container,
  Title,
  Card,
  Detail,
  Description,
  Date,
  Text,
} from './styles';

export default function ProblemDetails({ route }) {
  const { delivery } = route.params;
  const [problems, setProblems] = useState([]);
  const isFocused = useIsFocused();

  const dateFormatted = useMemo(
    () => (date) =>
      format(parseISO(date), 'dd/MM/yyyy', {
        locale: pt,
      }),
    []
  );

  async function loadProblems() {
    const resolve = await api.get(`delivery/${delivery.id}/problems`);
    setProblems(resolve.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadProblems();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
        <Title>{delivery.product}</Title>
        {problems.length === 0 && (
          <Card>
            <Detail>
              <Text>Nenhum problema registrado</Text>
            </Detail>
          </Card>
        )}
        {problems.map((problem) => (
          <Card key={problem.id}>
            <Detail>
              <Description>{problem.description}</Description>
              <Date>{dateFormatted(problem.createdAt)}</Date>
            </Detail>
          </Card>
        ))}
      </Container>
    </Background>
  );
}
