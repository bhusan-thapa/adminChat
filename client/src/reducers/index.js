import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducers from './authReducers';
import faqReducer from './faqReducer';
export default combineReducers({
  auth: authReducers,
  form: reduxForm,
  faqs: faqReducer
});
