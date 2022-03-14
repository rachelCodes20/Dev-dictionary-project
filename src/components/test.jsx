
import React, { useState } from 'react';

 function Pies() {

    const [pies, setPieCounter] = useState(0);
        return (
        <div>
        {pies === 0 ?  <button onClick={() => {setPieCounter(pies + 2)}}></button> :  
        <button onClick={() => {setPieCounter(pies * 2)}}></button>}
        <PieComponent pies={pies}/>
        </div>
        );
    }

    export default Pies;

    

  
  const PieComponent = (props) => {
      return (
        <div>
          <p>You have ordered {props.pies} pies.</p>
        </div>
      )
    }
 