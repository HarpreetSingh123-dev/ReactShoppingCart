import { props } from 'ramda';
import React, { Component } from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// needs to add action 

import descriptionAction from '../../Actions/productDescriptionAction'


var id = null


class Product_Description extends Component {
   
    constructor(props){


        super(props)

        this.state={

            id:'',
            name:'',
            image:'',
            description:'',
            price:''

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
    
      this.setState({
         id:id,
         name:name,
         image:image,
         description:description,
         price:price

      })
  
    }

  show(){

    console.log(this.state)
  }
    render() {

        
        return (
            <div>
                <h1>Booooooooo</h1>
                <button onClick={this.show.bind(this)}>Show</button>
              {console.log(this.state)}
               
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