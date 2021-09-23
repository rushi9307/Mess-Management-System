import axios from "axios";

const USER_REST_API_URL='http://localhost:8080/user';

class UserService{

    addUser(user,ownerId){
        return axios.post(USER_REST_API_URL+'/addUser/'+ownerId, user);
    }

}

export default new UserService();