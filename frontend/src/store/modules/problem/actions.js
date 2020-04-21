// FETCH
export function fetchProblemRequest(page) {
  return {
    type: '@problem/FETCH_PROBLEM_REQUEST',
    payload: { page },
  };
}

export function fetchProblemSuccess(problem, count) {
  return {
    type: '@problem/FETCH_PROBLEM_SUCCESS',
    payload: { problem, count },
  };
}
export function fetchProblemFailure() {
  return {
    type: '@problem/FETCH_PROBLEM_FAILURE',
  };
}

// DELETE
export function deleteProblemRequest(id) {
  return {
    type: '@problem/DELETE_PROBLEM_REQUEST',
    payload: { id },
  };
}
export function deleteProblemSuccess() {
  return {
    type: '@problem/DELETE_PROBLEM_SUCCESS',
  };
}
export function deleteProblemFailure() {
  return {
    type: '@problem/DELETE_PROBLEM_FAILURE',
  };
}
