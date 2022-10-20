import ConnectionService from './ConnectionService';


const getEntity = ConnectionService();

class BatteryService {

    async getBatteryData() {
        const response = await getEntity.battery.list();

        console.log("Fetched Battery Data:", response.items);

        return response.items;
    }

     async getBatteryDataByID (serialNumber){

         const batteryData = await getEntity.battery.list(
             {
              filter: {
                  serialNumber: {
                    contains: serialNumber,
                  },
             }
         
          }
         );
 
          console.log("Battery ID:", batteryData.items);
 
          return batteryData.items;
      }

   

        async addBatteryData(partNumber, serialNumber, co2, dateManufactured,
            costManufactured,salesPrice) {
        console.log("Adding battery:")
        const response = await getEntity.battery.add({
            co2: co2,
            costManufactured: costManufactured,
            dateManufactured: dateManufactured,
            partNumber: partNumber,
            salesPrice: salesPrice,
            serialNumber: serialNumber,

        });

    }
}


export default new BatteryService();