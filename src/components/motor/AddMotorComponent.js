import React, { useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import MotorService from '../../services/MotorService';
import CO2NavBar from '../CO2NavBar';
import SidebarComponent from '../SidebarComponent';
import { MDBFile } from 'mdb-react-ui-kit';




function AddMotorComponent(props) {
    const [PartNumber, setPartNumber] = useState();
    const [serialNumber, setSerialNumber] = useState();
    const [co2, setCo2] = useState();
    const [dateManufactured, setDateManufactured] = useState();
    const [costManufactured, setCostManufactured] = useState();
    const [salesPrice, setSalesPrice] = useState();
    const [isAdded, setIsAdded] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [isError, setIsError] = useState(false);
    //const [drillImage, setDrillImage] = useState();

    const handleClose = () => setIsAddClicked(false);

    
    const handleSubmit = event => {
        event.preventDefault();
        async function addMOTORData() {
            console.log(PartNumber, serialNumber, co2, dateManufactured, costManufactured,
                salesPrice);
            //Add Records
            try {
                const addMotor1Data = await MotorService.addMotorData(PartNumber, serialNumber, parseFloat(co2), dateManufactured ,parseFloat(costManufactured),
                    parseFloat(salesPrice))
                     .then(() => { setIsAddClicked(true);
                        setIsAdded(true) });
               
              // alert("Data added succesfully!!!")
            }
            catch (e) {
                 setIsAddClicked(false);
                alert("Error Occurred while loading!!!" + e)
            }
        }
        addMOTORData();
        // setIsAdded(true)
          reset();
    };

     function reset() {
        setIsAdded(false);
        setPartNumber("");
        setSerialNumber("");
        setCo2("");
        setDateManufactured("");
        setCostManufactured("");
        setSalesPrice("");
    }

    return (                                  
        <>
            <CO2NavBar />
               <div className="co2container">
               <SidebarComponent value="Motor"/>
                

                <main style={{ margin: '2%' }}>
                    <div>
                    <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Add Motor Data </h4>
                    </div>
            
                            
                  <Form onSubmit={handleSubmit}>
                     <div className = 'row'>
                        <div className = 'col'>
                            <Form.Label>Part Number:</Form.Label>
                            <Form.Control type="text" value = {PartNumber} onChange={event => setPartNumber(event.target.value)}></Form.Control>
                        </div>
                        <div className = 'col'>
                            <Form.Label>Serial Number:</Form.Label>
                            <Form.Control type="text" value = {serialNumber} onChange={event => setSerialNumber(event.target.value)}></Form.Control>
                        </div>
                    </div>
                    <div className='row'>
                        <div>
                            <Form.Label>CO2:</Form.Label>
                            <Form.Control type="text" value = {co2} onChange={event => setCo2(event.target.value)}></Form.Control>
                        </div>
                        <div>
                            <Form.Label>Date Manufactured:</Form.Label>
                            <Form.Control type="date" placeholder = "YYYY-MM-DD" value = {dateManufactured} onChange={event => setDateManufactured(event.target.value)}></Form.Control>
                        </div>
                    </div>
                    <div className='row'>
                        <div className = 'col'>
                            <Form.Label>Cost To Manufacture:</Form.Label>
                            <Form.Control type="text" value = {costManufactured} onChange={event => setCostManufactured(event.target.value)}></Form.Control>
                        </div>
                        <div className = 'col'>
                            <Form.Label>Sales Price:</Form.Label>
                            <Form.Control type="text" value = {salesPrice} onChange={event => setSalesPrice(event.target.value)}></Form.Control><br/>
                        </div>
                      </div>

                      {/* <div className='row'>
                            <div className='col'>
                            <Form.Label>Upload Drill Image:</Form.Label>&nbsp;
                                <MDBFile id='customFile' onChange={event => setDrillImage(event.target.value)}></MDBFile>
                               
                            </div>
                      </div> */}
        
                      <div className = 'row'>
                       <div className = 'col'>
                            <Button variant="success" type="submit" value="Submit"
                              onClick={() => setIsAddClicked(true)}>Add</Button>
                            </div>
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
                                            <Modal.Body>Motor got added successfully!!!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
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

export default AddMotorComponent;