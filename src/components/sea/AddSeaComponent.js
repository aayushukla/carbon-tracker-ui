import React, { useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';
import SeaTransportService from '../../services/SeaTransportService';
import SeaSidebar from '../SeaSideBar';


function AddSeaComponent(props) {
    const [trackingNumber, settrackingNumber] = useState();
    const [routeID, setrouteID] = useState();
    const [co2, setCo2] = useState();
    const [shipID, setshipID] = useState();
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
        async function addSeaData() {
            console.log(trackingNumber, routeID, co2, shipID,
                fuelCost, laborCost, Date(dateShipped), Date(dateArrived), bill);
            //Add Records
            try {
                const addSeaData = await SeaTransportService.addSeaTransportData(trackingNumber, routeID, parseFloat(co2), shipID,
                    parseFloat(fuelCost), parseFloat(laborCost), dateShipped, dateArrived, bill);
                setIsAdded(true)

            }
            catch (e) {
                alert("Error Occurred while loading!" + e)
            }
        }
        addSeaData();
        reset();
    };

    function reset() {
        settrackingNumber("");
        setrouteID("");
        setCo2("");
        setshipID("");
        setfuelCost("");
        setlaborCost("");
        setdateShipped("");
        setdateArrived("");
        setbill("");
    }

    return (
        <>
            <CO2NavBar />
            <div className="container">
                <SeaSidebar />

                <main style={{ margin: '2%' }}>
                    <div>
                        <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Add Sea Transport Data</h4>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Tracking Number:</Form.Label>&nbsp;
                                <Form.Control type="text" value={trackingNumber} onChange={event => settrackingNumber(event.target.value)}></Form.Control>

                            </div>
                            <div className='col'>
                                <Form.Label>Route ID:</Form.Label>&nbsp;
                                <Form.Control type="text" value={routeID} onChange={event => setrouteID(event.target.value)}></Form.Control>

                            </div>
                            <div className='col'>
                                <Form.Label>CO2:</Form.Label>&nbsp;
                                <Form.Control type="text" value={co2} onChange={event => setCo2(event.target.value)}></Form.Control>
                            </div>
                        </div>

                        {/* ---------------------- */}

                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Ship ID:</Form.Label>&nbsp;
                                <Form.Control type="text" value={shipID} onChange={event => setshipID(event.target.value)}></Form.Control>
                            </div>
                            <div className='col'>
                                <Form.Label>Fuel Cost:</Form.Label>&nbsp;
                                <Form.Control type="text" value={fuelCost} onChange={event => setfuelCost(event.target.value)}></Form.Control>
                            </div>
                        </div>

                        {/* ------------------------------- */}

                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Labor Cost:</Form.Label>&nbsp;
                                <Form.Control type="text" value={laborCost} onChange={event => setlaborCost(event.target.value)}></Form.Control>
                            </div>
                            <div className='col'>
                                <Form.Label>Date Shipped:</Form.Label>&nbsp;
                                <Form.Control type="text" value={dateShipped} onChange={event => setdateShipped(event.target.value)}></Form.Control>

                            </div>
                        </div>

                        {/* ------------------------------------ */}
                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Date Arrived:</Form.Label>&nbsp;
                                <Form.Control type="text" value={dateArrived} onChange={event => setdateArrived(event.target.value)}></Form.Control>

                            </div>
                            <div className='col'>
                                <Form.Label>Bill:</Form.Label>&nbsp;
                                <Form.Control type="text" value={bill}
                                    onChange={event => setbill(event.target.value)}>
                                </Form.Control><br />

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Button variant="success" type="submit" value="Submit"
                                    onClick={() => setIsAddClicked(true)}>Add</Button>
                            </div>
                            <br />
                            <div>
                                {
                                    isAddClicked ?
                                        isAdded ? <h3 style={{ fontSize: "20px" }}>Tool got added Successfully!!</h3>
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

export default AddSeaComponent;