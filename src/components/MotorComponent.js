import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CO2NavBar from './CO2NavBar';
import SidebarComponent from './SidebarComponent';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function MotorComponent(props) {

  return (
    <>
      <CO2NavBar />
      {/* { <div style={{ 
               backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/5/58/Stator_and_rotor_by_Zureks.JPG
               ")`   
               }}> */}

      {/* </div>
                 <div class="col" style={{ width: '5%', border: "10px"  }}>
    
                    <span>
                  <Link to="/addMotor">
                    <Button>Add</Button>
                  </Link>
                  </span> 
                  <span>
                  <Link to="/viewMotor">
                    <Button>View</Button>
                  </Link>
                  </span> */}


      <div className="co2container">
        <SidebarComponent value="Motor" />

        <main style={{ margin: '2%' }}>
          <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
            Motor Supplier</h4>
          <p>
            You can add, view, assign serial number to motor and battery here. <br /> <br />
            Click on the links on your left to explore more.

          </p>
        </main>
      </div>




    </>
  );
}


export default MotorComponent;