import { createContext } from 'react';

export const mainContext = createContext({
    menu: false,
    setMenu: () => {},
    expandedIndex: 0,
    setExpandedIndex: () => {},
    currentForm: 'login',
    setCurrentForm: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    token: null,
    setToken: () => {},
    userInfo: null,
    setUserInfo: () => {},
    login: () => {},
    logout: () => {},
    recaptchaConfirmed: false,
    isRecaptchaConfirmed: () => {},
    topbarLinks: [],
    setTopbarlinks: () => { },
    navbarLinks:[],
});
