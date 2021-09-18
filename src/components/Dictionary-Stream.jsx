// import React from 'react';
import React, { Component } from 'react';
// import {process} from '/server/main.js'
class Dictionary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {};
    this.hideDef = this.hideDef.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    }
    hideDef (event) {
      this.setState({userEntry: event.target.value})
    }
    //DL cors 
    //set headers
   onSubmit () {
    fetch("http://localhost:3000/get", {
      mode:"no-cors",
      method: "get",
    body:this.props.userEntry})
  //   .then(response => response.json())
  //   .then(data => {console.log('klsfjsl;kfj',data)});
  //  }
  //  .catch((error) => console.log('error ', error))
  // }
  .then(response => response.json())
      .then(data => {
        console.log('klsfjsl;kfj',data);
      })
      .catch((error) => console.log ('fetch error',error));
  }
    render(){
      const bGround = {
        backgroundColor:"rgb(60, 60, 60, 0.5)",
        padding:"30px",
        margin:"10px",
        borderRadius:"5px"
      }
      //  hideDef (event) {
      //   this.setState({userEntry: event.target.value})
      // };
      
      return (
  
        <div style={{...bGround}}>
          {console.log('user state ',this.state.userEntry)}
          
           <form>
              <input type="search" placeholder="Enter Dev Term" className="searchBar"
              onChange={this.hideDef}/>
            </form>
            <p>
              <button onClick={this.onSubmit} hidedef={this.props.hideDef}>Search!</button>
             
              {/* if(this.props.defRequested){
                //set display property of class of user response/req.body.entry(term) to "inline") 
              } */}
            
              </p>
          <ul className="devTerms">
          <li className="object">Object</li>
          <li className="def" style={{display:this.props.data.clicked?'block':'none'}}>A data type consisting of a key to the left of 
          a colon and that key's value to the right of the colon, surrounded 
          by brackets.</li>
          <li className="terms">Function</li>
          <li className="terms">Const</li>
          <li className="terms">Let</li>
          </ul> 

          {/* {console.log('state user entry ', this.userInput = document.getElementsByClassName("searchBar").value)}} */}
    </div>
      )
    }
  }
export default Dictionary;