import csrfFetch, { storeCSRFToken } from "./csrf";


const RECEIVE_SESSION_USER = 'session/RECEIVE_USER';
const REMOVE_SESSION_USER = "session/REMOVE_USER";


export const receiveSessionUser = user => {

    return {
        type: RECEIVE_SESSION_USER, 
        user
    }
}

export const removeSessionUser = userId => {
    return {
        type: REMOVE_SESSION_USER,
        userId
    }
}




export const signUpUser = (user, setErrors) => async dispatch => {

    try {

        let response = await csrfFetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(user)
        })
    
        let data = await response.json();
        dispatch(receiveSessionUser(data))  //create user

        
    } catch (errors) {
   
        let data = await errors.json()
        setErrors(data.errors)
        
    }
}

export const logoutUser = () => async dispatch => {
    let res = await csrfFetch('/api/session', {
        method: "DELETE"
    })
    let response = res.json()

    sessionStorage.setItem('currentUser', null);
    if (res.ok) dispatch(removeSessionUser());
    return res

}

export const restoreSession = () => async (dispatch) => {
    const response = await csrfFetch('/api/session')
    storeCSRFToken(response)
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveSessionUser(data));
    }
    return response;
}




export const loginUser = (user, setErrors) => async dispatch => {
   
    try {
        let response = await csrfFetch('/api/session', {
            method: "POST",
            body: JSON.stringify(user)
        })

        let data = await response.json()
        sessionStorage.setItem('currentUser', JSON.stringify(data.user))
        dispatch(receiveSessionUser(data))

    } catch (error){

            let data = await error.json()
            setErrors(data.errors)
    }
}




const sessionReducer = (state = {currentUser: {user:null}}, action) => {

    const nextState = {...state}
    switch(action.type) {
        case RECEIVE_SESSION_USER:
            nextState['currentUser'] = action.user
            return nextState
        case REMOVE_SESSION_USER:
            return { currentUser: {user: null} }
        default : 
            return nextState;
    }
}

export default sessionReducer