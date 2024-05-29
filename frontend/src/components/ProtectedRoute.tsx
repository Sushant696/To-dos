
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootsState } from '@/redux/store';

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state: RootsState) => state.auth.isAuthenticated);
    
    console.log(isAuthenticated, "isauth")

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
