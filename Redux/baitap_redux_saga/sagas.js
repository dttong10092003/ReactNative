// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_JOBS_REQUEST, fetchJobsSuccess, fetchJobsFailure,
  DELETE_JOB_REQUEST, deleteJobSuccess, deleteJobFailure,
  ADD_JOB_REQUEST, addJobSuccess, addJobFailure,
  EDIT_JOB_REQUEST, editJobSuccess, editJobFailure,
} from './actions';

function* fetchJobs() {
  try {
    const response = yield call(axios.get, 'https://671341686c5f5ced6625d06c.mockapi.io/api/todo');
    yield put(fetchJobsSuccess(response.data));
  } catch (error) {
    yield put(fetchJobsFailure(error.message));
  }
}

function* deleteJob(action) {
  try {
    yield call(axios.delete, `https://671341686c5f5ced6625d06c.mockapi.io/api/todo/${action.payload}`);
    yield put(deleteJobSuccess(action.payload));
  } catch (error) {
    yield put(deleteJobFailure(error.message));
  }
}

function* addJob(action) {
  try {
    const response = yield call(axios.post, 'https://671341686c5f5ced6625d06c.mockapi.io/api/todo', action.payload);
    yield put(addJobSuccess(response.data));
  } catch (error) {
    yield put(addJobFailure(error.message));
  }
}

function* editJob(action) {
  try {
    const response = yield call(axios.put, `https://671341686c5f5ced6625d06c.mockapi.io/api/todo/${action.payload.id}`, action.payload);
    yield put(editJobSuccess(response.data));
  } catch (error) {
    yield put(editJobFailure(error.message));
  }
}

export function* watchJobSaga() {
  yield takeLatest(FETCH_JOBS_REQUEST, fetchJobs);
  yield takeLatest(DELETE_JOB_REQUEST, deleteJob);
  yield takeLatest(ADD_JOB_REQUEST, addJob);
  yield takeLatest(EDIT_JOB_REQUEST, editJob);
}
