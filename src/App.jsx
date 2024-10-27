
import { useState } from "react"
import Navbar from "./components/Appbar"
import MainContent from "./components/Header"
import Services from "./components/Services"
import Task from "./components/Task"
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
      <Route path="/" element={<><Navbar button={true}/><MainContent/></>}/>
      <Route path="/services" element={<Services getValues={getValues}/>}/>
      <Route path="/task" element={<Task taskName={taskName} taskTime={taskTime}/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
