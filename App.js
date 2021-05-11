import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component  {
 
  constructor(props){
    super(props);
    this.state={
      username: '',
      birthdate: '',
      city:'',
      pincode:''
    };
  }
  myChangeHandlername=(event)=>{
    this.setState({username:event.target.value});
 
  }

 
birthdate=(event)=>{

    this.setState({birthdate:event.target.value});

  }
 
  
  city=(event)=>{
   
    this.setState({city:event.target.value});
 
  }
  
  pincode=(event)=>{
    
    this.setState({pincode:event.target.value});
  }
  render() {
  return (
    <div className="App">
      <form>
        <h1>Adhar Form</h1>
        <p>Enter Name:</p>
        <label> name:</label>
        <input type='text' onChange={this.myChangeHandlername}/><br></br>
       
        <p>Enter DOB:</p>
        <input type='date' onChange={this.birthdate}/><br></br>
        <p>Enter City:</p>
        <input type='text' onChange={this.city}/><br></br>
        <p>Enter Pincode:</p>
        <input type='number' onChange={this.pincode}/><br></br>
        <button type="submit">submit</button>
        </form>
        <br/>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/>
      <h1>Form Data </h1>
      <h1>Name: {this.state.username}</h1>
      <h1>DOB: {this.state.birthdate}</h1>
      <h1>City: {this.state.city}</h1>
      <h1>Pincode {this.state.pincode}</h1>
    </div>
  );
}
}

export default App;
