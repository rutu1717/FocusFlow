
import { useState } from "react"
import Navbar from "./components/Appbar"
import MainContent from "./components/Header"
import { ProtectedRoute } from "./components/Protected"
import Services from "./components/Services"
import Task from "./components/Task"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  const [taskName,settaskName]=useState("");
  const [taskTime,settaskTime]=useState();
  const getValues = (taskName, taskTime) => {
    settaskName(taskName);
    settaskTime(taskTime);
  };
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<ProtectedRoute><Navbar/><MainContent/></ProtectedRoute>}/>
      <Route path="/services" element={<ProtectedRoute><Services getValues={getValues}/></ProtectedRoute>}/>
      <Route path="/task" element={<ProtectedRoute><Task taskName={taskName} taskTime={taskTime}/></ProtectedRoute>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
