import React, { useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';
import SeaTransportService from '../../services/SeaTransportService';
import SeaSidebar from '../SeaSideBar';
import SidebarComponent from '../SidebarComponent';
import loader from '../gifs/gifForUpdate.gif'


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
            <div className="co2container" style={{ background: "linear-gradient(-45deg, #6304ff,#23adf3, transparent 26%), linear-gradient(135deg, #6304ff,#23adf3, transparent 27%)" }}>
                <SidebarComponent value="Sea" />

                <main style={{ marginTop: '2%', marginLeft: '7%' }}>
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
                                <Form.Control type="date" value={dateShipped} onChange={event => setdateShipped(event.target.value)}></Form.Control>

                            </div>
                        </div>

                        {/* ------------------------------------ */}
                        <div className='row'>
                            <div className='col'>
                                <Form.Label>Date Arrived:</Form.Label>&nbsp;
                                <Form.Control type="date" value={dateArrived} onChange={event => setdateArrived(event.target.value)}></Form.Control>

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
                                <Button variant="success" type="submit" value="Submit" style={{backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}}
                                    onClick={() => setIsAddClicked(true)}>Add</Button>
                            </div>
                            <br />
                            <br />
                            <div>
                                {
                                    isAddClicked ?
                                        isAdded ? 
                                        <Modal show={isAddClicked} onHide={handleClose}
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
                                            <Modal.Body>Sea Route got added successfully!!!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose} style={{backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                            : <img src={loader} alt=""/> : null
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