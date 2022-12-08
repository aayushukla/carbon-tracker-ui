import React from "react"
import { Col, Row } from "react-bootstrap"
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker, Line
} from "react-simple-maps"; import CO2NavBar from "../CO2NavBar"
import SidebarComponent from "../SidebarComponent"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart() {
  return (
    <>
      <CO2NavBar />
      <div className="co2container" style={{ background: "linear-gradient(-45deg, #6304ff,#23adf3, transparent 26%), linear-gradient(135deg, #6304ff,#23adf3, transparent 27%)" }}>
        <SidebarComponent value="Road" />

        <main style={{ margin: '4%' }}>
          <ComposableMap projection="geoMercator" className="mapcontainer">
            <ZoomableGroup center={[0, 0]} zoom={1}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
              <Marker coordinates={[-119.35, 39.8566]}>
                <circle r={5} fill="#33ddff" />
              </Marker>

              <Marker coordinates={[-80.006, 40.7128]}>
                <circle r={5} fill="#33ddff" />
              </Marker>
              <Marker coordinates={[9.3, 48.3]}>
                <circle r={5} fill="#33ddff" />
              </Marker>
              <Marker coordinates={[100.8, 31.2]}>
                <circle r={5} fill="#33ddff" />
              </Marker>
              <Line
                from={[-119.35, 39.8566]}
                to={[-80.006, 40.7128]}
                stroke="#FF5533"
                strokeWidth={4}
                strokeLinecap="round"
              />

              <Line
                from={[9.3, 48.3]}
                to={[100.8, 31.2]}
                stroke="#FF5533"
                strokeWidth={4}
                strokeLinecap="round"
              />
            </ZoomableGroup>
          </ComposableMap>
        </main>
      </div>







    </>
  )
}
