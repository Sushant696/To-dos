/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootsState } from '@/redux/store';

interface ProtectedRouteProps {
    element: React.ReactElement;
    path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, path }) => {
    const isAuthenticated = useSelector((state: RootsState) => state.auth.isAuthenticated);

    return (
        <Route
            path={path}
            element={isAuthenticated ? element : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;
