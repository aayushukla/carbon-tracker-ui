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
        if (Email == undefined) {
            alert("Please enter Email")
            return 0;
        }
        if (userData.length == 0) {
            alert("User not found")
            return 0;
        }
        else {
                return userData.items;
        }

    }

    async addUserData(fullname, email, password) {

        const response = await getEntity.user.add({
            username: fullname,
            Email: email,
            password: password
    });

}

}

export default new LoginService();