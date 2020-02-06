import changer from './changer';
import colorText from './colorText';
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    changer, 
    colorText, 
    form: formReducer
});

export default reducers;