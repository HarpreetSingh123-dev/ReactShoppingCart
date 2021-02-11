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
    case "INCREASE_COUNT_CART": {
      const product = action.payload;
      const cart = state;

      const exsistingProductIndex = cart.findIndex(p => p.id === product.id);

      if (exsistingProductIndex >= 0) {
        const cartProducts = [...cart];

        const exsistingProduct = cartProducts[exsistingProductIndex];

        const updatedUnitsProduct = {
          ...exsistingProduct,
          units: { units: exsistingProduct.units.units + 1 }
        };

        cartProducts[exsistingProductIndex] = updatedUnitsProduct;

        return cartProducts;
      }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    case "DECREASE_COUNT_CART": {
      const product = action.payload;

      const cart = state;

      const exsistingProductIndex = cart.findIndex(p => p.id === product.id);

      if (exsistingProductIndex >= 0) {
        const cartProducts = [...cart];

        const exsistingProduct = cartProducts[exsistingProductIndex];

        const updatedUnitsProduct = {
          ...exsistingProduct,
          units: { units: exsistingProduct.units.units - 1 }
        };

        cartProducts[exsistingProductIndex] = updatedUnitsProduct;

        if (updatedUnitsProduct.units.units === 0) {
          console.log(cart);
          console.log("in zero case");
          cartProducts.splice(exsistingProductIndex, 1);

          return cartProducts;
        } else {
          return cartProducts;
        }
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    case "CLEAR_CART":{

     
      const p = []

      return p

    }

    ///////////////////////////////////////////////////////////////////////////

    case "DELETE_ITEM":{


      const product = action.payload
      
      const cart = state

      const exsistingProductIndex = cart.findIndex(p => p.id === product.id)

      if (exsistingProductIndex >= 0){

        const cartProducts = [...cart];
        cartProducts.splice(exsistingProductIndex, 1)
        return cartProducts
      }

      

      console.log(product.id)
      console.log(" in delete")




    }
}



return state
}  

