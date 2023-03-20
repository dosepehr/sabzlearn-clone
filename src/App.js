import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';
import { mainContext } from './context';
function App() {
    const router = useRoutes(routes);
    // * states
    const [menu, setMenu] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [currentForm, setCurrentForm] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (data,token) => {
        setToken(token)
        localStorage.setItem('userToken', token)
        setIsLoggedIn(true)
        setUserInfo(data)
    }
    return (
        <>
            <mainContext.Provider
                value={{
                    menu,
                    setMenu,
                    expandedIndex,
                    setExpandedIndex,
                    currentForm,
                    setCurrentForm,
                    isLoggedIn,
                    setIsLoggedIn,
                    token,
                    setToken,
                    userInfo,
                    setUserInfo,
                    login
                }}
            >
                {router}
            </mainContext.Provider>
        </>
    );
}

export default App;
