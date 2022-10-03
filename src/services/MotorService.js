import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();

class MotorService {

    async getMotorData() {
        const response = await getEntity.motor.list();

        console.log("Fetched Motor Data:", response.items);

        return response.items;
    }


    // async getMotorDataByID (serialNumber){

    //     const motorData = await getEntity.motor.list(
    //      {
    //          filter: {
    //              SerialNumber: {
    //                contains: serialNumber,
    //              },
    //         }
         
    //      }
    //     );
 
    //      console.log("ID:", motorData.items);
 
    //      return motorData.items;
    //  }
     
}


export default new MotorService();