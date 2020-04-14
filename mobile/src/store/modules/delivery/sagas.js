import { takeLatest, call, all, put, delay } from 'redux-saga/effects';
// import FormData from 'form-data';
import { Alert, Platform } from 'react-native';
import api from '~/services/api';
import { deliveryConfirmSuccess, deliveryConfirmFailure } from './actions';

export function* deliveryConfirm({ payload }) {
  try {
    const { deliverymanId, deliveryId, file } = payload;

    const filename = file.split(/\D/).join('');

    let data = new FormData();

    data.append('file', {
      name: `${filename}.jpg`,
      type: 'image/jpg',
      uri:
        Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
    });

    // data.append('file', {
    //   uri: file,
    //   type: 'image/*',
    //   name: `delivery-confirm_${deliveryId}_${new Date().getTime()}.jpg`,
    // });

    yield call(
      api.put,
      `deliveryman/${deliverymanId}/checkout/${deliveryId}`,
      data
    );

    // api.defaults.headers['Accept'] = 'application/json';
    // api.defaults.headers[
    //   'Content-Type'
    // ] = `multipart/form-data; boundary=${formData._boundary}`;

    yield put(deliveryConfirmSuccess());
  } catch (err) {
    Alert.alert('Falha ao confirmar entrega', 'Verifique seus dados!');
    yield put(deliveryConfirmFailure());
  }
}

export default all([
  takeLatest('@delivery/DELIVERY_CONFIRM_REQUEST', deliveryConfirm),
]);
