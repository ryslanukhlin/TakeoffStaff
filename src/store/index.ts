import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { authReducer } from './auth/reducer';
import thunk from 'redux-thunk';
import { AuthAction } from './auth/type';
import { ContactAction } from './contact/type';
import { contactReducer } from './contact/reducer';

const combineReducer = combineReducers({ authReducer, contactReducer });

export type RootState = ReturnType<typeof combineReducer>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducer, composeEnhancers(applyMiddleware(thunk)));

export type ActionType = AuthAction | ContactAction;
