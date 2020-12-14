

// export const setLanguage = (language) => {

//     return async (dispatch) => {
//         console.log(language);
//         dispatch({ type: 'CHANGE_LANGUAGE', payload: language });
//     }
// }


export const setLanguage = (language) => {
    return {
        type: 'CHANGE_LANGUAGE',
        payload: language
    }
}