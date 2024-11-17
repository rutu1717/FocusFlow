import ProfileImg from "../assets/profile-icon.png";
import Logo from "../assets/logo-color-removebg-preview.png";
import {useNavigate} from 'react-router-dom'
import { Button } from "@mui/material";
const Navbar = () => {
  const history = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    history('/login');
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-menu-container">
          <ul className="navbar-menu">
            <>
              <li>
                <Button onClick={handleLogout} variant="outlined" color="primary">
                  Log Out
                </Button>
              </li>
            </>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
