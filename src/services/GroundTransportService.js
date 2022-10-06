import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();

class GroundTransportService {

    async getGroundTransportData() {
        const response = await getEntity.motor.list();

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
     
}


export default new GroundTransportService();