import { MDBFile } from 'mdb-react-ui-kit';
import React, { useState, useRef } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import HPTService from '../../services/HPTService';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';
import loader from '../gifs/gifForUpdate.gif'

import SidebarComponent from '../SidebarComponent';


function AddHPTComponent(props) {
    const [toolType, setToolType] = useState();
    const [serialNum, setSerialNum] = useState();
    const [co2, setCo2] = useState();
    const [partsCosts, setPartsCosts] = useState();
    const [salesPrice, setSalesPrice] = useState();
    const [motorUsed, setMotorUsed] = useState();
    const [batteryUsed, setBatteryUsed] = useState();
    const [shipNumber, setShipNumber] = useState();
    const [groundNumber, setGroundNumber] = useState();
    const [isAdded, setIsAdded] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [isError, setIsError] = useState(false);
    const [drillImage, setDrillImage] = useState();


    const handleClose = () => setIsAddClicked(false);

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

            <div className="co2container" style={{ background: "linear-gradient(-45deg, #6304ff,#23adf3, transparent 26%), linear-gradient(135deg, #6304ff,#23adf3, transparent 27%)" }}>
                <SidebarComponent value="HPT" />

                <main style={{ marginTop: '2%', marginLeft: '7%' }}>
                    <div>
                        <h4 style={{ marginTop: '0.5%', marginRight: '1%', fontWeight: 'bold', fontSize: '150%', marginBottom: '0%' }}>
                            Add Hornet Power Tool</h4>
                    </div><br />

                    <Form onSubmit={handleSubmit} style={{ marginTop: '-2%' }}>
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
                        <div className='row' style={{ marginTop: '-3%' }}>
                            <div className='col'>
                                <Form.Label>Upload Drill Image:</Form.Label>&nbsp;
                                <MDBFile id='customFile' onChange={event => setDrillImage(event.target.value)}></MDBFile>
                                {/* <input className="d-none" ref={inputRef} type="file" />
                                <Button variant="secondary" type="submit" value="Submit"
                                    onClick={handleUpload}>Upload</Button> */}
                            </div>

                        </div>
                        <br />
                        <div className='row' style={{ marginTop: '-2%' }}>
                            <div className='col'>
                                <Button variant="success" type="submit" value="Submit" style={{ backgroundImage: "linear-gradient(130deg,#23adf3,#6304ff)" }}
                                    onClick={() => setIsAddClicked(true)}>Add</Button>
                            </div>
                            {
                                isAddClicked && !isAdded && 
                                <div className='col' style={{margin: '-2%', padding: '0px'}}>
                                <img style={{padding: '0px'}} src={loader} alt="" />
                            </div>
                            }
                            <br />
                            <br />
                            <div style={{ marginTop: '10px' }}>
                                {
                                    isAddClicked &&
                                        isAdded && <Modal show={isAddClicked} onHide={handleClose}
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
                                            <Modal.Body>Tool got added successfully!!!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" style={{ backgroundImage: "linear-gradient(130deg,#23adf3,#6304ff)" }}
                                                    onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                           
                                }
                            </div>
                        </div>
                    </Form>
                </main>
            </div>
        </>
    );
}

export default AddHPTComponent;