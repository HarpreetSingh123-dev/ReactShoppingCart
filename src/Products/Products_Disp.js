import React from 'react';
import './Products_Disp.css'
import {Link} from 'react-router-dom'

function Products_Disp(props) {
    return (
        <div>
            
             <div className="col">
             
             <div className="card">
          
             <Link to={`/Description/${props.id}`}>   <img src={props.img} onClick={()=>props.paricularProductDescription(props.id,props.name,props.description,props.img,props.price)} style={{width: 12 +"rem", height : 12 +"rem"}} className="card-img-top center" alt="..."></img>
             </Link> 
                  
                  <div className="card-body">
        
                      <h5 className="card-title text-center">{props.name}</h5>
                      <p>Price: {props.price} Rs</p>
                      <p className="card-text ">{props.description}</p>
                      
                      <div>
                      <button  onClick={() => props.addfunc( props.id,props.name,props.description,props.img,props.price,{units:1} )} data-toggle="modal" data-target="#exampleModal" class="btn btn-primary"  >Add To Cart</button>
                      </div>
                
                </div>
       

            
              </div>
            </div>
        </div>
    );
}

export default Products_Disp;