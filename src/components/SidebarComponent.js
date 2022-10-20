import React from 'react';
import { Card } from 'react-bootstrap';
import {FaTh, FaUserAlt, FaShoppingBag} from 'react-icons/fa'

import { BsFillEyeFill } from 'react-icons/bs'
import { MdAssignmentTurnedIn } from 'react-icons/md'


var links = [];
function SidebarComponent(componentType) {

console.log(componentType.value)
    if (componentType.value == "HPT")
    {
        links = [
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
            {
                title: "Assign SerialNumber",
                link: "/assignSN",
                icon: <MdAssignmentTurnedIn/>
            },

        ]
    }

    if (componentType.value == 'Motor')
    {
        links = [
            {
                title: "Add Product",
                link: "/addMotor",
                icon: <FaShoppingBag/>
            },
            {
                title: "View Product",
                link: "/viewMotor",
                icon: <FaShoppingBag/>
            },
            
        ]
    }
    if (componentType.value == 'Battery')
    {
        links = [
            {
                title: "Add Product",
                link: "/addBattery",
                icon: <FaShoppingBag/>
            },
            {
                title: "View Product",
                link: "/viewBattery",
                icon: <FaShoppingBag/>
            },
           
        ]
    }
   

//     return (
//         <div className="sidebar">
//             <div className="top_Section">
//                <img className="tool" width = "200px" style ={{justifyContent:'center'}} src="images/sideimage.jpg"></img>
//             </div>
//             {
//                 links.map((path, key) => { return(
//                     <a href={path.link} key={key} className="link" id={window.location.pathname === path.link? "active" : ""}>
//                         <div className="icon">{path.icon}</div>
//                         <div className="link_text">{path.title}</div>
//                     </a>
//                 ) 
//                 })
//             }
//         </div>
//     );
// }

return (
    <div className="sidebar">
        <div className="top_Section">
            <a href="/hpt">
            <img className="tool" width = "200px" style ={{justifyContent:'center'}} src="images/hpt.jpg"></img>
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

export default SidebarComponent;