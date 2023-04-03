import axios from 'axios';

const BASE_URL = 'http://localhost:4000/v1';

export const registerUser = (newUserInfo) => {
    const url = `${BASE_URL}/auth/register`;
    return axios.post(url, newUserInfo);
};
export const getMe = (token) => {
    const url = `${BASE_URL}/auth/me`;
    return axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const loginUser = (userInfo) => {
    const url = `${BASE_URL}/auth/login`;
    return axios.post(url, userInfo);
};

export const getTopbarLinks = () => {
    const url = `${BASE_URL}/menus/topbar`;
    return axios.get(url);
};
