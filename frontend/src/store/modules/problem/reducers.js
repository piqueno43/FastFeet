import produce from 'immer';

const INITIAL_STATE = {
  problem: null,
  items: [],
  loading: false,
  page: null,
  count: null,
};

export default function problem(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problem/FETCH_PROBLEM_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@problem/FETCH_PROBLEM_SUCCESS': {
        draft.items = action.payload.problem;
        draft.count = action.payload.count;
        draft.loading = false;
        break;
      }
      case '@problem/FETCH_PROBLEM_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
