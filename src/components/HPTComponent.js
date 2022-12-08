import { MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CO2NavBar from './CO2NavBar';
import HPTSidebar from './HPTSidebar';
import HPTService from '../services/HPTService'
import SidebarComponent from './SidebarComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import {
    CircularProgressbar,
  } from "react-circular-progressbar";import 'react-circular-progressbar/dist/styles.css';
  
function HPTComponent(props) {

    const [totalCo2, setTotalCo2] = useState(0);
    const [partsCost, setPartsCost] = useState(0);
    const [salesCost, setSalesCost] = useState(0);
    const [maxCo2SN, setMaxCo2SN] = useState(0);

    useEffect(() => {

        async function getHptData() {
            let co2Sum = 0;
            let parts = 0;
            let sale = 0
            let maxCO2 = 0;
            let maxSN = 0;
            const data = await HPTService.getHornetPowerToolData();
            const co2 = data;
            for (var j = 0; j < co2.length; j++) {
                co2Sum = co2Sum + co2[j].co2;
                parts = parts + co2[j].partsCost;
                sale = sale + co2[j].salesPrice;
                console.log([j].co2);
                if(co2[j].co2 > maxCO2) {
                    maxCO2 = co2[j].co2;
                    maxSN = co2[j].serialNumber;
                }
            }
            console.log("Total CO2: ",co2Sum)
            setTotalCo2(co2Sum);
            setPartsCost(parts);
            setSalesCost(sale);
            setMaxCo2SN(maxSN)
        }

        console.log("HPT Data", totalCo2)
        getHptData();

    });


    return (
        <>
            <CO2NavBar />

            <div className="co2container" >
                <SidebarComponent value="HPT" />

                <main style={{ margin: '2%' }}>
                    {/* <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                        Hornet Power Tool</h4>
                    <p>
                        The Hornet power tools have different tool types that are Drill, Motor, Battery.
                        You can add, view, assign serial number to motor and battery here. <br /> <br />
                        Click on the links on your left to explore more.

                    </p> */}

                    <Row xs={1} md={2} className="g-4">

                        <Col>
                            <Card style={{ alignItems: 'center', display: 'flex', justifyItems: 'center' }}>
                                <Card.Header style={{ fontSize: '20px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                    Total CO2 Emission - Drill
                                </Card.Header>
                                <CircularProgressbar
                                styles={{
                                   root : {width:'20%', marginTop:'2%'},
                                   path: {stroke: totalCo2 < 500 ? 'green' : 'red'}
                                  }}  value={totalCo2} text={`${totalCo2}`} maxValue={1000} />
                                {/* <Card.Img variant="top" style={{ width: '50%', height: '50%' }} src="https://i.pinimg.com/originals/8a/97/93/8a979307cfdf16f80b8b869280b5f37e.jpg" /> */}
                                <Card.Body>
                                    <Card.Text style={{ fontSize: '25px', fontWeight: 'bold' }} className='text-center'>
                                        kgCO2
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card style={{ marginTop: '15px' }} className='text-center'>
                                <Card.Body >
                                    Are you looking for Historical Data of HPT?
                                    <br></br>
                                    <a href="/co2History"  >Click Here!</a>

                                </Card.Body>
                            </Card>

                        </Col>

                        <Col>
                            <Card>
                                <Card.Header style={{ fontSize: '20px', textAlign: 'center', color: 'white', width: "100%", backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                                    Trends in Hornet Power Tool
                                </Card.Header>
                                <Card.Body>

                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Parts Cost </MDBCardText>
                                        </MDBCol>
                                        <MDBCol >
                                            <MDBCardText >
                                                {partsCost}$
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Sales Price </MDBCardText>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBCardText>
                                                {salesCost}$
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    {/* <hr /> */}
                                    {/* <MDBRow>
                                        <MDBCol>
                                            <MDBCardText>Batteries in Use</MDBCardText>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBCardText>
                                                { }
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow> */}
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

                            <Card style={{ marginTop: '15px', alignItems: 'center', display: 'flex', justifyItems: 'center' }} className='text-center'>
                                <Card.Img style={{ width: '50%' }} src="https://www.experteasy.com.au/blog/content/images/2020/02/best-cordless-drills.jpg">

                                </Card.Img>
                                <Card.Text style={{ marginTop: '1px', marginBottom: '2%' }}>
                                    <a href ="">Find more about HPT Tools!</a>
                                </Card.Text>
                            </Card>

                        </Col>
                    </Row>
                </main>
            </div>
        </>
    );
}


export default HPTComponent;