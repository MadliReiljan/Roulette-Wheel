import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getText = async () => {
  const response = await axios.get(`${API_URL}/text`);
  return response.data;
};

export const createText = async (text) => {
  const response = await axios.post(`${API_URL}/text`, { text });
  return response.data;
};

export const updateText = async (id, text) => {
  const response = await axios.put(`${API_URL}/text/${id}`, { text });
  return response.data;
};

export const deleteText = async (id) => {
  await axios.delete(`${API_URL}/text/${id}`);
};
