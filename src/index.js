import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/app-reducer';
import { Provider } from 'react-redux';
import store from "./store";

ReactDOM.render(
    <Provider store={store()}>   
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
