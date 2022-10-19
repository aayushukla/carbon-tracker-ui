import React from 'react';
import { Card } from 'react-bootstrap';
import {
    FaTh, FaUserAlt, FaShoppingBag
} from 'react-icons/fa'

function SidebarComponent({children}) {
    const links = [
        {
            title: "Add Product",
            link: "/addHPT",
            icon: <FaShoppingBag/>
        },
        {
            title: "View Product",
            link: "/viewHPT",
            icon: <FaShoppingBag/>
        },
    ]

    return (
        // <div className = "container">
        <div className="sidebar">
            <div className="top_Section">
                <img className="tool" src=" "></img>
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
    // </div>
    );
}

export default SidebarComponent;