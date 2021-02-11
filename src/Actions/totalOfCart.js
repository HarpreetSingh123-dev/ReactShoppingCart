export const   TOTAL_OF_CART = "TOTAL_OF_CART"

export default function updateAddCart(product) {

    
    return {

        type:TOTAL_OF_CART,
        payload: product
     
    }
}
