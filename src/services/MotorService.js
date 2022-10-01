import ConnectionService from './ConnectionService';

const getEntity = ConnectionService();

class MotorService {

    async getMotorData() {
        const response = await getEntity.motor.list();

        console.log("Fetched Motor Data:", response.items);

        return response.items;
    }
}


export default new MotorService();