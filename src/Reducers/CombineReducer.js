import {combineReducers} from 'redux'
import cartReducer from './CartReducer'
import productDescription from './DescriptionReducer'
import cartTotal from './TotalOfCartReducer'
import totalProducts from './TotalProductsInCartReducer'

export default combineReducers({

    cart:cartReducer,
    description:productDescription,
    total:cartTotal,
    totalProducts:totalProducts
})

