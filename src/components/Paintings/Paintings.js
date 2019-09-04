import React from 'react';
import Painting from   "./Painting/Painting";


let paintings = (props)=> {
  return props.paint.map((painting,boxindex) => {
   return  <Painting
             name={painting.name}
             category={painting.category}
             key ={painting.id}
             title={painting.title}
             author={painting.author}
             close = {props.deleted.bind(this,boxindex)}
             changed ={(event) => props.changed(event , painting.id)}  // as this is a fn ,so it will get the event first that's why event in function argument then passing the event and id to the handler
             pic = {painting.img}
             />
})
}

export default paintings;
