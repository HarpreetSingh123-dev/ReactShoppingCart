import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Cart from './Cart'


class User_cart extends Component {



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

export default connect(mapStateToProps,null) (User_cart)