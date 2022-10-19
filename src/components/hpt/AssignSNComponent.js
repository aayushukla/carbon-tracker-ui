import React from 'react';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';

function AssignSNComponent(props) {
    return (
        <>
            <CO2NavBar />

            <div className="container">
                <HPTSidebar />

                <main style={{ margin: '2%' }}>
                    <h4 style={{ margin: '2%', fontWeight: 'bold', fontSize: '150%', marginBottom: '50px' }}>
                        Assign SerialNumber</h4>
                    
                </main>
            </div>
        </>
    );
}

export default AssignSNComponent;