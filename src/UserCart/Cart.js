import { prop } from 'ramda';
import React from 'react';
import './Cart.css'

function Cart(props) {
   
   
    return (

  


       <div className="cart">
        
         <hr></hr>
           
           <div className="row"> 
    
                <div className="col-lg-4 col-sm-5 col-7">
 
                  <img src={props.img}  /*style={{width: 13 +"rem", height :13 +"rem"}}*/ class="card-img-top" alt="..."></img>

               </div>

               <div className="col-lg-8 col-sm-7 col-5">

                           <h5 >{props.name}</h5>
                           <p>Price: {props.price}&nbsp;CDN$</p>
                           <p>{props.description}</p>
                         
             <div>

             <button type="button" class="btn btn-primary" onClick={()=>props.addOneProduct(props.id,props.name,props.description,props.img,props.price,props.units)}>+</button>
               
             <span><b>&nbsp;{props.units}&nbsp;</b></span> 
               
             <button type="button" class="btn btn-primary" onClick={()=>props.decreaseOneProduct(props.id,props.name,props.description,props.img,props.price,props.units)}>-</button>
             &nbsp;
             <button type="button" class="btn btn-primary delBtn" data-toggle="modal" data-target="#deleteItemModal" /*onClick={()=>props.deleteItem(props.id,props.units)}*/> Delete Item</button>
               
             </div>  
                 
             <div>
               <p className="price">Price For <b>{props.units}</b>&nbsp; Units: &nbsp;<b>{props.units* props.price} CDN$</b></p>
             </div>
   

             <div class="modal fade" id="deleteItemModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                   <div class="modal-content">

                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Are You Sure To Delete {props.name}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                     </div>
      
                     
                    <div class="modal-footer">
        
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                     <button type="button" class="btn btn-primary"  data-dismiss="modal" onClick={()=>props.deleteItem(props.id,props.units)  }>Yes</button>
                     </div>
                    </div>
                   </div>
  
             </div>
      </div>

   </div>
   
   <hr></hr>

</div>
   
    );
}

export default Cart;