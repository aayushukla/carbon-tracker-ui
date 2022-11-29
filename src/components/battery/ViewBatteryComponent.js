import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import BatteryService from '../../services/BatteryService';
import CO2NavBar from '../CO2NavBar';
import ReactDOM from 'react-dom';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SidebarComponent from '../SidebarComponent';

function ViewBatteryComponent(props) {

    const [showData, setShowData] = useState(false);
    const [serialNumber, setSerialNumber] = useState();
    const [isDataPresent, setIsDataPresent] = useState(false)
    const [records, setRecords] = useState(
        {
            id: "",
             partNumber: "",
             serialNumber: "",
             co2: 0,
             dateManufactured: "",
             costManufactured: 0,
             salesPrice: 0
        });

    const [batteryRecords, setBatteryRecords] = useState([]);
    

    const handleSubmit = event => {
        event.preventDefault();
   
        async function getBatteryData() {
            //Add Records
            try {
                const response = await BatteryService.getBatteryDataByID(serialNumber)
                .then(batteryData => {
                
                batteryData.map(rows => {
                    

                    setRecords({

                        partNumber: rows["partNumber"],
                        serialNumber: rows["serialNumber"],
                        co2: rows["co2"],
                        dateManufactured: rows["dateManufactured"],
                        costManufactured: rows["costManufactured"],
                        salesPrice: rows["salesPrice"],
                        
                       
                    });
                    console.log("created record", records)
                    setBatteryRecords([...batteryRecords, records]);
                })

                console.log("batteryRecords: " + batteryRecords);
                // setBatteryRecords(output);
                setShowData(true);
                setIsDataPresent(true)
                })
                
            .catch(e =>
                console.log(e)
            )
        } catch(e) {

        }
        
    }
    getBatteryData();
        
        setBatteryRecords([])
}

    return (
        <>
            <CO2NavBar />
            <div className="co2container">
            <SidebarComponent value="Battery" />

                <main style={{ margin: '2%' }}>
                    <div>
                        <p style={{ margin: '1%', fontSize: '18px'}}>
                            Enter  Serial Number</p>
                    </div><br></br>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Serial Number" onChange={event => setSerialNumber(event.target.value)}></input>
                        &nbsp;&nbsp;
                        <Button variant="success" type="submit" value="Submit" onClick={() => setBatteryRecords([])}>View</Button>
                    </form>
                   
                    {
                        showData && isDataPresent &&
                        <MDBTable align='middle'>
                            <MDBTableHead>
                                <tr>
                                    <th>Part Number</th>
                                    <th>Serial Number</th>
                                    <th>CO2</th>
                                    <th>Date Manufactured</th>
                                    <th>Cost of Manufacture</th>
                                    <th>Sales Price</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    batteryRecords.map(item => {
                                        console.log("item: ", item)
                                        return (
                                            <tr>
                                                <td>{item.partNumber}</td>
                                                <td>{item.serialNumber}</td>
                                                <td>
                                                    <MDBBadge color={item.co2 < 50 ? 'success' : 'danger'} pill>
                                                        {item.co2}
                                                    </MDBBadge>
                                                </td>
                                                <td>{item.dateManufactured}</td>
                                                <td>{item.costManufactured}</td>
                                                <td>{item.salesPrice}</td>
                                                
                                            </tr>
                                        )
                                    })

                                   
                                }
                            </MDBTableBody>
                        </MDBTable>
                    }
                </main>
            </div>
        </>
    );
}

export default ViewBatteryComponent;