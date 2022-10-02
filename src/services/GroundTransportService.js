import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();

class GroundTransportService {

    async getGroundTransportData() {
        const response = await getEntity.motor.list();

        console.log("Fetched Motor Data:", response.items);

        return response.items;
    }


    async getGroundTransportDataByID (serialNumber){

        const groundTransport = await getEntity.groundTransportation.list(
         {
             filter: {
                 serialNumber: {
                   contains: serialNumber,
                 },
            }
         
         }
        );
 
         console.log("ID:", groundTransport.items);
 
         return groundTransport.items;
     }
     
}


export default new GroundTransportService();