import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => { //FetchUser immediately returns a function with this syntax... This is the same as a return call that returns a dispatch function
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data});
}