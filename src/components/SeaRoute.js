import React, { useEffect, useState } from 'react';
import CO2NavBar from './CO2NavBar';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import SeaTransportService from '../services/SeaTransportService';


const map = document.getElementById('map-with-bullets');


function SeaRouteComponent(props) {

  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getSeaTransport() {
      try {
        const seaData = await SeaTransportService.getSeaTransportData();
        console.log(seaData);
        setRecords(seaData.data);
      }
      catch (e) {
        console.log(e);
      }
    }
    getSeaTransport();
  }, []);
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