export function deliveryConfirmRequest(deliverymanId, deliveryId, file) {
  return {
    type: '@delivery/DELIVERY_CONFIRM_REQUEST',
    payload: { deliverymanId, deliveryId, file },
  };
}

export function deliveryConfirmSuccess(delivery) {
  return {
    type: '@delivery/DELIVERY_CONFIRM_SUCCESS',
    payload: { delivery },
  };
}

export function deliveryConfirmFailure() {
  return {
    type: '@delivery/DELIVERY_CONFIRM_FAILURE',
  };
}
