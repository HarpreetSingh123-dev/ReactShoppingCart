export const   DECREASE_COUNT_CART = "DECREASE_COUNT_CART"

export default function decreaseCountCart(product) {

    
    return {

        type:DECREASE_COUNT_CART,
        payload: product
     
    }
}
