import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import '../CSS/jumbotron.css';



const Jumbotron = () =>{
    return (
        <div className="jumbotron jumbotron-fluid">
         <div className="container">
          <h1 className="display-2" id="fontColor">Our aim is to provide high quality food!!</h1>
            
           <Home/>

         </div>
        </div>
    );
}
export default Jumbotron;

