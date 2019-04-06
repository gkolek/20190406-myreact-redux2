import {
  createStore, combineReducers,
  applyMiddleware, compose
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import uiReducer from './ui/reducer';
import catsReducer from './cats/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cats: catsReducer,
  ui: uiReducer // ui.notifications.open
});

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;