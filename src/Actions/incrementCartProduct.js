export const   UPDATE_ADD_CART = "INCREASE_COUNT_CART"

export default function updateAddCart(product) {

    console.log("in update cart")
    return {

        type:UPDATE_ADD_CART,
        payload: product
     
    }
}
