import { prop } from 'ramda';
import React from 'react';
import {Link} from 'react-router-dom'
import './Lower_SelectBarTwo.css'


function Lower_SelectBarTwo(props) {

   var a = null
   var b = null
   if(props.set){

       a =(   
         <option value="featured" >Featured</option>
       )
   } 
    return (
        
            <div className="lowerbartwo">

               <nav class="nav justify-content-end">
              
                  <div class="form-group">
                 
                    <label>Sort By: &nbsp;</label>
                
                       <select class="form-select" aria-label="Default select example" onChange={props.selectSort} >
               
                        {a}
                         <option value="lowToHigh">Price: Low To High</option>
                         <option value="highToLow">Price: High To Low</option>
                        
                 
                      </select> 
               
                  </div>
               
               </nav>

         </div>
        
    );
}

export default Lower_SelectBarTwo;