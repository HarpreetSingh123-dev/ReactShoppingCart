import React from 'react';
import './Products_Disp.css'
import {Link} from 'react-router-dom'

function Products_Disp(props) {
    return (
        <div className="productDisp">
            
             <div className="col">
             
             <div className="card">
          
             <Link to={`/Description/${props.id}`}>   <img src={props.img} onClick={()=>props.paricularProductDescription(props.id,props.name,props.description,props.img,props.price,props.about,props.subdescription,props.imageSet)} style={{width: 12 +"rem", height : 12 +"rem"}} className="card-img-top center" alt="..."></img>
             </Link> 
                  
                  <div className="card-body">
        
                      <h5 className="card-title text-center text-truncate">{props.name}</h5>
                     
                      <p><b>Price: {props.price}&nbsp;CDN$</b></p>
                      <p className="card-text text-truncate">{props.description}</p>
                      
                      <div>
                     {/*<button  onClick={() => props.addfunc( props.id,props.name,props.description,props.img,props.price,{units:1} )} data-toggle="modal" data-target="#exampleModal" class="btn btn-primary"  >Add To Cart</button>*/}
                      </div>
                
                </div>
       

            
              </div>
            </div>
        </div>
    );
}

export default Products_Disp;