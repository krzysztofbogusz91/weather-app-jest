import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from "./store";


ReactDOM.render(
    <Provider store={store()}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
