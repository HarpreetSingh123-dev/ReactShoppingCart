import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ProductsData from '../Data'
import Navbar from '../Navbar/Navbar'
import ProductsDisplay from '../Products/Products_Disp'
import './Main_Page.css'
import addToCartAction from '../Actions/addToCartAction'

import descriptionAction from '../Actions/productDescriptionAction'


//import Sidebar from 'react-sidebar-ui'
//import Sidebar from 'react-sidebar'
//import Sidebar from 'reactrix-sidebar'

//import Drawer from 'rc-drawer'
import LowerSelectBarOne from './Main_Page_Bar/Lower_SelectBarOne'
import LowerSelectBarTwo from './Main_Page_Bar/Lower_SelectBarTwo'
import Side from './Main_Page_Bar/Side_Bar'


const R = require('ramda')


class Main_Page extends Component {

    constructor(props){

        super(props)

        this.state={
            list:[],
            cat :false,
            category:'',
            catList:[],
            opened: false,
            ////below states are for paginating//////
            currentPage:1,
            todosPerPage: 12,  
            ////////////////////////////////////////  
            
            ///below state is used to impliment hamburger icon of sidebar using conditional rendering//////////////
            hamIconSet:false
        }
        
        this.handleClick = this.handleClick.bind(this);
   
      }

  

/////////////////////////////////////////////////////////////////////////////////////
    componentDidMount(){
     
        console.log("nwdf")
        var k = ProductsData.map(  (pdt)=>{
     
                console.log(pdt)
                //var a = pdt.id
                return pdt
             })
       
             console.log(k)
    
             this.setState({list:k})

             this.setState({hamIconSet:true})
        
    }
    

//////////////////Below function is used to add product to cart using redux////////////      
   add(id,name,description,img,price,units){
        
          const product = {id,name,description,img,price,units}

          this.props.addToCartAction(product)
     }

  sorting(event){ /////////////// Master Sorting Function//////////////////////

    const category = this.state.cat
    const list = this.state.list // main list array 
    const catList = this.state.catList // category list
    
    var sortedLowToHighList 
    var catSortedLowToHigh

    var sortedHighToLowList
    var catSortedHighToLowList
    
    if(event.target.value== "featured"){
      this.componentDidMount()
      
    }

    if(event.target.value== "lowToHigh"){
      sortLowToHigh()
      
    }

    if(event.target.value=="highToLow"){
       sortHighToLow()
      
    }
    //if(event.target.value== "lowToHigh" && category){
        // console.log('whhhhh jii')
      //  }
////Below function is used to sort products low to high on basis of price/////    
   function sortLowToHigh(){
    
      if(!category){ // checking if category is true or not
            var ascendingSortedObjs = R.sortBy(R.prop('price'), list)
            //this.setState({list:ascendingSortedObjs, currentPage:1})
            sortedLowToHighList = ascendingSortedObjs
          }
    
      else {
           var ascendingSortedObjs = R.sortBy(R.prop('price'), catList)
           // this.setState({catList:ascendingSortedObjs, currentPage:1})
           catSortedLowToHigh = ascendingSortedObjs
         }
   }
  
    if(event.target.value== "lowToHigh" && !category){
        this.setState({list:sortedLowToHighList, currentPage:1})
        //console.log('whatttttttt')
    }

   if(event.target.value== "lowToHigh" && category){
        this.setState({catList:catSortedLowToHigh, currentPage:1})
    }

  
/////Below function is used to sort products high to low on basis of price/////   
  function  sortHighToLow(){

     

      if(!category){
        var ascendingSortedObjs = R.sortBy(R.prop('price'), list)
        var descendingSortedObjs = R.reverse(ascendingSortedObjs)
        //this.setState({list:descendingSortedObjs, currentPage:1})
        sortedHighToLowList = descendingSortedObjs
      }

      else {

        var ascendingSortedObjs = R.sortBy(R.prop('price'), catList)
        var descendingSortedObjs = R.reverse(ascendingSortedObjs)
        //this.setState({catList:descendingSortedObjs, currentPage:1})
        catSortedHighToLowList = descendingSortedObjs

      }
    }
    if(event.target.value== "highToLow" && !category){
      this.setState({list:sortedHighToLowList, currentPage:1})
      //console.log('whatttttttt')
     }
     if(event.target.value== "highToLow" && category){
      this.setState({catList:catSortedHighToLowList, currentPage:1})
  }

  }
///////////////////Below function is used to show products of particular category selected at front end///    
    byCategory(category){
     
      this.setState({cat:true})
      this.setState({catList:[]})
      this.setState({category: category})
      

      
      var listOfProducts = this.state.list
      var filtered = []

      filtered = listOfProducts.filter( (e)=>{

          return e.category === category

      })

      
      
      this.setState({catList:filtered})
}

////////////////////////Below function is used in pagination/////////////////
handleClick(event) {
    this.setState({
      currentPage: Number(event.target.value)
    });
  }


//////////////////////Below function if fired when particular product is clicked for description/////////////////

particularProductDescription(id,name,description,img,price,about,subdescription,imageSet){
 
 //console.log("yoo"+ name)

 const particularProduct ={id,name,description,img,price,about,subdescription,imageSet}

 console.log(particularProduct)

 this.props.descriptionAction(particularProduct)


}


pp(){
  this.setState({cat:false})
}

    render() {
       
   //  This below logic is used to impliment pagination on "list array" please see carefully////
   ///////////////////////////////////////////////////////////////////////////////////////////////
       const list = this.state.list
       const currentPage = this.state.currentPage
       const todosPerPage = this.state.todosPerPage
       const indexOfLastTodo = currentPage * todosPerPage;
       const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
       const currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo);

      {/* const renderTodos = currentTodos.map((todo, index) => {
           return <li key={index}>{todo.name}</li>;
          });*/ }
      

       const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(list.length / todosPerPage); i++) {
            pageNumbers.push(i);
         }

          const renderPageNumbers = pageNumbers.map(number => {
           return (
              <button class="page-link" id="page-numbers"
                key={number}
                value={number}
                onClick={this.handleClick}
              >
                {number}
                
              </button>
            );
          });

      ///// Below code is used to impliment pagination for "category array" read carefully////////    
      ////////////////////////////////////////////////////////////////////////////////////////////

       const categoryList = this.state.catList
       const categoryCurrentPage = this.state.currentPage
       const categoryToDoPerPage = this.state.todosPerPage
       const categoryIndexOfLastToDo = categoryCurrentPage * categoryToDoPerPage
       const categortIndexOfFirstToDo = categoryIndexOfLastToDo - categoryToDoPerPage
       const categoryCurrentToDos = categoryList.slice(categortIndexOfFirstToDo , categoryIndexOfLastToDo)


       const categoryPageNumbers = [];
         for (let i = 1; i <= Math.ceil(categoryList.length / categoryToDoPerPage); i++) {
              categoryPageNumbers.push(i);
         }
      

       const categoryRenderPageNumbers = categoryPageNumbers.map(number => {
        return (
          <button class="page-link" id="page-numbers"
            key={number}
            value={number}
            onClick={this.handleClick}
          >
            {number}
           
          </button>
         );
       });


      const category = this.state.cat
       let a ;
       let s ;
       
    
     ///////////////// if there is no category map products from main list/////////////  
       if(!category){

        a = (
            <div className="pgset" >
               <LowerSelectBarOne selectSort={this.sorting.bind(this)}
                                  
            
            
               ></LowerSelectBarOne>
            <div className="row">
           
            {currentTodos.map(  (pdt) =>  //// rendering from  "currentTodos" see just below render() how this variable is made

                   <ProductsDisplay key={pdt.id}  
                   
                   id={pdt.id}
                       name={pdt.name} 
                         description={pdt.description} 
                           img={pdt.img} 
                              price={pdt.price} 
                               about={pdt.about}
                                 subdescription={pdt.subdescription}
                                 imageSet={pdt.images}
                                    addfunc={this.add.bind(this)}
                                      paricularProductDescription={this.particularProductDescription.bind(this)}
                   
                   
                   
                   ></ProductsDisplay>


            )

            }
            </div>

            <div className="paginationSet">
            <div className="container">
            <nav aria-label="Page navigation example"  >
                  <ul class="pagination"  >
 
                     {renderPageNumbers.map( (page)=>{
                        return  <li class="page-item"><b>{page}</b></li>
                     })}
                  </ul>
             </nav>
             </div>
             </div>
             </div>

            )

            s =(
               <div class="top_nav_one">   
               <a style={{color: "blue", fontSize: "17px"}}>HOME&nbsp;/</a>
               </div>
            )
       }

       ////////////////// if there is category selected map products from catlist////////////
       else if(category) {

        a = (
            <div className="pgset">
             <LowerSelectBarTwo   selectSort={this.sorting.bind(this)}  
                                  set={this.state.cat}
                                  
                                 
             ></LowerSelectBarTwo>
            <div className="row">

            {categoryCurrentToDos.map(  (pdt) => 

                   <ProductsDisplay key={pdt.id}
                   
                   id={pdt.id}
                       name={pdt.name} 
                         description={pdt.description} 
                           img={pdt.img} 
                              price={pdt.price} 
                               addfunc={this.add.bind(this)}
                   
                   
                   
                   ></ProductsDisplay>


            )

            }
            </div>
            
            <div className="paginationSet">
            <div className="container">
            <nav aria-label="Page navigation example"  >
                  <ul class="pagination"  >
 
                     {categoryRenderPageNumbers.map( (page)=>{
                        return  <li class="page-item"><b>{page}</b></li>
                     })}
                  </ul>
             </nav>
            </div>
            </div>
            </div>
        )

        s= (
         
            <div class="top_nav_two">   
               <a style={{color: "blue", fontSize: "17px"}} onClick={this.pp.bind(this)}>HOME</a>
               <span>/</span>
               <span>&nbsp;</span>
               <span style={{fontSize: "17px"}}> {this.state.category}</span>
           </div>

        )

    }
       
        
        return (
            <div className="Main_Page">
            <Navbar
            
            iconSet={this.state.hamIconSet}

            set={ <Side //clickLowToHigh={this.sortLowToHigh.bind(this)}  /// Passing "side" component as prop to "navigation bar"    
                       //clickHighToLow={this.sortHighToLow.bind(this)}
                       selectChange={this.byCategory.bind(this)}
                       name={<h1 className="text-center">WELCOME</h1>}
                           >

                 </Side>}>


            </Navbar>
    
           
           
          
            <div className="container-fluid"> 
           
                  {s}
            
              
                  {a}
                     {/*  <Link to="/Cart"><button>Go To Cart</button></Link>*/}
                     {/*console.log(this.state)*/}
                     {/*console.log(this.state.catList)*/}
                     {/* <button onClick={this.byCategory.bind(this)}> only whey</button>*/}
           
                 
                
                { /*
                <ul id="page-numbers">
               <button> {renderPageNumbers}</button>
                </ul> */}

            
            
            </div>
            </div>
        );
    }
}

const mapActionsToProps = (dispatch) =>{

    return bindActionCreators({

    addToCartAction,
    descriptionAction,
   

    }, dispatch)

}

export default connect(null, mapActionsToProps)(Main_Page);  