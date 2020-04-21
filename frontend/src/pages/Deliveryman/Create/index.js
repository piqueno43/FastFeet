import React from 'react';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createDeliverymanRequest } from '~/store/modules/deliveryman/actions';

import Input from '~/components/Input';
import {
  Row,
  Col,
  Content,
  Header,
  GoBackButton,
  Button,
  WrapperForm,
} from '~/styles/global';

import AvatarInput from '../AvatarInput';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
});

export default function DeliverymanCreate() {
  const dispatch = useDispatch();

  async function handleSubmit({ name, email, avatar_id }) {
    dispatch(createDeliverymanRequest(name, email, avatar_id));
  }

  return (
    <Content>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header>
          <h2>Cadastro de encomendas</h2>
          <nav>
            <GoBackButton to="/deliveryman">
              <MdKeyboardArrowLeft color="#fff" size={24} /> VOLTAR
            </GoBackButton>
            <Button type="submit">
              <MdCheck color="#fff" size={24} />
              SALVAR
            </Button>
          </nav>
        </Header>
        <WrapperForm>
          <AvatarInput name="avatar_id" />
          <Row>
            <Col>
              <label htmlFor="deliveryManName">
                Nome
                <Input
                  name="name"
                  id="deliveryManName"
                  placeholder="Nome do entregador"
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="deliveryManEmail">
                Email
                <Input
                  type="email"
                  name="email"
                  id="deliveryManEmail"
                  placeholder="E-mail do entregador"
                />
              </label>
            </Col>
          </Row>
        </WrapperForm>
      </Form>
    </Content>
  );
}
