import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CO2NavBar from './CO2NavBar';
import SidebarComponent from './SidebarComponent';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function MotorComponent(props) {

  return (
    <>
      <CO2NavBar />
     
       <div className="co2container">
        <SidebarComponent value="Motor" />

        <main style={{ margin: '2%' }}>
          <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
            Motor Supplier</h4>
          <p>
            You can add, view and update motor information here. <br /> <br />
            Click on the links on your left to explore more.

          </p>
        </main>
      </div>




    </>
  );
}


export default MotorComponent;