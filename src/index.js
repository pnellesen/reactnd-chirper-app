import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'


const store = createStore(reducer, middleware);
console.log("store created: ", store);


store.subscribe(() => {
    const {users, chirps, currentUser} = store.getState();
})

console.log("initial state: ", store.getState());

console.log("Store before app render: ", store);
ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'))