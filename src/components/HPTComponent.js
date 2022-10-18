import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CO2NavBar from './CO2NavBar';
import SidebarComponent from './SidebarComponent';

function HPTComponent(props) {

    return (
        <>
            <CO2NavBar />
            <div class="row">
                <div class="col" style={{ width: '5%', border: "10px" }}>
                    <SidebarComponent />
                </div>
                <div class="col" style={{ margin: '2%', float: 'left' }}>
                    <Container fluid>
                        <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                            Hornet Power Tool</h4>
                        <p>
                            The Hornet power tools have different tool types that are Drill, Motor, Battery.
                            You can add, view, assign serial number to motor and battery here. <br/> <br/>
                            Click on the links on your left to explore more.

                        </p>
                    </Container>
                </div>
            </div>
        </>
    );
}


export default HPTComponent;