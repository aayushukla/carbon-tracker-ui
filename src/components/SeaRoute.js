import React from 'react';
import CO2NavBar from './CO2NavBar';
import SeaSidebar from './SeaSideBar';

function SeaComponent(props) {

    return (
        <>
            <CO2NavBar />

            <div className="container">
                <SeaSidebar />

                <main style={{ margin: '2%' }}>
                    <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                        Sea Transport Data</h4>
                    <p>
                        The Hornet power tools have different tool types that are Drill, Motor, Battery.
                        You can add, view, assign serial number to motor and battery here. <br /> <br />
                        Click on the links on your left to explore more.

                    </p>
                </main>
            </div>
        </>
    );
}


export default SeaComponent;