import React, { Component } from 'react'
import MenuService from "../Service/MenuService";

class UpdateMenu extends Component{

    constructor(props){
        super(props);
        this.state ={
            id:'',
            thaliName: '',
            describeThali: '',
            price:'',
           
        }
        this.updateMenu = this.updateMenu.bind(this);
        
        this.loadMenu=this.loadMenu.bind(this);
    }

    componentDidMount() {
        this.loadMenu();
    }

    loadMenu() {
        
        MenuService.fetchMenuById(window.localStorage.getItem("menuId"))
            .then((res) => {
                let menu = res.data;
                this.setState({
                id: menu.id,
                thaliName: menu.thaliName,
                describeThali: menu.describeThali,
                price: menu.price
                })
            });
            console.log("Owner id is "+window.localStorage.getItem("ownerId"));
    }

    updateMenu = (e) => {
        e.preventDefault();
        let menu = {
                        id:this.state.id,
                        thaliName: this.state.thaliName, 
                        describeThali: this.state.describeThali,
                        price: this.state.price, 
                    };
        MenuService.updateMenu(menu,window.localStorage.getItem("ownerId"))
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
               // this.setState({message : 'owner added successfully.'});
               this.props.history.push('/menu-list');
            })
    }


    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Update Menu</h2>
                <form>
                <div className="form-group">
                    <label><h3>Thali Name:</h3></label>
                    <input placeholder="Thali Name" name="thaliName" className="form-control" value={this.state.thaliName} onChange={(e)=>this.onChange(e)}/>
                </div>

                <div className="form-group">
                    <label><h3>Thali Description:</h3></label>
                    <input placeholder="Thali Description" name="describeThali" className="form-control" value={this.state.describeThali} onChange={(e)=>this.onChange(e)}/>
                </div>

                <div className="form-group">
                    <label><h3>Price:</h3></label>
                    <input type="number" placeholder="Thali Price" name="price" className="form-control" value={this.state.price} onChange={(e)=>this.onChange(e)}/>
                </div>

               
                <button className="btn btn-success" onClick={(e)=>this.updateMenu(e)}>updateMenu Menu</button>
            </form>
    </div>
        );
    }
}

export default UpdateMenu; 