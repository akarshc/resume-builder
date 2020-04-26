import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { loadState, saveState } from './localStorage';

import { resume } from './reducers/resume-reducer';

const logger = createLogger();

const rootReducers = combineReducers({resume });

const persistedState = loadState();

export const store = createStore(rootReducers, persistedState, applyMiddleware(thunkMiddleware, logger));


store.subscribe((state) => {
  saveState({
      resume: store.getState().resume
    });
});    