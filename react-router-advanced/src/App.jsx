import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        
        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected and Nested Routes */}
        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes inside Profile */}
          <Route path="details" element={<div>Profile Details Section</div>} />
          <Route path="settings" element={<div>Profile Settings Section</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;