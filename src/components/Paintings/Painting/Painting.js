import React from 'react';
import '../Paintings';
import './paintngs.css';

class Painting extends React.Component{
  constructor(props){
  super(props)
  console.log(`[Painting.js] inside constructor`,props);;
  }
  componentWillUnmount(){
    console.log(`[Painting.js] inside componentWillMount`);
  }
  componentDidMount(){
    console.log(`[Painting.js] inside componentDidMount`);
  }

  render(){
  console.log(`[Painting.js] inside render`);

    return (
      <div>
        <div className="blue painting-box">
         <img src={this.props.pic} alt={this.props.title}/>
         <button className="close-button" onClick={this.props.close}>X</button>
         <div className="container-box">
          <div className="title">{this.props.title}</div>
          <div className="details">

          <span>{this.props.name} </span>
          <span>{this.props.category} </span>
          <span>{this.props.author} </span>
          <input type="text" onChange={this.props.changed}/>
          </div>
         </div>
        </div>
      </div>
    );
  }// end render
} // end class



// this is the functional approach of the components
// ***************************************************************
// const painting  = (props) => {    // this is functional component of react where we are creating a function which is not extending the "component class and returning the JSX"
//   return (
//     <div>
//       <div className="blue painting-box">
//        <img src={props.pic} alt={props.title}/>
//        <button className="close-button" onClick={props.close}>X</button>
//        <div className="container-box">
//         <div className="title">{props.title}</div>
//         <div className="details">
//
//         <span>{props.name} </span>
//         <span>{props.category} </span>
//         <span>{props.author} </span>
//         <input type="text" onChange={props.changed}/>
//         </div>
//        </div>
//       </div>
//     </div>
//   );
// }


export default Painting;
