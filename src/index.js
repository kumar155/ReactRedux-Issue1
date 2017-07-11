
import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import store from './stores/store';
import App from './components/app'
import {createStore} from 'redux';
import todoApp from './stores/todopp';


render(
    <Provider store={store}>
        <App/>
    </Provider>,document.getElementById("app")
)