import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import MotorService from '../../services/MotorService';
import CO2NavBar from '../CO2NavBar';
import SidebarComponent from '../SidebarComponent';




function AddMotorComponent(props) {
    const [PartNumber, setPartNumber] = useState();
    const [serialNumber, setSerialNumber] = useState();
    const [co2, setCo2] = useState();
    const [dateManufactured, setDateManufactured] = useState();
    const [costManufactured, setCostManufactured] = useState();
    const [salesPrice, setSalesPrice] = useState();
    

    const handleSubmit = event => {
        event.preventDefault();
        async function addMOTORData() {
            console.log(PartNumber, serialNumber, co2, dateManufactured, costManufactured,
                salesPrice);
            //Add Records
            try {
                const addMotor1Data = await MotorService.addMotorData(PartNumber, serialNumber, parseFloat(co2), dateManufactured ,parseFloat(costManufactured),
                    parseFloat(salesPrice));
                alert("Data added succesfully!!!")
            }
            catch (e) {
                alert("Error Occurred while loading!!!")
            }
        }
        addMOTORData();
    };



    return (                                  
        <>
            <CO2NavBar />
            <div className="co2container">
            <SidebarComponent value="Motor" />

                <main style={{ margin: '2%' }}>
                    <div>
                    <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Add Motor Data</h4>
                    </div>
            
                            
                            <Form onSubmit={handleSubmit}>
                            
                    <div classname = 'row'>
                        <div>
                            
                            <Form.Label>Part Number:</Form.Label>
                            <Form.Control type="text" onChange={event => setPartNumber(event.target.value)}></Form.Control>
                        </div>
                        <div>
                            <Form.Label>Serial Number:</Form.Label>
                            <Form.Control type="text" onChange={event => setSerialNumber(event.target.value)}></Form.Control>
                        </div>
                    </div>
                    <div classname='row'>
                        <div>
                            <Form.Label>CO2:</Form.Label>
                            <Form.Control type="text" onChange={event => setCo2(event.target.value)}></Form.Control>
                        </div>
                        <div>
                            <Form.Label>Date Manufactured:</Form.Label>
                            <Form.Control type="text" onChange={event => setDateManufactured(event.target.value)}></Form.Control>
                        </div>
                    </div>
                    <div classname='row'>
                        <div>
                            <Form.Label>Cost To Manufacture:</Form.Label>
                            <Form.Control type="text" onChange={event => setCostManufactured(event.target.value)}></Form.Control>
                        </div>
                        <div>
                            <Form.Label>Sales Price:</Form.Label>
                            <Form.Control type="text" onChange={event => setSalesPrice(event.target.value)}></Form.Control>
                        </div>
                    </div>
                        <div>
                            <Button variant="success" type="submit" value="Submit">Add</Button>
                        </div>
                        </Form>
                    
             </main>
            </div>
        </>
    );
}

export default AddMotorComponent;