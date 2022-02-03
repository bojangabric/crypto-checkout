import { combineReducers } from 'redux';
import questions from 'redux/reducers/questions';
import payment from 'redux/reducers/payment';

const rootReducer = combineReducers({
  questions,
  payment
});

export default rootReducer;
