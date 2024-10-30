import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_JOBS_REQUEST,
  fetchJobsSuccess,
  fetchJobsFailure,
  DELETE_JOB_REQUEST,
  deleteJobSuccess,
  deleteJobFailure,
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

export function* watchJobSaga() {
  yield takeLatest(FETCH_JOBS_REQUEST, fetchJobs);
  yield takeLatest(DELETE_JOB_REQUEST, deleteJob);
}
