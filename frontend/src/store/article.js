import csrfFetch from "./csrf";


const RECEIVE_ARTICLE = 'article/RECEIVE_ARTICLE'


export const receiveArticle = article => {
    return {
        type: RECEIVE_ARTICLE, 
        article 
    }
}


export const getArticle = (articleId) => async dispatch => {
    try {
        let response = await csrfFetch(`/api/articles/${articleId}`)

        let data = await response.json()
        console.log('thunk', data)
        dispatch(receiveArticle(data))
    } catch (error) {
        let errors = await error.json()
        console.log('errors', errors)
        // throw errors
    }
} 

const articlesReducer = (state = {}, action) => {
    const nextState = {...state}
    switch(action.type) {
        case RECEIVE_ARTICLE: 
            console.log('helloooo', action.article.title)
            nextState[action.article.id] = action.article
            // nextState[action.article.id] = action.article
            return nextState
        default: 
            return nextState;
    }
}

export default articlesReducer

