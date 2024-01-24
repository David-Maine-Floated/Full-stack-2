import { RECEIVE_ARTICLE } from "./articles"

const RECEIVE_ERRORS = 'errors/RECEIVE_ERRORS'
const REMOVE_ERRORS = 'errors/REMOVE_ERRORS'

export const receiveArticleErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors: {articles: errors} 
    }
}

export const removeErrors = () => {
    return {
        type: REMOVE_ERRORS
    }
}


const errorsReducer = (state = {}, action) => {
    let nextState = {...state}
    switch(action.type) {
        case RECEIVE_ERRORS: 
            nextState = action.errors 
            return nextState;
        case RECEIVE_ARTICLE: 
            nextState = {};
            return nextState
        case REMOVE_ERRORS: 
            nextState = {};
            return nextState;
        default: 
            return state;
    }
}

export default errorsReducer