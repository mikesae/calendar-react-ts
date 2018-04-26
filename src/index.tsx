import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import StoreProvider from './storeProvider';

render(
    <StoreProvider>
        <App/>
    </StoreProvider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
