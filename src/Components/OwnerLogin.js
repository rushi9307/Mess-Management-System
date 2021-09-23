import React, { Component } from 'react';
import OwnerService from '../Service/OwnerService';

class OwnerLogin extends Component {
constructor(props){
    super(props)

    this.state = {
        email:'',
        password:'',
        owner:{
            id:'',
            firstName:'',
            menuList:[]
        }
    }
    this.handleLogin=this.handleLogin.bind(this);
}
handleLogin=(e)=>{
    e.preventDefault();
    console.log("Owner details"+this.state.email+" "+this.state.password);
    OwnerService.authenticateOwner(this.state.email,this.state.password).then(response=>{
        this.setState({owner:response.data});
        window.localStorage.setItem('owner',this.state.owner);
        console.log("Welcome "+this.state.owner.firstName);
        console.log("Logged in successfully");
        this.props.history.push('/');
    });
}
onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
}

    render() {
        return (
            <div>
                <center>
                    <h2 className="text-center">Owner Login</h2>
                    <form className="tbl">
                        <div className="form-group">
                            <label><h3>First Name:</h3></label>
                            <input placeholder="Enter Owner Email" name="email" className="form-control" onChange={(e)=>this.onChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label><h3>Last Name:</h3></label>
                            <input placeholder="Enter Owner Password" name="password" className="form-control" onChange={(e)=>this.onChange(e)}/>
                        </div>

                        <div>
                            <button className="btn btn-success btnAdd" onClick={(e)=>this.handleLogin(e)}>Login Owner</button>
                        </div>
                    </form>
                </center>
            </div>
        );
    }
}

export default OwnerLogin;