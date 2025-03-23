import { useAuthStatus } from '@/utils/auth.middleware';
import { Navigate, Outlet } from 'react-router-dom';

// Adjust the path according to your project structure

const ProtectedRoute = () => {
    const { data = {}, isLoading } = useAuthStatus();
    const authStatus = data?.data?.isAuthenticated;


    if (!authStatus) {
        console.log(data?.message)
    }


    if (isLoading) {
        return <div>Please wait, verify user</div>;
    }

    else {
        return authStatus ? <Outlet /> : <Navigate to="/login" /> // This is where the child routes will be rendered
    }
};

export default ProtectedRoute;