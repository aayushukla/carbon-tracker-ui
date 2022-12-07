
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import MotorService from '../../services/MotorService';
import CO2NavBar from '../CO2NavBar';
import ReactDOM from 'react-dom';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SidebarComponent from '../SidebarComponent';

function ViewMotorComponent(props) {

    const [showData, setShowData] = useState(false);
    const [serialNumber, setSerialNumber] = useState("");
    const [isDataPresent, setIsDataPresent] = useState(false)
    const [records, setRecords] = useState(
        {
            id: "",
            PartNumber: "",
            serialNumber: "",
            co2: 0,
            dateManufactured: "",
            costManufactured: 0,
            salesPrice: 0
        });

    const [motorRecords, setMotorRecords] = useState();


    const handleSubmit = event => {
        event.preventDefault();

        async function getMotorData() {
            //Add Records
            console.log("serialNumber: ", serialNumber)
            try {
                if ((serialNumber === "" || serialNumber === null))
                    alert("Please enter Motor serial number");
                else {
                    const response = await MotorService.getMotorDataByID(serialNumber)
                        .then(motorData => {
                            if (motorData.length > 0) {
                                motorData.map(rows => {

                                    motorRecords.push({

                                        PartNumber: rows["PartNumber"],
                                        serialNumber: rows["serialNumber"],
                                        co2: rows["co2"],
                                        dateManufactured: rows["dateManufactured"],
                                        costManufactured: rows["costManufactured"],
                                        salesPrice: rows["salesPrice"],


                                    });
                                    console.log("created record", records)
                                    // setMotorRecords([...motorRecords, records]);
                                    setMotorRecords([...motorRecords, records]);
                                })

                                console.log("motorRecords: " + motorRecords);
                                // setMotorRecords(output);
                                setMotorRecords(motorRecords)
                                setShowData(true);
                                setIsDataPresent(true)
                            }
                            else {
                                alert("Motor data not found!");
                            }
                        })
                        .catch(e => {
                            console.log(e);
                        }
                        )
                }
            } catch (e) {

            }

        }
        getMotorData();

        setMotorRecords([])
    }

    return (
        <>
            <CO2NavBar />
            <div className="co2container">
                <SidebarComponent value="Motor" />

                <main style={{ margin: '2%' }}>
                    <div>
                        <p style={{ margin: '1%', fontSize: '18px' }}>
                            Enter  Serial Number</p>
                    </div><br></br>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Serial Number" onChange={event => setSerialNumber(event.target.value)}></input>
                        &nbsp;&nbsp;
                        <Button variant="success" type="submit" value="Submit">View</Button>
                        &nbsp;&nbsp;&nbsp; {
                            showData && isDataPresent &&
                            <Button variant="success" type="submit" value="Submit" onClick={() => { setMotorRecords([]); setShowData(false); setIsDataPresent(false) }}>Clear</Button>
                        }

                    </form>

                    {
                        showData && isDataPresent &&
                        <MDBTable align='middle'>
                            <MDBTableHead>
                                <tr>
                                    <th>Part Number</th>
                                    <th>Serial Number</th>
                                    <th>CO2</th>
                                    <th>Date Manufactured</th>
                                    <th>Cost of Manufacture</th>
                                    <th>Sales Price</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    motorRecords.map(item => {
                                        console.log("item: ", item)
                                        return (
                                            <tr>
                                                <td>{item.PartNumber}</td>
                                                <td>{item.serialNumber}</td>
                                                <td>
                                                    <MDBBadge color={item.co2 < 50 ? 'success' : 'danger'} pill>
                                                        {item.co2}
                                                    </MDBBadge>
                                                </td>
                                                <td>{item.dateManufactured}</td>
                                                <td>{item.costManufactured}</td>
                                                <td>{item.salesPrice}</td>

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

export default ViewMotorComponent;
