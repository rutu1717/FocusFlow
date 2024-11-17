import { Route, Navigate } from 'react-router-dom';
export const ProtectedRoute = ({children}) => {
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? children : <Navigate to='/login'/>
};
