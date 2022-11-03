import './TotalCO2Component.js';
import CO2NavBar from './CO2NavBar.js';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';


//I have no idea what I'm doing, or how to pass values from component to component .-.
function CO2Breakdown(props) {
    const location = useLocation();

    console.log("location: ",location)
    const totalHPTCo2 = location.state?.HPTCo2;
    const totalBatteryCo2 = location.state?.batteryCo2;
    const totalMotorCo2 = location.state?.motorCo2;
    const totalGroundCo2 = location.state?.groundCo2;
    const totalSeaCo2 = location.state?.seaCo2;


    const sourceStyle = {
        textAlign: 'center',
        backgroundColor: 'lightgray',
        fontSize: '20px'
    }

    const co2Style = {
        textAlign: 'center',
        backgroundColor: "lightgray",
        fontSize: '20px',
        width: '150px'
    }

    return (
        <>
            <CO2NavBar />
            <div style={{ textAlign: 'center' }}>
                <h4 style={{ textAlign: "center", marginTop: '30px' }}>You can see total CO2 breakdown here..</h4>
                <br></br>
                <div>
                    <input type="text" value="Hornet Power Tools" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalHPTCo2} style={co2Style} disabled />
                </div>
                <br></br>
                <div>
                    <input type="text" value="Battery Supplier" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalBatteryCo2} style={co2Style} disabled />
                </div>
                <br></br>
                <div>
                    <input type="text" value="Motor Supplier" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalMotorCo2} style={co2Style} disabled />
                </div>
                <br></br>
                <div>
                    <input type="text" value="Sea Transportation" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalSeaCo2} style={co2Style} disabled />
                </div>
                <br></br>
                <div>
                    <input type="text" value="Ground Transportation" style={sourceStyle} disabled />
                    &nbsp;&nbsp;&nbsp;
                    <input type="text" value={totalGroundCo2} style={co2Style} disabled />
                </div>
                {/* <text style={{fontSize:'20px'}}> The Total CO2 for the HPT is: </text>
            {
                totalHPTCo2
            }
            </div>
            
            <div>
            <text style={{fontSize:'20px'}}> The Total CO2 for the Battery is: </text>
            {
                totalBatteryCo2
            }
            </div>

            <div>
            <text style={{fontSize:'20px'}}> The Total CO2 for the Motor is: </text>
            {
                totalMotorCo2
            }
            </div> */}
                <br></br>
                <Link to={{ pathname: "/totalco2", query: { msg: 'hi' } }}>
                    <Button variant="primary" style={{backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}}>Back</Button>
                </Link>
            </div>
        </>
    );
}

export default CO2Breakdown;