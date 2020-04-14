import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdCreate, MdDeleteForever } from 'react-icons/md';

import {
  fetchRecipientRequest,
  searchRecipientRequest,
  deleteRecipientRequest,
} from '~/store/modules/recipient/actions';

import { Link, Button } from '~/components/Action';
import ActionList from '~/components/ActionList';
import HeaderSearch from '~/components/HeaderSearch';
import Pagination from '~/components/Pagination';

import { Table } from '~/styles/global';

export default function Recipient({ location }) {
  const page = location.search.replace('?page=', '') || 1;
  const dispatch = useDispatch();
  const recipients = useSelector((state) => state.recipient.items);
  const count = useSelector((state) => state.recipient.count);

  useEffect(() => {
    async function loadRecipient() {
      dispatch(fetchRecipientRequest(page));
    }
    loadRecipient();
  }, [dispatch, page]);

  function handleChangeSearch(event) {
    const { value: query } = event.target;

    if (query.length >= 2) {
      dispatch(searchRecipientRequest(query));
    } else {
      dispatch(fetchRecipientRequest(page));
    }
  }

  function handleDelete(id, name) {
    const confirm = window.confirm(
      `Tem certeza que deseja excluir o(a) entregador(a) " ${name} "?`
    );

    if (confirm) {
      dispatch(deleteRecipientRequest(id));
    } else {
      dispatch(fetchRecipientRequest(page));
    }
  }

  function handleClickPage(page) {
    dispatch(fetchRecipientRequest(page));
  }

  return (
    <HeaderSearch
      title="Gerenciando destinatários"
      link="/recipient/create"
      placeholder="Buscar por destinatários"
      handleChangeSearch={handleChangeSearch}
    >
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient) => (
            <tr key={recipient.id}>
              <td>#{('0' + recipient.id).slice(-2)}</td>
              <td>{recipient.name}</td>
              <td>
                {recipient.street}, {recipient.number}, {recipient.district},{' '}
                {recipient.city} - {recipient.state}
              </td>
              <td>
                <ActionList>
                  <Link
                    color="#4D85EE"
                    text="Editar"
                    link={`/recipient/edit/${recipient.id}`}
                  >
                    <MdCreate color="#4D85EE" size={15} />
                  </Link>
                  <Button
                    color="#DE3B3B"
                    text="Excluir"
                    onClick={() => handleDelete(recipient.id, recipient.name)}
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
