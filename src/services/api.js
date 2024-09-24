import axios from 'axios'

const API_URL = 'http://localhost:4000/api'

export const createUser = async (userData) => {
    const response = await axios.post(`${API_URL}/user`, userData);
    return response.data;
  };

export const getUsers = async () => {
    const res = await axios.get(`${API_URL}/user`);
    return res.data;
};
