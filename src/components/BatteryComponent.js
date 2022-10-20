import React, { useState } from 'react';
// import BatteryService from '../services/BatteryService';
import { Button, Container } from 'react-bootstrap';
import CO2NavBar from './CO2NavBar';
import SidebarComponent from './SidebarComponent';

function BatteryComponent(props) {

    return (
        <>
            <CO2NavBar />
            <div class="row">
                <div class="col" style={{ width: '5%', border: "10px" }}>
                    <SidebarComponent value='Battery'/>
                </div>
                <div class="col" style={{ margin: '2%', float: 'left' }}>
                    <Container fluid>
                        <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Battery </h4>
                        <p>
                                  
                           Here you can add, view battery information. <br/> <br/>
                            Click on the links on your left to explore more.

                        </p>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default BatteryComponent;