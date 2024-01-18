import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import csrfFetch from './store/csrf';
import * as sessionActions from "./store/session";
import { restoreCSRF } from './store/csrf';
import * as modalActions from './store/modals'
import * as articleActions from './store/article'

const store = configureStore()

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.restoreCSRF = restoreCSRF;
  window.modalActions = modalActions;
  window.articleActions = articleActions
}





// restoreCSRF().then(() => ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// ));



  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
