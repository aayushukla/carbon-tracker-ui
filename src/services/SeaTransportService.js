import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();

class SeaTransportService {

    async getSeaTransportData() {
        const response = await getEntity.seaTransportation.list();

        console.log("Fetched Motor Data:", response.items);

        return response.items;
    }


    async getSeaTransportDataByID (serialNumber){

        const seaTransport = await getEntity.seaTransportation.list(
         {
             filter: {
                 serialNumber: {
                   contains: serialNumber,
                 },
            }
         
         }
        );
 
         console.log("ID:", seaTransport.items);
 
         return seaTransport.items;
     }
     
}


export default new SeaTransportService();