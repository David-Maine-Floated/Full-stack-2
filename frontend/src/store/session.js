import csrfFetch from "./csrf";


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
        type: RECEIVE_USER,
        userId
    }
}


export const loginUser = user => async dispatch => {
    let response = await csrfFetch('/api/session', {
        method: "POST",
        body: JSON.stringify(user)
    })
    debugger 
    if(!response.ok) return response 

    let data = await response.json()
    console.log(data)
    sessionStorage.setItem('currentUser', JSON.stringify(data.user))
    
    dispatch(receiveUser(data.user))
}

export const logoutUser = userId => async dispatch => {
    let res = await csrfFetch('/api/session', {
        method: "DELETE"
    })


    sessionStorage.setItem('currentUser', null);
    if (res.ok) dispatch(removeUser(userId));
    if (!res.ok) console.log(res)

}




const sessionReducer = (state = null, action) => {
  
    const nextState = {...state}
    switch(action.type) {
        case RECEIVE_USER:
       
            nextState['currentUser'] = action.payload 
            return nextState
        case REMOVE_USER:
            delete nextState['currentUser']
            return nextState;
        default : 
            return nextState;
    }
}

export default sessionReducer