export const GET_DATA = 'getData/GET_DATA';
export const LOADING = 'getData/LOADING';
export const ERROR = 'getData/ERROR';
import {getDataApi} from '../../api';

export const setData = payload => dispatch => {
  dispatch({type: GET_DATA, payload});
};

export const setLoading = payload => dispatch => {
  dispatch({type: LOADING, payload});
};

export const setError = payload => dispatch => {
  dispatch({type: ERROR, payload});
};

export const handleGetData = () => dispatch => {
  dispatch(setLoading(true));
  getDataApi()
    .then(res => {
      dispatch(setLoading(false));
      dispatch(setData(res.data));
    })
    .catch(({response}) => {
      dispatch(setLoading(false));
      dispatch(setError(response));
    });
};
