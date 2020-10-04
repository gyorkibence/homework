import { combineReducers } from 'redux';
import appReducer from 'reducers/app/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
