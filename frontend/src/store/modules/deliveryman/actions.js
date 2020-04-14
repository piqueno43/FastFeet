// SEARCH
export function searchDeliverymanRequest(search) {
  return {
    type: '@deliveryman/SEARCH_DELIVERYMAN_REQUEST',
    payload: { search },
  };
}
export function searchDeliverymanSuccess(deliveryman) {
  return {
    type: '@deliveryman/SEARCH_DELIVERYMAN_SUCCESS',
    payload: { deliveryman },
  };
}
export function searchDeliverymanFailure() {
  return {
    type: '@deliveryman/SEARCH_DELIVERYMAN_FAILURE',
  };
}
// FETCH
export function fetchDeliverymanRequest(page) {
  return {
    type: '@deliveryman/FETCH_DELIVERYMAN_REQUEST',
    payload: { page },
  };
}
export function fetchDeliverymanSuccess(deliveryman, count) {
  return {
    type: '@deliveryman/FETCH_DELIVERYMAN_SUCCESS',
    payload: { deliveryman, count },
  };
}
export function fetchDeliverymanFailure() {
  return {
    type: '@deliveryman/FETCH_DELIVERYMAN_FAILURE',
  };
}
// create
export function createDeliverymanRequest(name, email, avatar_id) {
  return {
    type: '@deliveryman/CREATE_DELIVERYMAN_REQUEST',
    payload: { name, email, avatar_id },
  };
}
export function createDeliverymanSuccess(deliveryman) {
  return {
    type: '@deliveryman/CREATE_DELIVERYMAN_SUCCESS',
    payload: { deliveryman },
  };
}
export function createDeliverymanFailure() {
  return {
    type: '@deliveryman/CREATE_DELIVERYMAN_FAILURE',
  };
}
// update
export function updateDeliverymanRequest(id, name, email, avatar_id) {
  return {
    type: '@deliveryman/UPDATE_DELIVERYMAN_REQUEST',
    payload: { id, name, email, avatar_id },
  };
}
export function updateDeliverymanSuccess(deliveryman) {
  return {
    type: '@deliveryman/UPDATE_DELIVERYMAN_SUCCESS',
    payload: { deliveryman },
  };
}
export function updateDeliverymanFailure() {
  return {
    type: '@deliveryman/UPDATE_DELIVERYMAN_FAILURE',
  };
}
// delete
export function deleteDeliverymanRequest(id) {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_REQUEST',
    payload: { id },
  };
}

export function deleteDeliverymanSuccess() {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_SUCCESS',
  };
}
export function deleteDeliverymanFailure() {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_FAILURE',
  };
}
