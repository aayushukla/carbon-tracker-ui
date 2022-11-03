import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();
let columns = [];
var headerData = [];
let bodyData = [];
let rows = [];
let seaData = [];
var yearMap = new Map()
var yearsSet = new Set()

let years = [];
var date = '';
var year = '';
class SeaTransportService {

    async getSeaTransportData() {
        const response = await getEntity.seaTransportation.list();

        console.log("Fetched Motor Data:", response.items);

        return response.items;
    }


    async getSeaTransportDataByID (shipTrackingNumber){

        const seaTransport = await getEntity.seaTransportation.list(
         {
             filter: {
                trackingNumber: {
                   contains: shipTrackingNumber,
                 },
            }
         
         }
        );
 
         console.log("ID:", seaTransport.items);
 
         return seaTransport.items;
     }

     async addSeaTransportData(trackingNumber, routeID, co2, shipID,
        fuelCost, laborCost, dateShipped, dateArrived, bill) {
        console.log("Adding Sea Transport Data:")
        const response = await getEntity.seaTransportation.add({
            trackingNumber: trackingNumber,
            routeID: routeID,
            co2: co2,
            shipID: shipID,
            fuelCost: fuelCost,
            laborCost: laborCost,
            dateShipped: dateShipped,
            dateArrived: dateArrived,
            bill: bill
        });

    }


    async getSTColumnData () {
        seaData = await getEntity.seaTransportation.list();
        seaData = seaData.items;
        if(seaData) {
            headerData = Object.keys(seaData[0]);
            console.log("FETCHED",headerData)
            let colValues = ['ID','test','Tracking No','Route ID', 'CO2','Ship ID','Fuel Cost','Labor Cost', 'Date of Shipment', 'Date of Arrival','Bill']
            for (var i=2;i<headerData.length;i++) {
              columns[i] = {field : headerData[i], headerName:colValues[i], width:150}
            }

            return columns;
        }

    }

    async getSTRowsData () {
        seaData = await getEntity.seaTransportation.list();
        seaData = seaData.items;

        if(seaData) {

            for (var i=0; i<seaData.length; i++) {
                headerData = Object.keys(seaData[0]);
                bodyData = Object.values(seaData[i]);
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

    async getYears () {
        for (var j=0;j<seaData.length;j++) {
        date = new Date(seaData[j].dateArrived);
        year = date.getFullYear();
        yearMap.set(year,0)
        yearsSet.add(year)
        years = [...yearsSet]
    }

    
    return years;     
    }

    async getData () {

       for (var j = 0;j<seaData.length;j++){
        date = new Date(seaData[j].dateArrived);
        year = date.getFullYear();

        yearMap.set(year,yearMap.get(year)+seaData[j].co2)      
    
       }  
      
        return [...yearMap.values()];
    }

     
     
}


export default new SeaTransportService();