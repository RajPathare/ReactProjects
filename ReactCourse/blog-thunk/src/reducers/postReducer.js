

// reducers can never return an undefined value. Always return something from a reducer
// reducers never try to go out of their function (no API requests)
export default (state = [], action) => {

    switch(action.type)
    {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }

};