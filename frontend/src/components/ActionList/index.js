import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, Badge, List } from './styles';

export default function ActionList({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#C6C6C6" size={20} />
      </Badge>
      <List visible={visible}>{children}</List>
    </Container>
  );
}
