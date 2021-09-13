//import { create } from 'lodash';
import React, { Component } from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {

render () {
    return (
    <div>
         <h1> Hi, Rachel </h1>
    </div>
    )
  }   
}



ReactDOM.render(<App/>, document.getElementById('root'));

export default App;