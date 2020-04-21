// SEARCH
export function searchDeliveryRequest(search) {
  return {
    type: '@delivery/SEARCH_DELIVERY_REQUEST',
    payload: { search },
  };
}
export function searchDeliverySuccess(delivery) {
  return {
    type: '@delivery/SEARCH_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}
export function searchDeliveryFailure() {
  return {
    type: '@delivery/SEARCH_DELIVERY_FAILURE',
  };
}
// FETCH
export function fetchDeliveryRequest(page) {
  return {
    type: '@delivery/FETCH_DELIVERY_REQUEST',
    payload: { page },
  };
}
export function fetchDeliverySuccess(delivery, count) {
  return {
    type: '@delivery/FETCH_DELIVERY_SUCCESS',
    payload: { delivery, count },
  };
}
export function fetchDeliveryFailure() {
  return {
    type: '@delivery/FETCH_DELIVERY_FAILURE',
  };
}
// CREATE
export function createDeliveryRequest(product, recipient_id, deliveryman_id) {
  return {
    type: '@delivery/CREATE_DELIVERY_REQUEST',
    payload: { product, recipient_id, deliveryman_id },
  };
}
export function createDeliverySuccess(delivery) {
  return {
    type: '@delivery/CREATE_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}
export function createDeliveryFailure() {
  return {
    type: '@delivery/CREATE_DELIVERY_FAILURE',
  };
}
// UPDATE
export function updateDeliveryRequest(
  id,
  product,
  recipient_id,
  deliveryman_id
) {
  return {
    type: '@delivery/UPDATE_DELIVERY_REQUEST',
    payload: { id, product, recipient_id, deliveryman_id },
  };
}
export function updateDeliverySuccess(delivery) {
  return {
    type: '@delivery/UPDATE_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}
export function updateDeliveryFailure() {
  return {
    type: '@delivery/UPDATE_DELIVERY_FAILURE',
  };
}
// DELETE
export function deleteDeliveryRequest(id) {
  return {
    type: '@delivery/DELETE_DELIVERY_REQUEST',
    payload: { id },
  };
}
export function deleteDeliverySuccess() {
  return {
    type: '@delivery/DELETE_DELIVERY_SUCCESS',
  };
}
export function deleteDeliveryFailure() {
  return {
    type: '@delivery/DELETE_DELIVERY_FAILURE',
  };
}
