import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();
let columns = [];
var headerData = [];
let bodyData = [];
let rows = [];
let motorData = [];
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
        console.log("Adding Motor Data:")
        const response = await getEntity.motor.add({
            PartNumber: PartNumber,
            serialNumber: serialNumber,
            co2: co2,
            dateManufactured: dateManufactured,
            costManufactured: costManufactured,
            salesPrice: salesPrice,
            
        });
    }

    async getMotorColumnData () {
        motorData = await getEntity.motor.list();
        motorData = motorData.items;
        if(motorData) {
            headerData = Object.keys(motorData[0]);
            console.log("FETCHED",motorData)
            
            for (var i=2;i<headerData.length;i++) {
              columns[i] = {field : headerData[i]}
            }

            return columns;
        }

    }

    async getMotorRowsData () {
        motorData = await getEntity.motor.list();
        motorData = motorData.items;

        if(motorData) {

            for (var i=0; i<motorData.length; i++) {
                headerData = Object.keys(motorData[0]);
                bodyData = Object.values(motorData[i]);
                console.log("BODY DATA",bodyData);
                var jsondata = {};
                for (var j=2;j<bodyData.length;j++) {
                    console.log("HERE2");

                    jsondata[headerData[j]] = bodyData[j];
                }
                jsondata['internalId'] = i;
                rows.push(jsondata);
            }    
        }

    return rows;

    }

    async getYears () {
        let years = [];
        for (var j=0;j<motorData.length;j++) {
            years.push(motorData[j].dateManufactured);
        }
        return years;  
    }

    async getData () {
        let data = [];
        for (var j=0;j<motorData.length;j++) {
            data.push(motorData[j].co2);
        }
        return data;
    }  
   
    async updateMotorData(PartNumber, serialNumber, co2, dateManufactured,
        costManufactured,salesPrice) {
    
            const response = await getEntity.motor.list(
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
    
            if(PartNumber == ""){
               
                PartNumber = response.items[0].PartNumber;
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
    
           const updateMotor = await getEntity.motor.update(
            
            {_id:ID, 
            PartNumber: PartNumber ,
            co2: co2,
            dateManufactured: dateManufactured,
            costManufactured: costManufactured,
            salesPrice: salesPrice,
            }
        );
        console.log("updated info: " + updateMotor.co2);
      
    }
}


export default new MotorService();