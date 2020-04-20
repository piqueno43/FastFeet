import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdCreate, MdDeleteForever } from 'react-icons/md';

import {
  fetchDeliverymanRequest,
  deleteDeliverymanRequest,
  searchDeliverymanRequest,
} from '~/store/modules/deliveryman/actions';

import { Link, Button } from '~/components/Action';
import Avatar from '~/components/Avatar';
import ActionList from '~/components/ActionList';
import BadgeColor from '~/components/BadgeColor';
import HeaderSearch from '~/components/HeaderSearch';
import Pagination from '~/components/Pagination';

import { Table } from '~/styles/global';

export default function Deliveryman({ location }) {
  const page = location.search.replace('?page=', '') || 1;
  const dispatch = useDispatch();
  const deliverymans = useSelector((state) => state.deliveryman.items);
  const count = useSelector((state) => state.deliveryman.count);

  useEffect(() => {
    async function loadDeliveryman() {
      dispatch(fetchDeliverymanRequest(page));
    }
    loadDeliveryman();
  }, [dispatch, page]);

  function handleChangeSearch(event) {
    const { value: query } = event.target;
    if (query.length >= 3) {
      dispatch(searchDeliverymanRequest(query));
    } else {
      dispatch(fetchDeliverymanRequest(page));
    }
  }

  function handleDelete(id, name) {
    const confirm = window.confirm(
      `Tem certeza que deseja excluir o(a) entregador(a) " ${name} "?`
    );
    if (confirm) {
      dispatch(deleteDeliverymanRequest(id));
    }
  }

  function handleClickPage(page) {
    dispatch(fetchDeliverymanRequest(page));
  }

  return (
    <HeaderSearch
      title="Gerenciando entregadores"
      link="/deliveryman/create"
      placeholder="Buscar entregadores"
      handleChangeSearch={handleChangeSearch}
    >
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymans.map((deliveryman) => (
            <tr key={deliveryman.id}>
              <td>#{('0' + deliveryman.id).slice(-2)}</td>
              <td>
                {deliveryman.avatar ? (
                  <Avatar
                    src={deliveryman.avatar.url}
                    name={deliveryman.name}
                  />
                ) : (
                  <BadgeColor name={deliveryman.name} />
                )}
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <ActionList>
                  <Link
                    color="#4D85EE"
                    text="Editar"
                    link={`/deliveryman/edit/${deliveryman.id}`}
                  >
                    <MdCreate color="#4D85EE" size={15} />
                  </Link>
                  <Button
                    color="#DE3B3B"
                    text="Excluir"
                    onClick={() =>
                      handleDelete(deliveryman.id, deliveryman.name)
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
