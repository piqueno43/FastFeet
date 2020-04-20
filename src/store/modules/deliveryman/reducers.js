import produce from 'immer';

const INITIAL_STATE = {
  deliveryman: null,
  items: [],
  loading: false,
  search: '',
  page: null,
  count: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/SEARCH_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/SEARCH_DELIVERYMAN_SUCCESS': {
        draft.search = action.payload.search;
        draft.items = action.payload.deliveryman;
        draft.loading = false;
        break;
      }
      case '@deliveryman/SEARCH_DELIVERYMAN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@deliveryman/FETCH_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/FETCH_DELIVERYMAN_SUCCESS': {
        draft.items = action.payload.deliveryman;
        draft.count = action.payload.count;
        draft.loading = false;
        break;
      }
      case '@deliveryman/FETCH_DELIVERYMAN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@deliveryman/CREATE_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/CREATE_DELIVERYMAN_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        draft.loading = false;
        break;
      }
      case '@deliveryman/CREATE_DELIVERYMAN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@deliveryman/UPDATE_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/UPDATE_DELIVERYMAN_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        draft.loading = false;
        break;
      }
      case '@deliveryman/UPDATE_DELIVERYMAN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
