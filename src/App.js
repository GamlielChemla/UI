import React, { Component } from 'react';
import './App.css';
// import {button,Alert,Input,te}from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Connection from './myconect/Connection'

class App extends Component {
  constructor(props){
    super(props)
    this.handleselect = this.handleselect.bind(this)
    this.state={
      select:"",

    }
  }
  handleselect(e){
    this.setState({
      select:console.log(
       e.target.value)
    })

  }


  render() {
    return (
      <div className="App">
        <br/>

<form action="" onSubmit="this.sendAll">
        <div className ="test">test:
                  <br/>

        <select name="likelihood" id="testlike" >

          <option value="0">likelihood</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
          
        
        <select name="concequence" id="testcons" >
          <option value="0" >concequence</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        </div>
        <div className ="risk">
          
        
        <textarea type="text" placeholder="enter your mitigation" className="input" name="input1"/>
        <textarea type="text" placeholder="enter your mitigation" className="input" name="input2"/>
        <button className="save">save</button>
        </div>
        </form>

<br/><br/><br/><br/><br/><br/>

        <div className ="likelihood">Budget :<br/>
        

        <select name="likelihood" id="testlike">
          <option value="0">likelihood</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        
        <select name="concequence" id="testcons" >
          <option value="0" >concequence</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        </div>
        <div className ="risk">
          
        <textarea type="text" placeholder="enter your mitigation" className="input"/>
        <textarea type="text" placeholder="enter your mitigation" className="input"/>
        {/* <button className="save">save</button> */}
        <button className="save">save</button>
        
        </div>
      
<br/>
<br/><br/><br/><br/><br/><br/>

        <div className ="likelihood">delivery delayed<br/>
        

        <select name="likelihood" id="testlike">
          <option value="0">likelihood</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        
        <select name="concequence" id="testcons" >
          <option value="0" >concequence</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        </div>
        <div className ="risk">
             
        <textarea type="text" placeholder="enter your mitigation" className="input"/>
        <textarea type="text" placeholder="enter your mitigation" className="input"/>
        {/* <button className="save">save</button> */}
        <button className="save">save</button>
        </div>


<br/>
<br/>
<br/><br/><br/><br/><br/>
        <div className ="likelihood">customer<br/>
        

        <select name="likelihood" id="testlike">
          <option value="0">likelihood</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        
        <select name="concequence" id="testcons" >
          <option value="0" >concequence</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        </div>
         <div className ="risk">
          
        
        <textarea type="text" placeholder="enter your mitigation" className="input"/>
        <textarea type="text" placeholder="enter your mitigation" className="input"/>
        {/* <button className="save">save</button> */}
        <button className="save">save</button>
        
        </div> 



<Connection onChange ={this.handleselect}/>
      </div>
    );
  }
}

export default App;
