import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  searchDeliverySuccess,
  searchDeliveryFailure,
  fetchDeliverySuccess,
  fetchDeliveryFailure,
  createDeliverySuccess,
  createDeliveryFailure,
  updateDeliverySuccess,
  updateDeliveryFailure,
  deleteDeliverySuccess,
  deleteDeliveryFailure,
} from './actions';

export function* fetchDelivery({ payload }) {
  try {
    const { page } = payload;
    const response = yield call(api.get, 'delivery', { params: { page } });

    yield put(fetchDeliverySuccess(response.data.rows, response.data.count));
  } catch (error) {
    toast.error('Erro ao carregar entregador, confira seus dados!');
    yield put(fetchDeliveryFailure());
  }
}

export function* createDelivery({ payload }) {
  try {
    const { product, recipient_id, deliveryman_id } = payload;

    const response = yield call(api.post, 'delivery', {
      product,
      recipient_id,
      deliveryman_id,
    });

    toast.success('Encomenda criada com sucesso!');

    yield put(createDeliverySuccess(response.data));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao criar encomenda, confira seus dados!');
    yield put(createDeliveryFailure());
  }
}

export function* updateDelivery({ payload }) {
  try {
    const { id, recipient_id, deliveryman_id, product } = payload;

    const response = yield call(api.put, `delivery/${id}`, {
      recipient_id,
      deliveryman_id,
      product,
    });

    toast.success('Encomenda atualizada com sucesso!');

    yield put(updateDeliverySuccess(response.data));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao atualizar encomenda, confira seus dados!');
    yield put(updateDeliveryFailure());
  }
}

export function* deleteDelivery({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `delivery/${id}`);

    toast.success('Encomenda deletada com sucesso');

    yield put(deleteDeliverySuccess(response.data));
  } catch (error) {
    toast.error('Erro ao deletar encomenda, confira seus dados!');
    yield put(deleteDeliveryFailure());
  }
}

export function* searchDelivery({ payload }) {
  try {
    const { search } = payload;

    const response = yield call(api.get, 'delivery', { params: { q: search } });

    yield put(searchDeliverySuccess(response.data.rows, response.data.count));
  } catch (error) {
    yield put(searchDeliveryFailure());
  }
}

export default all([
  takeLatest('@delivery/FETCH_DELIVERY_REQUEST', fetchDelivery),
  takeLatest('@delivery/CREATE_DELIVERY_REQUEST', createDelivery),
  takeLatest('@delivery/UPDATE_DELIVERY_REQUEST', updateDelivery),
  takeLatest('@delivery/DELETE_DELIVERY_REQUEST', deleteDelivery),
  takeLatest('@delivery/SEARCH_DELIVERY_REQUEST', searchDelivery),
]);
