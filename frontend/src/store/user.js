import csrfFetch from "./csrf"
// import { loginUser } from "./session"

const RECEIVE_USER = 'users/RECEIVE_USER'
const RECEIVE_USERS = 'users/RECEIVE_USERS'
// const REMOVE_USER = 'users/RECEIVE_USER'


export const receiveUser = user => {
    return {
        type: RECEIVE_USER, 
        user
    }
}

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS, 
        users
    }
}

// export const removeUser = userId => {
//     return {
//         type: RECEIVE_USER,
//         userId
//     }
// }



export const getUser = userId => async dispatch => {
    let response = await csrfFetch(`/api/users/${userId}`)

    if (response.ok) {
        let data = await response.json();
        dispatch(receiveUser(data))
    } else {

    }
}

export const getUsers = () => async dispatch => {
    let response = await csrfFetch(`/api/users`)

    if (response.ok) {
        let data = await response.json();
        dispatch(receiveUsers(data))
    } else {
        
    }
}


const usersReducer = (state = {}, action) => {
    let nextState = {...state}
    switch(action.type) {
        case RECEIVE_USER: 
        // debugger
            nextState[action.user.id] = action.user
            return nextState
        case RECEIVE_USERS:
            action.users.forEach(user => {
                nextState[user.id] = user
            })
            return nextState

        default: 
            return nextState
    }
}

export default usersReducer