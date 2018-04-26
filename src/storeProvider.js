import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const StoreProvider = ({children}) => (
    <Provider store={store}>
        {children}
    </Provider>
);
export default StoreProvider;