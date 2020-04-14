import React, { useMemo } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { signOut } from '~/store/modules/auth/actions';
import Background from '~/components/Background';
import Badge from '~/components/BadgeName';

import { Container, Avatar, Info, Label, Name, LogoutButton } from './styles';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const dateFormatted = useMemo(
    () => (date) =>
      format(new Date(date), 'dd/MM/yyyy', {
        locale: pt,
      }),
    []
  );

  function handleLogout() {
    dispatch(signOut());
  }

  if (!profile) {
    navigation.navigate('SignIn');
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        {profile?.avatar ? (
          <Avatar
            source={{ uri: 'https://api.adorable.io/avatar/140/edivado.png' }}
          />
        ) : (
          <Badge name={profile.name} larger={true} />
        )}
        <Info>
          <Label>Nome completo</Label>
          <Name>{profile.name}</Name>
        </Info>
        <Info>
          <Label>Email</Label>
          <Name>{profile.email}</Name>
        </Info>
        <Info>
          <Label>Data de cadastro</Label>
          <Name>{dateFormatted(profile.createdAt)}</Name>
        </Info>
        <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
      </Container>
    </Background>
  );
}
