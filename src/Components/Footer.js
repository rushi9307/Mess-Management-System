import React, { Component } from 'react';
import '../CSS/footer.css';

class Footer extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <center>
                        <h1>this is footer</h1>
                    </center>
                    <span className="text-muted">All Rights Reserved 2021 @eRasoi</span>
                </footer>
            </div>
        );
    }
}

export default Footer;