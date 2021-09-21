import React from 'react';
import {AuthContext} from './auth/AuthContext';
import {useAuth} from './auth/useAuth';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import ScrollToTopAuto from './components/scroll-top/ScrollToTopAuto';
import {useRoutes} from './routes';

const history = createBrowserHistory();

function App() {
    const {token, login, logout, userId, ready} = useAuth();
    const isAuthenticated = !!token;

    const routes = useRoutes(isAuthenticated);

    if (!ready) {
        return null;
    }

    return (
        <AuthContext.Provider value={{
            token,
            userId,
            login,
            logout,
            isAuthenticated
        }}>
            <Router history={history}>
                <ScrollToTopAuto />
                {routes}
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
