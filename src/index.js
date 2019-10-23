import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import { reducer as buyReducer } from "./reducers/buy";
// import { reducer as removeItemReducer } from "./reducers/removeItem";
// import { reducer as addReducer } from "./reducers/addFeature";
import { salesReducer } from "./reducers/index"
import 'bulma/css/bulma.css';
import './styles.scss';

// this combines everything into one giant main reducer,
// so our action types still need to be unique
// const rootReducer = combineReducers({
//   buy: buyReducer,
//   removeItem: removeItemReducer,
//   addFeature: addReducer,
//   salesReducer: salesReducer
// });
// create our store or "global state object"

const store = createStore(salesReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store ={store}>
<App />
</Provider>
, rootElement);
