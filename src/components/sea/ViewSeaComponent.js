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
    const [serialNum, setSerialNum] = useState();
    const [records, setRecords] = useState(
        {
            trackingNumber: "",
            routeID: "",
            co2: 0,
            shipID: "",
            fuelCost: 0,
            laborCost: 0,
            dateShipped: '',
            dateArrived: '',
            bill: ""
        });

    const [seaRecords, setSeaRecords] = useState([]);
    const output = [];

    const handleSubmit = event => {
        event.preventDefault();
        async function getSeaData() {
            try {
                const response = await SeaTransportService.getSeaTransportDataByID(serialNum);
                const seaData = await response;
      

                    seaData.map(rows => {
                        // Object.keys(rows).map(key => console.log("key",key," value", rows["toolType"]));

                        setRecords({
                            trackingNumber: "",
                            routeID: "",
                            co2: 0,
                            shipID: "",
                            fuelCost: 0,
                            laborCost: 0,
                            dateShipped: '',
                            dateArrived: '',
                            bill: ""
                        });
                        console.log("created record", records)
                        setSeaRecords([...seaRecords, records]);
                    })

                    console.log("seaRecords: " + seaRecords);
                    // setHptRecords(output);
                    setShowData(true);
                
               
                    return (
                        <h4>No Records found</h4>
                    )
                
            }
            catch (e) {
                console.log(e);
            }
        }
        getSeaData();
        // renderHPTData();
        setSeaRecords([])
    }


    // function renderSeaData() {
    //     const seaTransportationDataId = document.getElementById('seaTransportationData');
    //     ReactDOM.render(
    //         <MDBTable align='middle'>
    //             <MDBTableHead>
    //                 <tr>
    //                     <th>Tracking Number</th>
    //                     <th>Route ID</th>
    //                     <th>CO2</th>
    //                     <th>Ship ID</th>
    //                     <th>Fuel Cost</th>
    //                     <th>Labour Cost</th> 
    //                     <th>Shipped Date</th> 
    //                     <th>Arrived Date</th> 
    //                     <th>Bill</th> 
    //                 </tr>
    //             </MDBTableHead>
    //             <MDBTableBody>
    //                 {
    //                     seaRecords.map(item => {
    //                         console.log("item: ", item.trackingNumber)
    //                         return (
    //                             <tr>
    //                                 <td>{item.trackingNumber}</td>
    //                                 <td>{item.serialNumber}</td>
    //                                 <td>
    //                                     <MDBBadge color={item.co2 < 10 ? 'success' : 'danger'} pill>
    //                                         {item.co2}
    //                                     </MDBBadge>
    //                                 </td>
    //                                 <td>{item.dateManufactured}</td>
    //                                 <td>{item.costManufactured}</td>
    //                                 <td>{item.salesCost}</td>
    //                             </tr>
    //                         )
    //                     })
    //                 }
    //             </MDBTableBody>
    //         </MDBTable>, motorDataId
    //     )
    // }
    




    return (
        <>
            <CO2NavBar />
            <div className="co2container">
                <SidebarComponent value="Sea" />

                <main style={{ margin: '2%' }}>
                    <div>
                        <h4 style={{ margin: '1.5%', fontWeight: 'bold', fontSize: '18px', marginBottom: '50px' }}>
                            Enter Sea Transport Serial Number</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Sea Transport Serial Number" onChange={event => setSerialNum(event.target.value)}></input>
                        &nbsp;&nbsp;
                        <Button variant="success" type="submit" value="Submit" >View</Button>
                    </form>
                    {/* <div id="hptData"></div> */}
                    {
                        showData && seaRecords &&
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