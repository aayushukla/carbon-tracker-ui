import ConnectionService from './ConnectionService';
const getEntity = ConnectionService();

class HPTService {

    async getHornetPowerToolData() {
        const response = await getEntity.hornetPowerTool.list();

        console.log("Fetched HPT Data:", response.items);

        return response.items;
    }

    async getHornetPowerToolDataByID (serialNumber){

        const hornetPowerToolData = await getEntity.hornetPowerTool.list(
            {
             filter: {
                 serialNumber: {
                   contains: serialNumber,
                 },
            }
        }
        );

         //Displays Hornet Power Tool as a list of attributes.
         console.log("HPT Items",hornetPowerToolData.items)
         //Displays Hornet Power Tool Serial Number.
         console.log("HPT ID:", hornetPowerToolData.items[0].serialNumber);
         //Displays Serial Number for the motor used in HPT.
         console.log("HPT Moter Used", hornetPowerToolData.items[0].motorUsed);
         //Displays Serial Number for the batter used in HPT.
         console.log("HPT Battery Used", hornetPowerToolData.items[0].batteryUsed);

         //Returns the entire list of attributes for the HPT with serialNumber
         //From this values we can pull all other part data.
         return hornetPowerToolData.items;
     }
}


export default new HPTService();