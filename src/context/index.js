import { createContext } from 'react';

export const mainContext = createContext({
    menu: false,
    setMenu: () => {},
    expandedIndex: 0,
    setExpandedIndex: () => {},
    currentForm: 'login',
    setCurrentForm: () => {},
});
