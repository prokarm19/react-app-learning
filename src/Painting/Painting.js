import React from  'react';
import './../App.css';
import './paintngs.css';


const painting  = (props) => {    // this is functional component of react where we are creating a function which is not extending the "component class and returning the JSX"
  return (
    <div>
      <div className="blue painting-box">
       <img src={props.pic} alt={props.title}/>
       <button className="close-button" onClick={props.close}>X</button>
       <div className="container-box">
        <div className="title">{props.title}</div>
        <div className="details">

        <span>{props.name} </span>
        <span>{props.category} </span>
        <span>{props.author} </span>
        <input type="text" onChange={props.changed}/>
        </div>
       </div>
      </div>
    </div>
  );
}


export default painting;
