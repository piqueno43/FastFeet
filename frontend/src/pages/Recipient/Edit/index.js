import React, { useRef } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';

import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import { updateRecipientRequest } from '~/store/modules/recipient/actions';
import {
  Content,
  Row,
  Col,
  Header,
  Button,
  GoBackButton,
  WrapperForm,
} from '~/styles/global';

import Input from '~/components/Input';

const schema = Yup.object().shape({
  name: Yup.string().required('O campo nome obrigatório'),
  street: Yup.string().required('O campo Rua é obrigatório'),
  city: Yup.string().required('O campo Cidade é obrigatório'),
});

export default function RecipientEdit({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();

  const recipients = useSelector((state) =>
    state.recipient.items.find((r) => r.id === Number(id))
  );

  const formRef = useRef(null);

  async function handleSubmit({
    name,
    street,
    district,
    number,
    adjunct,
    state,
    city,
    zip_code,
  }) {
    dispatch(
      updateRecipientRequest(
        id,
        name,
        street,
        district,
        number,
        adjunct,
        state,
        city,
        zip_code
      )
    );
  }
  // return (
  //   <pre>
  //     <code>{JSON.stringify(recipients, null, 2)}</code>
  //   </pre>
  // );
  return (
    <Content>
      <Form
        initialData={recipients}
        schema={schema}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Header>
          <h2>Edição de destinatário</h2>
          <nav>
            <GoBackButton to="/recipient" color="#CCCCCC">
              <MdKeyboardArrowLeft color="#fff" size={24} /> VOLTAR
            </GoBackButton>
            <Button type="submit">
              <MdCheck color="#fff" size={24} /> SALVAR
            </Button>
          </nav>
        </Header>
        <WrapperForm>
          <Row>
            <Col>
              <Input name="name" label="Nome" placeholder="Nome completo" />
            </Col>
          </Row>
          <Row>
            <Col size="30%">
              <Input name="street" label="Rua" placeholder="Rua" />
            </Col>
            <Col size="30%">
              <Input name="district" label="Bairro" placeholder="Bairro" />
            </Col>
            <Col size="20%">
              <Input name="number" label="Número" placeholder="Nome completo" />
            </Col>
            <Col size="20%">
              <Input
                name="adjunct"
                label="Complemento"
                placeholder="Complemento"
              />
            </Col>
          </Row>
          <Row>
            <Col size="33.33%">
              <Input name="city" label="Cidade" placeholder="Cidade" />
            </Col>
            <Col size="33.33%">
              <Input name="state" label="Estado" placeholder="Estado " />
            </Col>
            <Col size="33.33%">
              <Input name="zip_code" label="CEP" placeholder="00.000-000" />
            </Col>
          </Row>
        </WrapperForm>
      </Form>
    </Content>
  );
}
