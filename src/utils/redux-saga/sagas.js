import { call, put, takeLatest } from "redux-saga/effects";
import { API_URL } from "../constants";
function* worker() {
  try {
    const expense = yield call(fetchExpenses);
    yield put({ type: "GET_EXPENSE_SUCCESS", response: expense });
  } catch (e) {
    yield put({ type: "GET_EXPENSE_ERROR", e });
  }
}

async function fetchExpenses() {
  const response = await fetch(API_URL);
  return response.json();
}

export function* watcher() {
  yield takeLatest("GET_EXPENSE_REQUEST", worker);
}
