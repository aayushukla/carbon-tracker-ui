import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"
import CO2Home from "./components/CO2Home"
import TotalCO2Component from "./components/TotalCO2Component"
import CO2BreakdownComponent from "./components/CO2BreakdownComponent"
import HPTComponent from "./components/HPTComponent"
import AddHPTComponent from "./components/hpt/AddHPTComponent"
import ViewHPTComponent from "./components/hpt/ViewHPTComponent"
import MotorComponent from "./components/MotorComponent"
import AddMotorComponent from "./components/motor/AddMotorComponent"
import ViewMotorComponent from "./components/motor/ViewMotorComponent"
import BatteryComponent from "./components/BatteryComponent"
import AddBatteryComponent from "./components/battery/AddBatteryComponent"
import ViewBatteryComponent from "./components/battery/ViewBatteryComponent"
import SeaRouteComponent from "./components/SeaRoute"
import RoadComponent from "./components/RoadRoute"
import RoadRouteComponent from "./components/road/ViewRoadComponent"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<CO2Home />} />
          <Route path="/totalco2" element={<TotalCO2Component />} />
          <Route path="/breakdown" element={<CO2BreakdownComponent />} />
          <Route path="/hpt" element={<HPTComponent />} />
          <Route path="/addHPT" element={<AddHPTComponent />} />
          <Route path="/viewHPT" element={<ViewHPTComponent />} />
          <Route path="/motor" element={<MotorComponent />} />
          <Route path="/addMotor" element={<AddMotorComponent />} />
          <Route path="/viewMotor" element={<ViewMotorComponent />} />
          <Route path="/battery" element={<BatteryComponent />} />
          <Route path="/addBattery" element={<AddBatteryComponent />} />
          <Route path="/viewBattery" element={<ViewBatteryComponent />} />
          <Route path="/roadRoute" element={<RoadComponent />} />
          <Route path="/viewRoad" element={<RoadRouteComponent />} />
          <Route path="/seaRoute" element={<SeaRouteComponent />} />          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App