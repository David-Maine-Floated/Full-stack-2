import csrfFetch from "./csrf";


const RECEIVE_ARTICLE = 'article/RECEIVE_ARTICLE'
const RECDEIVE_ARTICLES = 'articles/RECIEVE_ARTICLES'

export const receiveArticle = article => {
    return {
        type: RECEIVE_ARTICLE, 
        article : article
    }
}

export const receiveArticles = articles => {
    return {
        type: RECDEIVE_ARTICLES,
        articles
    }
}


export const getArticle = (articleId) => async dispatch => {
    try {
        let response = await csrfFetch(`/api/articles/${articleId}`)

        let data = await response.json()
        dispatch(receiveArticle(data))
    } catch (error) {
        let errors = await error.json()
        throw errors
    }
} 

export const getArticles = () => async dispatch => {
    try {
        let response = await csrfFetch(`/api/articles`)

        let data = await response.json()

        dispatch(receiveArticles(data))
    } catch (error) {

        // let errors = await error.json()
        throw error
    }
} 

export const createArticle = (article) => async dispatch => {
    try {
        let response = await csrfFetch(`/api/articles`, {
            method: 'POST',
            body: JSON.stringify(article)
        })

        let data = await response.json()
        dispatch(receiveArticle(data))
    } catch (error) {
        console.log(error)
        throw error
    }
}

const articlesReducer = (state = {}, action) => {
    const nextState = {...state}
    switch(action.type) {
        case RECEIVE_ARTICLE: 
            nextState[action.article.id] = action.article
            return nextState
        case RECDEIVE_ARTICLES:
            console.log('in reducer', action.articles)
            action.articles.forEach((article) => {
                nextState[article.id] = article
            })
            return nextState
        default: 
            return nextState;
    }
}

export default articlesReducer

