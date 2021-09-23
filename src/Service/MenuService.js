import axios from "axios";

const MENU_REST_API_URL='http://localhost:8080/kitchen';

class MenuService{

    addMenu(menu,ownerId){
        return axios.post(MENU_REST_API_URL+'/addMenu/'+ownerId, menu);
    }

    deleteMenu(menu,ownerId){
        return axios.delete(MENU_REST_API_URL+'/deleteMenu/'+ownerId);
    }
  

    updateOwner(menu){
        return axios.put(MENU_REST_API_URL+'/updateOwner',menu);
    }

   
}

export default new MenuService();