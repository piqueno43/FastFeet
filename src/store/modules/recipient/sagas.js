import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  fetchRecipientSuccess,
  fetchRecipientFailure,
  searchRecipientSuccess,
  searchRecipientFailure,
  createRecipientSuccess,
  createRecipientFailure,
  updateRecipientSuccess,
  updateRecipientFailure,
  deleteRecipientSuccess,
  deleteRecipientFailure,
} from './actions';

export function* fetchRecipient({ payload }) {
  try {
    const { page } = payload;

    const response = yield call(api.get, 'recipient', {
      params: { page: page },
    });

    yield put(fetchRecipientSuccess(response.data.rows, response.data.count));
  } catch (error) {
    toast.error('Erro ao carregar destinatários!');

    yield put(fetchRecipientFailure());
  }
}

export function* createRecipient({ payload }) {
  try {
    const { recipient } = payload;

    const response = yield call(api.post, 'recipient', recipient);

    toast.success('Destinatário criado com sucesso!');

    yield put(createRecipientSuccess(response.data));

    history.push('/recipient');
  } catch (error) {
    toast.error('Erro ao criar destinatário, confira seus dados!');

    yield put(createRecipientFailure());
  }
}
export function* searchRecipient({ payload }) {
  try {
    const { search } = payload;

    const response = yield call(api.get, 'recipient', {
      params: { q: search },
    });

    yield put(searchRecipientSuccess(response.data.rows, response.data.count));
  } catch (error) {
    yield put(searchRecipientFailure());
  }
}

export function* updateRecipient({ payload }) {
  try {
    const {
      id,
      name,
      street,
      district,
      number,
      adjunct,
      state,
      city,
      zip_code,
    } = payload;

    const response = yield call(api.put, `recipient/${id}`, {
      name,
      street,
      district,
      number,
      adjunct,
      state,
      city,
      zip_code,
    });

    toast.success('Dados do destinatário atualizados com sucesso');

    yield put(updateRecipientSuccess(response.data));

    history.push('/recipient');
  } catch (error) {
    toast.error('Erro ao editar detinatário, confira seus dados!');
    yield put(updateRecipientFailure());
  }
}

export function* deleteRecipient({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `recipient/${id}`);

    toast.success('Destinatário deletado com sucesso');

    yield put(deleteRecipientSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao deletar destinatário, confira seus dados!');
    yield put(deleteRecipientFailure());
  }
}

export default all([
  takeLatest('@recipient/FETCH_RECIPIENT_REQUEST', fetchRecipient),
  takeLatest('@recipient/SEARCH_RECIPIENT_REQUEST', searchRecipient),
  takeLatest('@recipient/CREATE_RECIPIENT_REQUEST', createRecipient),
  takeLatest('@recipient/UPDATE_RECIPIENT_REQUEST', updateRecipient),
  takeLatest('@recipient/DELETE_RECIPIENT_REQUEST', deleteRecipient),
]);
