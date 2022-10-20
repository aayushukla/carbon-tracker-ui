import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import MotorService from '../../services/MotorService';
import CO2NavBar from '../CO2NavBar';
import SidebarComponent from '../SidebarComponent';

function ViewMotorComponent(props) {
    const [records, setRecords] = useState([]);
   



    useEffect(() => {
        async function getMOTORData() {
            //Add Records
            try {
                const motorData = await MotorService.getMotorData();
                console.log(motorData);
                setRecords(motorData.data);
               
                console.log("records:", records)
            }
            catch (e) {
                console.log(e);
            }
        }
        getMOTORData();
    }, []);

    return (
        <>
            <CO2NavBar />
            <div className="row">
                {/* <div className="col" style={{ width: '5%', border: "10px" }}>
                 <SidebarComponent /> 
                </div> */}
                <div className="col" style={{ margin: '2%', float: 'left' }}>
                    <Container fluid>
                        <table>
                            <tbody>
                                <tr>
                                    <th><b>Part Number</b></th> &emsp;
                                    <th><b>Serial Number</b></th> &emsp;
                                    <th><b>CO2</b></th>&emsp;
                                    <th><b>Cost of Manufacture</b></th>&emsp;
                                    <th><b>Date Of Manufacture</b></th>&emsp;
                                    <th><b>Sales Price</b></th>
                                    
                                </tr>
                                {records.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.PartNumber}</td>
                                        <td>{item.serialNumber}</td>
                                        <td>{item.co2}</td>
                                        <td>{item.dateManufactured}</td>
                                        <td>{item.costManufactured}</td>
                                        <td>{item.salesPrice}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default ViewMotorComponent;
