import axios from "axios";

const API_URL = "https://66fcc7c1c3a184a84d17f46b.mockapi.io/api/jobs/jobs";

export const getJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Thêm 
export const addJob = async (job) => {
  try {
    const response = await axios.post(API_URL, job);
    return response.data;
  } catch (error) {
    console.error('Error adding job:', error);
    throw error;
  }
};

// Sửa
export const updateJob = async (job) => {
  try {
    const response = await axios.put(`${API_URL}/${job.id}`, job);
    return response.data;
  } catch (error) {
    console.error('Error updating job:', error);
    throw error;
  }
};

// Xóa
export const deleteJob = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting job:', error);
    throw error;
  }
};