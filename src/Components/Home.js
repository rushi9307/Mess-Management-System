import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/home.css';
import '../CSS/jumbotron.css';




  class Home extends Component{
  
   constructor(props)
    {
      super(props);
      this.state = {
        cityName:''     
      }
      this.fetchKitchenList = this.fetchKitchenList.bind(this);

    }
      componentDidMount(){
        console.log("i am in");
      }
   
    fetchKitchenList=(e)=>{
        window.localStorage.setItem('city',this.state.cityName);
        this.props.history.push('/owners')
  }


  onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
   }

  render()
  {
    return(
      <div className="jumbotron jumbotron-fluid">
         <div className="container">
          <h1 className="display-2" id="fontColor">Our aim is to provide high quality food!!</h1>
      <center>
        <form className="jumbodiv">
        <button type="submit" className="btn btn-success bttn" onClick={(e)=>this.fetchKitchenList(e)} >Fetch Kitchen List</button>
        <div className="form-group">
          <select className="bttn" name="cityName" onChange={(e)=>this.onChange(e)} defaultValue="---select city----">
            <option disabled value="---select city----">---select city-----</option>
            <option value='PUNE'>PUNE</option>
            <option value='MUMBAI'>MUMBAI</option>
          </select>                
        </div>
        </form>
        
      </center>
      </div>
      </div>
    );
  }
}

export default Home;