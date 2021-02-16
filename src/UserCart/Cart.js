import { prop } from 'ramda';
import React from 'react';
import './Cart.css'

function Cart(props) {
   
   
    return (

  


       <div className="cart">
         <h2 className="text-center">You Have Following Products In Cart</h2>
           {/*<div className="col-lg-4">

              <div class="card" style={{width: 18 +"rem"}} >

                 <img src={props.img}  style={{width: 13 +"rem", height :13 +"rem"}}class="card-img-top" alt="..."></img>

                     <div class="card-body">
 
                           <h5 class="card-title">{props.name}</h5>
                           <p>Price: {props.price}&nbsp;CDN$</p>
                           <p class="card-text">{props.description}</p>
                           <p>ID:{props.id}</p>
                           <span>Units : {props.units}</span> 
               
               
                           <button onClick={()=>props.addOneProduct(props.id,props.name,props.description,props.img,props.price,props.units)}>+</button>
               
                           <button onClick={()=>props.decreaseOneProduct(props.id,props.name,props.description,props.img,props.price,props.units)}>-</button>

                           <button onClick={()=>props.deleteItem(props.id,props.units)}>Delete Item</button>
             
                           <span><p> <b>Price For {props.units}&nbsp; Units: &nbsp;{props.units* props.price} CDN$</b></p> </span>
                    </div>
  
              </div>

    </div>*/}
<div className="row"> 
    
     <div className="col-lg-4 col-sm-5 col-7">
 
          <img src={props.img}  /*style={{width: 13 +"rem", height :13 +"rem"}}*/ class="card-img-top" alt="..."></img>

    </div>

    <div className="col-lg-7 col-sm-7 col-5">

                           <h5 >{props.name}</h5>
                           <p>Price: {props.price}&nbsp;CDN$</p>
                           <p>{props.description}</p>
                         
                           
               <div>
               <button onClick={()=>props.addOneProduct(props.id,props.name,props.description,props.img,props.price,props.units)}>+</button>
               
               <span><b>&nbsp;{props.units}&nbsp;</b></span> 
               
               <button onClick={()=>props.decreaseOneProduct(props.id,props.name,props.description,props.img,props.price,props.units)}>-</button>
               &nbsp;
               <button onClick={()=>props.deleteItem(props.id,props.units)}> Delete Item</button>
               
               </div>  
                 
               <div>
               <p className="price">Price For <b>{props.units}</b>&nbsp; Units: &nbsp;<b>{props.units* props.price} CDN$</b></p>
            </div>
    </div>

</div>
   
   <hr></hr>

</div>
   
    );
}

export default Cart;