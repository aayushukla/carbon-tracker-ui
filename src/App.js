import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react';
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
import UpdateMotorComponent from "./components/motor/UpdateMotorComponent"
import BatteryComponent from "./components/BatteryComponent"
import AddBatteryComponent from "./components/battery/AddBatteryComponent"
import ViewBatteryComponent from "./components/battery/ViewBatteryComponent"
import UpdateBatteryComponent from "./components/battery/UpdateBatteryComponent"
import SeaRouteComponent from "./components/SeaRoute"
import RoadComponent from "./components/RoadRoute"
import RoadRouteComponent from "./components/road/ViewRoadComponent"
import AddRoadComponent from "./components/road/AddRoadComponent"
import UpdateRoadComponent from "./components/road/UpdateRoadComponent"
import CO2History from "./components/CO2History"
import AssignSNComponent from "./components/hpt/AssignSNComponent"
import AddSeaComponent from "./components/sea/AddSeaComponent"
import ViewSeaComponent from "./components/sea/ViewSeaComponent"
import WorldMap from "./components/SeaRouteMap";



function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Auth setToken={setToken} />
  // }
  return (
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<CO2Home />} />
        <Route path="/totalco2" element={<TotalCO2Component />} />
        <Route path="/breakdown" element={<CO2BreakdownComponent />} />
        <Route path="/hpt" element={<HPTComponent />} />
        <Route path="/addHPT" element={<AddHPTComponent />} />
        <Route path="/viewHPT" element={<ViewHPTComponent />} />
        <Route path="/assignSN" element={<AssignSNComponent />} />
        <Route path="/motor" element={<MotorComponent />} />
        <Route path="/addMotor" element={<AddMotorComponent />} />
        <Route path="/viewMotor" element={<ViewMotorComponent />} />
        <Route path="/updateMotor" element={<UpdateMotorComponent />} />
        <Route path="/battery" element={<BatteryComponent />} />
        <Route path="/addBattery" element={<AddBatteryComponent />} />
        <Route path="/viewBattery" element={<ViewBatteryComponent />} />
        <Route path="/updateBattery" element={<UpdateBatteryComponent />} />
        <Route path="/roadRoute" element={<RoadComponent />} />
        <Route path="/updateRoad" element={<UpdateRoadComponent />} />
        <Route path="/addRoad" element={<AddRoadComponent />} />
        <Route path="/viewRoad" element={<RoadRouteComponent />} />
        <Route path="/seaRoute" element={<SeaRouteComponent />} />
        <Route path="/addSea" element={<AddSeaComponent />} />
        <Route path="/viewSea" element={<ViewSeaComponent />} />
        <Route path="/co2History" element={<CO2History />} />
        <Route path="/seamap" element={<WorldMap />} />
      </Routes>
  )
}

export default App