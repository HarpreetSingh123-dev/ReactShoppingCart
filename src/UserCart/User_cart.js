import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import incrementCartProduct from '../Actions/incrementCartProduct'
import decrementCartProduct from '../Actions/decrementCartProduct'

import Cart from './Cart'


class User_cart extends Component {


    addOne(id,name,description,img,price,units){

        const product ={id,name,description,img,price,units}
        this.props.incrementCartProduct(product)

    }

    decreaseOne(id,name,description,img,price,units){

        const product ={id,name,description,img,price,units}
        this.props.decrementCartProduct(product)
    }


    render() {

        let a = null 
        let b = null 
        let c = null
         if(this.props.cart == 0){
     
           a = "Your Cart Is Empty , Add Something"
           
         }

        return (
            <div>

          <h4>You Have Following products</h4>

                  <div className="container">  
                  <div className="row">
                   {this.props.cart.map((item)=>

                          <Cart id={item.id}
                                 name={item.name} 
                                   description={item.description} 
                                         img={item.img} 
                                            price={item.price}
                                              units={item.units.units}
                                               addOneProduct={this.addOne.bind(this)}
                                                decreaseOneProduct={this.decreaseOne.bind(this)}

                                                   
                             ></Cart>          


                   )}

                </div>
                <div>{a}</div>
               
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{



    return {

        cart:state.cart
    }

}


const mapActionsToProps = (dispatch) =>{

    return bindActionCreators({
  
        incrementCartProduct,
        decrementCartProduct,
        
       
         }, dispatch)
    }

export default connect(mapStateToProps,mapActionsToProps) (User_cart)