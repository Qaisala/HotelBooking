import React from "react"
import NavBar from "./components/NavBar"
import { useLocation } from "react-router-dom"

function App() {

  const isDashboard = useLocation().pathname.includes("dashboard")
 
  return (
    <>
     {!isDashboard && <NavBar/>}
    </>
  )
}

export default App
