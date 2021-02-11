export const DELETE_ITEM = "DELETE_ITEM"

export default function deleteItem(product){

    return{
    type:DELETE_ITEM,
    payload: product
    }
}