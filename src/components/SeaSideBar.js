import React from 'react';
import { Card } from 'react-bootstrap';
import {
    FaTh, FaUserAlt, FaShoppingBag
} from 'react-icons/fa'

import { BsFillEyeFill } from 'react-icons/bs'


function SeaSidebar() {
    const links = [
        {
            title: "Add Tool",
            link: "/addSea",
            icon: <FaShoppingBag/>
        },
        {
            title: "View Tool",
            link: "/viewSea",
            icon: <BsFillEyeFill/>
        },
        {
            title: "View Sea Map",
            link: "/seamap",
            icon: <BsFillEyeFill/>
        }
    ]

    return (
        <div className="sidebar">
            <div className="top_Section">
                <a href="/hpt">
                <img className="tool" width = "200px" height = "150px" style ={{justifyContent:'center'}} src="images/sea.jpg"></img>
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

export default SeaSidebar;