import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultreducer from './store/reducers/result';
import registerServiceWorker from './registerServiceWorker';

const reducer = combineReducers({
    ctr:counterReducer,
    res:resultreducer
});

const logger = store => {
    return next => {
        return action => {
            console.log("Middleware",store);
            const result = next(action);
            console.log("Middleware next state",store.getState());
            // return result;
        }
    }
}


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancer(applyMiddleware(logger,thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
