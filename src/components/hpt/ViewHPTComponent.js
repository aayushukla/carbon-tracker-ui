import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import HPTService from '../../services/HPTService';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';
import ReactDOM from 'react-dom';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function ViewHPTComponent(props) {

    const [showData, setShowData] = useState(false);
    const [serialNum, setSerialNum] = useState();
    const [records, setRecords] = useState(
        {
            id: "",
            toolType: '',
            serialNum: "",
            co2: 0,
            partsCosts: 0,
            salesPrice: 0,
            motorUsed: '',
            batteryUsed: '',
            shipNumber: "",
            groundNumber: ""
        });

    const [hptRecords, setHptRecords] = useState([]);
    const output = [];

    // useEffect(() => {
    //     async function getHPTData() {
    //         //Add Records
    //         try {
    //             const hptData = await HPTService.getHornetPowerToolData();
    //             console.log("Fetched HPT Data:", hptData);

    //             hptData.map(rows => {
    //                 // Object.keys(rows).map(key => console.log("key",key," value", rows["toolType"]));

    //                 setRecords({
    //                     toolType: rows["toolType"],
    //                     serialNum: rows["serialNumber"],
    //                     co2: rows["co2"],
    //                     partsCosts: rows["partsCost"],
    //                     salesPrice: rows["salesPrice"],
    //                     motorUsed: rows["motorUsed"],
    //                     batteryUsed: rows["batteryUsed"],
    //                     shipNumber: rows["shipTrackingNumber"],
    //                     groundNumber: rows["groundTrackingNumber"],
    //                 });
    //                 output.push(records);
    //             })

    //             console.log("hptRecords: " + hptRecords)
    //             setHptRecords(output)
    //         }
    //         catch (e) {
    //             console.log(e);
    //         }
    //     } getHPTData();
    //     // renderHPTData();
    // } , []);

    const handleSubmit = event => {
        event.preventDefault();
        // setHptRecords([])
        async function getHPTData() {
            //Add Records
            try {
                const response = await HPTService.getHornetPowerToolDataByID(serialNum);
                const hptData = await response;
                console.log("Fetched HPT Data:", hptData);
                if(hptData) {
                    console.log("hptRecords before fetching: " + hptRecords);
                hptData.map(rows => {
                    // Object.keys(rows).map(key => console.log("key",key," value", rows["toolType"]));

                    setRecords({
                        toolType: rows["toolType"],
                        serialNum: rows["serialNum"],
                        co2: rows["co2"],
                        partsCosts: rows["partsCost"],
                        salesPrice: rows["salesPrice"],
                        motorUsed: rows["motorUsed"],
                        batteryUsed: rows["batteryUsed"],
                        shipNumber: rows["shipNumber"],
                        groundNumber: rows["groundNumber"],
                    });
                    console.log("created record", records)
                    setHptRecords([...hptRecords, records]);
                })

                console.log("hptRecords: " + hptRecords);
                // setHptRecords(output);
                setShowData(true);
                }
                else {
                    return(
                        <h4>No Records found</h4>
                    )
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        getHPTData();
        // renderHPTData();
        setHptRecords([])
    }

    return (
        <>
            <CO2NavBar />
            <div className="container">
                <HPTSidebar />

                <main style={{ margin: '2%' }}>
                    <div>
                        <h4 style={{ margin: '1.5%', fontWeight: 'bold', fontSize: '18px', marginBottom: '50px' }}>
                            Enter HPT Serial Number</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter HPT Serial Number" onChange={event => setSerialNum(event.target.value)}></input>
                        &nbsp;&nbsp;
                        <Button variant="success" type="submit" value="Submit" onClick={() => setHptRecords([])}>View</Button>
                    </form>
                    {/* <div id="hptData"></div> */}
                    {
                        showData && hptRecords &&
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