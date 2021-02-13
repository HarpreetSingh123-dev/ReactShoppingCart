

import { props } from 'ramda';
import React, { Component } from 'react';

import Navbar from '../../Navbar/Navbar'
import Side from '../../Shopping-Cart/Main_Page_Bar/Side_Bar'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'

import './Product_Description.css'

// needs to add action 

import addToCartAction from '../../Actions/addToCartAction'
import incrementCartTotalAction from '../../Actions/TotalProductsInCart/incermentProductsAction'

//var axios = require("axios").default

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

    addToCart(){
      
      var id = this.state.id
      var name = this.state.name
      var description = this.state.description
      var img = this.state.image
      var price = this.state.price
      var units = {units:1}

      const product = {id,name,description,img,price,units}

      this.props.addToCartAction(product)
      this.props.incrementCartTotalAction()
    }
 
    render() {

      var a = null


        
        return (
           
            <div>
              
              <Navbar iconSet={this.state.hamIconSet}></Navbar>
              
              <div className="productDescription">
                  
                  <div className="container-fluid">
             
                  <div className="descriptionNav"><Link to='/shopping' style={{fontSize: "19px"}}>BACK</Link></div>
                    
                     <div className="container">

                          <div className="row">
                  
                              <div className="col-lg-6">  
                
                                      
               
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
                              <h2 className="text-center">Product Description</h2>
                                     
                                       <hr></hr>
                                       
                                       <h4>Price: &nbsp;{this.state.price} CDN$</h4>
                                       <p><b>{this.state.name}</b></p>
                                       <p><b>{this.state.description}</b></p>
                                       
              
              
              
                                       <hr></hr>
                                     
                                       <p><b>About This Item</b></p>
                                       <ul>
                                       {this.state.about.map( (abt)=>{

                                            return   <li>{abt}</li>
                                       })}

                                      </ul>
                                     
                                      <hr></hr>
              
                                     {
                                        this.state.subdescription.map((subdes)=>{
  
                                     return    <div>

                                               <table>
                                                 {/*
                                                   <p>{subdes.Flavour}</p>
                                                   <p>{subdes.Ingredients}</p>
                                                   <p>{subdes.Brand}</p>
                                                   <p>{subdes.AgeRange}</p>
                                                 <p>{subdes.ItemWeight}</p> */}

                                                 <tr> 
                                                     <td><b>Flavour</b></td> 
                                                     <td>&nbsp; </td>
                                                     <td>{subdes.Flavour}</td> 
                                                 </tr>

                                                 <tr>
                                                     <td><b>Ingridients</b></td> 
                                                     <td>&nbsp; </td> 
                                                     <td>{subdes.Ingredients}</td>
                                                 </tr>

                                                 <tr>
                                                    <td><b>Brand</b></td>
                                                    <td>&nbsp; </td> 
                                                    <td>{subdes.Brand}</td>
                                                 </tr>
                                                 
                                                 <tr>
                                                    <td><b>AgeRange</b></td>
                                                    <td>&nbsp; </td> 
                                                    <td>{subdes.AgeRange}</td>
                                                 </tr>
                                                 
                                                 <tr>
                                                   <td><b>Weight</b>
                                                   </td><td>&nbsp; </td> 
                                                   <td>{subdes.ItemWeight}</td>
                                                </tr>
                                              
                                              </table>
                                             </div>

                 })
               }
              <hr></hr>
                   <button  onClick={this.addToCart.bind(this)}class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Add To Cart</button>
         
         {/*  <button onClick={this.apiTest.bind(this)}>TEST</button>*/}
             {console.log(this.state)}
             {console.log(this.state.subdescription)}
               
            </div>
            </div>
            </div>
            </div>



            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog" role="document">
                 <div class="modal-content">
                     {/* <div class="modal-header">
                             <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                 </button>
                      </div>*/}
     
                      <div class="modal-body">
                           <h5>{this.state.name} Added To Cart</h5> 
                     </div>
     
                    <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                     
                   </div>
               </div>
             </div>
          </div>


         {/* <div className="footer navbar-dark bg-dark">gg</div>*/}
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


const mapActionsToProps =(dispatch) =>{

  return bindActionCreators({

    addToCartAction,
    incrementCartTotalAction
  }, dispatch)

}

export default connect(mapStateToProps, mapActionsToProps) (Product_Description);