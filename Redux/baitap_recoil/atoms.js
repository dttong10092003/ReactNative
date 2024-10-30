// atoms.js
import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';

const API_URL = 'https://671341686c5f5ced6625d06c.mockapi.io/api/todo';

// Atom lưu trữ danh sách công việc
export const jobsState = atom({
  key: 'jobsState',
  default: [],
});

// Atom lưu trạng thái tải
export const loadingState = atom({
  key: 'loadingState',
  default: false,
});

// Atom lưu trạng thái lỗi
export const errorState = atom({
  key: 'errorState',
  default: null,
});

// Selector tải công việc từ API và cập nhật jobsState
export const fetchJobsSelector = selector({
  key: 'fetchJobsSelector',
  get: async ({ get }) => {
    get(loadingState); // Đảm bảo trạng thái tải đã được kích hoạt
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

// Selector để thêm công việc
export const addJobSelector = selectorFamily({
  key: 'addJobSelector',
  get: () => async ({ set }, newJob) => {
    const response = await axios.post(API_URL, newJob);
    set(jobsState, (prevJobs) => [...prevJobs, response.data]);
  },
});

// Selector để sửa công việc
export const editJobSelector = selectorFamily({
  key: 'editJobSelector',
  get: () => async ({ set }, job) => {
    const response = await axios.put(`${API_URL}/${job.id}`, job);
    set(jobsState, (prevJobs) =>
      prevJobs.map((j) => (j.id === job.id ? response.data : j))
    );
  },
});

// Selector để xóa công việc
export const deleteJobSelector = selectorFamily({
  key: 'deleteJobSelector',
  get: () => async ({ set }, id) => {
    await axios.delete(`${API_URL}/${id}`);
    set(jobsState, (prevJobs) => prevJobs.filter((job) => job.id !== id));
  },
});
