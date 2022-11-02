import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();

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

     async addGroundTransportData(trackingNumber, routeId, co2, vehicleID,
        fuelCost, laborCost, dateShipped, dateArrived, bill) {
        console.log("Adding Ground Transport Data:")
        const response = await getEntity.groundTransportation.add({
            trackingNumber: trackingNumber,
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
     
}


export default new GroundTransportService();