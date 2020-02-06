const logged = (state=false, action) => {
    switch(action.type){
        case 'SING_IN': return true;
        default: return state;
    }
}

export default logged;