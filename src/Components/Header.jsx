import React, { Component } from 'react';
import '../CSS/navbar.css';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-md navbar-dark nav">
                        <div>
                            <a href="/" className="navlink">Home</a>
                            <a href="/aboutUs" className="navlink">Adout Us</a>
                          {/*}  <a href="" className="navlink">Contact Us</a> */}
                            <a href="/userLogin" className="navlink">User Login</a>
                            <a href="/ownerLogin" className="navlink">Owner Login</a>
                            <a href="/add-owner" className="navlink">Add New Owner</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;