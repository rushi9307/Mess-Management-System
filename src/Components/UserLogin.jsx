import React, { Component } from 'react';

class UserLogin extends Component {
constructor(props){
    super(props)

    this.state = {

    }
}

    render() {
        return (
            <div>
                <center>
                    <h1 className="text-center">User Login</h1>
                    <hr/>
                    <form className="tbl">
                        <div className="form-group">
                            <label><h3>First Name:</h3></label>
                            <input placeholder="Enter Email" name="email" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label><h3>Last Name:</h3></label>
                            <input placeholder="Enter Password" name="password" className="form-control"/>
                        </div>

                        <div>
                            <button className="btn btn-success btnAdd">Login User</button>
                        </div>
                    </form>
                </center>
            </div>
        );
    }
}

export default UserLogin;