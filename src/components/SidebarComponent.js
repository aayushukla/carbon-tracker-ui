import React from 'react';
import { Card } from 'react-bootstrap';
import SidebarMenu from 'react-bootstrap-sidebar-menu';

function SidebarComponent(props) {
    return (
        <div>
            <SidebarMenu>
                <SidebarMenu.Header>
                    <SidebarMenu.Brand style ={{marginTop:'2%'}}>
                        Hornet Power Tool
                    </SidebarMenu.Brand>
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link href="/hpt">
                            {/* <Card style={{ width: '10rem', height: '10rem' }}>
          <Card.Body> */}
                            <img variant="top" style={{ width: '10rem', height: '10rem' }}
                                src="https://us.123rf.com/450wm/bakhtiarzein/bakhtiarzein2108/bakhtiarzein210800018/172511672-carbon-neutral-balancing-co2-gas-emission-offset-with-clean-tech-power-eco-wind-solar-versus-pollute.jpg?ver=6" />
                            {/* </Card.Body>
          <Card.Footer>
          </Card.Foo    ter>
        </Card> */}

                        </SidebarMenu.Nav.Link>
                    </SidebarMenu.Nav>
                    <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link href="/addHPT">
                            <SidebarMenu.Nav.Title>
                                Add Product
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <br></br>
                        <SidebarMenu.Nav.Link href="/viewHPT">
                            <SidebarMenu.Nav.Title>
                                View Product
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                    </SidebarMenu.Nav>
                </SidebarMenu.Body>
            </SidebarMenu>
        </div>
    );
}

export default SidebarComponent;