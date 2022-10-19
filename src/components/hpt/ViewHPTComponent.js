import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import HPTService from '../../services/HPTService';
import CO2NavBar from '../CO2NavBar';
import HPTSidebar from '../HPTSidebar';

function ViewHPTComponent(props) {
    const [records, setRecords] = useState([]);
    //     {
    //     toolType: "",
    //     serialNum: 0,
    //     co2: 0,
    //     partsCosts: 0,
    //     salesPrice: 0,
    //     motorUsed: 0,
    //     batteryUsed: 0,
    //     shipNumber: 0,
    //     groundNumber: 0
    // }



    useEffect(() => {
        async function getHPTData() {
            //Add Records
            try {
                const hptData = await HPTService.getHornetPowerToolData();
                console.log(hptData);
                setRecords(hptData.data);
                // records = hptData.map(rows => {
                //     records.push(setRecord({
                //         toolType: rows.toolType,
                //         serialNum: rows.serialNumber,
                //         co2: rows.co2,
                //         partsCosts: rows.partsCost,
                //         salesPrice: rows.salesPrice,
                //         motorUsed: rows.motorUsed,
                //         batteryUsed: rows.batteryUsed,
                //         shipNumber: rows.shipTrackingNumber,
                //         groundNumber: rows.groundTrackingNumber,
                //     }));

                //     console.log("records:",records)

                // })
                console.log("records:", records)
            }
            catch (e) {
                console.log(e);
            }
        }
        getHPTData();
    }, []);

    return (
        <>
            <CO2NavBar />
            <div className="container">
                <HPTSidebar />

                <main style={{ margin: '2%' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Tool Type</th>
                                    <th>Serial Number</th>
                                    <th>CO2</th>
                                    <th>Parts Cost</th>
                                    <th>Sales Price</th>
                                    <th>Motor Used</th>
                                    <th>Battery Used</th>
                                    <th>Ship Tracking Number</th>
                                    <th>Ground Tracking Number</th>
                                </tr>
                                {records.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.toolType}</td>
                                        <td>{item.serialNumber}</td>
                                        <td>{item.co2}</td>
                                        <td>{item.partsCost}</td>
                                        <td>{item.salesPrice}</td>
                                        <td>{item.motorUsed}</td>
                                        <td>{item.batteryUsed}</td>
                                        <td>{item.shipTrackingNumber}</td>
                                        <td>{item.groundTrackingNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                </div>
        </>
    );
}

export default ViewHPTComponent;