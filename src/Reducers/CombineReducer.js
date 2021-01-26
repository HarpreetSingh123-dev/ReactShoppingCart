import {combineReducers} from 'redux'
import cartReducer from './CartReducer'
import productDescription from './DescriptionReducer'

export default combineReducers({

    cart:cartReducer,
    description:productDescription
})

