import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import HPTService from '../../services/HPTService';
import CO2NavBar from '../CO2NavBar';
import ReactDOM from 'react-dom';
import SeaSidebar from '../SeaSideBar';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SeaTransportService from '../../services/SeaTransportService';
import SidebarComponent from '../SidebarComponent';

function ViewSeaComponent(props) {

    const [showData, setShowData] = useState(false);
    const [serialNum, setSerialNum] = useState("");
    const [isDataPresent, setIsDataPresent] = useState(false)
    // const [records, setRecords] = useState([]);
    let records = {};

    const [seaRecords, setSeaRecords] = useState([]);

    // useEffect(() => {

    // }, [seaRecords]
    // )

    const handleSubmit = event => {
        event.preventDefault();
        console.log("initial sea record data: ", records)
        async function getSeaData() {
            try {
                if ((serialNum === "" || serialNum === null))
                    alert("Please enter Sea Tracking number");
                else {
                    SeaTransportService.getSeaTransportDataByID(serialNum)
                        .then(seaData => {
                            console.log("Seadata", seaData)
                            if (seaData.length > 0) {
                                seaData.map(rows => {
                                    records = {
                                        trackingNumber: rows["trackingNumber"],
                                        routeID: rows["routeID"],
                                        co2: rows["co2"],
                                        shipID: rows["shipID"],
                                        fuelCost: rows["fuelCost"],
                                        laborCost: rows["laborCost"],
                                        dateShipped: rows["dateShipped"],
                                        dateArrived: rows["dateArrived"],
                                        bill: rows["bill"]
                                    };
                                    console.log("created record", records)
                                    setSeaRecords([...seaRecords, records]);
                                })

                                
                                console.log("seaRecords: " + seaRecords);

                                setShowData(true);
                                setIsDataPresent(true)
                            } else {
                                alert("Sea Transporatation data not found!")
                            }
                        })

                        .catch(e =>
                            console.log(e)
                        )
                }
            } catch (e) {

            }

        }

        getSeaData();
        
    }

    return (
        <>
            <CO2NavBar />
            <div className="co2container">
                <SidebarComponent value="Sea" />

                <main style={{ margin: '2%' }}>
                    <div>
                        <p style={{ margin: '1%', fontSize: '18px' }}>
                            Enter Sea Tracking Number</p>
                    </div><br></br>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Tracking Number" onChange={event => setSerialNum(event.target.value)}></input>
                        &nbsp;&nbsp;
                        <Button variant="success" type="submit" value="Submit">View</Button>
                        &nbsp;&nbsp;&nbsp;
                        {
                            showData && 
                            <Button variant="success" type="submit" value="Submit" onClick={() => { setSeaRecords([]); setShowData(false) }}>Clear</Button>
                        }
                    </form>

                    {
                        showData && isDataPresent &&
                        <MDBTable align='middle'>
                            <MDBTableHead>
                                <tr>
                                    <th>Tracking Number</th>
                                    <th>Route ID</th>
                                    <th>CO2</th>
                                    <th>Ship ID</th>
                                    <th>Fuel Cost</th>
                                    <th>Labour Cost</th>
                                    <th>Date Shipped</th>
                                    <th>Date Arrived</th>
                                    <th>Bill</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    seaRecords.map(item => {
                                        console.log("item: ", item)
                                        return (
                                            <tr>

                                                <td>{item.trackingNumber}</td>
                                                <td>{item.routeID}</td>
                                                <td>
                                                    <MDBBadge color={item.co2 < 50 ? 'success' : 'danger'} pill>
                                                        {item.co2}
                                                    </MDBBadge>
                                                </td>
                                                <td>{item.shipID}</td>
                                                <td>{item.fuelCost}</td>
                                                <td>{item.laborCost}</td>
                                                <td>{item.dateShipped}</td>
                                                <td>{item.dateArrived}</td>
                                                <td>{item.bill}</td>
                                            </tr>


                                            // <tr>

                                            //     <td>121</td>
                                            //     <td>22</td>
                                            //     <td>
                                            //         <MDBBadge color={item.co2 < 50 ? 'success' : 'danger'} pill>
                                            //             121
                                            //         </MDBBadge>
                                            //     </td>
                                            //     <td>121</td>
                                            //     <td>121</td>
                                            //     <td>121</td>
                                            //     <td>2022-10-06</td>
                                            //     <td>2022-10-07</td>
                                            //     <td>121</td>
                                            // </tr>

                                        )
                                    })


                                    // <tr>
                                    //     <td>Drill</td>
                                    //     <td>55555</td>
                                    //     <td>
                                    //         <MDBBadge color='danger' pill>
                                    //             30
                                    //         </MDBBadge>
                                    //     </td>
                                    //     <td>30</td>
                                    //     <td>60</td>
                                    //     <td>12345</td>
                                    //     <td>54321</td>
                                    //     <td>99999</td>
                                    //     <td>11111</td>
                                    // </tr>
                                }
                            </MDBTableBody>
                        </MDBTable>
                    }
                </main>
            </div>
        </>
    );
}

export default ViewSeaComponent;