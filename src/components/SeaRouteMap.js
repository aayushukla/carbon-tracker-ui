// import React from "react"
// import { Col, Row } from "react-bootstrap"
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup,
//   Marker, Line
// } from "react-simple-maps"; import CO2NavBar from "./CO2NavBar"
// import SidebarComponent from "./SidebarComponent"

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

// export default function MapChart() {
//   return (
//     <>
//       <CO2NavBar />
//         <Row>
//           <Col>
//             <SidebarComponent value="Sea" />
//           </Col>
//           <Col>
//             <div className="mapcontainer">
//               <ComposableMap projection="geoMercator">
//                 <ZoomableGroup center={[0, 0]} zoom={9}>
//                   <Geographies geography={geoUrl}>
//                     {({ geographies }) =>
//                       geographies.map((geo) => (
//                         <Geography key={geo.rsmKey} geography={geo} />
//                       ))
//                     }
//                   </Geographies>
//                   <Marker coordinates={[2.3522, 48.8566]}>
//                     <circle r={5} fill="#33ddff" />
//                   </Marker>

//                   <Marker coordinates={[-74.006, 40.7128]}>
//                     <circle r={5} fill="#33ddff" />
//                   </Marker>
//                   <Line
//                     from={[2.3522, 48.8566]}
//                     to={[-74.006, 40.7128]}
//                     stroke="#FF5533"
//                     strokeWidth={4}
//                     strokeLinecap="round"
//                   />
//                 </ZoomableGroup>
//               </ComposableMap>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </>
//   )
// }


import React from "react"
import { Col, Row } from "react-bootstrap"
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker, Line
} from "react-simple-maps"; import CO2NavBar from "./CO2NavBar"
import SidebarComponent from "./SidebarComponent"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart() {
  return (
    <>
      <CO2NavBar />
      <div className="co2container">
        <SidebarComponent value="Sea" />

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
              <Marker coordinates={[2.3522, 48.8566]}>
                <circle r={5} fill="#33ddff" />
              </Marker>

              <Marker coordinates={[-74.006, 40.7128]}>
                <circle r={5} fill="#33ddff" />
              </Marker>
              <Marker coordinates={[5.3, 43.3]}>
                <circle r={5} fill="#33ddff" />
              </Marker>
              <Marker coordinates={[121.8, 31.2]}>
                <circle r={5} fill="#33ddff" />
              </Marker>
              <Line
                from={[2.3522, 48.8566]}
                to={[-74.006, 40.7128]}
                stroke="#FF5533"
                strokeWidth={4}
                strokeLinecap="round"
              />

              <Line
                from={[5.3, 43.3]}
                to={[121.8, 31.2]}
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
