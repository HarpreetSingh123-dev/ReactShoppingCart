import React, { Component } from 'react';
import {BrowserRouter as Router, Route , Switch, Redirect} from 'react-router-dom'
import App from './App'
import MainPage from './Shopping-Cart/Main_Page'
import Cart from './UserCart/User_cart'
import ProductDescription from './Shopping-Cart/ProductDescription/Product_Description'
class Final_Assembly extends Component {
    render() {
        return (

            <Router>
            <div>
                <Switch>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/shopping' component={MainPage}></Route>
                <Route exact path='/Cart' component={Cart}></Route>
                <Route exact path='/Description/:id' component={ProductDescription}></Route>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default Final_Assembly;