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
      

        {/* <select  onChange={props.selectChange} >

            <option value="Whey">Whey Protien</option>
            <option value="Creatine">Creatine</option>
            <option value="Bars">Bars</option>
            <option value="Preworkout">Pre Workout</option>
             <option value="Bcaa">Bcaa</option>

  </select>*/ } 

  <p  onClick={()=>props.selectChange("Whey")}>Whey Protien</p>
  <p onClick={()=>props.selectChange("Creatine")} >Creatine</p>
  <p onClick={()=>props.selectChange("Bars")}>Protien Bars</p>
  <p onClick={()=>props.selectChange("Preworkout")}>Preworkout</p>
  <p onClick={()=>props.selectChange("Bcaa")}>Bcaa</p>







      
    </Menu>
</div>
  );
};