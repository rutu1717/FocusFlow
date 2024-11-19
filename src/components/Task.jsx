import { Button } from "@mui/material";
import Navbar from "./Appbar";
import Dialog from "./Dialog";
import AccessAlarmSharpIcon from "@mui/icons-material/AccessAlarmSharp";
import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
export default function Task() {
  const [isSessionDialogOpen, setSessionDialogOpen] = useState(false);
  const [isAllSessionsDialogOpen, setAllSessionsDialogOpen] = useState(false);
  const [timeleft, settimeleft] = useState(25 * 60);
  const [tasktime, settasktime] = useState(0);
  const [isrunning, setisrunning] = useState(false);
  const [taskname, settaskname] =
    useState(); //()=>{
    //   const savedTaskName = sessionStorage.getItem('taskName');
    //   if(!savedTaskName){
    //     sessionStorage.setItem('taskName',taskName);
    //     return taskName;
    //   }else{
    //     return savedTaskName;
    //   }
    // });
  const [compleatesessions, setcompleatesessions] = useState(() => {
    const savedCompletesessions = sessionStorage.getItem("completesessions");
    if (savedCompletesessions === null) {
      sessionStorage.setItem("completesessions", 0);
      return 0;
    } else {
      return parseInt(savedCompletesessions);
    }
  });
  const [pomosessions, setpomosession] = useState();
  const intervalRef = useRef(null);
  const StartTimer = () => {
    if (!isrunning && timeleft) {
      setisrunning(true);
      intervalRef.current = setInterval(() => {
        settimeleft((prev) => prev - 1);
      }, 1000);
    }
  };
  const StopTimer = () => {
    clearInterval(intervalRef.current);
    setisrunning(false);
  };
  const ResetTimer = () => {
    StopTimer();
    settimeleft(25 * 60);
  };
  useEffect(() => {
    // let taskn = sessionStorage.getItem('taskName');
    // if(!taskn){
    //   sessionStorage.setItem('taskName',taskName);
    // }
    const fetchData = async () => {
      try {
        const response = await axios.get("https://focusflow-backend-production.up.railway.app/tasks");
        const tasks = response.data;
        const len = tasks.length;
        console.log(response.data[len - 1]);
        // settaskname(taskname);
        const task = response.data[len - 1];
        settaskname(task.taskname);
        settasktime(parseInt(task.tasktime));
        setpomosession((task.tasktime)/25);
      } catch (error) {
        console.log("The Error is", error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (timeleft === 0) {
      setcompleatesessions((prev) => {
        const newcompleates = prev + 1;
        sessionStorage.setItem("completesessions", newcompleates);
        return newcompleates;
      });
      setpomosession((prev) => {
        const newpomos = prev - 1;
        if (newpomos > 0) {
          setSessionDialogOpen(true);
        } else {
          setAllSessionsDialogOpen(true);
        }
        sessionStorage.setItem("pomos", newpomos);
        return newpomos;
      });
      if (pomosessions) {
        ResetTimer();
      }
    }
  }, [timeleft, pomosessions]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <Dialog
        isOpen={isSessionDialogOpen}
        isButton={false}
        onRequestClose={() => setSessionDialogOpen(false)}
        title="Hurray!! Session Completed"
        message="Congrats,You have completed a session! Take a 5 min Break and Come Back"
      />

      <Dialog
        isOpen={isAllSessionsDialogOpen}
        isButton={true}
        onRequestClose={() => setAllSessionsDialogOpen(false)}
        title="All Sessions Completed"
        message="You have completed all sessions!"
      />
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.taskName}>{taskname}</h1>
        <h2 style={styles.sessionInfo}>Sessions Remaining: {pomosessions}</h2>
        <div style={styles.timerBox}>
          <h1 style={styles.timer}>{formatTime(timeleft)}</h1>
          <AccessAlarmSharpIcon style={styles.alarmIcon} />
        </div>
        <div style={styles.buttonGroup}>
          <Button onClick={StartTimer} variant="contained">
            Start
          </Button>
          <Button onClick={StopTimer} variant="contained">
            Stop
          </Button>
          <Button onClick={ResetTimer} variant="contained">
            Reset
          </Button>
        </div>
        <h2 style={styles.completedSessions}>
          Completed Sessions: {compleatesessions}
        </h2>
        <div style={styles.brainDumpContainer}>
          <h2 style={styles.brainDumpTitle}>Brain Dump Area</h2>
          <textarea
            name="braindump"
            id="bd"
            placeholder="Log distracting thoughts here..."
            style={styles.textArea}
          ></textarea>
        </div>
      </div>
      <ToastContainer theme="dark" autoClose={3000} position="top-right" />
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    margin: "20px auto",
    padding: "40px",
    border: "2px solid #1976D2",
    borderRadius: "16px",
    backgroundColor: "#0b0127",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    fontFamily: "monospace",
    flexWrap: "wrap",
    maxHeight: "85vh",
    overflowY: "auto",
  },
  taskName: {
    color: "#C2B280",
    fontSize: "32px",
    textTransform: "uppercase",
    marginBottom: "10px",
    textAlign: "center",
    fontWeight: "600",
    wordBreak: "break-word",
    overflow: "hidden",
    maxHeight: "80px",
    lineHeight: "40px",
  },
  sessionInfo: {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#C2B280",
  },
  timerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    backgroundColor: "#0b0127",
    padding: "20px",
    borderRadius: "12px",
    border: "2px solid #1976D2",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "50%",
  },
  timer: {
    fontSize: "60px",
    color: "#1976D2",
    fontWeight: "bold",
  },
  alarmIcon: {
    fontSize: "48px",
    color: "#1976D2",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "20px",
    marginTop: "20px",
  },
  completedSessions: {
    marginTop: "30px",
    fontSize: "22px",
    color: "#C2B280",
  },
  brainDumpContainer: {
    marginTop: "68px",
    width: "30%",
    textAlign: "left",
  },
  brainDumpTitle: {
    fontSize: "23px",
    color: "#C2B280",
    textAlign: "center",
  },
  textArea: {
    width: "100%",
    height: "162px",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#0b0127",
    border: "2px solid #1976D2",
    color: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    resize: "none",
  },
};
