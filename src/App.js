//import logo from './logo.svg';
import './App.css';
import OwnerComponent from "./Components/OwnerComponent";
import AddOwner from "./Components/AddOwner";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UpdateOwner from './Components/UpdateOwner';
//import CityList from "./Components/CityList";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import OwnerLogin from './Components/OwnerLogin';
import UserLogin from './Components/UserLogin';
import UserRegistration from './Components/UserRegistration';
import AddMenu from './Components/AddMenu';
import MenuList from './Components/MenuList';
import UpdateMenu from './Components/UpdateMenu';


function App() {
  return (
    <div>
          <Router>
          <h1 className="text-center" >E-Rasoi</h1>
            <Header/>
              <div className="col-md-12">
            
                  <Switch>
                      <Route path="/" exact component={Home} />
                      
                         <Route path="/owners" component={OwnerComponent} /> 
                         <Route path="/add-owner" component={AddOwner} />
                         <Route path="/add-user" component={UserRegistration} />
                         <Route path="/update-owner" component={UpdateOwner} />
                         <Route path="/aboutUs" component={AboutUs} ></Route>
                         <Route path="/ownerLogin" component={OwnerLogin} ></Route>
                         <Route path="/userLogin" component={UserLogin} ></Route>
                         <Route path="/add-menu" component={AddMenu} ></Route>
                         <Route path="/menu-list" component={MenuList} ></Route>
                         <Route path="/update-menu" component={UpdateMenu} />
                  </Switch>
              </div>
              <Footer/>
          </Router>
      </div>
  );
}

export default App;
