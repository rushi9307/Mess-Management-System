import axios from "axios";

const MENU_REST_API_URL='http://localhost:8080/menu';

class MenuService{

    getMenuList(ownerId){
        return axios.get(MENU_REST_API_URL+"/list/"+ownerId)
    }
    fetchMenuById(menuId){
        return axios.get(MENU_REST_API_URL+"/getMenu/"+menuId);
    }

    addMenu(menu,ownerId){
        return axios.post(MENU_REST_API_URL+'/addMenu/'+ownerId, menu);
    }

    deleteMenu(menuId,ownerId){
        return axios.delete(MENU_REST_API_URL+'/deleteMenu/'+menuId+"/"+ownerId);
    }
  

    updateMenu(menu,ownerId){
        return axios.put(MENU_REST_API_URL+'/updateMenu/'+ownerId,menu);
    }

   
}

export default new MenuService();