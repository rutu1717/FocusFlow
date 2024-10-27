import Navbar from "./Appbar";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./vintage-toast.css";
import "react-toastify/dist/ReactToastify.css";
export default function Services({ getValues }) {
  const taskName = useRef();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ taskName: "", taskTime: "" });
  const taskTime = useRef();
  const ValidateInput = (taskname, tasktime) => {
    const newerrors = { taskName: "", taskTime: "" };
    if (!taskname) {
      newerrors.taskName = "Please Enter a Taskname";
      toast.error("Please Enter a TaskName");
    } else if (taskname.length < 3 || taskname.length > 35) {
      newerrors.taskName =
        "The task name should be between 3 and 35 characters";
      toast.error("The task name should be between 3 and 35 characters");
    } else if (!/^[a-zA-Z\s-]+$/.test(taskname)) {
      newerrors.taskName =
        "The task name should only contain letter ,spaces and dashes";
      toast.error("The task name should only contain letter,spaces and dashes");
    }
    if (!tasktime) {
      newerrors.taskTime = "Please Enter a TaskTime";
      toast.error("Please Enter a TaskTime");
    } else if (tasktime < 25 || tasktime > 600) {
      newerrors.taskTime = "Enter a Time between 25 and 600";
      toast.error("Enter a Time between 25 and 600");
    }
    setErrors(newerrors);
    return Object.values(newerrors).every((error) => error === "");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      ValidateInput(taskName.current.value, parseInt(taskTime.current.value))
    ) {
      toast.success("Task Added Successfully");
      getValues(taskName.current.value, parseInt(taskTime.current.value));
      setTimeout(()=>{
        navigate('/task');
      },2000)
     
    }
  };
  return (
    <div>
      <Navbar button={false} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "monospace",
            fontSize: "60px",
            color: "#1976D2",
          }}
        >
          Start Doing a Task...
        </h1>
        <form
          style={{
            background: "#0b0127",
            borderRadius: "15px",
            padding: "30px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
            border: "1px solid #1976D2",
            color: "white",
            margin: "auto",
            height: "250px",
            width: "500px",
            marginTop: "50px",
            fontFamily: "monospace",
          }}
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="taskname"
            style={{ display: "block", marginBottom: "10px", fontSize: "18px" }}
          >
            Enter Task Name:
          </label>
          <input
            type="text"
            placeholder="Task name..."
            ref={taskName}
            style={{
              width: "100%",
              padding: "12px 15px",
              borderRadius: "8px",
              color: "white",
              fontWeight:"bold",
              fontFamily:"monospace",
              backgroundColor: "#0b0127",
              border: "1px solid white",
              marginBottom: "20px",
              outline: "none",
              boxSizing: "border-box", // Ensures padding is included in the width
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #1976D2")}
          />

          <label
            htmlFor="pomodorosession"
            style={{ display: "block", marginBottom: "10px", fontSize: "18px" }}
          >
            Enter How Much Time Will It Take:
          </label>
          <input
            type="number"
            placeholder="Time in minutes..."
            step="25"
            ref={taskTime}
            style={{
              width: "100%",
              padding: "12px 15px",
              borderRadius: "8px",
              color: "white",
              
              fontFamily:"monospace",
              fontWeight:"bold",
              backgroundColor: "#0b0127",
              border: "1px solid white",
              marginBottom: "20px",
              outline: "none",
              boxSizing: "border-box",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #1976D2")}
          />

          <button
            type="submit"
            style={{
              background: "#1976D2",
              border: "none",
              borderRadius: "8px",
              color: "white",
              padding: "12px 20px",
              cursor: "pointer",
              width: "100%",
              fontSize: "18px",
              transition: "0.3s",
            }}
          >
            Do Task
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </div>
  );
}
