import React, { useRef } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';

import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import { createRecipientRequest } from '~/store/modules/recipient/actions';
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

export default function RecipientCreate() {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  async function handleSubmit() {
    const recipient = formRef.current.getData();

    // console.tron.log(recipient);

    dispatch(createRecipientRequest(recipient));
  }
  return (
    <Content>
      <Form schema={schema} onSubmit={handleSubmit} ref={formRef}>
        <Header>
          <h2>Cadastro de destinatário </h2>
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
