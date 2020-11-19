import { FETCH_STREAMS, FETCH_STREAM, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM } from '../actions/types';
import _ from 'lodash';

// object oriented approach makes it easier for us to update states as compared to array based approach.
// state = [] vs state = {}
// const streamReducer = (state = {}, action) => {
//     switch(action.type){
//         case EDIT_STREAM: 
//             const newState = { ...state }; //create a new state object from the previous state object so that we can apply any operations on that particular object.
//             newState[action.payload.id] = action.payload; // add or replace the previous object with the newly provided object.
//             return newState;
//             // return {...state, [action.payload.id]: action.payload} // short syntax for above logic. (key interpolation)
//             // the logic above adds/replaces the object -> action.payload.id is the key and action.payload is the value
//         default:
//             return state;
//     }
// }


export default (state = {}, action) => {
    switch(action.type)
    {
        case FETCH_STREAMS:
        //mapKeys example - 
        //obj= [
        //     {
        //         "id": 1,
        //         "value": "value1"
        //     },
        //     {
        //         "id": 2,
        //         "value": "value2"
        //     }
        // ]
        // mapKeys(obj, 'id') -> 
        // "1": {"id":1, "value": "value1"}, "2": {"id":2, "value": "value2"}
        // We need to fetch streams for all individual streamers (ID) so this func will help us.
            return {...state, ..._.mapKeys(action.payload, 'id')};
        // if action.payload.id == 2 and action.payload = { id: 2, value: "hello"} -->
        // new state = {
        //   id: 2
        //   value: "hello"
        //}
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            // omit is a lodash function. first arg = previous state, second arg = the object that needs to be deleted from the state.
            return _.omit(state, action.payload) // we dispacted id in the deleteStream action, so we don't pass action.payload.id 
        default:
            return state;
    }
}