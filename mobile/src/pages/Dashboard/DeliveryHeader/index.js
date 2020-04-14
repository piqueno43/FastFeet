import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import BadgeName from '~/components/BadgeName';

import {
  Container,
  Left,
  Avatar,
  Info,
  SmallText,
  Title,
  LogoutButton,
} from './styles';

export default function DeliveryHeader({ profile }) {
  const dispatch = useDispatch();

  const name = (name) => {
    let fullname = name.split(' ');
    let lastname = fullname.shift();
    let firstname = fullname.pop();
    return lastname + ' ' + firstname;
  };

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Left>
        {profile.avatar ? (
          <Avatar
            source={{
              uri: profile.avatar.url,
            }}
          />
        ) : (
          <BadgeName name={profile.name} />
        )}
        <Info>
          <SmallText>Bem vindo de volta,</SmallText>
          <Title>{name(profile.name)}</Title>
        </Info>
      </Left>
      <LogoutButton onPress={handleLogout}>
        <Icon name="exit-to-app" size={24} color="#E74040" />
      </LogoutButton>
    </Container>
  );
}
