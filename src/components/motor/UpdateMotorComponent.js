import React, { useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import MotorService from '../../services/MotorService';
import CO2NavBar from '../CO2NavBar';
import SidebarComponent from '../SidebarComponent';
import loader from '../gifs/gifForUpdate.gif'


function UpdateMotorComponent(props) {
    const [PartNumber, setPartNumber] = useState();
    const [serialNumber, setSerialNumber] = useState();
    const [co2, setCo2] = useState();
    const [dateManufactured, setDateManufactured] = useState();
    const [costManufactured, setCostManufactured] = useState();
    const [salesPrice, setSalesPrice] = useState();
    const [isAdded, setIsAdded] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [isError, setIsError] = useState(false);
   
    const handleClose = () => setIsAddClicked(false);

    

    const handleSubmit = event => {
        event.preventDefault();
        async function updateMOTORData() {
            console.log(PartNumber, serialNumber, co2, dateManufactured, costManufactured,
                salesPrice);
            //Add Records
            try {
                const addBattery1Data = await MotorService.updateMotorData(PartNumber, serialNumber, parseFloat(co2), dateManufactured ,parseFloat(costManufactured),
                    parseFloat(salesPrice))
                   .then(() => { setIsAddClicked(true);
                        setIsAdded(true) });
                    
            }
            catch (e) {
                 setIsAddClicked();
                alert("Error Occurred while loading!!!" + e)
            }
        }
        updateMOTORData();

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
               <SidebarComponent  value="Motor"/>
     
            

                <main style={{ margin: '2%' }}>
                    <div>
                    <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Update Motor Data</h4>
                    </div>
             
                            
                            <Form onSubmit={handleSubmit}>
                              <div className='row'>
                              <div className='col'>
                                   <Form.Label>Serial Number:</Form.Label>&nbsp;
                                   <Form.Control type="text" placeholder = "Enter the Serial Number" value = {serialNumber} onChange={event => setSerialNumber(event.target.value)}></Form.Control>
                                 </div>
                               </div>
                                 
                               <div className='row'>
                                <div className='col'>
                                   <Form.Label>Part Number:</Form.Label>&nbsp;
                                   <Form.Control type="text" value = {PartNumber} onChange={event => setPartNumber(event.target.value)}></Form.Control>
                                 </div>
                              
                              
                                <div className='col'>

                                  <Form.Label>CO2:</Form.Label>&nbsp;
                                  <Form.Control type="text" value = {co2} onChange={event => setCo2(event.target.value)}></Form.Control>
                                </div>
                                </div>

                                <div className='row'>
                                <div className='col'>  
                                  <Form.Label>Date Manufactured:</Form.Label>&nbsp;
                                  <Form.Control type="text" placeholder = "YYYY-MM-DD" value = {dateManufactured} onChange={event => setDateManufactured(event.target.value)}></Form.Control>
            
                               </div>
                                <div className='col'>
                                  <Form.Label>Cost To Manufacture:</Form.Label>&nbsp;
                                  <Form.Control type="text" value = {costManufactured} onChange={event => setCostManufactured(event.target.value)}></Form.Control>
                                </div>
                            </div>
                               
                            <div className='row'>
                                <div className = 'col'>
                                  <Form.Label>Sales Price:</Form.Label>&nbsp;
                                  <Form.Control type="text" value = {salesPrice} onChange={event => setSalesPrice(event.target.value)}></Form.Control><br/>
                                </div>
                              </div>
                              
                              <div className='row'>
                                <div className='col'>
                                  <Button variant="success" type="submit" value="Submit" style={{backgroundImage:"linear-gradient(130deg,#23adf3,#6304ff)"}}
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
                                            <Modal.Body>Motor data got updated successfully!!!</Modal.Body>
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

export default UpdateMotorComponent;
