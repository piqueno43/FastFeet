import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import AsyncSelect from '~/components/AsyncSelect';

import {
  updateDeliveryRequest,
  fetchDeliveryRequest,
} from '~/store/modules/delivery/actions';

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

const schema = Yup.object().shape({
  product: Yup.string().required('O campo produto é obrigatório'),
  recipient_id: Yup.number().required('O destinatário é obrigatório'),
  deliveryman_id: Yup.number().required('O entregador é obrigatório'),
});

export default function Edit({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);
  // const [initialData, setInitialData] = useState({});
  const dispatch = useDispatch();
  const recipients = useSelector((state) => state.recipient.items);
  const deliverymans = useSelector((state) => state.deliveryman.items);

  const delivery = useSelector((state) =>
    state.delivery.items.find((did) => did.id === Number(id))
  );

  async function handleSubmit({ product, recipient_id, deliveryman_id }) {
    dispatch(updateDeliveryRequest(id, product, recipient_id, deliveryman_id));
    dispatch(fetchDeliveryRequest());
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

  const initialData = {
    product: delivery.product,
    deliveryman_id: {
      label: delivery.deliveryman.name,
      value: delivery.deliveryman_id,
    },
    recipient_id: {
      label: delivery.recipient.name,
      value: delivery.recipient_id,
    },
  };

  return (
    <Content>
      <Form
        initialData={initialData}
        schema={schema}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Header>
          <h2>Cadastro de entregadores</h2>
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
