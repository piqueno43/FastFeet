export function searchRecipientRequest(search) {
  return {
    type: '@recipient/SEARCH_RECIPIENT_REQUEST',
    payload: { search },
  };
}
export function searchRecipientSuccess(recipient, count) {
  return {
    type: '@recipient/SEARCH_RECIPIENT_SUCCESS',
    payload: { recipient, count },
  };
}
export function searchRecipientFailure() {
  return {
    type: '@recipient/SEARCH_RECIPIENT_FAILURE',
  };
}
export function fetchRecipientRequest(page) {
  return {
    type: '@recipient/FETCH_RECIPIENT_REQUEST',
    payload: { page },
  };
}
export function fetchRecipientSuccess(recipient, count) {
  return {
    type: '@recipient/FETCH_RECIPIENT_SUCCESS',
    payload: { recipient, count },
  };
}
export function fetchRecipientFailure() {
  return {
    type: '@recipient/FETCH_RECIPIENT_FAILURE',
  };
}
export function createRecipientRequest(recipient) {
  return {
    type: '@recipient/CREATE_RECIPIENT_REQUEST',
    payload: { recipient },
  };
}
export function createRecipientSuccess(recipient) {
  return {
    type: '@recipient/CREATE_RECIPIENT_SUCCESS',
    payload: { recipient },
  };
}
export function createRecipientFailure() {
  return {
    type: '@recipient/CREATE_RECIPIENT_FAILURE',
  };
}
export function updateRecipientRequest(
  id,
  name,
  street,
  district,
  number,
  adjunct,
  state,
  city,
  zip_code
) {
  return {
    type: '@recipient/UPDATE_RECIPIENT_REQUEST',
    payload: {
      id,
      name,
      street,
      district,
      number,
      adjunct,
      state,
      city,
      zip_code,
    },
  };
}
export function updateRecipientSuccess(recipient) {
  return {
    type: '@recipient/UPDATE_RECIPIENT_SUCCESS',
    payload: { recipient },
  };
}
export function updateRecipientFailure() {
  return {
    type: '@recipient/UPDATE_RECIPIENT_FAILURE',
  };
}
export function deleteRecipientRequest(id) {
  return {
    type: '@recipient/DELETE_RECIPIENT_REQUEST',
    payload: { id },
  };
}
export function deleteRecipientSuccess() {
  return {
    type: '@recipient/DELETE_RECIPIENT_SUCCESS',
  };
}
export function deleteRecipientFailure() {
  return {
    type: '@recipient/DELETE_RECIPIENT_FAILURE',
  };
}
