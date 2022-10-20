import ConnectionService from './ConnectionService';


const getEntity = ConnectionService();

let columns = [];
var headerData = [];
let bodyData = [];
let rows = [];
let batteryData = [];

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

    async getBatteryColumnData ()
    {
       batteryData = await getEntity.battery.list();
       batteryData = batteryData.items;

       if(batteryData){
           headerData = Object.keys(batteryData[0]);
           console.log("FETCHED",batteryData)
           console.log(headerData)
           
           for (var i=2;i<headerData.length;i++) {
             columns[i] = {field : headerData[i]}
           }
        }
        return columns;

    }

    async getBatteryRowsData (){
        batteryData = await getEntity.battery.list();
        batteryData = batteryData.items;
       console.log(batteryData);
       if(batteryData){
           for (var i=0; i<batteryData.length; i++) {
               headerData = Object.keys(batteryData[0]);
               bodyData = Object.values(batteryData[i]);
               var jsondata = {};
               for (var j=2;j<bodyData.length;j++) {
                   jsondata[headerData[j]] = bodyData[j];
               }
               jsondata['internalId'] = i;
               rows.push(jsondata);
           }    
           console.log(rows)

        }

        return rows;

    }

    async getYears () {
       let years = [];
       for (var j=0;j<batteryData.length;j++) {
           years.push(batteryData[j].dateManufactured);
       }
       return years;    
    }

    async getData () {
       let data = [];
       for (var j=0;j<batteryData.length;j++) {
           data.push(batteryData[j].co2);
       }
        return data;
    }
}


export default new BatteryService();