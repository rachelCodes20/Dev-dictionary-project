// import React from 'react';
import React, { Component } from 'react';
//import mongoose

class Dictionary extends React.Component {
  constructor (props) {
    super(props)
    this.hideDef = this.hideDef.bind(this);
    }
    hideDef (event) {
      this.setState({userEntry: event.target.value})
    }
    // {this.setState({displayProp: inline})
    render(){
      const bGround = {
        backgroundColor:"rgb(60, 60, 60, 0.5)",
        padding:"30px",
        margin:"10px",
        borderRadius:"5px"
      }
      //const hideDef = () => {this.setState({userEntry: e.target.value})};
      return (
        
        <div style={{...bGround}}>
           <form>
              <input type="text" placeholder="Enter Dev Term" className="searchBar"/>
            </form>
           
            <p>
              <button onClick={this.hideDef}>Search!</button>
              {/* if(this.props.defRequested){
                //set display property of class of user response/req.body.entry(term) to "inline") 
              } */}
              </p>
          <ul className="devTerms">
          <li className="object">Object</li>
          <li className="def" style={{display:"none"}}>A data type consisting of a key to the left of 
          a colon and that key's value to the right of the colon, surrounded 
          by brackets.</li>
          <li className="terms">Function</li>
          <li className="terms">Const</li>
          <li className="terms">Let</li>
          </ul> 
    </div>
        
      )
    }
  }
export default Dictionary;