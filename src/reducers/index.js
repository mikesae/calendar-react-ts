import { combineReducers } from 'redux';
import events from './events';

const rootReducer = combineReducers({
  events: events
});

export default rootReducer;
