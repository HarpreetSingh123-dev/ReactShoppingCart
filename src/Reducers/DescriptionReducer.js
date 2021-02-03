var Description = []

export default function description( state= Description, action={}){

console.log('indescription')


  

  if(action.type=="DESCRIPTION"){

    //console.log("finally inside description")
    //console.log("id of selected product is "+action.payload.name)

  let Product = state
      Product.length =0  
  var id = action.payload.id
  var name = action.payload.name
  var description = action.payload.description
  var img = action.payload.img
  var price = action.payload.price
  var about = action.payload.about
  var subdescription = action.payload.subdescription
  var imageSet = action.payload.imageSet

  var finalProduct ={id,name,description,img,price,about,subdescription,imageSet}

  console.log("final product is "+ finalProduct.name)

  Product.push(finalProduct)

  console.log(Product)
  

}

return state
    
}