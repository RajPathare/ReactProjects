
const INITIAL_STATE = {
    language: 'english'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGE_LANGUAGE':
            return {...state, language: action.payload };
        default:
            return state;
    }
}