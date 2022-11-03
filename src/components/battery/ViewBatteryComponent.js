import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CO2NavBar from '../CO2NavBar';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import BatteryService from '../../services/BatteryService';
import {Button} from 'react-bootstrap';
import SidebarComponent from '../SidebarComponent';



function ViewBatteryComponent(props) {

  const [showData, setShowData] = useState(false);
  const [serialNumber, setSerialNumber] = useState();
  const [records, setRecords] = useState(
  
    {
        partNumber: "",
        serialNumber: "",
        co2: 0,
        dateManufactured: "",
        costManufactured: 0,
        salesCost: 0
    });

  const [batteryRecords, setBatteryRecords] = useState([]);
  const output = [];

  const handleSubmit = event => {
    event.preventDefault();
    async function getBatteryData() {
      try {
      //Add Records
        const batteryData = await BatteryService.getBatteryDataByID(serialNumber);
        console.log("what im returning", batteryData);

        batteryData.map(rows => {

            setRecords({
                
                partNumber: rows["partNumber"],
                serialNumber: rows["serialNumber"],
                co2: rows["co2"],
                dateManufactured: rows["dateManufactured"],
                costManufactured: rows["costManufactured"],
                salesCost: rows["salesCost"],
                
            });
            console.log("created record", records)
            setBatteryRecords([...batteryRecords, records]);
        })
        
        console.log("batteryRecords: " + batteryRecords);
        setShowData(true);
      }
      catch (e) {
        console.log(e);
      }
    }
    getBatteryData();

    setBatteryRecords([])
  }

  
  function renderBatteryData() {
        const batteryDataId = document.getElementById('batteryData');
        ReactDOM.render(
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th>Part Number</th>
                        <th>Serail  Number</th>
                        <th>CO2</th>
                        <th>Date Manufactured</th>
                        <th>Cost of Manufacture</th>
                        <th>Sales Cost</th> 
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        batteryRecords.map(item => {
                            console.log("item: ", item.serialNumber)
                            return (
                                <tr>
                                    <td>{item.partNumber}</td>
                                    <td>{item.serialNumber}</td>
                                    <td>
                                        <MDBBadge color={item.co2 < 10 ? 'success' : 'danger'} pill>
                                            {item.co2}
                                        </MDBBadge>
                                    </td>
                                    <td>{item.dateManufactured}</td>
                                    <td>{item.costManufactured}</td>
                                    <td>{item.salesCost}</td>
                                </tr>
                            )
                        })
                    }
                </MDBTableBody>
            </MDBTable>, batteryDataId
        )
    }
    

  return (
   <>
            <CO2NavBar />
            <div className="co2container">
            <SidebarComponent value="Battery" />

                <main style={{ margin: '2%' }}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Serial Number" onChange={event => setSerialNumber(event.target.value)}></input>
                        &nbsp;&nbsp;
                        <Button variant="success" type="submit" value="Submit">View</Button>
                    </form>
    
                    {
                        showData &&
                        <MDBTable align='middle'>
                            <MDBTableHead>
                                <tr>
                                    <th>Part Number</th>
                                    <th>Serial Number</th>
                                    <th>CO2</th>
                                    <th>Date Manufactured</th>
                                    <th>Cost of Manufacture</th>
                                    <th>Sales Cost</th>
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
                                                <td>{item.salesCost}</td>
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