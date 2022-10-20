import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import MotorService from '../../services/MotorService';
import CO2NavBar from '../CO2NavBar';
import SidebarComponent from '../SidebarComponent';

function ViewBatteryComponent(props) {
    const [records, setRecords] = useState([]);
   



    useEffect(() => {
        async function getBATTERYData() {
            //Add Records
            try {
                const batteryData = await MotorService.getBatteryData();
                console.log(batteryData);
                setRecords(batteryData.data);
               
                console.log("records:", records)
            }
            catch (e) {
                console.log(e);
            }
        }
        getBATTERYData();
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
                                    <th>Part Munber</th>&emsp;
                                    <th>Serial Number</th>&emsp;
                                    <th>CO2</th>&emsp;
                                    <th>Cost of Manufacture</th>&emsp;
                                    <th>Date Of Manufacture</th>&emsp;
                                    <th>Sales Price</th>
                                    
                                </tr>
                                {records.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.partNumber}</td>
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

export default ViewBatteryComponent;
