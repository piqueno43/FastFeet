import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import * as Yup from 'yup';

import AsyncSelect from '~/components/AsyncSelect';
import { Form } from '@unform/web';

import { createDeliveryRequest } from '~/store/modules/delivery/actions';

import {
  Row,
  Col,
  Content,
  Header,
  GoBackButton,
  Button,
  WrapperForm,
} from '~/styles/global';

import Input from '~/components/Input';

const schema = Yup.object().shape({
  product: Yup.string().required('O campo produto é obrigatório'),
  recipient_id: Yup.number().required('O destinatário é obrigatório'),
  deliveryman_id: Yup.number().required('O entregador é obrigatório'),
});

export default function Create() {
  const formRef = useRef(null);
  const deliverymans = useSelector((state) => state.deliveryman.items);
  const recipients = useSelector((state) => state.recipient.items);

  const dispatch = useDispatch();

  async function handleSubmit() {
    const product = formRef.current.getFieldValue('product');
    const recipient_id = formRef.current.getFieldValue('recipient_id');
    const deliveryman_id = formRef.current.getFieldValue('deliveryman_id');

    dispatch(createDeliveryRequest(product, recipient_id, deliveryman_id));
  }

  const recipientOptions = recipients.map((recipient) => ({
    value: recipient.id,
    label: recipient.name,
  }));

  const deliverymanOptions = deliverymans.map((deliveryman) => ({
    value: deliveryman.id,
    label: deliveryman.name,
  }));

  const filterRecipient = (inputValue) => {
    return recipientOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const filterDeliveryman = (inputValue) => {
    return deliverymanOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseRecipent = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterRecipient(inputValue));
      }, 1000);
    });

  const promiseDeliveryman = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterDeliveryman(inputValue));
      }, 1000);
    });

  return (
    <Content>
      <Form schema={schema} onSubmit={handleSubmit} ref={formRef}>
        <Header>
          <h2>Cadastro de entregadores</h2>
          <nav>
            <GoBackButton to="/dashboard">
              <MdKeyboardArrowLeft color="#fff" size={24} /> VOLTAR
            </GoBackButton>
            <Button type="submit">
              <MdCheck color="#fff" size={24} />
              SALVAR
            </Button>
          </nav>
        </Header>
        <WrapperForm>
          <Row>
            <Col size="50%">
              <AsyncSelect
                type="text"
                label="Destinatário"
                name="recipient_id"
                placeholder="Selecione um destinatário"
                noOptionsMessage={() => 'Nenhum destinatário encontrado'}
                cacheOptions
                defaultOptions
                loadOptions={promiseRecipent}
              />
            </Col>
            <Col size="50%">
              <AsyncSelect
                type="text"
                label="Entregador"
                name="deliveryman_id"
                placeholder="Selecione um entregador"
                noOptionsMessage={() => 'Nenhum entregador encontrado'}
                cacheOptions
                defaultOptions
                loadOptions={promiseDeliveryman}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                label="Nome do produto"
                name="product"
                placeholder="Nome do produto"
              />
            </Col>
          </Row>
        </WrapperForm>
      </Form>
    </Content>
  );
}
