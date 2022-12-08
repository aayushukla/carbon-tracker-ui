import React, { useState, useEffect } from 'react';
// import BatteryService from '../services/BatteryService';
import { Button, Container } from 'react-bootstrap';
import CO2NavBar from './CO2NavBar';
import SidebarComponent from './SidebarComponent';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Carousel } from 'bootstrap';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';

import {
    MDBCol,
    MDBRow,
    MDBCardText,

} from 'mdb-react-ui-kit';

import {
    CircularProgressbar,
  } from "react-circular-progressbar";import 'react-circular-progressbar/dist/styles.css';
import SeaTransportService from '../services/SeaTransportService';


let columns = [];
let rows = [];
function SeaComponent(props) {


  const [totalCo2, setTotalCo2] = useState(0);
  const [Laborcost, setLaborCost] = useState(0);
  const [Fuel, setFuelCost] = useState(0);
  const [maxCo2SN, setMaxCo2SN] = useState(0);
  const [seaLength , setLength] = useState(0);

  

  useEffect(() => {

    async function getSeaData() {
      let co2Sum = 0;
      let costOfLabor = 0;
      let costForFuel = 0
      let maxCO2 = 0;
      let maxSN = 0;
      const data = await SeaTransportService.getSeaTransportData();
      const co2 = data;
      let count = co2.length;
      rows = await SeaTransportService.getSTRowsDataForDashBoard();
      columns = await SeaTransportService.getSTColumnDataForDashBoard();
      for (var j = 0; j < co2.length; j++) {
        co2Sum = co2Sum + co2[j].co2;
        costOfLabor = costOfLabor + co2[j].laborCost;
        costForFuel = costForFuel + co2[j].fuelCost;
        if (co2[j].co2 > maxCO2) {
          maxCO2 = co2[j].co2;
          maxSN = co2[j].trackingNumber;
        }
      }
      console.log("Total CO2: ", co2Sum)
      setTotalCo2(co2Sum);
      setLaborCost(costOfLabor);
      setFuelCost(costForFuel);
      setMaxCo2SN(maxSN);


      setLength(count);
      
    }

    getSeaData();

    });



    return (
        <>
            <CO2NavBar />
            <div className="co2container" >
                <SidebarComponent value="Sea" />

                <main style={{ margin: '2%' }}>
                    {/* <h4 style={{ margin: '0.5%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px', textAlign:'center' }}>
                        Battery Supplier</h4> */}

                    <Row xs={1} md={2} className="g-4">

                        <Col>
                            <Card style={{ alignItems: 'center', display: 'flex', justifyItems: 'center' }}>
                                <Card.Header style={{ fontSize: '20px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                    Total CO2 Emission - Sea Transportation
                                </Card.Header>
                                <CircularProgressbar
                                styles={{
                                   root : {width:'30%', marginTop:'2%'},
                                   path: {stroke: totalCo2 < 500 ? 'green' : 'red'}
                                  }}  value={totalCo2} text={`${totalCo2}`} maxValue={1000} />
                                {/* <Card.Img variant="top" style={{ width: '50%', height: '50%' }} src="https://i.pinimg.com/originals/8a/97/93/8a979307cfdf16f80b8b869280b5f37e.jpg" /> */}
                                <Card.Body>
                                    <Card.Text style={{ fontSize: '20px' }} className='text-center'>
                                         kgCO2
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card  style={{ marginTop: '15px' }}>
                                <Card.Header style={{ fontSize: '20px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                    Trends in Sea Transportation
                                </Card.Header>
                                <Card.Body>

                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText> Total Labor Cost </MDBCardText>
                                        </MDBCol>
                                        <MDBCol >
                                            <MDBCardText >
                                                {Laborcost}$
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Total Fuel Cost </MDBCardText>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBCardText>
                                                {Fuel}$
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Routes</MDBCardText>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBCardText>
                                                {seaLength}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Highest CO2 for SN </MDBCardText>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBCardText>
                                            {maxCo2SN}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>

                                </Card.Body>
                            </Card>


                        </Col>

                        <Col>

                        <Card className='text-center'>
                                <Card.Body >
                                    Are you looking for Historical Data of Sea Transportation?
                                    <br></br>
                                    <a href="/co2History"  >Click Here!</a>

                                </Card.Body>
                            </Card>

                           
                            <Card style={{ marginTop: '15px', alignItems: 'center', display: 'flex', justifyItems: 'center' }} className='text-center'>
                            <Card.Header style={{ fontSize: '20px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                    Ship Information 
                                </Card.Header>
                            <div style={{ height: 300, width: '100%' }}>

                            <DataGrid
    rows={rows}
    getRowId={(row) => row.internalId}
    columns={columns}
    pageSize={3}
    rowsPerPageOptions={[3]}
    sx={{
      
        '&.MuiDataGrid-root': {
        border: 'none',
        }
    }}

/>
</div>

                            </Card>

                        </Col>




                    </Row>

                </main>
            </div>

        </>
    );
}

export default SeaComponent;