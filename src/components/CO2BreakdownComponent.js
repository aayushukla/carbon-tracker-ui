import './TotalCO2Component.js';
import totalHPTCo2 from './TotalCO2Component';
import totalBatteryCo2 from './TotalCO2Component';
import totalMotorCo2 from './TotalCO2Component';


console.log("hi jason");
console.log("coming from total component", totalHPTCo2)

//I have no idea what I'm doing, or how to pass values from component to component .-.
function CO2Breakdown() {
    return (
        <div >
            <h4 style={{ textAlign: "center", marginTop: '30px' }}>This is a test</h4>
           
            <div>         

            <text style={{fontSize:'20px'}}> The Total CO2 for the HPT is: </text>
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
            </div>


        </div>
    );
}

export default CO2Breakdown;