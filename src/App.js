import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"
import CO2Home from "./components/CO2Home"
import TotalCO2Component from "./components/TotalCO2Component"
import CO2BreakdownComponent from "./components/CO2BreakdownComponent"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<CO2Home />} />
          <Route path="/totalco2" element={<TotalCO2Component />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App