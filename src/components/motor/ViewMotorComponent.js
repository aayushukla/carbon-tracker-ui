import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CO2NavBar from '../CO2NavBar';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import MotorService from '../../services/MotorService';
import {Button} from 'react-bootstrap';
import SidebarComponent from '../SidebarComponent';



function ViewMotorComponent(props) {

  const [showData, setShowData] = useState(false);
  const [serialNumber, setSerialNumber] = useState();
  const [records, setRecords] = useState(
  
    {
        PartNumber: "",
        serialNumber: "",
        co2: 0,
        dateManufactured: "",
        costManufactured: 0,
        salesCost: 0
    });

  const [motorRecords, setMotorRecords] = useState([]);
  const output = [];

  const handleSubmit = event => {
    event.preventDefault();
    async function getMotorData() {
      try {
      //Add Records
        const motorData = await MotorService.getMotorDataByID(serialNumber);
        console.log("what im returning", motorData);

        motorData.map(rows => {

            setRecords({
               
                PartNumber: rows["PartNumber"],
                serialNumber: rows["serialNumber"],
                co2: rows["co2"],
                dateManufactured: rows["dateManufactured"],
                costManufactured: rows["costManufactured"],
                salesCost: rows["salesCost"],
                
            });
            console.log("created record", records)
            setMotorRecords([...motorRecords, records]);
        })
        
        console.log("motorRecords: " + motorRecords);
        setShowData(true);
      }
      catch (e) {
        console.log(e);
      }
    }
    getMotorData();

    setMotorRecords([])
  }

  
  function renderMotorData() {
        const motorDataId = document.getElementById('motorData');
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
                        motorRecords.map(item => {
                            console.log("item: ", item.serialNumber)
                            return (
                                <tr>
                                    <td>{item.PartNumber}</td>
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
            </MDBTable>, motorDataId
        )
    }
    

  return (
   <>
            <CO2NavBar />
            <div className="co2container">
            <SidebarComponent value="Motor" />

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
                                    motorRecords.map(item => {
                                        console.log("item: ", item)
                                        return (
                                            <tr>
                                                <td>{item.PartNumber}</td>
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

export default ViewMotorComponent;