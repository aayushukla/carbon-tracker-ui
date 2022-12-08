import { MDBFile } from 'mdb-react-ui-kit';
import React, { useState, useRef } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import HPTService from '../../services/HPTService';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';

import SidebarComponent from '../SidebarComponent';


function UpdateHPTComponent(props) {
    const [toolType, setToolType] = useState();
    const [serialNum, setSerialNum] = useState();
    const [co2, setCo2] = useState();
    const [partsCosts, setPartsCosts] = useState();
    const [salesPrice, setSalesPrice] = useState();
    const [motorUsed, setMotorUsed] = useState();
    const [batteryUsed, setBatteryUsed] = useState();
    const [shipNumber, setShipNumber] = useState("");
    const [groundNumber, setGroundNumber] = useState("");
    const [isAdded, setIsAdded] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [show, setShow] = useState(false);
    const [drillImage, setDrillImage] = useState(false);
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


    const handleClose = () => {
        setIsAddClicked(false);
        setShow(false)
    }

    const onClick = (event) => {
        event.preventDefault();
        async function getHPTData() {
            //Add Records
            try {
                const response = await HPTService.getHornetPowerToolDataByID(serialNum);
                const hptData = await response;
                console.log("Fetched HPT Data:", hptData);
                if (hptData) {
                    hptData.map(rows => {
                        // Object.keys(rows).map(key => console.log("key",key," value", rows["toolType"]));

                        setToolType(rows["toolType"]);
                        setCo2(rows["co2"]);
                        setPartsCosts(rows["partsCost"]);
                        setSalesPrice(rows["salesPrice"]);
                        setMotorUsed(rows["motorUsed"]);
                        setBatteryUsed(rows["batteryUsed"]);
                        setShipNumber(rows["shipTrackingNumber"]);
                        setGroundNumber(rows["groundTrackingNumber"])
                        setDrillImage("hpt.jpg");


                    })

                    setShow(true);
                }
                else {
                    return (
                        <h4>No Records found</h4>
                    )
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        getHPTData();
    }

    const handleSubmit = event => {
        event.preventDefault();
        async function addHPTData() {
            console.log(toolType, serialNum, co2, partsCosts,
                salesPrice, motorUsed, batteryUsed, shipNumber, groundNumber);
            //Add Records
            try {
                const addHptData = await HPTService.addHornetPowerToolData(toolType, serialNum, parseFloat(co2), parseFloat(partsCosts),
                    parseFloat(salesPrice), motorUsed, batteryUsed, shipNumber, groundNumber)
                    .then(() => {
                        setIsAddClicked(true);
                        setIsAdded(true)
                    });

                // alert("Data added succesfully!!!");
            }
            catch (e) {
                setIsAddClicked(false);
                alert("Error Occurred while updating!!")
            }
        }
        addHPTData();
        // setIsAdded(true)   
        reset();
    };

    function reset() {
        setIsAdded(false);
        setToolType("Select tool type");
        setSerialNum("");
        setCo2("");
        setPartsCosts("");
        setSalesPrice("");
        setMotorUsed("");
        setBatteryUsed("");
        setShipNumber("");
        setGroundNumber("");
        setDrillImage("");
    }

    const handleUpload = () => {
    };

    return (
        <>
            <CO2NavBar />
            

            <div className="co2container">
                <SidebarComponent value="HPT" />

                <main style={{ margin: '2%' }}>
                <div>
                <p style={{ margin: '1%', size: "1px"}}>
                    Enter HPT Serial Number to update</p>
            </div><br></br>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value = {serialNum} placeholder="Enter Serial Number" onChange={event => setSerialNum(event.target.value)}></input>
                            &nbsp;&nbsp;
                            <Button variant="success" type="submit" value="Submit" style={{backgroundImage:"linear-gradient(130deg,#23adf3,#6304ff)"}}
                            onClick={onClick}>Find</Button>
                        </form>
                    </div>
                    <br></br>
                    {
                        show ?
                            <Form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col'>
                                        <Form.Label>Choose type of tool:</Form.Label>&nbsp;
                                        <Form.Select size="sm" value={toolType} onChange={event => setToolType(event.target.value)}>
                                            <option value="Select">Select tool type</option>
                                            <option value="Drill">Drill</option>
                                            <option value="Motor">Motor</option>
                                            <option value="Batter">Battery</option>
                                        </Form.Select>
                                    </div>
                                    <div className='col'>
                                        <Form.Label>Serial Number:</Form.Label>&nbsp;
                                        <Form.Control type="text" value={serialNum} onChange={event => setSerialNum(event.target.value)}></Form.Control>

                                    </div>
                                    <div className='col'>
                                        <Form.Label>CO2:</Form.Label>&nbsp;
                                        <Form.Control type="text" value={co2} onChange={event => setCo2(event.target.value)}></Form.Control>
                                    </div>
                                </div>

                                {/* ---------------------- */}

                                <div className='row'>
                                    <div className='col'>
                                        <Form.Label>Parts Costs:</Form.Label>&nbsp;
                                        <Form.Control type="text" value={partsCosts} onChange={event => setPartsCosts(event.target.value)}></Form.Control>
                                    </div>
                                    <div className='col'>
                                        <Form.Label>Sales Price:</Form.Label>&nbsp;
                                        <Form.Control type="text" value={salesPrice} onChange={event => setSalesPrice(event.target.value)}></Form.Control>
                                    </div>
                                </div>

                                {/* ------------------------------- */}

                                <div className='row'>
                                    <div className='col'>
                                        <Form.Label>Motor Used:</Form.Label>&nbsp;
                                        <Form.Control type="text" value={motorUsed} onChange={event => setMotorUsed(event.target.value)}></Form.Control>
                                    </div>
                                    <div className='col'>
                                        <Form.Label>Battery Used:</Form.Label>&nbsp;
                                        <Form.Control type="text" value={batteryUsed} onChange={event => setBatteryUsed(event.target.value)}></Form.Control>

                                    </div>
                                </div>

                                {/* ------------------------------------ */}
                                <div className='row'>
                                    <div className='col'>
                                        <Form.Label>Ship Tracking Number:</Form.Label>&nbsp;
                                        <Form.Control type="text" value={shipNumber} onChange={event => setShipNumber(event.target.value)}></Form.Control>

                                    </div>
                                    <div className='col'>
                                        <Form.Label>Ground Tracking Number:</Form.Label>&nbsp;
                                        <Form.Control type="text" value={groundNumber}
                                            onChange={event => setGroundNumber(event.target.value)}>
                                        </Form.Control><br />

                                    </div>
                                </div>
                                {/* <div className='row'>
                                    <div className='col'>
                                        <Form.Label>Upload Drill Image:</Form.Label>&nbsp;
                                        <MDBFile id='customFile' onChange={event => setDrillImage(event.target.value)}></MDBFile>
                                        {/* <input className="d-none" ref={inputRef} type="file" />
                                <Button variant="secondary" type="submit" value="Submit"
                                    onClick={handleUpload}>Upload</Button> 
                                    </div>

                                </div> */}
                                
                                <div className='row'>
                                    <div className='col'>
                                        <Button variant="success" type="submit" value="Submit"
                                            onClick={() => setIsAddClicked(true)}  style={{backgroundImage:"linear-gradient(130deg,#23adf3,#6304ff)"}}
                                            >Update</Button>
                                    </div>
                                    <br />
                                    <br />
                                    <div style={{ marginTop: '10px' }}>
                                        {
                                            isAddClicked ?
                                                isAdded ? <Modal show={isAddClicked} onHide={handleClose}
                                                    style={{
                                                        overlay: {
                                                            position: 'fixed',
                                                            top: '0',
                                                            left: '0',
                                                            right: '0',
                                                            bottom: '0',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                                        }
                                                    }}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Success</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>Tool got updated successfully!!!</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" style={{backgroundImage:"linear-gradient(130deg,#23adf3,#6304ff)"}}
                                                        onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                                    : <h3 style={{ fontSize: "20px" }}>Updating....</h3> : null
                                        }
                                    </div>
                                </div>
                            </Form> : null
                    }


                </main>
            </div>
        </>
    );
}

export default UpdateHPTComponent;