 import React ,{Component}from 'react';
import Painting from   "./Painting/Painting";

class Paintings extends Component{
  constructor(props){
  super(props)
  console.log(`[Paintings.js] inside constructor ${props}`);;
  }
  componentWillUnmount(){
    console.log(`[Paintings.js] inside componentWillMount`);
  }
  componentDidMount(){
    console.log(`[Paintings.js] inside componentDidMount`);
  }
  render (){
     return this.props.paint.map((painting,boxindex) => {
        return  <Painting
                  name={painting.name}
                  category={painting.category}
                  key ={painting.id}
                  title={painting.title}
                  author={painting.author}
                  close = {this.props.deleted.bind(this,boxindex)}
                  changed ={(event) => this.props.changed(event , painting.id)}  // as this is a fn ,so it will get the event first that's why event in function argument then passing the event and id to the handler
                  pic = {painting.img}
                  />
     })
  }
}
// let paintings = (props)=> {
//   return props.paint.map((painting,boxindex) => {
//    return  <Painting
//              name={painting.name}
//              category={painting.category}
//              key ={painting.id}
//              title={painting.title}
//              author={painting.author}
//              close = {props.deleted.bind(this,boxindex)}
//              changed ={(event) => props.changed(event , painting.id)}  // as this is a fn ,so it will get the event first that's why event in function argument then passing the event and id to the handler
//              pic = {painting.img}
//              />
// })
// }

export default Paintings;
