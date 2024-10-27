import focusedImg from "../assets/hemlo.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StudentAnimation from "./StudentAnimation.jsx";

export default function MainContent() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/services");
  };
  return (
    <div className="main-div">
      <div className="text-container">
        <div className="inner-text">
          <div className="header-target" style={{display:'flex', flexDirection:'column', gap:'0'}}>
            <h1 id="title">FocusFlow</h1>
            <h1 style={{fontFamily:'monospace', marginLeft:'10px', color:'#1976D2', marginBottom:'0px'}}> #GetThingsDone</h1>
          </div>
          <div className="p-button">
            <p>
              Welcome to <b>FocusFlow</b>,<br />
              <b>Focusflow</b> Helps Improve your focus and keeps you Organized 
              It Comes with lot of options like Setting tasks,Pomodoro Session,
              and Chekcking Overall Platform Progress. <br />
              Focusflow helps Individuals with ADHD Disease and helps them Improve their Life.
              <br />
            </p>
            <Button
              onClick={handleOnClick}
              id="btn-explore"
              variant="contained"
            >
             Tap to Explore
            </Button>
          </div>
        </div>
      </div>
        <StudentAnimation/>
    </div>
  );
}
