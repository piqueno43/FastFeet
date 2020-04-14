import React from 'react';

import { Container, AvatarImg } from './styles';

export default function Avatar({ src, name }) {
  return (
    <Container>
      <AvatarImg src={src} alt={name} />
      <span>{name}</span>
    </Container>
  );
}
