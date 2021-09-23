import React, { Component } from "react";
import OwnerService from "../Service/OwnerService";


class OwnerComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            owners:[]
        }
        this.reloadOwnerList=this.reloadOwnerList.bind(this);
    }
    componentDidMount(){
        this.reloadOwnerList();
        
    }
    reloadOwnerList(){
    OwnerService.getOwners(window.localStorage.getItem("city")).then((response)=>
        this.setState({owners:response.data})       
    );
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

    addOwner=()=> {
        window.localStorage.removeItem("ownerId");
        this.props.history.push('/add-owner');
    }

    handleSelectMess=(id)=>{
        window.localStorage.removeItem("ownerId");
        window.localStorage.setItem("ownerId", id);
        this.props.history.push('/add-user');
    }


    render(){
        return (
            <div>
                <h1 className="text-center">Users List</h1>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addOwner()}> Add Owner</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Owner Id</td>
                            <td>Owner First Name</td>
                            <td>Owner Last Name</td>
                            <td>Owner Kitchen Name</td>
                            <td>Owner email</td>
                            <td>Owner Mobile No</td>
                            <td>Owner Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.owners.map(owner=>{return(
                                <tr key={owner.id}>
                                    <td>{owner.id}</td>
                                    <td>{owner.firstName}</td>
                                    <td>{owner.lastName}</td>
                                    <td>{owner.kitchenName}</td>
                                    <td>{owner.email}</td>
                                    <td>{owner.mobileNo}</td>
                                    <td>{owner.address}</td>
                                    <td><button type="button" className="btn btn-success" onClick={()=>this.handleSelectMess(owner.id)}>Select Mess</button></td>
                                    <td><button type="button" className="btn btn-danger" onClick={()=>this.handleDelete(owner.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => this.updateOwner(owner.id)} style={{marginLeft: '20px'}}> Update</button></td>
                                   
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

export default OwnerComponent;