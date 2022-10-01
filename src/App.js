import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"
import CO2Home from "./components/CO2Home"

function App() {
  return (
    <div>
          
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<CO2Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App