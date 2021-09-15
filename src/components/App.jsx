//import { create } from 'lodash';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components'
import termController from '../../server/termController';

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
      defTerms: [{url: 'mongo url?'}]
    }
    
  }
  termRequested () {
  console.log(`send entire object back to the client`)
    }
render () {
    return (
    <div>
        <div>
          <NavBar/>
        </div>
        <h1 class="titles"> Hi! Welcome to the Dev's Dictionary. </h1>
          <hr/>
        <Welcome />
          <form>
            <input type="text" placeholder="Enter Dev Term" class="searchBar"/>
          </form>
          <p><Button onClick={()=>{termRequested}}>Search!</Button></p>
          <Dictionary/>
    </div>
    )
  }   
}

class Welcome extends React.Component {
  render () {
    return (
      <div>
        <p> You are probably here because you don't know what the 
          heck Stackoverflow is talking about. Don't worry! In time
          you will and I'm here to help. 
        </p>
      </div>
    )
  }
}

class NavBar extends React.Component {
  render () {
    return (
      <ul class="navBar">
        <li class="terms"> Home</li>
        <li class="terms"><a href=""></a>Search</li>
        <li class="terms"><a href=""></a>Quiz Me!</li>
      </ul>
    )
  }
}

class Dictionary extends React.Component {
  render(){
    return (
      <ul class="devTerms">
        <li >Object</li>
        <li >Function</li>
        <li >Const</li>
        <li >Let</li>
  </ul>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));

export default App;