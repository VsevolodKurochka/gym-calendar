import {Route, Switch} from 'react-router-dom';
import NotFound from './pages/not-found';
import Home from './pages/home';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import PrivateRoute from './auth/PrivateRoute';

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/login" component={LoginPage} />} />
            <Route path="/register" component={RegisterPage} />} />
            <Route path="/" component={Home} />
            {/*<PrivateRoute path="/" component={Home} redirectPath={'/login'} exact  />*/}
            <Route path="*" component={NotFound} />
        </Switch>
    );
}