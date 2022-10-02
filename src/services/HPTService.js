import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();

class HPTService {

    async getHPTData() {
        const response = await getEntity.hornetPowerTool.list();

        console.log("Fetched Motor Data:", response.items);

        return response.items;
    }


    async getHPTDataByID (serialNumber){

        const hptData = await getEntity.hornetPowerTool.list(
         {
             filter: {
                serialNumber: {
                   contains: serialNumber,
                 },
            }
         
         }
        );
 
         console.log("ID:", hptData.items);
 
         return hptData.items;
     }
     
}


export default new HPTService();