import { combineReducers } from 'redux';
import ProjectReducer from './ProjectReducer';
import ActiveResume from './ActiveResume';

const proReducer = combineReducers ({
    projects: ProjectReducer,
    activeResume: ActiveResume
})

export default proReducer;