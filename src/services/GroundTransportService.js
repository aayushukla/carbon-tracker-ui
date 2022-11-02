import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();
let columns = [];
var headerData = [];
let bodyData = [];
let rows = [];
let groundData = [];
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
            console.log("FETCHED",headerData)
            
            for (var i=2;i<headerData.length;i++) {
              columns[i] = {field : headerData[i]}
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

     
}


export default new GroundTransportService();