import React, { useState, useEffect, useMemo } from 'react';
import { MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  searchDeliveryRequest,
  fetchDeliveryRequest,
  deleteDeliveryRequest,
} from '~/store/modules/delivery/actions';

import Avatar from '~/components/Avatar';
import { Link, Button } from '~/components/Action';
import ActionList from '~/components/ActionList';
import BadgeColor from '~/components/BadgeColor';
import HeaderSearch from '~/components/HeaderSearch';
import Modal from '~/components/Modal';
import Pagination from '~/components/Pagination';

import { Table, Status } from '~/styles/global';

const setStatus = (deliverie) => {
  let background = '#C1BC35';
  let text = 'PENDENTE';

  if (deliverie.start_date) {
    background = '#4D85EE';
    text = 'RETIRADA';
  }
  if (deliverie.end_date) {
    background = '#2CA42B';
    text = 'ENTREGUE';
  }
  if (deliverie.canceled_at) {
    background = '#DE3B3B';
    text = 'CANCELADA';
  }

  return { background, text };
};

export default function Dashboard({ location }) {
  const page = location.search.replace('?page=', '') || 1;
  const count = useSelector((state) => state.delivery.count);

  // const loading = useSelector((state) => state.delivery.loading);
  const delivery = useSelector((state) =>
    state.delivery.items.map((deliverie) => ({
      ...deliverie,
      statusProduct: setStatus(deliverie),
    }))
  );
  const dispatch = useDispatch();

  const [visibleModal, setShowModal] = useState(false);

  useEffect(() => {
    async function loadDelivery() {
      dispatch(fetchDeliveryRequest(page));
    }
    loadDelivery();
  }, [dispatch, page]);

  const handleClickModal = () => setShowModal(!visibleModal);

  const handleChangeSearch = (event) => {
    const { value: query } = event.target;
    if (query.length >= 2) {
      dispatch(searchDeliveryRequest(query));
    } else {
      dispatch(fetchDeliveryRequest(page));
    }
  };

  const dateFormatted = useMemo(
    () => (date) =>
      format(new Date(date), 'dd/MM/yyyy', {
        locale: pt,
      }),
    []
  );

  function handleDelete(id, product) {
    const question = window.confirm(
      `Tem certeza de que deseja excluir ${product}?`
    );
    if (question) {
      dispatch(deleteDeliveryRequest(id));
      dispatch(fetchDeliveryRequest(page));
    }
  }

  function handleClickPage(page) {
    dispatch(fetchDeliveryRequest(page));
  }

  return (
    <HeaderSearch
      title="Gerenciando encomendas"
      link="/delivery/create"
      placeholder="Buscar por encomendas"
      handleChangeSearch={handleChangeSearch}
    >
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {delivery.map((deliverie) => (
            <tr key={deliverie.id}>
              <td>#{('0' + deliverie.id).slice(-2)}</td>
              <td>{deliverie.recipient.name}</td>
              <td>
                {deliverie.deliveryman && deliverie.deliveryman.avatar ? (
                  <Avatar
                    src={deliverie.deliveryman.avatar.url}
                    name={deliverie.deliveryman.name}
                  />
                ) : (
                  <BadgeColor name={deliverie.deliveryman.name} />
                )}
              </td>
              <td>{deliverie.recipient.city}</td>
              <td>{deliverie.recipient.state}</td>
              <td>
                <Status background={deliverie.statusProduct.background}>
                  <strong>{deliverie.statusProduct.text}</strong>
                </Status>
              </td>
              <td>
                <ActionList>
                  <Button
                    color="#8E5BE8"
                    text="Visualizar"
                    onClick={handleClickModal}
                  >
                    <MdVisibility color="#8E5BE8" size={15} />
                    <Modal visible={visibleModal}>
                      <h6>Informações da encomenda</h6> <br />
                      {deliverie.recipient.street}, {deliverie.recipient.number}{' '}
                      <br />
                      {deliverie.recipient.district} -{' '}
                      {deliverie.recipient.state} <br />
                      {deliverie.recipient.zip_code}
                      <hr />
                      <h6>Datas</h6>
                      <br />
                      <strong>Retirada: </strong>
                      {deliverie.start_date
                        ? dateFormatted(deliverie.start_date)
                        : ' - '}
                      <br />
                      <strong>Entrega: </strong>
                      {deliverie.end_date
                        ? dateFormatted(deliverie.end_date)
                        : ' - '}
                      {deliverie.signature && (
                        <>
                          <hr />
                          <h6>Assinatura do destinatário</h6> <br />
                          <img
                            src={deliverie.signature.url}
                            alt={deliverie.signature.name}
                          />
                        </>
                      )}
                    </Modal>
                  </Button>
                  <Link
                    link={`/delivery/edit/${deliverie.id}`}
                    color="#4D85EE"
                    text="Editar"
                  >
                    <MdCreate color="#4D85EE" size={15} />
                  </Link>
                  <Button
                    link={false}
                    color="#DE3B3B"
                    text="Excluir"
                    onClick={() =>
                      handleDelete(deliverie.id, deliverie.product)
                    }
                  >
                    <MdDeleteForever color="#DE3B3B" size={15} />
                  </Button>
                </ActionList>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination
        handleClickPage={handleClickPage}
        currentPage={page}
        count={count}
      />
    </HeaderSearch>
  );
}
