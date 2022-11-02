import React, { useState } from 'react';
// import BatteryService from '../services/BatteryService';
import { Button, Container } from 'react-bootstrap';
import CO2NavBar from './CO2NavBar';
import SidebarComponent from './SidebarComponent';

function BatteryComponent(props) {

    return (
        <>
            <CO2NavBar />
            <div className="co2container">
                <SidebarComponent value="Battery" />

                <main style={{ margin: '2%' }}>
                    <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                        Battery Supplier</h4>
                    <p>

                        Here you can add, view and update battery information here. <br /> <br />
                        Click on the links on your left to explore more.

                    </p>
                </main>
            </div>

        </>
    );
}

export default BatteryComponent;