import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import {
  updateDeliverymanRequest,
  fetchDeliverymanRequest,
} from '~/store/modules/deliveryman/actions';

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

export default function DeliverymanEdit({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const deliveryman = useSelector((state) =>
    state.deliveryman.items.find((uid) => uid.id === Number(id))
  );

  async function handleSubmit({ name, email, avatar_id }) {
    dispatch(updateDeliverymanRequest(id, name, email, avatar_id));
    dispatch(fetchDeliverymanRequest());
  }

  // return (
  //   <pre>
  //     <code>{JSON.stringify(deliveryman, null, 2)}</code>
  //   </pre>
  // );

  return (
    <Content>
      <Form
        initialData={deliveryman}
        schema={schema}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Header>
          <h2>Edição de entregadores</h2>
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
          <AvatarInput avatar_url={deliveryman} name="avatar_id" />
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
