import { combineReducers } from 'redux';
import ResumeReducer from './ResumeReducer';
import ActiveResume from './ActiveResume';

const rootReducer = combineReducers ({
    resumes: ResumeReducer,
    //dodati activeResume
    activeResume: ActiveResume
})

export default rootReducer;