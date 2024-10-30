// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsFailure,
  deleteJobRequest,
  deleteJobSuccess,
  deleteJobFailure,
  addJobRequest,
  addJobSuccess,
  addJobFailure,
  editJobRequest,
  editJobSuccess,
  editJobFailure,
} from './jobSlice';

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
  yield takeLatest(fetchJobsRequest.type, fetchJobs);
  yield takeLatest(deleteJobRequest.type, deleteJob);
  yield takeLatest(addJobRequest.type, addJob);
  yield takeLatest(editJobRequest.type, editJob);
}
