import {GET_DATA, LOADING} from '../../actions/getData';

const initialState = {
  data: undefined,
  loading: false,
};

export const dataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
      };
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
