import React from 'react';
import { Card } from 'react-bootstrap';
import {
    FaTh, FaUserAlt, FaShoppingBag
} from 'react-icons/fa'

import { BsFillEyeFill } from 'react-icons/bs'
import { MdAssignmentTurnedIn } from 'react-icons/md'

function RoadSidebar() {
    const links = [
       /* come back and implement this functionality
            {
            title: "Add Route",
            link: "/viewRoad",
            icon: <FaShoppingBag/>
        },*/
        {
            title: "View Route",
            link: "/viewRoad",
            icon: <BsFillEyeFill/>
        },
        
    ]

    return (
        <div className="sidebar">
            <div className="top_Section">
                <a href="/hpt">
                <img className="tool" width = "200px" style ={{justifyContent:'center'}} src="images/truck.jpg"></img>
                </a>
            </div>
            {
                links.map((path, key) => { return(
                    <a href={path.link} key={key} className="link" id={window.location.pathname === path.link? "active" : ""}>
                        <div className="icon">{path.icon}</div>
                        <div className="link_text">{path.title}</div>
                    </a>
                ) 
                })
            }
        </div>
    );
}

export default RoadSidebar;