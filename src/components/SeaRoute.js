import React, { useEffect, useState } from 'react';
import CO2NavBar from './CO2NavBar';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import SeaTransportService from '../services/SeaTransportService';
import ReactDOM from 'react-dom';


const map = document.getElementById('map-with-bullets');


function SeaRouteComponent(props) {

  const [showData, setShowData] = useState(false);
  const [serialNum, setSerialNum] = useState();
  const [records, setRecords] = useState(
    {
      trackingNumber: "",
      routeID: "",
      co2: 0,
      shipID: "",
      fuelCost: 0,
      laborCost: 0,
      dateShipped: "",
      dateArrived: "",
      bill: ""
    });
  const [seaRecords, setSeaRecords] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    async function getSeaTransportData() {
      //Add Records
      try {
        const seaData = await SeaTransportService.getSeaTransportDataByID(serialNum);
        console.log("Fetched Sea Data:", seaData);

        seaData.map(rows => {
          setRecords({
            trackingNumber: rows["trackingNumber"],
            routeID: rows["serialNum"],
            co2: rows["co2"],
            shipID: rows["shipID"],
            fuelCost: rows["fuelCost"],
            laborCost: rows["laborCost"],
            dateShipped: rows["dateShipped"],
            dateArrived: rows["dateArrived"],
            bill: rows["bill"]
          });
          console.log("created record", records)
          setSeaRecords([...seaRecords, records]);
        })

        console.log("seaRecords: " + seaRecords);
        setShowData(true);
      }
      catch (e) {
        console.log(e);
      }
    }
    getSeaTransportData();
    setSeaRecords([])
  }



  ////////////////////////////


  function renderSeaData() {
    const seaDataId = document.getElementById('seaData');
    ReactDOM.render(
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Tracking Number</th>
            <th scope='col'>Route ID</th>
            <th scope='col'>C02 Data</th>
            <th scope='col'>Ship ID</th>
            <th scope='col'>Fuel Cost</th>
            <th scope='col'>Labour Cost</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
            seaRecords.map(item => {
              return (
                <tr>
                  <td>{item.trackingNumber}</td>
                  <td>{item.serialNum}</td>
                  <td>
                    <MDBBadge color={item.co2 < 10 ? 'success' : 'danger'} pill>
                      {item.co2}
                    </MDBBadge>
                  </td>
                  <td>{item.shipID}</td>
                  <td>{item.fuelCost}</td>
                  <td>{item.laborCost}</td>
                  <td>{item.dateShipped}</td>
                  <td>{item.dateArrived}</td>
                  <td>{item.bill}</td>
                </tr>
              )
            })
          }
        </MDBTableBody>
      </MDBTable>, seaDataId
    )
  }

  /////////////////////////////
  return (
    <>
      <CO2NavBar />
      <Container>
        <div className='p-5 text-center bg-light'>
          <h1 className='mb-3'><u> Sea Transport Data </u> </h1>
        </div>
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'>Tracking Number</th>
              <th scope='col'>Route ID</th>
              <th scope='col'>C02 Data</th>
              <th scope='col'>Ship ID</th>
              <th scope='col'>Fuel Cost</th>
              <th scope='col'>Labour Cost</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {records.map((item, i) => (
              <tr key={i}>
                <td>{item.trackingNumber}</td>
                <td>{item.routeID}</td>
                <td>
                  <MDBBadge color='success' pill>
                    5{item.co2}5
                  </MDBBadge>
                </td>
                <td>{item.shipID}</td>
                <td>${item.fuelCost}</td>
                <td>${item.laborCost}</td>ß
                <td>${item.trackingNumber}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </Container>
    </>
  )
}

export default SeaRouteComponent;