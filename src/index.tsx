import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
