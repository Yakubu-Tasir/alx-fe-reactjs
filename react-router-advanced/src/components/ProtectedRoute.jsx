import { Navigate } from 'react-router-dom';

// Simple hook to simulate authentication status
const useAuth = () => {
  // In a real app, this would check a token or global state
  const loggedIn = false; // Change to true to test access
  return { isAuthenticated: loggedIn };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  // If not authenticated, redirect to the home page (or login)
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;