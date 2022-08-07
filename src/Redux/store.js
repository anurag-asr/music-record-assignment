

import { legacy_createStore , applyMiddleware, combineReducers, compose } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk"

const rootReducers=combineReducers({AppReducer,AuthReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=
legacy_createStore(rootReducers, composeEnhancers( applyMiddleware(thunk))
)      
