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
            c =(<div className="subtotal"><h5>Cart Subtotal &nbsp;</h5>{this.props.total}&nbsp; CDN$</div>)
            d=(<button type="button" class="btn btn-warning clear" data-toggle="modal" data-target="#clearModal" /*onClick={this.clearCart.bind(this)}*/>Clear cart</button>)
            e=(<h2 className="text-center">You Have Following Products In Cart</h2>)
          }

          
        return (
            <div>
          <div className="userCart">
          <div className="header navbar-dark bg-dark"></div>

          <div className="container">
          {e}
          {c}
          

                
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

                   <div>{d}</div>
                </div>
                <div>{a}</div>
                <div>{b}</div>

              {/*Modal Triggered when clear cart button is clicked*/}  
                
              <div class="modal fade" id="clearModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                   <div class="modal-content">

                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Are You Sure To Delete All Items In Cart</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                     </div>
      
                     
                    <div class="modal-footer">
        
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                     <button type="button" class="btn btn-primary"  data-dismiss="modal" onClick={this.clearCart.bind(this) }>Yes</button>
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