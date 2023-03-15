import {
  ITEM_FETCHITEM_ERROR,
  ITEM_FETCHITEM_PENDING,
  ITEM_FETCHITEM_SUCCESS,
  ITEM_GETITEM_PENDING,
  ITEM_GETITEM_SUCCESS,
  ITEM_GETITEM_ERROR,
} from '../actions/actionType';

const initialState = {
  isLoading: true,
  items: [],
  item: {},
  error: '',
};

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_FETCHITEM_PENDING:
      return {
        ...initialState,
      };
    case ITEM_FETCHITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    case ITEM_FETCHITEM_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ITEM_GETITEM_PENDING:
      return {
        ...initialState,
      };
    case ITEM_GETITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        item: action.payload,
      };
    case ITEM_GETITEM_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
