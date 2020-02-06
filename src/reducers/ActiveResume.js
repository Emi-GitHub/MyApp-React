export default function (selectedResume=null, action){
    switch(action.type){
        case 'RESUME_SELECTED': return action.payload
    }
    return selectedResume;
}