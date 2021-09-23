import React, { Component } from "react";
import OwnerService from "../Service/OwnerService";


class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            owner:{
                menuList:[]
            }
            
        }
        this.reloadMenuList=this.reloadMenuList.bind(this);
    }
    componentDidMount(){
        this.reloadMenuList();
        
    }
    reloadMenuList(){
        this.setState({owner:window.localStorage.getItem('owner')});
       // this.setState({menuList:this.state.owner.menuList});
   
    }

    handleDelete=(ownerId)=>{
        OwnerService.deleteOwner(ownerId).then((response)=>{
            this.setState({owners:this.state.owners.filter(owner=>ownerId!==owner.id)});
        })
    }

    updateOwner=(id)=> {
        window.localStorage.setItem("ownerId", id);
        this.props.history.push('/update-owner');
    }

    addMenu=()=> {
        window.localStorage.setItem("ownerId", this.state.owner.id);
        this.props.history.push('/add-menu');
    }


    render(){
        return (
            <div>
                <h1 className="text-center">Users List</h1>
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
                            this.state.owner.menuList.map(menu=>{return(
                                <tr key={menu.id}>
                                    <td>{menu.thaliName}</td>
                                    <td>{menu.describeThali}</td>
                                    <td><button type="button" className="btn btn-danger" onClick={()=>this.handleDelete(menu.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => this.updateMenu(menu.id)} style={{marginLeft: '20px'}}> Update</button></td>
                                   
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