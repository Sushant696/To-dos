import { useAuthStatus } from '@/utils/auth.middleware';
import { Navigate, Outlet } from 'react-router-dom';

// Adjust the path according to your project structure

const ProtectedRoute = () => {
    const { data = {}, isLoading, error } = useAuthStatus();
    // const validUserStatus = data.;

    // the data is accessible as whole but not specific or what ?? 
    console.log(data, "data")
    console.log(data.data?.isAuthenticated, "")

    if (isLoading) {
        return <div>Please wait, verify user</div>;
    }
    if (!data.isAuthenticated) {
        console.log("user is authenticated");

        return data.data?.isAuthenticated || error ? <Outlet /> : <Navigate to="/login" /> // This is where the child routes will be rendered
    }
};

export default ProtectedRoute;