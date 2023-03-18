import {
  USER_FETCHUSER_ERROR,
  USER_FETCHUSER_PENDING,
  USER_FETCHUSER_SUCCESS,
} from '../actions/actionType';

const initialState = {
  isLoading: true,
  users: [],
  error: '',
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCHUSER_PENDING:
      return {
        ...initialState,
      };
    case USER_FETCHUSER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case USER_FETCHUSER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
