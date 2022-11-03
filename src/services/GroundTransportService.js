import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();
let columns = [];
var headerData = [];
let bodyData = [];
let rows = [];
let groundData = [];
var yearMap = new Map()
var yearsSet = new Set()

let years = [];
var date = '';
var year = '';
class GroundTransportService {

    async getGroundTransportData() {
        const response = await getEntity.groundTransportation.list();

        console.log("Fetched Motor Data:", response.items);

        return response.items;
    }


    async getGroundTransportDataByID (groundTrackingNumber){

        const groundTransport = await getEntity.groundTransportation.list(
         {
             filter: {
                trackingNumber: {
                   contains: groundTrackingNumber,
                 },
            }
         
         }
        );
 
         console.log("ID:", groundTransport.items);
 
         return groundTransport.items;
     }


     async getGTColumnData () {
        groundData = await getEntity.groundTransportation.list();
        groundData = groundData.items;
        if(groundData) {
            headerData = Object.keys(groundData[0]);
            let colValues = ['ID','test','Tracking No','Route ID', 'CO2','Vehicle ID','Fuel Cost','Labor Cost', 'Date of Shipment', 'Date of Arrival','Bill']
            console.log("FETCHED",headerData)
            
            for (var i=2;i<colValues.length;i++) {
              columns[i] = {field : headerData[i], headerName: colValues[i],
              width: 150}
            }

            return columns;
        }
    }

    async getGTRowsData () {
        groundData = await getEntity.groundTransportation.list();
        groundData = groundData.items;

        if(groundData) {

            for (var i=0; i<groundData.length; i++) {
                headerData = Object.keys(groundData[0]);
                bodyData = Object.values(groundData[i]);
                console.log("BODY DATA",bodyData);
                var jsondata = {};
                for (var j=2;j<bodyData.length;j++) {
                    console.log("HERE2");

                    jsondata[headerData[j]] = bodyData[j];
                }
                jsondata['internalId'] = i;
                rows.push(jsondata);
            }    
        }

    return rows;

    }

    async addGroundTransportData(groundTrackingNumber, routeId, co2, vehicleID,
        fuelCost, laborCost, dateShipped, dateArrived, bill) {
        console.log("Adding Ground Transport Data:")
        const response = await getEntity.groundTransportation.add({
            trackingNumber: groundTrackingNumber,
            routeId: routeId,
            co2: co2,
            vehicleID: vehicleID,
            fuelCost: fuelCost,
            laborCost: laborCost,
            dateShipped: dateShipped,
            dateArrived: dateArrived,
            bill: bill
        });
    }

    async updateGroundTransportData(groundTrackingNumber, routeId, co2, vehicleID,
        fuelCost, laborCost, dateShipped, dateArrived, bill){

        const response = await getEntity.groundTransportation.list(
         {
             filter: {
                trackingNumber: {
                   contains: groundTrackingNumber,
                }
             }
         }
        );
 
         console.log("ID:", response.items[0]);
         console.log("Current date values:" + dateShipped);
         const ID = response.items[0]._id;

         if(routeId == ""){
            console.log("Previous id" + routeId);
            routeId = response.items[0].routeId;
         };
         if(isNaN(co2)){
              //console.log("previous co2" + response.items[0].co2);
              co2 = response.items[0].co2;
         }
         if(vehicleID == ""){
              //console.log("previous vID" + response.items[0].vehicleID)
              vehicleID = response.items[0].vehicleID;
         }
         if(isNaN(fuelCost)){
              fuelCost = parseFloat(response.items[0].fuelCost);
         }
         if(isNaN(laborCost)){
              laborCost = parseFloat(response.items[0].laborCost);
         }
         if(bill == undefined){
              bill = response.items[0].bill;
         }
         if(typeof dateShipped == undefined){
              dateShipped = response.items[0].dateShipped;
         }
         if(typeof dateArrived == undefined){
              dateArrived = response.items[0].dateArrived;
         }

        const updateGround = await getEntity.groundTransportation.update(
        
            {_id:ID, 
            routeId: routeId,
            co2: co2,
            vehicleID: vehicleID,
            fuelCost: fuelCost,
            laborCost: laborCost,
            dateShipped: dateShipped,
            dateArrived: dateArrived,
            bill: bill
            }
        );
        console.log("updated info: " + updateGround.co2);
 
        // return response.items;
    }

    async getYears () {
        for (var j=0;j<groundData.length;j++) {
        date = new Date(groundData[j].dateArrived);
        year = date.getFullYear();
        yearMap.set(year,0)
        yearsSet.add(year)
        years = [...yearsSet]
    }

    
    return years;     
    }

    async getData () {

       for (var j = 0;j<groundData.length;j++){
        date = new Date(groundData[j].dateArrived);
        year = date.getFullYear();

        yearMap.set(year,yearMap.get(year)+groundData[j].co2)      
    
       }  
      
        return [...yearMap.values()];
    }

    

     
}


export default new GroundTransportService();