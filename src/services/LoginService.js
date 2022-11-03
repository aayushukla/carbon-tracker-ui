import ConnectionService from "./ConnectionService";

const getEntity = ConnectionService();


class LoginService {

    async getUserByID(Email) {

        const userData = await getEntity.user.list(
            {
                filter: {
                    Email: {
                        contains: Email,
                    }
                }
            }
        );


        console.log(userData.items)
        if (userData.length == 0 || Email == undefined) {
            return 0;
        }
        else {
            
                return userData.items;
        }

    }
}

export default new LoginService();