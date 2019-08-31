//This allows us to import the reducers directory, which by convention with import statements will give us any files that are called index.js in the folder.

import { combineReducers } from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm 
})