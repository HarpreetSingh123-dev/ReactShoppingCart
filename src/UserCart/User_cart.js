import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './User_cart.css'

import incrementCartProduct from '../Actions/incrementCartProduct'
import decrementCartProduct from '../Actions/decrementCartProduct'
import cartTotalCalculator from '../Actions/totalOfCart'
import clearCartAction from '../Actions/clearCartAction'
import deleteItemAction from '../Actions/deleteItemAction'

///////////////////////////////////////////////////////////////////////

import incrementTotalCartProducts from '../Actions/TotalProductsInCart/incermentProductsAction'
import decrementTotalCartProducts from '../Actions/TotalProductsInCart/decrementProductsAction'
import deleteTotalCartProducts from '../Actions/TotalProductsInCart/deleteProductAction'


////////////////////////////////////////////////////////////////////////
import Cart from './Cart'
import { prop } from 'ramda';


class User_cart extends Component {

    constructor(props){

        super(props)

        this.state={

            
        }
    }

    componentDidMount(){

        this.props.cartTotalCalculator(this.props.cart)
    }

    componentDidUpdate(){

         this.props.cartTotalCalculator(this.props.cart)
    }


    addOne(id,name,description,img,price,units){

        const product ={id,name,description,img,price,units}
        this.props.incrementCartProduct(product)

        this.props.incrementTotalCartProducts()

    }

    decreaseOne(id,name,description,img,price,units){

        const product ={id,name,description,img,price,units}
        this.props.decrementCartProduct(product)

        this.props.decrementTotalCartProducts()
    }

    clearCart(){

        this.props.clearCartAction()
    }

    deleteItem(id,units){

     
      
      const product ={id}
      this.props.deleteItemAction(product)

      this.props.deleteTotalCartProducts(units)
    }

   

    render() {

        let a = null 
        let b = null 
        let c = null
        let d = null
        let e = null
         if(this.props.cart == 0){
     
           a = <h1 className="text-center">Opps, Your Shopping Cart Is Empty</h1>
           
         }

         else{

            b =(<button >Checkout</button>)
            c =(<p>Cart Total Is :{this.props.total}Rs</p>)
            d=(<button onClick={this.clearCart.bind(this)}>Clear cart</button>)
          }

          
        return (
            <div>
          <div className="userCart">
          <div className="header navbar-dark bg-dark"></div>

          <div className="container">
         

                
                   {this.props.cart.map((item)=>

                          <Cart id={item.id}
                                 name={item.name} 
                                   description={item.description} 
                                         img={item.img} 
                                            price={item.price}
                                              units={item.units.units}
                                               addOneProduct={this.addOne.bind(this)}
                                                decreaseOneProduct={this.decreaseOne.bind(this)}
                                                 deleteItem={this.deleteItem.bind(this)}

                                                   
                             ></Cart>          


                   )}
                 
                   {console.log("cart below")}
                   {console.log(this.props.cart)}

                </div>
                <div>{a}</div>
                <div>{b}</div>
                <div>{c}</div>
                <div>{d}</div>
               
               </div>
               
            </div>
        );
    }
}

const mapStateToProps = (state) =>{



    return {

        cart:state.cart,
        total:state.total
    }

}


const mapActionsToProps = (dispatch) =>{

    return bindActionCreators({
  
        incrementCartProduct,
        decrementCartProduct,
        cartTotalCalculator,
        clearCartAction,
        deleteItemAction,
        incrementTotalCartProducts,
        decrementTotalCartProducts,
        deleteTotalCartProducts
       
         }, dispatch)
    }

export default connect(mapStateToProps,mapActionsToProps) (User_cart)