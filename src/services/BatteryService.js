import ConnectionService from './ConnectionService';


class BatteryService {

    async getBatteryData() {
        const getEntity = ConnectionService();
        const response = await getEntity.battery.list();

        console.log("Fetched Battery Data:", response.items);

        return response.items;
    }

    //working
    async addBattery() {
        console.log("Adding battery:")
        const response = await getDetailsFunction.battery.add({
            co2: 60,
            costManufactured: 20,
            dateManufactured: "2023-09-02",
            partNumber: "200",
            salesPrice: 100,
            serialNumber: "123456700",
            // _id: "01838e6c-398b-6000-019a-92d51a835481",
            // _owner: "TestNode"
        });

    }
}


export default new BatteryService();