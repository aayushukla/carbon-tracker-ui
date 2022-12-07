import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import HPTService from '../../services/HPTService';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';
import ReactDOM from 'react-dom';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SidebarComponent from '../SidebarComponent';

function ViewHPTComponent(props) {

    const [showData, setShowData] = useState(false);
    const [serialNum, setSerialNum] = useState("");
    // let showData = false;
    // let isDataPresent = false;
    const [isDataPresent, setIsDataPresent] = useState(false)
    // const [records, setRecords] = useState(
    //     {
    //         id: "",
    //         toolType: '',
    //         serialNum: "",
    //         co2: 0,
    //         partsCosts: 0,
    //         salesPrice: 0,
    //         motorUsed: '',
    //         batteryUsed: '',
    //         shipNumber: "",
    //         groundNumber: ""
    //     });

    let records = {};

    const [hptRecords, setHptRecords] = useState([]);

    const handleSubmit = event => {
        // setHptRecords([])
        event.preventDefault();
        // setHptRecords([])
        console.log("hpt records on click view: ", hptRecords)
        async function getHPTData() {
            //Add Records
            console.log("Serial number entered: ",serialNum)
            try {
                if ((serialNum === "" || serialNum === null))
                    alert("Please enter HPT serial number");
                else {
                    const response = await HPTService.getHornetPowerToolDataByID(serialNum)
                        .then(hptData => {

                            console.log("hptdata records: ", hptData.length)
                            if (hptData.length > 0) {
                                hptData.map(rows => {
                                    // Object.keys(rows).map(key => console.log("key",key," value", rows["toolType"]));

                                    records = {
                                        toolType: rows["toolType"],
                                        serialNum: rows["serialNumber"],
                                        co2: rows["co2"],
                                        partsCosts: rows["partsCost"],
                                        salesPrice: rows["salesPrice"],
                                        motorUsed: rows["motorUsed"],
                                        batteryUsed: rows["batteryUsed"],
                                        shipNumber: rows["shipTrackingNumber"],
                                        groundNumber: rows["groundTrackingNumber"],
                                    };
                                    console.log("created record", records)
                                    setHptRecords([...hptRecords, records]);
                                })
                                

                                console.log("hptRecords: ", hptRecords);
                                setShowData(true);
                                setIsDataPresent(true)
                            }
                            else {
                                alert("HPT data not found!")
                            }
                        })

                        .catch(e =>
                            console.log(e)
                        )
                }

            } catch (e) {
                console.log(e);
            }}
            getHPTData();
            setHptRecords([])
        }

        return (
            <>
                <CO2NavBar />
                <div className="co2container">
                    <SidebarComponent value="HPT" />

                    <main style={{ margin: '2%' }}>
                        <div>
                            <p style={{ margin: '1%', fontSize: '18px' }}>
                                Enter HPT Serial Number</p>
                        </div><br></br>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Enter HPT Serial Number" onChange={event => setSerialNum(event.target.value)}></input>
                            &nbsp;&nbsp;
                            <Button variant="success" type="submit" value="Submit">View</Button>
                            &nbsp;&nbsp;&nbsp;
                            {
                                showData && isDataPresent &&
                                <Button variant="success" type="submit" value="Submit" onClick={() => {setHptRecords([]); setShowData(false)}}>Clear</Button>
                            }
                            
                        </form>
                        {/* <div id="hptData"></div> */}
                        {console.log("showData & isDataPresent: ", showData, isDataPresent)}
                        {
                            showData && isDataPresent &&
                            <MDBTable align='middle'>
                                <MDBTableHead>
                                    <tr>
                                        <th>Tool Type</th>
                                        <th>Serial Number</th>
                                        <th>CO2</th>
                                        <th>Parts Cost</th>
                                        <th>Sales Price</th>
                                        <th>Motor Used</th>
                                        <th>Battery Used</th>
                                        <th>Ship Tracking Number</th>
                                        <th>Ground Tracking Number</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {console.log("iterate over hptrecords: ", hptRecords)}
                                    {

                                        hptRecords.map(item => {
                                            console.log("item: ", item)
                                            return (
                                                <tr>
                                                    <td>{item.toolType}</td>
                                                    <td>{item.serialNum}</td>
                                                    <td>
                                                        <MDBBadge color={item.co2 < 50 ? 'success' : 'danger'} pill>
                                                            {item.co2}
                                                        </MDBBadge>
                                                    </td>
                                                    <td>{item.partsCost}</td>
                                                    <td>{item.salesPrice}</td>
                                                    <td>{item.motorUsed}</td>
                                                    <td>{item.batteryUsed}</td>
                                                    <td>{item.shipNumber}</td>
                                                    <td>{item.groundNumber}</td>
                                                </tr>
                                            )
                                        })
                                        
                                        // <tr>
                                        //             <td>Drill</td>
                                        //             <td>55555</td>
                                        //             <td>
                                        //                 <MDBBadge color='danger' pill>
                                        //                     30
                                        //                 </MDBBadge>
                                        //             </td>
                                        //             <td>30</td>
                                        //             <td>60</td>
                                        //             <td>12345</td>
                                        //             <td>54321</td>
                                        //             <td>99999</td>
                                        //             <td>11111</td>
                                        //         </tr>
                                    }
                                </MDBTableBody>
                            </MDBTable>
                        }
                    </main>
                </div>
            </>
        );
    }

    export default ViewHPTComponent;