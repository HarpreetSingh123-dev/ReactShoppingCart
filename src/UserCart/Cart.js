import { prop } from 'ramda';
import React from 'react';

function Cart(props) {
    return (
        <div>

<div className="col-lg-4">

<div class="card" style={{width: 18 +"rem"}} >

      <img src={props.img}  style={{width: 13 +"rem", height :13 +"rem"}}class="card-img-top" alt="..."></img>

           <div class="card-body">
 
               <h5 class="card-title">{props.name}</h5>
               <p>Price: {props.price} Rs</p>
               <p class="card-text">{props.description}</p>
               <p>ID:{props.id}</p>
               <span>Units : {props.units}</span> 
               
               
               <button onClick={()=>props.addOneProduct(props.id,props.name,props.description,props.img,props.price,props.units)}>+</button>
               
               <button onClick={()=>props.decreaseOneProduct(props.id,props.name,props.description,props.img,props.price,props.units)}>-</button>

               <button onClick={()=>props.deleteItem(props.id,props.units)}>Delete Item</button>
                <span><p> <b>Price For {props.units} Units:{props.units* props.price} Rs</b></p> </span>
 </div>
  </div>

</div>
            
        </div>
    );
}

export default Cart;