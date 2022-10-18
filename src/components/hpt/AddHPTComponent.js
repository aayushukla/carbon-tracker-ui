import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import HPTService from '../../services/HPTService';
import CO2NavBar from '../CO2NavBar';
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

    const handleSubmit = event => {
        event.preventDefault();
        async function addHPTData() {
            console.log(toolType, serialNum, co2, partsCosts,
                salesPrice, motorUsed, batteryUsed, shipNumber, groundNumber);
            //Add Records
            try {
                const addHptData = await HPTService.addHornetPowerToolData(toolType, serialNum, parseFloat(co2), parseFloat(partsCosts),
                    parseFloat(salesPrice), motorUsed, batteryUsed, shipNumber, groundNumber);
                alert("Data added succesfully!!!")
            }
            catch (e) {
                alert("Error Occurred while loading!!!")
            }
        }
        addHPTData();
    };



    return (
        <>
            <CO2NavBar />
            <div className="row">
                <div className="col" style={{ width: '5%', border: "10px" }}>
                    <SidebarComponent />
                </div>
                <div className="col" style={{ margin: '2%', float: 'left' }}>
                    <Container fluid>
                        {/* <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Hornet Power Tool</h4> */}

                        <Form onSubmit={handleSubmit}>
                            <Form.Label>Choose type of tool:</Form.Label>&nbsp;
                            <Form.Select size="sm" onChange={event => setToolType(event.target.value)}>
                                <option value="Drill">Select tool type</option>
                                <option value="Drill">Drill</option>
                                <option value="Motor">Motor</option>
                                <option value="Batter">Battery</option>
                            </Form.Select>
                            <Form.Label>Serial Number:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setSerialNum(event.target.value)}></Form.Control>

                            <Form.Label>CO2:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setCo2(event.target.value)}></Form.Control>

                            <Form.Label>Parts Costs:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setPartsCosts(event.target.value)}></Form.Control>

                            <Form.Label>Sales Price:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setSalesPrice(event.target.value)}></Form.Control>

                            <Form.Label>Motor Used:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setMotorUsed(event.target.value)}></Form.Control>

                            <Form.Label>Battery Used:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setBatteryUsed(event.target.value)}></Form.Control>

                            <Form.Label>Ship Tracking Number:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setShipNumber(event.target.value)}></Form.Control>

                            <Form.Label>Ground Tracking Number:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setGroundNumber(event.target.value)}></Form.Control><br />

                            <Button variant="success" type="submit" value="Submit">Add</Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default AddHPTComponent;