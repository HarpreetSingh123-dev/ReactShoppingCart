import React from 'react';
import './Lower_SelectBarOne.css'

function Lower_Bar(props) {
    return (
        
         <div className="lowerbarone">

               <nav class="nav justify-content-end">
 
                  <div class="form-group">
                 
                    <label>Sort By:  </label>
                
                       <select class="form-select" aria-label="Default select example" onChange={props.selectSort} >
               
                         <option selected value="featured">Featured</option>
                         <option value="lowToHigh">Price: Low To High</option>
                         <option value="highToLow">Price: High To Low</option>
                        
                 
                      </select> 
               
                  </div>
               
               </nav>

         </div>
    );
}

export default Lower_Bar;