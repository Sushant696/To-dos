/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootsState } from '@/redux/store';

interface ProtectedRouteProps {
    element: React.ElementType;
    path: string
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component, path, ...rest }) => {
    const isAuthenticated = useSelector((state: RootsState) => state.auth.isAuthenticated);

    return (

        <Route
            {...rest}
            path={path}
            element={isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />}
        />

    );
};

export default ProtectedRoute;
