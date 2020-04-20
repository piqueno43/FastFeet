import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdVisibility, MdDeleteForever } from 'react-icons/md';

import {
  fetchProblemRequest,
  deleteProblemRequest,
} from '~/store/modules/problem/actions';

import ActionList from '~/components/ActionList';
import { Button } from '~/components/Action';
import Modal from '~/components/Modal';
import Pagination from '~/components/Pagination';

import { Content, Table } from '~/styles/global';

export default function Problems({ location }) {
  const page = location.search.replace('?page=', '') || 1;
  const dispatch = useDispatch();
  const problems = useSelector((state) => state.problem.items);
  const count = useSelector((state) => state.problem.count);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function loadProblem() {
      dispatch(fetchProblemRequest(page));
    }
    loadProblem();
  }, [dispatch, page]);

  const handleClickModal = () => setShowModal(!showModal);

  function handleDelete(id, name) {
    const confirm = window.confirm(
      'Tem certeza de que deseja excluir este item?'
    );

    if (confirm) {
      dispatch(deleteProblemRequest(id));
    } else {
      dispatch(fetchProblemRequest(page));
    }
  }

  function handleClickPage(page) {
    dispatch(fetchProblemRequest(page));
  }

  // return (
  //   <pre>
  //     <code>{JSON.stringify(problems, null, 2)}</code>
  //   </pre>
  // );
  return (
    <Content>
      <header>
        <h2>Problemas na entrega</h2>
      </header>
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>#{('0' + problem.delivery_id).slice(-2)}</td>
              <td>{problem.description}</td>
              <td>
                <ActionList>
                  <Button
                    color="#8E5BE8"
                    text="Visualizar"
                    onClick={handleClickModal}
                  >
                    <MdVisibility color="#8E5BE8" size={15} />
                    <Modal visible={showModal}>
                      <h6>VISUALIZAR PROBLEMA</h6> <br />
                      {problem.description}
                    </Modal>
                  </Button>
                  <Button
                    color="#DE3B3B"
                    text="Cancelar encomenda"
                    onClick={() =>
                      handleDelete(problem.id, problem.description)
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
    </Content>
  );
}
