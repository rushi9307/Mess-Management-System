import axios from "axios";

const OWNER_REST_API_URL='http://localhost:8080/kitchen';

class OwnerService{

    getOwners(city){
       return axios.get(OWNER_REST_API_URL+'/list/'+city);
    }
    addOwner(owner){
        return axios.post(OWNER_REST_API_URL+'/addOwner', owner);
    }

    deleteOwner(id){
        return axios.delete(OWNER_REST_API_URL+'/deleteOwner/'+id);
    }
    fetchOwnerById(ownerId){
        return axios.get(OWNER_REST_API_URL+'/getOwnerById/'+ownerId);
    }

    updateOwner(owner){
        return axios.put(OWNER_REST_API_URL+'/updateOwner',owner);
    }

    authenticateOwner(email,password){
        return axios.get(OWNER_REST_API_URL+'/authenticateOwner/'+email+'/'+password);
    }
}

export default new OwnerService();