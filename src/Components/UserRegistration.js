import React, { Component } from 'react'
import UserService from "../Service/UserService";

class UserRegistration extends Component{

    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email:'',
            password: '',
            mobileNo: '',
            city:'',
            address: '',
           // message: null
        }
        this.saveUser = this.saveUser.bind(this);
        
    }
    

    saveUser = (e) => {
        e.preventDefault();
        let user = {
                        firstName: this.state.firstName, 
                        lastName: this.state.lastName,
                        email:this.state.email,
                        password: this.state.password, 
                        mobileNo: this.state.mobileNo, 
                        address: this.state.address, 
                        city:this.state.city,
                    };
        UserService.addUser(user,window.localStorage.getItem('ownerId'))
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
               // this.setState({message : 'owner added successfully.'});
               this.props.history.push('/owners');
            })
    }

    loginUser=()=>{
        this.props.history.push('/userLogin');
    }


    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add OWner</h2>
                <form>
                <div className="form-group">
                    <label><h3>First Name:</h3></label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={(e)=>this.onChange(e)}/>
                </div>

                <div className="form-group">
                    <label><h3>Last Name:</h3></label>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={(e)=>this.onChange(e)}/>
                </div>

                <div className="form-group">
                    <label><h3>Email:</h3></label>
                    <input type="email" placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={(e)=>this.onChange(e)}/>
                </div>

                <div className="form-group">
                    <label><h3>Password:</h3></label>
                    <input type="password" placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={(e)=>this.onChange(e)}/>
                </div>

                <div className="form-group">
                    <label><h3>Mobile NO.:</h3></label>
                    <input type="number" placeholder="Mobile No." name="mobileNo" className="form-control" value={this.state.mobileNo} onChange={(e)=>this.onChange(e)}/>
                </div>

                <div className="form-group">
                    <label><h3>address:</h3></label>
                    <input type="text" placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={(e)=>this.onChange(e)}/>
                </div>
                <div className="form-group">
                    <label><h3>City:</h3></label>
                    <input type="text" placeholder="City" name="city" className="form-control" value={this.state.city} onChange={(e)=>this.onChange(e)}/>
                </div>
                <button className="btn btn-success" onClick={(e)=>this.saveUser(e)}>Register</button>
                <button className="btn btn-success" onClick={()=>this.loginUser()}>Login</button>
            </form>
    </div>
        );
    }
}

export default UserRegistration; 