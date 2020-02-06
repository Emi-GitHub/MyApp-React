const initialState = ['skyblue'];

const colorText = (state=initialState, action) => {
    switch(action.type){
        case 'CHANGE_COLOR': return(
            state.map(el=> {
                if(el==="skyblue") return "pink";
                else if(el==="pink") return "skyblue";
                else return state;
            })
        )
        default: return state;
    }
}

export default colorText;