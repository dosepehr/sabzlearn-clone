import { createContext } from 'react';

export const mainContext = createContext({
    menu: false,
    setMenu: () => {},
    expandedIndex: null,
    setExpandedIndex: () => {},
});
