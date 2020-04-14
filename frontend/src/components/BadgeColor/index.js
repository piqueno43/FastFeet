import React from 'react';

import { Badge, BadgeLarger } from './styles';

export default function BadgeColor({ name = '', larger = false }) {
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

  return (
    <>
      {!larger ? (
        <>
          <Badge color={color}>{initials}</Badge>
          {name}
        </>
      ) : (
        <BadgeLarger color={color}>{initials}</BadgeLarger>
      )}
    </>
  );
}
