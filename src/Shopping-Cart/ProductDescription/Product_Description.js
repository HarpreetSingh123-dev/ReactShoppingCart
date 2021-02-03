

import { props } from 'ramda';
import React, { Component } from 'react';

import Navbar from '../../Navbar/Navbar'
import Side from '../../Shopping-Cart/Main_Page_Bar/Side_Bar'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './Product_Description.css'

// needs to add action 

import descriptionAction from '../../Actions/productDescriptionAction'

var axios = require("axios").default

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
            images:[],
            hamIconSet: true

        }

        
        

    }

   componentDidMount(){

       // id = this.props.match.params.id

      //  this.props.descriptionAction(id)
      var pdt = this.props.description[0]
      //console.log(pdt.name)
      //this.setState({product:pdt})
      //console.log("desss"+this.props.description[0].description)
      var id  = pdt.id
      var name = pdt.name
      var description = pdt.description
      var image = pdt.img
      var price = pdt.price
      var about = pdt.about
      var subdescription = pdt.subdescription
      var images = pdt.imageSet
    
      this.setState({
         
         id:id,
         name:name,
         image:image,
         description:description,
         price:price,
         about:about,
         subdescription:subdescription,
         images:images

      })

   //var a = this.state.about.map( (abt)=>{

     //    return <p>abt</p>
   //  })

     // this.state.subdescription.map( (subdes)=>{


     // })


  
    }
/*
    apiTest(){

      var options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/totals',
        headers: {
         
          'x-rapidapi-key': '92e00d3476msh9086087f266cc20p1d4d74jsn45214a2fcb36',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }  */
 
    render() {

      var a = null


        
        return (
           
            <div>
              
              <Navbar iconSet={this.state.hamIconSet}></Navbar>
              
              <div className="productDescription">
                  
                  <div className="container-fluid">
             
                     <div className="container">

                          <div className="row">
                  
                              <div className="col-lg-6">  
                
                                       <h1 className="text-center">Product Description</h1>
               
                                      {/* <img src={this.state.image}></img>*/}

                                      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"data-interval="false" >
                                           <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                   <img class="d-block w-100" src={this.state.images[0]} alt="First slide"></img>
                                                </div>
                                         
                                                <div class="carousel-item">
                                                  <img class="d-block w-100" src={this.state.images[1]} alt="Second slide"></img>
                                                </div>
    
                                                <div class="carousel-item">
                                                  <img class="d-block w-100" src={this.state.images[2]} alt="Third slide"></img>
                                                </div>
                                          </div>
 
                                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                          <span class="sr-only">Previous</span>
                                      </a>
  
                                      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                          <span class="sr-only">Next</span>
                                      </a>

                                    </div>
              
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
         
         {/*  <button onClick={this.apiTest.bind(this)}>TEST</button>*/}
             {console.log(this.state)}
             {console.log(this.state.subdescription)}
               
            </div>
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