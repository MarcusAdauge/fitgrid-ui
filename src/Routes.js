import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './PrivateRoute';
import { Auth } from './services';
import WorkoutCreate from './pages/WorkoutCreate';

const Routes = () => {
    return (
        <>
            <PrivateRoute path="/" exact isAuthenticated={Auth.isAuthenticated} component={Home} />
            <PrivateRoute path="/workouts" exact isAuthenticated={Auth.isAuthenticated} component={Workouts} />
            <PrivateRoute path="/workouts/new" isAuthenticated={Auth.isAuthenticated} component={WorkoutCreate} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </>
    );
};

export default Routes;