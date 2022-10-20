import React from 'react';
import { Card } from 'react-bootstrap';
import {
    FaTh, FaUserAlt, FaShoppingBag
} from 'react-icons/fa'

import { BsFillEyeFill } from 'react-icons/bs'
import { MdAssignmentTurnedIn } from 'react-icons/md'

function HPTSidebar() {
    const links = [
        {
            title: "Add Tool",
            link: "/addHPT",
            icon: <FaShoppingBag/>
        },
        {
            title: "View Tool",
            link: "/viewHPT",
            icon: <BsFillEyeFill/>
        },
        {
            title: "Assign SerialNumber",
            link: "/assignSN",
            icon: <MdAssignmentTurnedIn/>
        },
    ]

    return (
        <div className="sidebar">
            <div className="top_Section">
                <a href="/hpt">
                <img className="tool" width = "200px" height = "150px" style ={{justifyContent:'center'}} src="images/hpt.jpg"></img>
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

export default HPTSidebar;