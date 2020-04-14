import produce from 'immer';

const INITIAL_STATE = {
  delivery: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/DELIVERY_CONFIRM_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/DELIVERY_CONFIRM_SUCCESS': {
        draft.delivery = action.payload.delivery;
        draft.loading = false;
        break;
      }
      case '@delivery/DELIVERY_CONFIRM_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
