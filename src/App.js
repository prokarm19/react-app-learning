import React from 'react';
import './App.css';
import Painting from './Painting/Painting';



class App extends React.Component {

  state = {
    paintings :[
      {name:'ballista', category:'nature',Id:1,title:'nature elegance is a bliss',author:'Akshita'},
      {name:'charista', category:'world',Id:2,title:'into the mystrious cave',author:'meethi'},
      {name:'mirista', category:'death',Id:3,title:'face of the devil',author:'john'},
      {name:'monalista', category:'human',Id:4,title:'find your expression',author:'Asta'},
      {name:'choopista', category:'movie',Id:5,title:'dhoop chahiye isko',author:'krish'}
    ]
  };

   deleteCurrentbox = (boxindex)=>{   // this is the current method in painting which removes the current box ,recieving index of the box as argument
    const paintingreplica = [...this.state.paintings]; //we are duplicating the paintings because arrays and objects are pass by reference in javascript so this will create an copy of the object painting and by doing this we are avoiding direct update on the object
     paintingreplica.splice(boxindex,1); //  by index we are removing the box from the array
     this.setState({paintings:paintingreplica}); // finally updating the state with replicaa

  }

  nameChangeHandler = (event,id) =>{
      const paintingreplica = [...this.state.paintings];
      const currentpainting = paintingreplica.find(id);
      console.log(currentpainting);
  }

  // this the render method of react component to display the jsx
render() {

let  paint = (
   <div>
    {this.state.paintings.map((painting,boxindex) => {
     return  <Painting
               name={painting.name}
               category={painting.category}
               key ={painting.Id}
               title={painting.title}
               author={painting.author}
               close = {this.deleteCurrentbox.bind(this,boxindex)}
               changed ={(event)=>this.nameChangeHandler(event,painting.Id)}  // as this is a fn ,so it will get the event first that's why event in function argument then passing the event and Id to the handler
               />
})}
</div>    /// this is the enclosing tag which is needed to be included if you are generating multiple jsx code
);
  return (
    <div className="App">
      <header className="App-header">
          {paint}
      </header>

    </div>
  );
}

}

export default App;
