import React from 'react';

import { Action } from './styles';

export default function Button(props) {
  return (
    <Action {...props}>
      {props.children}
      {props.text}
    </Action>
  );
}
