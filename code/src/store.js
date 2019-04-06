import { createStore, combineReducers } from 'redux';

import authReducer from './auth/reducer'
import uiReducer from './ui/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer // ui.notifications.open
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
