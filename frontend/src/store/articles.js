import csrfFetch from "./csrf";
import { receiveArticleErrors } from "./errors";


export const RECEIVE_ARTICLE = 'articles/RECEIVE_ARTICLE'
const RECEIVE_ARTICLES = 'articles/RECIEVE_ARTICLES'
const  REMOVE_ARTICLE = 'articles/DELETE_ARTICLE'
const RECEIVE_COMMENT ='comments/RECIEVE_COMMENT'

export const receiveArticle = article => {
    return {
        type: RECEIVE_ARTICLE, 
        article : article
    }
}

export const receiveArticles = articles => {
    return {
        type: RECEIVE_ARTICLES,
        articles
    }
}

export const removeArticle = articleId => {
    return {
        type: REMOVE_ARTICLE,
        articleId
    }
}

export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT, 
        comment
    }
}

export const createComment = (comment) => async dispatch => {
    try {
        let response = await csrfFetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify(comment)
        })
        if(response.ok) {
            let data = await response.json()
            dispatch(receiveComment(data))
        }
    } catch (error) {
        console.log('CREATE COMMENT ERRORS:', errors)
        
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
        let response = await csrfFetch(`/api/articles`)
        let data = await response.json()
        dispatch(receiveArticles(data))
} 

export const createArticle = (article) => async dispatch => {
    // debugger
    try {
        let response = await csrfFetch(`/api/articles`, {
            method: 'POST',
            body: article
        }, false)
        if(response.ok) {
            let data = await response.json();
            dispatch(receiveArticle(data));

            return data.id
        } else {
            throw response; 
        }
    } catch (errors){
        let data = await errors.json()
        dispatch(receiveArticleErrors(data.errors))
        return false
    }
}
export const editArticle = (article) => async dispatch => {
    try {
        let response = await csrfFetch(`/api/articles/${article['id']}`, {
            method: 'PATCH',
            body: article
        }, false)
        if(response.ok) {
            let data = await response.json();
            dispatch(receiveArticle(data));

            return data.id
        } else {
            throw response; 
        }
    } catch (errors){
        let data = await errors.json()
        dispatch(receiveArticleErrors(data.errors))
        return false
    }
}


export const deleteArticle = (articleId) => async dispatch => {
    try {
        let response = await csrfFetch(`/api/articles/${articleId}`, {
            method: 'DELETE',
            body: JSON.stringify({articleId:articleId})
        })
        if(response.ok) {
            // let data = await response.json();
            dispatch(removeArticle(articleId));

        } else {
            throw response; 
        }
    } catch (errors){
        let data = await errors.json()
        dispatch(receiveArticleErrors(data.errors))
        return false
    }
}






const articlesReducer = (state = {}, action) => {
    let nextState = {...state}
    switch(action.type) {
        case RECEIVE_ARTICLE: 
        nextState = {}
        nextState[action.article.id] = action.article
        return nextState
        case RECEIVE_ARTICLES:
            action.articles.forEach((article) => {
                nextState[article.id] = article
            })
            return nextState;
        case REMOVE_ARTICLE: 
            delete nextState[action.articleId].claps
            return nextState;
        case RECEIVE_COMMENT:
            debugger
            let articleId = action.comment.articleId;
            const updatedComments = [...nextState[articleId].comments, action.comment];
            const newState = {
                ...nextState,
                [articleId]: {
                    ...nextState[articleId],
                    comments: updatedComments
                }
            };
            debugger
            return newState
        default: 
            return nextState;
    }
}

export default articlesReducer

