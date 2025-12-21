import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> | {" "}
        <Link to="settings">Profile Settings</Link>
      </nav>
      {/* Outlet is where the nested components (Details/Settings) will render */}
      <Outlet />
    </div>
  );
};

export default Profile;