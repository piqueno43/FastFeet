import produce from 'immer';

const INITIAL_STATE = {
  recipient: null,
  loading: false,
  items: [],
  search: '',
  page: null,
  count: null,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/SEARCH_RECIPIENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/SEARCH_RECIPIENT_SUCCESS': {
        draft.search = action.payload.search;
        draft.items = action.payload.recipient;
        draft.count = action.payload.count;
        draft.loading = false;
        break;
      }
      case '@recipient/SEARCH_RECIPIENT_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@recipient/FETCH_RECIPIENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/FETCH_RECIPIENT_SUCCESS': {
        draft.items = action.payload.recipient;
        draft.count = action.payload.count;
        draft.loading = false;
        break;
      }
      case '@recipient/FETCH_RECIPIENT_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@recipient/CREATE_RECIPIENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/CREATE_RECIPIENT_SUCCESS': {
        draft.recipient = action.payload.recipient;
        draft.loading = false;
        break;
      }
      case '@recipient/CREATE_RECIPIENT_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@recipient/UPDATE_RECIPIENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/UPDATE_RECIPIENT_SUCCESS': {
        draft.recipient = action.payload.recipient;
        draft.loading = false;
        break;
      }
      case '@recipient/UPDATE_RECIPIENT_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
