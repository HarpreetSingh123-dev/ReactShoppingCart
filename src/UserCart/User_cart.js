import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import incrementCartProduct from '../Actions/incrementCartProduct'
import decrementCartProduct from '../Actions/decrementCartProduct'
import cartTotalCalculator from '../Actions/totalOfCart'
import clearCartAction from '../Actions/clearCartAction'
import deleteItemAction from '../Actions/deleteItemAction'

import Cart from './Cart'


class User_cart extends Component {


    componentDidMount(){

        this.props.cartTotalCalculator(this.props.cart)
    }

    componentDidUpdate(){

         this.props.cartTotalCalculator(this.props.cart)
    }


    addOne(id,name,description,img,price,units){

        const product ={id,name,description,img,price,units}
        this.props.incrementCartProduct(product)

    }

    decreaseOne(id,name,description,img,price,units){

        const product ={id,name,description,img,price,units}
        this.props.decrementCartProduct(product)
    }

    clearCart(){

        this.props.clearCartAction()
    }

    deleteItem(id){

      const product ={id}
      this.props.deleteItemAction(product)
    }

    render() {

        let a = null 
        let b = null 
        let c = null
        let d = null
         if(this.props.cart == 0){
     
           a = "Your Cart Is Empty , Add Something"
           
         }

         else{

            b =(<button >Checkout</button>)
            c =(<p>Cart Total Is :{this.props.total}Rs</p>)
            d=(<button onClick={this.clearCart.bind(this)}>Clear cart</button>)
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
                                                 deleteItem={this.deleteItem.bind(this)}

                                                   
                             ></Cart>          


                   )}

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
        deleteItemAction
       
         }, dispatch)
    }

export default connect(mapStateToProps,mapActionsToProps) (User_cart)