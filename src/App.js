import React from 'react';
import './App.css';
import Painting from './Painting/Painting';



class App extends React.Component {

  state = {
    paintings :[
      {name:'ballista', category:'nature',id:1,title:'nature elegance is a bliss',author:'Akshita',img:"nature.jpg"},
      {name:'charista', category:'world',id:2,title:'into the mystrious cave',author:'meethi',img:"cave.jpg"},
      {name:'mirista', category:'death',id:3,title:'face of the devil',author:'john',img:"death.jpg"},
      {name:'monalista', category:'human',id:4,title:'find your expression',author:'Asta',img:"faceless.png"},
      {name:'choopista', category:'movie',id:5,title:'dhoop chahiye isko',author:'krish',img:"fantasy.jpg"}
    ]
  };

   deleteCurrentbox = (boxindex)=>{   // this is the current method in painting which removes the current box ,recieving index of the box as argument
    const paintingreplica = [...this.state.paintings]; //we are duplicating the paintings because arrays and objects are pass by reference in javascript so this will create an copy of the object painting and by doing this we are avoiding direct update on the object
     paintingreplica.splice(boxindex,1); //  by index we are removing the box from the array
     this.setState({paintings:paintingreplica}); // finally updating the state with replicaa

  }

  nameChangeHandler = (event , id) =>{

      const paintingreplica = [...this.state.paintings];   // making copy of state data so that we can change or manipulate data immutably
      const currentpaintingindex = paintingreplica.findIndex((p)=>{    // we are finding the current painting locaion in the array
        return p.id === id;   // if this condition is true then that element index will be stored in variable
      });
      var editindividualpainting = paintingreplica[currentpaintingindex]  // taking the object we find
       editindividualpainting.author = event.target.value;  // updating it with the value entered in the  input box
       console.log(editindividualpainting);

       this.setState({
         paintings:paintingreplica      // finally  updating the state of the component .. which further renders it to the dom of the page if there is any change from the previous one
       });
  }

  // this the render method of react component to display the jsx
render() {

let  paint = (
   <div>
    {this.state.paintings.map((painting,boxindex) => {
     return  <Painting
               name={painting.name}
               category={painting.category}
               key ={painting.id}
               title={painting.title}
               author={painting.author}
               close = {this.deleteCurrentbox.bind(this,boxindex)}
               changed ={(event) => this.nameChangeHandler(event , painting.id)}  // as this is a fn ,so it will get the event first that's why event in function argument then passing the event and id to the handler
               pic = {painting.img}
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
