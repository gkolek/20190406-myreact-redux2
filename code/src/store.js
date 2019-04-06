import { createStore, combineReducers } from 'redux';

import uiReducer from './ui/reducer';

const rootReducer = combineReducers({
  ui: uiReducer // ui.notifications.open
});

const store = createStore(rootReducer);

export default store;
