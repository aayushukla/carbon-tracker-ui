import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();

class MotorService {

    async getMotorData() {
        const response = await getEntity.motor.list();

        console.log("Fetched Motor Data:", response.items);

        return response.items;
    }


    async getMotorDataByID (serialNumber){

        const motorData = await getEntity.motor.list(
         {
             filter: {
                 serialNumber: {
                   contains: serialNumber,
                 },
            }
         
         }
        );
 
         console.log("ID:", motorData.items);
 
         return motorData.items;
     }
     async addMotorData(PartNumber, serialNumber, co2, dateManufactured,
        costManufactured,salesPrice) {
        console.log("Adding HPT Data:")
        const response = await getEntity.motor.add({
            partNumber: PartNumber,
            serialNumber: serialNumber,
            co2: co2,
            dateManufactured: dateManufactured,
            costtomanufacture: costManufactured,
            salesPrice: salesPrice,
            
        });
    }
}


export default new MotorService();