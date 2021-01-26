export const DESCRIPTION = "DESCRIPTION"

export default function description(particularProduct){

    //console.log("strange")
   // console.log(productId)
   console.log("particular product is" + particularProduct)
    return{
        type:DESCRIPTION,
        payload: particularProduct
        }


}