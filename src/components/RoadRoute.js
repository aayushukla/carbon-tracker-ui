import React from 'react';
import CO2NavBar from './CO2NavBar';
import RoadSidebar from './RoadSidebar';

function RoadComponent(props) {

    return (
        <>
            <CO2NavBar />

            <div className="container">
                <RoadSidebar />

                <main style={{ margin: '2%' }}>
                    <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                        Road Transportation Info</h4>
                    <p>
                        There are two different methods of transportation, Road and Sea.
                        You can add, view, assign route numbers for ground vehicles here. <br /> <br />
                        Click on the links on your left to explore more.

                    </p>
                </main>
            </div>
        </>
    );
}


export default RoadComponent;