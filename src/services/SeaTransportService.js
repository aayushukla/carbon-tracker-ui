import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();

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
     
}


export default new SeaTransportService();