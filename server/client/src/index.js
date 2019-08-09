//index.js is enforced by create-react-app to be the main file

//For REDUX setup
import 'materialize-css/dist/css/materialize.min.css' //Add file extension to css files for webpack to understand. No relative path (start with ./) = an npm modulee
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//Action creators

const store = createStore(reducers, {}, applyMiddleware(reduxThunk)) //Reducer, initialState



ReactDOM.render(
    <Provider store={store}><App /></Provider>, //Provider wraps the entire application and holds a store of the state that anything in the application can get access to.
    document.querySelector('#root')
); //render takes a component, and a DOM location to render that component in



