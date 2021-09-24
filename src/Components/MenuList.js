import React, { Component } from "react";
import MenuService from "../Service/MenuService";


class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
                menuList:[]      
        }
        this.reloadMenuList=this.reloadMenuList.bind(this);
    }
    componentDidMount(){
        this.reloadMenuList();
        
    }
    reloadMenuList(){
        MenuService.getMenuList(window.localStorage.getItem("ownerId")).then((response)=>{
            this.setState({menuList:response.data});
        });
       
       // this.setState({menuList:this.state.owner.menuList});
   
    }

    handleDelete=(menuId)=>{
        MenuService.deleteMenu(menuId, window.localStorage.getItem("ownerId")).then((response)=>{
            this.setState({menuList:this.state.menuList.filter(menu=>menuId!==menu.id)});
        })
    }

    updateMenu=(id)=> {
        window.localStorage.setItem("menuId", id);
        this.props.history.push('/update-menu');
    }

    addMenu=()=> {
        //window.localStorage.setItem("ownerId", window.localStorage.getItem("ownerId"));
        this.props.history.push('/add-menu');
    }


    render(){
        return (
            <div>
                <h1 className="text-center">Menu List</h1>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addMenu()}> Add Menu</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Menu Id</td>
                            <td>Thali Name</td>
                            <td>Thali Description</td>
                            <td>Thali Price</td>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.menuList.map(menu=>{return(
                                <tr key={menu.id}>
                                    <td>{menu.id}</td>
                                    <td>{menu.thaliName}</td>
                                    <td>{menu.describeThali}</td>
                                    <td>{menu.price}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateMenu(menu.id)} style={{marginLeft: '20px'}}> Update</button></td>
                                    <td><button type="button" className="btn btn-danger" onClick={()=>this.handleDelete(menu.id)}>Delete</button></td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Menu;