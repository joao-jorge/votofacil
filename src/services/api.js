import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export const createUser = async () => {
    const res = await axios.get(`${API_URL}/user`);
    return res.data;
}

