export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const DELETE_JOB_REQUEST = 'DELETE_JOB_REQUEST';
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE';

export const fetchJobsRequest = () => ({ type: FETCH_JOBS_REQUEST });
export const fetchJobsSuccess = (jobs) => ({ type: FETCH_JOBS_SUCCESS, payload: jobs });
export const fetchJobsFailure = (error) => ({ type: FETCH_JOBS_FAILURE, payload: error });

export const deleteJobRequest = (id) => ({ type: DELETE_JOB_REQUEST, payload: id });
export const deleteJobSuccess = (id) => ({ type: DELETE_JOB_SUCCESS, payload: id });
export const deleteJobFailure = (error) => ({ type: DELETE_JOB_FAILURE, payload: error });
