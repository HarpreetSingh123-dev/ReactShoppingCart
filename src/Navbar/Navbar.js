import React, { Component } from 'react';
import icon1 from '../Image-Set/fitness.png'
import icon2 from '../Image-Set/cart.png'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar (props) {
    
    ////////////////// using conditional rendering to set hamburger side bar icon//////////////////////////
    var a = null
    var b = null
    var c = null
    var d = null
    
    if(props.iconSet === true){ 
         
        a = ( 
            props.set       
             )
        
         c = (

             <Link to="/"><a class="nav-item nav-link" href="#">HOME</a></Link>
         
            )
      }

    else {
      
        b = ( <a class="navbar-brand"><img src={icon1}></img></a>)
    }

    if(props.number>=1){
   d=( <span className="dot"> <span>{props.number}</span> </span> )
    }
        return (
            
            <div className="Navbar">
                {a}
               {/* 
                 <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                     
                 {b}
                    
                     
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                        <div  class="navbar-nav float-right text-right pr-3">
                        
                        <Link to="/Cart"><div><img src={icon2}></img></div></Link>
                        </div>
                        </div>
                 </nav>

        */}

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

               {b}
               <a></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
  
               <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
   
                 <div class="navbar-nav float-right text-right">
      
    
                  {c}
      
                  <Link to="/Cart">
                      
                      <div className="ff">
                    
                      <img src={icon2}></img>
                      {d}
                      </div></Link>
               
                 </div>
                </div>
           </nav>

            </div>
        );
    }


export default Navbar;