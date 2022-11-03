import ConnectionService from './ConnectionService';


const getEntity = ConnectionService();

let columns = [];
var headerData = [];
let bodyData = [];
let rows = [];
let batteryData = [];
var yearMap = new Map()
var yearsSet = new Set()

let years = [];
var date = '';
var year = '';

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
        let colValues =   ['ID', 'Test', 'Part Number', 'Serial Number', 'CO2', 'Date of Manufacturing', 'Manufacturing Cost', 'Sales Price']

        for (var i=2;i<headerData.length;i++) {
          columns[i] = {field : headerData[i], headerName: colValues[i],width:150}
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

    async updateBatteryData(partNumber, serialNumber, co2, dateManufactured,
        costManufactured,salesPrice) {
    
            const response = await getEntity.battery.list(
                {
                 filter: {
                     serialNumber: {
                       contains: serialNumber,
                     },
                }
            
             }
            );
    
            console.log("ID:", response.items[0]);
            const ID = response.items[0]._id;
    
            if(partNumber == ""){
               
                partNumber = response.items[0].partNumber;
             } 
             
             if(dateManufactured == ""){
               
                dateManufactured = response.items[0].dateManufactured;
             } 
    
             if(isNaN(co2)){
            
                co2 = response.items[0].co2;
             }
    
             if(isNaN(costManufactured)){
                costManufactured = parseFloat(response.items[0].costManufactured);
           }
           
           if(isNaN(salesPrice)){
                salesPrice = parseFloat(response.items[0].salesPrice);
           }
    
           const updateBattery = await getEntity.battery.update(
            
            {_id:ID, 
            partNumber: partNumber ,
            co2: co2,
            dateManufactured: dateManufactured,
            costManufactured: costManufactured,
            salesPrice: salesPrice,
            }
        );
        console.log("updated info: " + updateBattery.co2);
      
    }

    async getYears () {
        for (var j=0;j<batteryData.length;j++) {
        date = new Date(batteryData[j].dateManufactured);
        year = date.getFullYear();
        yearMap.set(year,0)
        yearsSet.add(year)
        years = [...yearsSet]
    }

    
    return years;     
    }

    async getData () {

       for (var j = 0;j<batteryData.length;j++){
        date = new Date(batteryData[j].dateManufactured);
        year = date.getFullYear();

        yearMap.set(year,yearMap.get(year)+batteryData[j].co2)      
    
       }  
      
        return [...yearMap.values()];
    }
}





export default new BatteryService();