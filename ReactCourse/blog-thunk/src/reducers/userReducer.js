
export default (state=[],action) => {

    switch(action.type)
    {
        case 'FETCH_USER':
            return [...state, action.payload]; //get the previous state(that is null in this case and make an array of the users)
        default:
            return state;
    }
}
