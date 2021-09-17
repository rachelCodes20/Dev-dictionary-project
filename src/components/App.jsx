//import { create } from 'lodash';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';
import Dictionary from './Dictionary-Stream.jsx';


/*{<Navbar/>
         <h1> Hi! Welcome to the Dev's Dictionary. </h1>
         <Welcome/>
         <DictionaryStream url={this.state.url}/> }*/

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid turquoise;
color: blue;
margin: 0 1em;
padding: 0.25em 1em;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defTerms: [{url: 'mongo url?'}],
      userEntry: "",
    }
    
  }

render () {

    return (
    <div>
        <div>
          <NavBar/>
        </div>
        <h1 className="titles" > Welcome to the Dev's Dictionary! </h1>
          <hr/>
        <Welcome />
        <Dictionary userEntry={this.state.userEntry}/>
    </div>
    )
  }   
}

class Welcome extends React.Component {
  constructor(props) {
    super(props) 
    // this.state = {
    // displayProp: inline
    // }
  }
 
  render () {
    const bGround = {
      backgroundColor:"rgb(60, 60, 60, 0.5)",
      padding:"30px",
      margin:"10px",
      borderRadius:"5px"
    }
    return (
      <div style={{...bGround}}>
        <p> You are probably here because you don't know what the 
          heck Stackoverflow is talking about. Don't worry! In time
          you will.Until then, I'm here to help. 
        </p>
       
      </div>
    )
  }
}

class NavBar extends React.Component {
  render () {
    return (
      <ul className="navBar">
        <li className="navItem"> Home</li>
        <li className="navItem"><a href=""></a>Search</li>
        <li className="navItem"><a href=""></a>Quiz Me!</li>
      </ul>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;