import CO2NavBar from "./CO2NavBar";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import MotorService from "../services/MotorService";
import BatteryService from "../services/BatteryService";
import SeaTransportService from "../services/SeaTransportService";
import GroundTransportService from "../services/GroundTransportService"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import {Bar} from 'react-chartjs-2';
import Typography from '@mui/material/Typography';
import Chart from 'chart.js/auto';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';

import Loader from '../../../public/gifloader.gif'

import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


let columns = [];
let rows = [];
let graphLabel = [];
let graphData = [];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  let state = {}

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    );
  }
  

function CO2History() {

    const { data, loading } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 4,
        maxColumns: 6,
      });
    

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setComponentVal] = useState('');
    const [visible, setVisible] = useState(false);

    const [displayAlert, setDisplay] = useState(false);

    const [loader, setloader] = useState(false)


    async function getCO2Val() {

      setloader(true);

        if(value == 'Motor') {
            rows = await MotorService.getMotorRowsData();
            columns = await MotorService.getMotorColumnData();
            graphLabel = await MotorService.getYears();
            graphData = await MotorService.getData();
        }

        if(value == 'Battery') {
            rows = await BatteryService.getBatteryRowsData();
            columns = await BatteryService.getBatteryColumnData();
            graphLabel = await BatteryService.getYears();
            graphData = await BatteryService.getData();

        }

        if(value == 'Sea Transport') {
          rows = await SeaTransportService.getSTRowsData();
          columns = await SeaTransportService.getSTColumnData();
          graphLabel = await SeaTransportService.getYears();
          graphData = await SeaTransportService.getData();

      }

      if(value == 'Ground Transport') {
          rows = await GroundTransportService.getGTRowsData();
          columns = await GroundTransportService.getGTColumnData();
          graphLabel = await GroundTransportService.getYears();
          graphData = await GroundTransportService.getData();

      }

      if(value == '')
      {
        setDisplay(true)

      }


      setloader(false);


        
        setVisible(true);

        state = {
        labels: graphLabel,
        datasets: [{
            label: 'CO2 Emission',
            backgroundColor: 'rgba(75,192,192,1)',
            data: graphData
            }]
        }
    }

    const handleSubmit = event => {
    event.preventDefault();
    setComponentVal('');
    getCO2Val();
    
    };

    return (
    <>



        
        
        <CO2NavBar />

        {loader ? 
     <div style={{textAlign:'center'}}>
                    
     <img src={Loader} alt="" style={{width:'50%', height:'40%'}}/>
     
 </div>
:     <></>}

{!loader ?
    
<div className="container">

<Card style={{borderWidth: 0, borderColor: 'transparent', elevation: 0, width:'100%'}}>
         
<Card.Title style={{fontSize: '25px', marginTop:'20px', fontWeight:'bold'}}>CO2 History</Card.Title>
<Form onSubmit={handleSubmit}>

{displayAlert ?  <Alert severity="error"> Please select a component type </Alert>

: null }

<Card.Text style={{fontSize: '20px'}}>
    Select a Component
</Card.Text>
<select style={{width:'30rem', height:'3rem', marginBottom:'40px'}} value={value} onChange={event => setComponentVal(event.target.value)} placeholder="Choose a Component">
    <option value="Select Component">Select Component</option>
    <option value="Motor">Motor</option>
    <option value="Battery">Battery</option>
    <option  value="Sea Transport">Sea Transportation</option>
    <option value="Ground Transport">Ground Transportation</option>
</select>
<Button variant="primary" type="submit" 
style={{ fontSize: "15px", marginLeft:'10px', marginBottom:'2px', backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}}
>
Show CO2 History Table

</Button>
<Button  style={{ fontSize: "15px", marginLeft:'10px', marginBottom:'2px', backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}} onClick={handleOpen}>Generate Graph</Button>

<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description">
<Box sx={style}>
<Typography id="modal-modal-title" variant="h6" component="h1">
  Highest CO2 Emission : {Math.max(...graphData)} 
  </Typography>
<Bar
  data={state}
  options={{
    title:{
      display:true,
      text:'CO2 Emission',
      fontSize:20
    },
    legend:{
      display:true,
      position:'right'
    }}}
/>
</Box>
</Modal>
</Form>
</Card>
</div>
: <></>}

{visible && columns && columns.length && !loader ?

<div className="container">
<div style={{ height: 400, width: '100%' }}>
<DataGrid
    rows={rows}
    getRowId={(row) => row.internalId}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    sx={{
      
        '&.MuiDataGrid-root': {
        border: 'none',
        }
    }}

    loading={loading}
    components={{
  Toolbar: CustomToolbar,
}}

/>

</div>

</div>


: null}





       
    </>

    );
    
}

export default CO2History;

