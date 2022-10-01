import ConnectionService from './ConnectionService';

class MotorService {

    async getMotorData() {
        const getEntity = ConnectionService();
        const response = await getEntity.motor.list();

        console.log("Fetched Motor Data:", response.items);

        return response.items;
    }
}


export default new MotorService();