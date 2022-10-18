import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CO2NavBar from './CO2NavBar';

function HPTComponent(props) {
    return (
        <>
            <CO2NavBar />
            <div>
                <h4 style={{ textAlign: "center", marginTop: '50px', fontWeight: 'bold', fontSize: '200%', marginBottom: '50px' }}>
                    Hornet Power Tool</h4>
                <Container fluid>
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>

                    <button type="submit" className="btn btn-primary">
                        View
                    </button>

                </Container>
            </div>

        </>
    );
}

export default HPTComponent;