//import { create } from 'lodash';
import React, { Component } from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {

render () {
    return (
    <div>
         <h1> Hi! Welcome to the Dev's Dictionary. </h1>
         <Welcome/>
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



ReactDOM.render(<App/>, document.getElementById('root'));

export default App;