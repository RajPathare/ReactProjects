import _ from 'lodash' //lodash has a function called -> memoize, which is used for calling a function only once even if we are calling it multiple times for the same user.
                        // in this app, we are calling the same user 10 times, so we use it to reduce network calls
import jsonPlaceholder from '../apis/jsonPlaceholder';




// another way (alternative to memoize) = action creator inside action creator
export const fetchPostsAndUsers = () => {
    return async(dispatch, getState) => {
        console.log('Start fetching posts')
        await dispatch(fetchPosts()); // dispatch is necessary here (calling action inside action), also await until /posts call is completed
        console.log('Fetched posts')


        const userIds = _.uniq(_.map(getState().posts, 'userId')); //get only the unique UserId from the array
        console.log(userIds);
        userIds.forEach(id => dispatch(fetchUser(id)))

    }
}



// redux-thunk allows us to return a function in an action
// redux-thunk is also used when we are fetching something from an external-API (network fetch).
// We can use async-await here in redux-thunk
// example - 
export const fetchPosts = () => {
    //dispatch -> for changing the data, getState -> for getting the state
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type:'FETCH_POSTS', payload: response.data })
    } 
}


export const fetchUser = (id) => {
    //dispatch -> for changing the data, getState -> for getting the state
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type:'FETCH_USER', payload: response.data })
    } 
}





// memoize - 

// for memoizing, we have re-structered the function. You can declare the function as above if we don't use memoize.
// export const fetchUser = (id) => {

//     return (dispatch, getState) => {
//         _fetchUser(id,dispatch)

//     }
// }

// const _fetchUser = _.memoize(async(id,dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);

//         dispatch({ type:'FETCH_USER', payload: response.data })
    
// })


// we can return plain objects in redux-thunk, it's totally cool!
// export const fetchPosts = () => {

//     return {
//         type: 'FETCH_POSTS',
//         payload: 'something'
//     }
// }
