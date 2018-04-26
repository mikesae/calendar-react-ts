import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
