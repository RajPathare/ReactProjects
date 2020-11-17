import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // this reducer is provided to us by the redux-form library
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer
});