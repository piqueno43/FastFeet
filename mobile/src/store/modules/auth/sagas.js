import { Alert } from 'react-native';
import { takeLatest, call, all, put, delay } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, `deliveryman/${id}`);

    const { deliveryman } = response.data;

    yield put(signInSuccess(id, deliveryman));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'verifique seus dados');
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { id } = payload.auth;

  if (id) {
    return id;
  }
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
