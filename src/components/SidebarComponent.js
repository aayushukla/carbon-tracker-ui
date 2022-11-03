import React from 'react';
import { Card } from 'react-bootstrap';
import { FaTh, FaUserAlt, FaShoppingBag } from 'react-icons/fa'

import { BsFillEyeFill } from 'react-icons/bs'
import { MdAssignmentTurnedIn } from 'react-icons/md'


var links = [];
function SidebarComponent(componentType) {
    let home_link = "";
    let home_image = "";
    console.log(componentType.value)
    if (componentType.value == "HPT") {
        home_link = "/hpt";
        home_image = "images/hpt.jpg";
        links = [
            {
                title: "Add Tool",
                link: "/addHPT",
                icon: <FaShoppingBag />
            },
            {
                title: "View Tool",
                link: "/viewHPT",
                icon: <BsFillEyeFill />
            },
            // {
            //     title: "Assign SerialNumber",
            //     link: "/assignSN",
            //     icon: <MdAssignmentTurnedIn />
            // },
            {
                title: "Update Tool",
                link: "/updateHPT",
                icon: <MdAssignmentTurnedIn />
            },

        ]
    }

    if (componentType.value == 'Motor') {
        home_link = "/motor";
        home_image = "images/motor.jpg";
        links = [
            {
                title: "Add Motor",
                link: "/addMotor",
                icon: <FaShoppingBag />,
            },
            {
                title: "View Motor",
                link: "/viewMotor",
                icon: <BsFillEyeFill />,
            },
            {
                title: "Update Tool",
                link: "/updateMotor",
                icon: <MdAssignmentTurnedIn />
            },

        ]
    }
    if (componentType.value == 'Battery') {
        home_link = "/battery";
        home_image = "images/battery.jpg";
        links = [
            {
                title: "Add Battery",
                link: "/addBattery",
                icon: <FaShoppingBag />,
                //image: "images/hpt.jpg"
            },
            {
                title: "View Battery",
                link: "/viewBattery",
                icon: <BsFillEyeFill />,
            },
            {
                title: "Update Tool",
                link: "/updateBattery",
                icon: <MdAssignmentTurnedIn />
            },

        ]
    }

    if (componentType.value == 'Road') {
        home_link = "/roadRoute";
        home_image = "images/truck.jpg";
        links = [
            {
                title: "Add Route",
                link: "/addRoad",
                icon: <FaShoppingBag />,
            },
            {
                title: "View Route",
                link: "/viewRoad",
                icon: <BsFillEyeFill />
            },
            {
                title: "Update Route",
                link: "/updateRoad",
                icon: <MdAssignmentTurnedIn />
            },
            {
                title: "View Road Map",
                link: "/roadMap",
                icon: <BsFillEyeFill/>
            }

        ]
    }

    if (componentType.value == 'Sea') {
        home_link = "/motor";
        home_image = "images/sea.jpg";
        links = [
            {
                title: "Add Route",
                link: "/addSea",
                icon: <FaShoppingBag/>
            },
            {
                title: "View Route",
                link: "/viewSea",
                icon: <BsFillEyeFill/>
            },
            {
                title: "View Sea Map",
                link: "/seamap",
                icon: <BsFillEyeFill/>
            }
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
        <>
            <div className="sidebar">
                <div className="top_Section">
                    <a href={home_link} >
                        <img className="tool" width="200px"
                            style={{ justifyContent: 'center', height: '150px' }} src={home_image}></img>
                    </a>
                </div>
                {
                    links.map((path, key) => {
                        return (

                            <a href={path.link} key={key} className="link" id={window.location.pathname === path.link ? "active" : ""}>
                                <div className="icon">{path.icon}</div>
                                <div className="link_text">{path.title}</div>
                            </a>

                        )

                    })
                }
            </div>

        </>
    )
}
export default SidebarComponent;