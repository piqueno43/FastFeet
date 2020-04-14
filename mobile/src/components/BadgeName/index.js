import React from 'react';

import { Badge, BadgeLarger, Text, TextLarger } from './styles';

export default function BadgeName({ name, larger = false }) {
  let initials = name.match(/\b\w/g) || [];

  initials = initials = (
    (initials.shift() || '') + (initials.pop() || '')
  ).toUpperCase();

  const color = stringToColor(name);

  function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xff;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  return larger ? (
    <BadgeLarger color={color}>
      <TextLarger color={color}>{initials}</TextLarger>
    </BadgeLarger>
  ) : (
    <Badge color={color}>
      <Text color={color}>{initials}</Text>
    </Badge>
  );
}
