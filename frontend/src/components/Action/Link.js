import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerLink } from './styles';

export default function iLink(props) {
  return (
    <ContainerLink>
      {props.children}
      <Link to={props.link}>{props.text}</Link>
    </ContainerLink>
  );
}
