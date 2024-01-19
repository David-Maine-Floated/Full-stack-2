import csrfFetch from "./csrf"
// import { loginUser } from "./session"

const RECEIVE_USER = 'users/RECEIVE_USER'
// const REMOVE_USER = 'users/RECEIVE_USER'


export const receiveUser = user => {
    return {
        type: RECEIVE_USER, 
        user
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
        console.log('NO USER FOUND')
    }
}

const usersReducer = (state = {}, action) => {
    const nextState = {...state}
    switch(action.type) {
        case RECEIVE_USER: 
            nextState[action.user.id] = action.user
            return nextState
        default: 
            return nextState
    }
}

export default usersReducer