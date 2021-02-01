import { props } from 'ramda';
import React, { Component } from 'react';

import Navbar from '../../Navbar/Navbar'
import Side from '../../Shopping-Cart/Main_Page_Bar/Side_Bar'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// needs to add action 

import descriptionAction from '../../Actions/productDescriptionAction'



class Product_Description extends Component {
   
    constructor(props){


        super(props)

        this.state={

            id:'',
            name:'',
            image:'',
            description:'',
            price:'',
            about:[],
            subdescription:[],
            hamIconSet: true

        }

        
        

    }

   componentDidMount(){

       // id = this.props.match.params.id

      //  this.props.descriptionAction(id)
      var pdt = this.props.description[0]
      console.log(pdt.name)
      //this.setState({product:pdt})
      //console.log("desss"+this.props.description[0].description)
      var id  = pdt.id
      var name = pdt.name
      var description = pdt.description
      var image = pdt.img
      var price = pdt.price
      var about = pdt.about
      var subdescription = pdt.subdescription
    
      this.setState({
         
         id:id,
         name:name,
         image:image,
         description:description,
         price:price,
         about:about,
         subdescription:subdescription

      })

   //var a = this.state.about.map( (abt)=>{

     //    return <p>abt</p>
   //  })

     // this.state.subdescription.map( (subdes)=>{


     // })


  
    }

 
    render() {

      var a = null


        
        return (
           
            <div>
              
              <Navbar iconSet={this.state.hamIconSet}></Navbar>
              
                  <div className="container-fluid">
             
                     <div className="container">

                          <div className="row">
                  
                              <div className="col-lg-6">  
                
                                       <h1>Product Description</h1>
               
                                       <img src={this.state.image}></img>
              
                              </div>


                              <div className="col-lg-6">
              
                                       <p>{this.state.name}</p>
                                       <p>{this.state.description}</p>
                                       <p>{this.state.price}</p>
              
              
              

                                       {this.state.about.map( (abt)=>{

                                            return   <p><b>{abt}</b></p>
                                       })}

               {/*this.state.subdescription.map( (subdes)=>{

                   return <p>{subdes.Flavour}</p>
               })*/}

               {
                 this.state.subdescription.map((subdes)=>{
  
                     return    <div>

                                     <p>{subdes.Flavour}</p>
                                     <p>{subdes.Ingredients}</p>
                                     <p>{subdes.Brand}</p>
                                     <p>{subdes.AgeRange}</p>
                                     <p>{subdes.ItemWeight}</p>
                              
                               </div>

                 })
               }
         
           
             {console.log(this.state)}
             {console.log(this.state.subdescription)}
               
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{

   // return bindActionCreators({

     //   descriptionAction,

    //}, dispatch)

    return {
        description:state.description
    }

}

export default connect(mapStateToProps, null) (Product_Description);