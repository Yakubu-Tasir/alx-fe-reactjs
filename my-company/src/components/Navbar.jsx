import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      padding: "10px",
      backgroundColor: "navy",
      color: "white",
      display: "flex",
      justifyContent: "space-around"
    }}>
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/about" style={{ color: "white" }}>About</Link>
      <Link to="/services" style={{ color: "white" }}>Services</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
      <Link to="/Navbar" style={{color: "white"}}>Navbar</Link>
    </nav>
  );
}

export default Navbar;
