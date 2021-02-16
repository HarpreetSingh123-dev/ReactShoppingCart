const TOTAL_PRODUCTS = 0

export default function totalProducts(state = TOTAL_PRODUCTS, action = {}){


switch (action.type){


    case "INCREMENT": {

       var total = state
       var b = total+1
       return b

    }


    case "DECREMENT":{

        var total = state
        var b = total-1
        return b
        
    }

    case "DELETE":{

        var total = state
        var units = action.payload
        var b = total-units
        return b

        
    }

    case "CLEAR_CART":{
        var total = state
        total = 0
        return total

    }

}

return state
}