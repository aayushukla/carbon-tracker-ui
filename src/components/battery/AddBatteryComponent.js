import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import BatteryService from '../../services/BatteryService';
import CO2NavBar from '../CO2NavBar';
import SidebarComponent from '../SidebarComponent';


function AddBatteryComponent(props) {
    const [partNumber, setPartNumber] = useState();
    const [serialNumber, setSerialNumber] = useState();
    const [co2, setCo2] = useState();
    const [dateManufactured, setDateManufactured] = useState();
    const [costManufactured, setCostManufactured] = useState();
    const [salesPrice, setSalesPrice] = useState();
    

    const handleSubmit = event => {
        event.preventDefault();
        async function addBATTERYData() {
            console.log(partNumber, serialNumber, co2, dateManufactured, costManufactured,
                salesPrice);
            //Add Records
            try {
                const addBattery1Data = await BatteryService.addBatteryData(partNumber, serialNumber, parseFloat(co2), dateManufactured ,parseFloat(costManufactured),
                    parseFloat(salesPrice));
                alert("Data added succesfully!!!")
            }
            catch (e) {
                alert("Error Occurred while loading!!!")
            }
        }
        addBATTERYData();
    };



    return (
        <>
            <CO2NavBar />
            <div className="co2container">
            <SidebarComponent value="Battery" />

                <main style={{ margin: '2%' }}>
                    <div>
                    <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Add Battery Data</h4>
                    </div>
                        {/* <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Hornet Power Tool</h4> */}
                            
                            <Form onSubmit={handleSubmit}>
                       
                            <Form.Label>Part Number:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setPartNumber(event.target.value)}></Form.Control>
                            
                            <Form.Label>Serial Number:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setSerialNumber(event.target.value)}></Form.Control>

                            <Form.Label>CO2:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setCo2(event.target.value)}></Form.Control>

                            <Form.Label>Date Manufactured:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setDateManufactured(event.target.value)}></Form.Control>

                            <Form.Label>Cost To Manufacture:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setCostManufactured(event.target.value)}></Form.Control>

                            <Form.Label>Sales Price:</Form.Label>&nbsp;
                            <Form.Control type="text" onChange={event => setSalesPrice(event.target.value)}></Form.Control>

                            <Button variant="success" type="submit" value="Submit">Add</Button> <br/>
                        </Form>
                      </main>
                </div>
            
        </>
    );
}

export default AddBatteryComponent;