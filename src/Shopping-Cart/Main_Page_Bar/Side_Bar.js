import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Side_Bar.css'

export default props => {
    
  return (
    // Pass on our props
 
    <div className="menustyle">   
    <Menu  {...props}>
      
      {props.name}
       
      

<hr></hr>
      <h4><b>Shop By Categories</b></h4>
      <a class="menu-item">

         <select  onChange={props.selectChange} >

            <option value="Whey">Whey Protien</option>
            <option value="Creatine">Creatine</option>
            <option value="Bars">Bars</option>
            <option value="Preworkout">Pre Workout</option>
             <option value="Bcaa">Bcaa</option>

       </select> 





</a>

      
    </Menu>
</div>
  );
};