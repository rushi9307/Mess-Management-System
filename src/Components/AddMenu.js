import React, { Component } from 'react'
import MenuService from "../Service/MenuService";

class AddMenu extends Component{

    constructor(props){
        super(props);
        this.state ={
            thaliName: '',
            describeThali: '',
            price:''
           
        }
        this.saveMenu = this.saveMenu.bind(this);
        
    }
    

    saveMenu = (e) => {
        e.preventDefault();
        let menu = {
                        thaliName: this.state.thaliName, 
                        describeThali: this.state.describeThali,
                        price: this.state.price, 
                        
                    };
        MenuService.addMenu(menu,window.localStorage.getItem('ownerId'))
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
                <h2 className="text-center">Add Menu</h2>
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

               
                <button className="btn btn-success" onClick={(e)=>this.saveMenu(e)}>Add Menu</button>
            </form>
    </div>
        );
    }
}

export default AddMenu; 