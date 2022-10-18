import React from 'react';
import { Card } from 'react-bootstrap';
import SidebarMenu from 'react-bootstrap-sidebar-menu';

function SidebarComponent(props) {
    const links = [
        {
            title: "Add Product",
            link: "/addHPT",
            image: "https://us.123rf.com/450wm/bakhtiarzein/bakhtiarzein2108/bakhtiarzein210800018/172511672-carbon-neutral-balancing-co2-gas-emission-offset-with-clean-tech-power-eco-wind-solar-versus-pollute.jpg?ver=6"
        },
        {
            title: "View Product",
            link: "/viewHPT",
            image: "https://us.123rf.com/450wm/bakhtiarzein/bakhtiarzein2108/bakhtiarzein210800018/172511672-carbon-neutral-balancing-co2-gas-emission-offset-with-clean-tech-power-eco-wind-solar-versus-pollute.jpg?ver=6"
        },
    ]

    return (
        <div>
            <SidebarMenu>
                <SidebarMenu.Header>
                    <SidebarMenu.Brand style ={{marginTop:'2%'}}>
                        <Card className="toolIcon">
                        <Card className="toolBarImage">
                            <Card.Body>
                                <Card.Img variant ="top" src/>
                            </Card.Body>
                        </Card>
                        <div>
                            <h4>Hornet Power Tool</h4>
                        </div>
                        </Card>
                    </SidebarMenu.Brand>
                </SidebarMenu.Header>
                <SidebarMenu.Body className="sidebarList">
                    {
                        links.map(link => {
                            return (
                                <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link href={link.link} style={{textDecoration: 'none',color: 'gray'}}>
                            <SidebarMenu.Nav.Title className="link" id={window.location.pathname === link.link? "active" : ""}>
                                {link.title}
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        </SidebarMenu.Nav>
                            )
                        })
                    }
                </SidebarMenu.Body>
            </SidebarMenu>
        </div>
    );
}

export default SidebarComponent;