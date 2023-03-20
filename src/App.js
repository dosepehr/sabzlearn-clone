import { useState, useEffect } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import { routes } from './routes/routes';
import { mainContext } from './context';
import { getMe } from './services';
function App() {
    const navigate = useNavigate();
    const router = useRoutes(routes);
    // * states
    const [menu, setMenu] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [currentForm, setCurrentForm] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [userInfo, setUserInfo] = useState({});

    const login = (data, token) => {
        setToken(token);
        localStorage.setItem('userToken', token);
        setUserInfo(data);
    };
    useEffect(() => {
        const getUserInfo = async () => {
            const userToken = localStorage.getItem('userToken');
            if (userToken) {
                const { data } = await getMe(userToken);
                setUserInfo(data);
                setIsLoggedIn(true);
            } else {
                navigate('/login-register');
            }
        };
        getUserInfo();
    }, [navigate]);
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
                    login,
                }}
            >
                {router}
            </mainContext.Provider>
        </>
    );
}

export default App;
