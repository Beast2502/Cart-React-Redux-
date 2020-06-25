import React, { Component } from 'react';
import ReactDom from "react-dom";

import Navbar from './component/Navbar';
import cart_Items from './cart_Items';
import CartContainer from './component/Cart_Container';


//redux stuff
//store => stores data , think of state

import {createStore} from 'redux';



//reducer
import reducer from './component/Reducer';

//react-redux - Provider- wraps app , connect - used in components


import {Provider} from 'react-redux';
//initial store
const initialStore={
    cart: cart_Items,
    total:105,
    amount:10,
    name: "Mehul"
}

const store = createStore(reducer,initialStore);

class Index extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Navbar/>
                    <CartContainer/>
                </Provider>
            </div>
        );
    }
}

ReactDom.render(<Index/>,document.getElementById("root"))