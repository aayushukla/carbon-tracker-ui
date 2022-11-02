import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CO2NavBar from '../CO2NavBar';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import GroundTransportService from '../../services/GroundTransportService';
import {Button} from 'react-bootstrap';
import SidebarComponent from '../SidebarComponent';



function RoadRouteComponent(props) {

  const [showData, setShowData] = useState(false);
  const [trackingNum, setTrackingNum] = useState();
  const [records, setRecords] = useState(
  
    {
        trackingNumber: "",
        vehicleId: "",
        co2: 0,
        routeID: "",
        fuelCost: 0,
        laborCost: 0
    });

  const [roadRecords, setRoadRecords] = useState([]);
  const output = [];

  const handleSubmit = event => {
    event.preventDefault();
    async function getRoadTransport() {
      try {
      //Add Records
        const roadData = await GroundTransportService.getGroundTransportDataByID(trackingNum);
        console.log("what im returning", roadData);

        roadData.map(rows => {

            setRecords({
                trackingNumber: rows["trackingNumber"],
                vehicleID:  rows["vehicleID"],
                co2:        rows["co2"],
                routeId:    rows["routeId"],
                fuelCost:   rows["fuelCost"],
                laborCost:  rows["laborCost"],
            });
            console.log("created record", records)
            setRoadRecords([...roadRecords, records]);
        })
        
        console.log("roadRecords: " + roadRecords);
        setShowData(true);
      }
      catch (e) {
        console.log(e);
      }
    }
    getRoadTransport();

    setRoadRecords([])
  }

  
  function renderRoadData() {
        const roadDataId = document.getElementById('roadData');
        ReactDOM.render(
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th>Tracking Number</th>
                        <th>Vehicle ID</th>
                        <th>CO2</th>
                        <th>Route ID</th>
                        <th>Fuel Cost</th>
                        <th>Labor Cost</th> 
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        roadRecords.map(item => {
                            console.log("item: ", item.trackingNumber)
                            return (
                                <tr>
                                    <td>{item.trackingNumber}</td>
                                    <td>{item.vehicleID}</td>
                                    <td>
                                        <MDBBadge color={item.co2 < 10 ? 'success' : 'danger'} pill>
                                            {item.co2}
                                        </MDBBadge>
                                    </td>
                                    <td>{item.routeId}</td>
                                    <td>{item.fuelCost}</td>
                                    <td>{item.laborCost}</td>
                                </tr>
                            )
                        })
                    }
                </MDBTableBody>
            </MDBTable>, roadDataId
        )
    }
    

  return (
   <>
            <CO2NavBar />
            <div className="co2container">
            <SidebarComponent value="Road" />

                <main style={{ margin: '2%' }}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Tracking Number" onChange={event => setTrackingNum(event.target.value)}></input>
                        &nbsp;&nbsp;
                        <Button variant="success" type="submit" value="Submit">View</Button>
                    </form>
                    {/* <div id="hptData"></div> */}
                    {
                        showData &&
                        <MDBTable align='middle'>
                            <MDBTableHead>
                                <tr>
                                    <th>Tracking Number</th>
                                    <th>Vehicle ID</th>
                                    <th>CO2</th>
                                    <th>Route Id</th>
                                    <th>Fuel Cost</th>
                                    <th>Labor Cost</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    roadRecords.map(item => {
                                        console.log("item: ", item)
                                        return (
                                            <tr>
                                                <td>{item.trackingNumber}</td>
                                                <td>{item.vehicleID}</td>
                                                <td>
                                                    <MDBBadge color={item.co2 < 50 ? 'success' : 'danger'} pill>
                                                        {item.co2}
                                                    </MDBBadge>
                                                </td>
                                                <td>{item.routeId}</td>
                                                <td>{item.fuelCost}</td>
                                                <td>{item.laborCost}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </MDBTableBody>
                        </MDBTable>
                    }
                </main>
            </div>
        </>
    );
}

export default RoadRouteComponent;