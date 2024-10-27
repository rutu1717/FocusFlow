import ProfileImg from "../assets/profile-icon.png";
import Logo from "../assets/logo-color-removebg-preview.png";
import { Button } from "@mui/material";
const Navbar = ({ button }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-menu-container">
          <ul className="navbar-menu">
            <div id="home-about">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </div>
            {button && (
              <>
                <li>
                  <Button variant="contained">SignIn</Button>
                </li>
                <li>
                  <Button variant="contained">Signup</Button>
                </li>
              </>
            )}
          </ul>
          <div className="navbar-profile">
            <img
              id="profile-icon"
              src={ProfileImg}
              alt="Profile"
              className="profile-icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
