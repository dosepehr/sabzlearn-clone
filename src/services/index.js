import axios from 'axios';

const BASE_URL = 'http://localhost:4000/v1';

export const registerUser = (newUserInfo) => {
    const url = `${BASE_URL}/auth/register`;
    return axios.post(url, newUserInfo);
};
