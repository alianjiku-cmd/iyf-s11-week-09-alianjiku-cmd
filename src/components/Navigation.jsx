import { NavLink, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example: clear user data here
    navigate("/"); // Redirect to home
  };

  return (
    <nav className="nav-bar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Posts
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navigation;
