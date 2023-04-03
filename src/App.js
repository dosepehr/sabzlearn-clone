import { useState, useEffect } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import { routes } from './routes/routes';
import { mainContext } from './context';
import { getMe, getTopbarLinks, getNavbarLinks } from './services';
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
    const [recaptchaConfirmed, isRecaptchaConfirmed] = useState(false);
    const [topbarLinks, setTopbarlinks] = useState([]);
    const [navbarLinks, setNavbarLinks] = useState([]);
    const login = (data, token) => {
        setIsLoggedIn(true);
        setToken(token);
        localStorage.setItem('userToken', token);
        setUserInfo(data);
    };
    const logout = () => {
        setIsLoggedIn(false);
        setToken(null);
        setUserInfo({});
        localStorage.removeItem('userToken');
        navigate('/login-register');
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
        const fetchTopbarLinks = async () => {
            const { data } = await getTopbarLinks();
            const shuffledData = [...data]
                .sort(() => 0.5 - Math.random())
                .slice(0, 5);
            setTopbarlinks(shuffledData);
        };

        getUserInfo();
        fetchTopbarLinks();
    }, [navigate]);

    useEffect(() => {
        const fetchNavbarLinks = async () => {
            const { data } = await getNavbarLinks();
            setNavbarLinks(data);
        };
        fetchNavbarLinks();
    }, []);
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
                    logout,
                    recaptchaConfirmed,
                    isRecaptchaConfirmed,
                    topbarLinks,
                    setTopbarlinks,
                    navbarLinks
                }}
            >
                {router}
            </mainContext.Provider>
        </>
    );
}

export default App;
