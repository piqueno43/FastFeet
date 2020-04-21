import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  fetchProblemSuccess,
  fetchProblemFailure,
  deleteProblemSuccess,
  deleteProblemFailure,
} from './actions';

export function* fetchProblem({ payload }) {
  try {
    const { page } = payload;
    const response = yield call(api.get, 'delivery/problems', {
      params: { page },
    });

    yield put(fetchProblemSuccess(response.data.rows, response.data.count));
  } catch (error) {
    toast.error('Erro ao carregar problema, confira seus dados!');
    yield put(fetchProblemFailure());
  }
}

export function* deleteProblem({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `problems/${id}/cancel-delivery`);

    toast.success('Encomenda cancelada com sucesso');

    yield put(deleteProblemSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao cancelar encomenda, confira seus dados!');
    yield put(deleteProblemFailure());
  }
}

export default all([
  takeLatest('@problem/FETCH_PROBLEM_REQUEST', fetchProblem),
  takeLatest('@problem/DELETE_PROBLEM_REQUEST', deleteProblem),
]);
