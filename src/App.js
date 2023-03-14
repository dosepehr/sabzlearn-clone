import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';
import { mainContext } from './context';
function App() {
    const [menu, setMenu] = useState(false);
    const router = useRoutes(routes);
    return (
        <>
            <mainContext.Provider
                value={{
                    menu,
                    setMenu,
                }}
            >
                {router}
            </mainContext.Provider>
        </>
    );
}

export default App;

