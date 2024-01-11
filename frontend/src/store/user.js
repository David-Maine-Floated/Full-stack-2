// import csrfFetch from "./csrf"
// import { loginUser } from "./session"

// const RECEIVE_USER = 'users/RECEIVE_USER'
// const REMOVE_USER = 'users/RECEIVE_USER'


// export const receiveUser = user => {
//     return {
//         type: RECEIVE_USER, 
//         user
//     }
// }

// export const removeUser = userId => {
//     return {
//         type: RECEIVE_USER,
//         userId
//     }
// }



// export const createUser = user => async dispatch => {
//     let response = await csrfFetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify(user)
//     })

//     if (response.ok) {
//         let data = await response.json();
//         dispatch(receiveUser(data))  //create user
//         dispatch(loginUser(data))  //login user
//     }
// }

// const usersReducer = (state = {}, action) => {
//     const nextState = {...state}
//     switch(action.type) {
//         case RECEIVE_USER: 
//             nextState[action.user.id] = action.user
//             return nextState
//         case REMOVE_USER:
//             delete nextState[payload.userId]
//             return nextState 
//         default: 
//             return nextState
//     }
// }