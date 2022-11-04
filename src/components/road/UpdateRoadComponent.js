import React, { useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';
import GroundTransportService from '../../services/GroundTransportService';
import SidebarComponent from '../SidebarComponent';



function UpdateRoadComponent(props) {
    const [trackingNumber, settrackingNumber] = useState();
    const [routeID, setrouteID] = useState();
    const [co2, setCo2] = useState();
    const [vehicleID, setvehicleID] = useState();
    const [fuelCost, setfuelCost] = useState();
    const [laborCost, setlaborCost] = useState();
    const [dateShipped, setdateShipped] = useState();
    const [dateArrived, setdateArrived] = useState();
    const [bill, setbill] = useState();
    const [isAdded, setIsAdded] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);

    const handleClose = () => setIsAdded(false);

    const handleSubmit = event => {
        event.preventDefault();
        async function updateRoadData() {
            console.log(trackingNumber, routeID, co2, vehicleID,
                fuelCost, laborCost, Date(dateShipped), Date(dateArrived), bill);
            //Add Records
            try {
                const RoadData = await GroundTransportService.updateGroundTransportData(trackingNumber, routeID, parseFloat(co2), vehicleID,
                    parseFloat(fuelCost), parseFloat(laborCost), dateShipped, dateArrived, bill);
                setIsAdded(true)

            }
            catch (e) {
                alert("Error Occurred while loading!" + e)
            }
        }

        updateRoadData();
        reset();
    };

    function reset() {
        settrackingNumber("");
        setrouteID("");
        setCo2("");
        setvehicleID("");
        setfuelCost("");
        setlaborCost("");
        setdateShipped(undefined);
        setdateArrived(undefined);
        setbill("");
    }

    return (
        <>
            <CO2NavBar />
            <div className="co2container">
                <SidebarComponent value="Road" />

                <main style={{ margin: '2%' }}>
                    <div>
                        <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Update Road Transport Data</h4>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Tracking Number:</Form.Label>&nbsp;
                                <Form.Control type="text" placeholder = "Enter the Tracking Number of the vehicle you wish to update" value={trackingNumber} onChange={event => settrackingNumber(event.target.value)}></Form.Control>

                            </div>
                            <div></div>
                            <div className='col'>
                                <Form.Label>Route ID:</Form.Label>&nbsp;
                                <Form.Control type="text" placeholder = "5-Digits" value={routeID} onChange={event => setrouteID(event.target.value)}></Form.Control>

                            </div>
                            <div className='col'>
                                <Form.Label>CO2:</Form.Label>&nbsp;
                                <Form.Control type="text" placeholder = "Enter Number" value={co2} onChange={event => setCo2(event.target.value)}></Form.Control>
                            </div>
                        </div>

                        {/* ---------------------- */}

                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Vehicle ID:</Form.Label>&nbsp;
                                <Form.Control type="text" placeholder = "V000" value={vehicleID} onChange={event => setvehicleID(event.target.value)}></Form.Control>
                            </div>
                            <div className='col'>
                                <Form.Label>Fuel Cost:</Form.Label>&nbsp;
                                <Form.Control type="text" placeholder = "Enter Number" value={fuelCost} onChange={event => setfuelCost(event.target.value)}></Form.Control>
                            </div>
                        </div>

                        {/* ------------------------------- */}

                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Labor Cost:</Form.Label>&nbsp;
                                <Form.Control type="text" placeholder = "Enter Number" value={laborCost} onChange={event => setlaborCost(event.target.value)}></Form.Control>
                            </div>
                            <div className='col'>
                                <Form.Label>Date Shipped:</Form.Label>&nbsp;
                                <Form.Control type="text"  placeholder = "YYYY-MM-DD" value={dateShipped} onChange={event => setdateShipped(event.target.value)}></Form.Control>

                            </div>
                        </div>

                        {/* ------------------------------------ */}
                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Date Arrived:</Form.Label>&nbsp;
                                <Form.Control type="text"  placeholder = "YYYY-MM-DD" value={dateArrived} onChange={event => setdateArrived(event.target.value)}></Form.Control>

                            </div>
                            <div className='col'>
                                <Form.Label>Bill:</Form.Label>&nbsp;
                                <Form.Control type="text" placeholder = "Enter Number" value={bill}
                                    onChange={event => setbill(event.target.value)}>
                                </Form.Control><br />

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Button variant="success" type="submit" value="Submit"
                                    onClick={() => setIsAddClicked(true)}>Update</Button>
                            </div>
                            <br />
                            <div>
                                {
                                    isAddClicked ?
                                        isAdded ? <h3 style={{ fontSize: "20px" }}>Transportation Info Updated Successfully!!</h3>
                                            : <h3 style={{ fontSize: "20px" }}>Updating....</h3> : null
                                }
                            </div>
                        </div>
                    </Form>
                </main>
            </div>
        </>
    );
}

export default UpdateRoadComponent;