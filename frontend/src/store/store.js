import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import sessionReducer from './session';
import modalsReducer from './modals';
import articlesReducer from './article';
import errorsReducer from './errors';
import usersReducer from './user';
import clapsReducer from './claps';

const rootReducer = combineReducers({
  session: sessionReducer,
  articles: articlesReducer,
  modal: modalsReducer,
  errors: errorsReducer,
  users: usersReducer,
  claps: clapsReducer
});

let enhancer;
if (import.meta.env.MODE === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}



function configureStore(preloadedState = {}) {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;

