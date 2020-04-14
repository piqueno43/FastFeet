import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  fetchDeliverymanSuccess,
  fetchDeliverymanFailure,
  createDeliverymanSuccess,
  createDeliverymanFailure,
  updateDeliverymanSuccess,
  updateDeliverymanFailure,
  deleteDeliverymanSuccess,
  deleteDeliverymanFailure,
  searchDeliverymanSuccess,
  searchDeliverymanFailure,
} from './actions';

export function* fetchDeliveryman({ payload }) {
  try {
    const { page, search } = payload;
    const response = yield call(api.get, 'deliveryman', {
      params: { page, q: search },
    });

    yield put(fetchDeliverymanSuccess(response.data.rows, response.data.count));
  } catch (error) {
    toast.error('Erro ao carregar entregador, confira seus dados!');
    yield put(fetchDeliverymanFailure());
  }
}

export function* createDeliveryman({ payload }) {
  try {
    const { name, email, avatar_id } = payload;

    const response = yield call(api.post, 'deliveryman', {
      name,
      email,
      avatar_id,
    });

    toast.success('Entregador criado com sucesso!');

    yield put(createDeliverymanSuccess(response.data));

    history.push('/deliveryman');
  } catch (error) {
    toast.error('Erro ao criar entregador, confira seus dados!');
    yield put(createDeliverymanFailure());
  }
}

export function* updateDeliveryman({ payload }) {
  try {
    const { id, name, email, avatar_id } = payload;

    const response = yield call(api.put, `deliveryman/${id}`, {
      name,
      email,
      avatar_id,
    });

    toast.success('Dados do entregador atualizados com sucesso');

    yield put(updateDeliverymanSuccess(response.data));

    history.push('/deliveryman');
  } catch (error) {
    toast.error('Erro ao editar entregador, confira seus dados!');
    yield put(updateDeliverymanFailure());
  }
}
export function* deleteDeliveryman({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `deliveryman/${id}`);

    toast.success('Entregador deletado com sucesso');

    yield put(deleteDeliverymanSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao deletar entregador, confira seus dados!');
    yield put(deleteDeliverymanFailure());
  }
}

export function* searchDeliveryman({ payload }) {
  try {
    const { search } = payload;

    const response = yield call(api.get, 'deliveryman', {
      params: { q: search },
    });

    yield put(
      searchDeliverymanSuccess(response.data.rows, response.data.count)
    );
  } catch (error) {
    yield put(searchDeliverymanFailure());
  }
}

export default all([
  takeLatest('@deliveryman/FETCH_DELIVERYMAN_REQUEST', fetchDeliveryman),
  takeLatest('@deliveryman/CREATE_DELIVERYMAN_REQUEST', createDeliveryman),
  takeLatest('@deliveryman/UPDATE_DELIVERYMAN_REQUEST', updateDeliveryman),
  takeLatest('@deliveryman/DELETE_DELIVERYMAN_REQUEST', deleteDeliveryman),
  takeLatest('@deliveryman/SEARCH_DELIVERYMAN_REQUEST', searchDeliveryman),
]);
