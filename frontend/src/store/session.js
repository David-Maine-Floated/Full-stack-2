import csrfFetch, { storeCSRFToken } from "./csrf";


const RECEIVE_USER = 'session/RECEIVE_USER';
const REMOVE_USER = "session/REMOVE_USER";


export const receiveUser = user => {
    return {
        type: RECEIVE_USER, 
        payload: user 
    }
}

export const removeUser = userId => {
    return {
        type: REMOVE_USER,
        userId
    }
}




export const signUpUser = user => async dispatch => {
    let response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
    })

    if (response.ok) {
        let data = await response.json();
        dispatch(receiveUser(data))  //create user
        // dispatch(loginUser(data))  //login user
    }
}

export const logoutUser = userId => async dispatch => {
    let res = await csrfFetch('/api/session', {
        method: "DELETE"
    })

    sessionStorage.setItem('currentUser', null);
    if (res.ok) dispatch(removeUser(userId));
    return res

}

export const restoreSession = () => async (dispatch) => {
    const response = await csrfFetch('api/session')
    storeCSRFToken(response)
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveUser(data))
    }
    return response 
}




export const loginUser = user => async dispatch => {

    let response = await csrfFetch('/api/session', {
        method: "POST",
        body: JSON.stringify(user)
    })
    // debugger
    if(!response.ok) return response 
    console.log('loginThunk')
    let data = await response.json()

    sessionStorage.setItem('currentUser', JSON.stringify(data.user))
    
    dispatch(receiveUser(data.user))
}




const sessionReducer = (state = {currentUser: null}, action) => {
  
    const nextState = {...state}
    switch(action.type) {
        case RECEIVE_USER:
            // debugger
            console.log('sessionReducer')
            nextState['currentUser'] = action.payload.user 
            return nextState
        case REMOVE_USER:
            // debugger
            return { ...nextState, currentUser: null }
        default : 
            return nextState;
    }
}

export default sessionReducer