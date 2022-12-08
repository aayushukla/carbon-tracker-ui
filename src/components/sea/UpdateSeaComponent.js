import { MDBFile } from 'mdb-react-ui-kit';
import React, { useState, useRef } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import SeaTransportService from '../../services/SeaTransportService';
import CO2NavBar from '../CO2NavBar';
import loader from '../gifs/gifForUpdate.gif'


import SidebarComponent from '../SidebarComponent';


function UpdateSeaComponent(props) {
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
    const [show, setShow] = useState(false);
   


    const handleClose = () => {
        setIsAddClicked(false);
        setShow(false)
    }

    const onClick = (event) => {
        event.preventDefault();
        async function getSeaData() {
            //Add Records
            try {
                const response = await SeaTransportService.getSeaTransportDataByID(trackingNumber);
                const seaData = await response;
                console.log("Fetched Sea Data:", seaData);
                if (seaData) {
                    seaData.map(rows => {

                        settrackingNumber(rows["trackingNumber"]);
                        setrouteID(rows["routeID"]);
                        setCo2(rows["co2"]);
                        setshipID(rows["shipID"]);
                        setfuelCost(rows["fuelCost"]);
                        setlaborCost(rows["laborCost"]);
                        setdateShipped(rows["dateShipped"]);
                        setdateArrived(rows["dateArrived"]);
                        setbill(rows["bill"]);


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
        getSeaData();
    }

    const handleSubmit = event => {
        event.preventDefault();
        async function addSeaData() {

            //Add Records
            try {
                const addHptData = await SeaTransportService.addSeaTransportData(trackingNumber, routeID, parseFloat(co2), shipID,
                    parseFloat(fuelCost), parseFloat(laborCost), dateShipped, dateArrived, bill)
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
        addSeaData();
        // setIsAdded(true)   
        reset();
    };

    function reset() {
        setIsAdded(false);
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

    const handleUpload = () => {
    };

    return (
        <>
            <CO2NavBar />


            <div className="co2container" style={{ background: "linear-gradient(-45deg, #6304ff,#23adf3, transparent 26%), linear-gradient(135deg, #6304ff,#23adf3, transparent 27%)" }}>
                <SidebarComponent value="Sea" />

                <main style={{ marginTop: '2%', marginLeft: '7%' }}>
                    <div>
                        <p style={{ margin: '1%', size: "1px" }}>
                            Enter Sea Transport Serial Number</p>
                    </div><br></br>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={trackingNumber} placeholder="Enter Serial Number" onChange={event => settrackingNumber(event.target.value)}></input>
                            &nbsp;&nbsp;
                            <Button variant="success" type="submit" value="Submit" style={{backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}}
                            onClick={onClick}>View</Button>
                        </form>
                    </div>
                    <br></br>
                    {
                        show ?
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
                                    onClick={() => setIsAddClicked(true)}>Update</Button>
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
                                            <Modal.Body>Sea Route data got updated successfully!!!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose} style={{backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                            : <img src={loader} alt=""/>: null
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

export default UpdateSeaComponent;