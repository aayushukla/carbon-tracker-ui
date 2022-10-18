import React from 'react';
import CO2NavBar from './CO2NavBar';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';


const map = document.getElementById('map-with-bullets');


function SeaRouteComponent() {


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
              <th scope='col'>Customer Cost</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>
                1234
              </td>
              <td>
                63456
              </td>
              <td>
                <MDBBadge color='success' pill>
                  55
                </MDBBadge>
              </td>
              <td>
                987654
              </td>
              <td>
                $34,000
              </td>
              <td>
                $4,000
              </td>
              <td>
                $1,400
              </td>
            </tr>



            <tr>
              <td>
                5345
              </td>
              <td>
                734
              </td>
              <td>
                <MDBBadge color='primary' pill>
                  12
                </MDBBadge>
              </td>
              <td>
                6322
              </td>
              <td>
                $64,400
              </td>
              <td>
                $1,040
              </td>
              <td>
                $7,400
              </td>
            </tr>



            <tr>
              <td>
                5255
              </td>
              <td>
                7654
              </td>
              <td>
                <MDBBadge color='warning' pill>
                  233
                </MDBBadge>
              </td>
              <td>
                73445
              </td>
              <td>
                $12,000
              </td>
              <td>
                $43,000
              </td>
              <td>
                $10,700
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </Container>
    </>
  )
}

export default SeaRouteComponent;