import produce from 'immer';

const INITIAL_STATE = {
  delivery: null,
  deliveryman: null,
  recipient: null,
  items: [],
  loading: false,
  search: '',
  page: null,
  count: null,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/SEARCH_DELIVERY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/SEARCH_DELIVERY_SUCCESS': {
        draft.search = action.payload.search;
        draft.items = action.payload.delivery;
        draft.loading = false;
        break;
      }
      case '@delivery/SEARCH_DELIVERY_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@delivery/FETCH_DELIVERY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/FETCH_DELIVERY_SUCCESS': {
        draft.items = action.payload.delivery;
        draft.count = action.payload.count;
        draft.loading = false;
        break;
      }
      case '@deliveryman/FETCH_DELIVERYMAN_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        draft.loading = false;
        break;
      }
      case '@recipient/FETCH_RECIPIENT_SUCCESS': {
        draft.recipient = action.payload.recipient;
        draft.loading = false;
        break;
      }
      case '@delivery/FETCH_DELIVERY_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@delivery/CREATE_DELIVERY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/CREATE_DELIVERY_SUCCESS': {
        draft.delivery = action.payload.delivery;
        draft.loading = false;
        break;
      }
      case '@delivery/CREATE_DELIVERY_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@delivery/UPDATE_DELIVERY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/UPDATE_DELIVERY_SUCCESS': {
        draft.delivery = action.payload.delivery;
        draft.loading = false;
        break;
      }
      case '@delivery/UPDATE_DELIVERY_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
