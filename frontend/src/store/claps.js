import csrfFetch from "./csrf";


const RECEIVE_CLAP = 'claps/RECEIVE_CLAP'
const RECEIVE_CLAPS = 'claps/RECIEVE_CLAPS'
const REMOVE_CLAP = 'claps/REMOVE_CLAP'


export const receiveClap = clap => {
    return {
        type: RECEIVE_CLAP, 
        clap 
    }
}

export const receiveClaps = claps => {
    return {
        type: RECEIVE_CLAPS, 
        claps
    }
}

export const removeClap = clapId => {
    return {
        type: REMOVE_CLAP, 
        clapid
    }
}

export const getClaps = () => async dispatch => {
     try {
        let response = await csrfFetch('/api/claps')
        if(response.ok) {
            let data = await response.json();
            dispatch(receiveClaps(data))
            // return true 
        } else {
            throw response 
        }
    } catch (errors) {
        let data = await errors.json()
        // return false;
    }
}

export const getClapsForArticle = (article_id) => async dispatch => {
  
     try {
        let response = await csrfFetch(`/api/claps/for_article/${article_id}`)
        if(response.ok) {
            let data = await response.json();
            dispatch(receiveClaps(data))
        } else {
            throw response 
        }
    } catch (errors) {
        let data = await errors.json()
    }
}

export const createClap = clap => async dispatch => {
    try {
        let response = await csrfFetch('/api/claps', {
            method: 'POST',
            body: JSON.stringify(clap)
        })
        if(response.ok) {
            let data = await response.json();
            dispatch(receiveClap(data))
        } else {
            throw response 
        }
    } catch (errors) {

        let data = await errors.json()
    }
}
export const updateClap = clap => async dispatch => {
    console.log('JSON', JSON.stringify(clap))
    try {
        let response = await csrfFetch(`/api/claps/${clap.id}`, {
            method: 'PATCH',
            body: JSON.stringify(clap)
        })
        if(response.ok) {
            let data = await response.json();

            dispatch(receiveClap(data))
        } else {
            throw response 
        }
    } catch (errors) {
        console.log(errors)
    }
}

export const deleteArticle = (clapId) => async dispatch => {
    try {
        let response = await csrfFetch(`/api/claps/${articleId}`, {
            method: 'DELETE',
            body: JSON.stringify({clapId :clapId})
        })
        if(response.ok) {
            // let data = await response.json();
            dispatch(removeClap(clapId));

        } else {
            throw response; 
        }
    } catch (errors){
        let data = await errors.json()
        dispatch(receiveArticleErrors(data.errors))
        return false
    }
}




const clapsReducer = (state = {}, action) => {
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_CLAP:
            nextState[action.clap.articleId] = action.clap
            return nextState;
        case RECEIVE_CLAPS:
            action.claps.forEach(clap => {
                nextState[clap.likerId] = clap
            })
            return nextState
        default :
            return state;
    }
}

export default clapsReducer
