import Axios from 'axios';
import { FETCH_USER, FETCH_FAQ } from './types';

export const fetchUser = () => async dispatch => {
  const response = await Axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: response.data
  });
};

export const submitFaq = (values, history) => async dispatch => {
  history.push('/dashboard');

  const res = await Axios.post('/api/faq', values);

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const fetchFaq = () => async dispatch => {
  const res = await Axios.get('/api/faq');
  dispatch({
    type: FETCH_FAQ,
    payload: res.data
  });
};
