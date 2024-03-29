import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './Containers/App.js';
import { searchHeroes } from './Reducers';

const logger = createLogger();
const store = createStore(searchHeroes, applyMiddleware(logger))

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>
               , document.getElementById('root'));
serviceWorker.unregister();