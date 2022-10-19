import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import HPTService from '../../services/HPTService';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';


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

    const handleSubmit = event => {
        event.preventDefault();
        async function addHPTData() {
            console.log(toolType, serialNum, co2, partsCosts,
                salesPrice, motorUsed, batteryUsed, shipNumber, groundNumber);
            //Add Records
            try {
                const addHptData = await HPTService.addHornetPowerToolData(toolType, serialNum, parseFloat(co2), parseFloat(partsCosts),
                    parseFloat(salesPrice), motorUsed, batteryUsed, shipNumber, groundNumber);
                alert("Data added succesfully!!!");
            }
            catch (e) {
                alert("Error Occurred while loading!!!")
            }
        }
        addHPTData();
                
        reset();
    };

    function reset() {
        setToolType("Select tool type");
        setSerialNum("");
        setCo2("");
        setPartsCosts("");
        setSalesPrice("");
        setMotorUsed("");
        setBatteryUsed("");
        setShipNumber("");
        setGroundNumber("");
    }

    return (
        <>
            <CO2NavBar />

            <div className="container">
                <HPTSidebar />

                <main style={{ margin: '2%' }}>
                    <div>
                    <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Add Hornet Power Tool</h4>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Choose type of tool:</Form.Label>&nbsp;
                                <Form.Select size="sm" value = {toolType} onChange={event => setToolType(event.target.value)}>
                                    <option value="Drill">Select tool type</option>
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
                                <Form.Control type="text" value={groundNumber} onChange={event => setGroundNumber(event.target.value)}></Form.Control><br />

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Button variant="success" type="submit" value="Submit">Add</Button>
                            </div>
                            
                        </div>
                    </Form>
                </main>
            </div>
        </>
    );
}

export default AddHPTComponent;