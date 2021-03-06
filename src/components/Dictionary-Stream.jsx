import image from '../images/js-object-.png'
import React, { Component } from 'react';
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
    
   onSubmit () {
     console.log('props ', this.state.userEntry)
    fetch(`http://localhost:3000/get/${this.state.userEntry}`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
  .then(response => response.json())
      .then(data => {
        console.log('our data',data);
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
          <ul class="blocks" className="devTerms">
            <li img src={this.props.data.imageUrl}> </li>
          <li className="object">Object: </li>
          <li className="def" >A data type consisting of a key to the left of 
          a colon. The key's value is placed to the right of the colon. The key and value are surrounded 
          by curly braces.</li>
          <li className="terms">Function: </li>
          <li className="terms">Const: </li>
          <li className="terms">Let: </li>
          </ul> 

          {/* {console.log('state user entry ', this.userInput = document.getElementsByClassName("searchBar").value)}} */}
    </div>
      )
    }
  }
export default Dictionary;