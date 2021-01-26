const INITIAL_STATE = [];

export default function cartReducer(state = INITIAL_STATE, action = {}) {
    
    console.log("in reducer babyhgjnghg");  
  
    switch (action.type) {
     //////////////////////////////////////////////////////////////////////////////   
      case "ADD_TO_CART": {
        const product = action.payload;

       
        const cart = state;
        
        const exsistingProductIndex = cart.findIndex(p => p.id === product.id); 
       
        if (exsistingProductIndex >= 0) {
          
  
          const cartProducts = [...cart]; 
  
          const exsistingProduct = cartProducts[exsistingProductIndex]; 
  
          const updatedUnitsProduct = {
            ...exsistingProduct,
            units: { units: exsistingProduct.units.units + product.units.units }
          };
         
  
          cartProducts[exsistingProductIndex] = updatedUnitsProduct;
          
          return cartProducts;
        } else return [...cart, product]; 
      }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    
    

}



return state
}  

