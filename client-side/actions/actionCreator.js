import axios from 'axios';
import {
  BASE_URL,
  ITEM_FETCHITEM_ERROR,
  ITEM_FETCHITEM_PENDING,
  ITEM_FETCHITEM_SUCCESS,
  ITEM_GETITEM_PENDING,
  ITEM_GETITEM_SUCCESS,
  ITEM_GETITEM_ERROR,
} from './actionType';

const fetchItemPending = () => ({
  type: ITEM_FETCHITEM_PENDING,
});
const fetchItemSuccess = (items) => ({
  type: ITEM_FETCHITEM_SUCCESS,
  payload: items,
});

const fetchItemError = (errorMsg) => ({
  type: ITEM_FETCHITEM_ERROR,
  payload: errorMsg,
});

export const fetchItem = () => {
  return async (dispatch, _) => {
    try {
      dispatch(fetchItemPending());
      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL}/items`,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      dispatch(fetchItemSuccess(data.items));
    } catch (error) {
      dispatch(fetchItemError(error));
    }
  };
};

const getItemPending = () => ({
  type: ITEM_GETITEM_PENDING,
});
const getItemSuccess = (item) => ({
  type: ITEM_GETITEM_SUCCESS,
  payload: item,
});

const getItemError = (errorMsg) => ({
  type: ITEM_GETITEM_ERROR,
  payload: errorMsg,
});

export const getItem = (id) => {
  return async (dispatch, _) => {
    try {
      dispatch(getItemPending());
      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL}/items/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      dispatch(getItemSuccess(data.item));
    } catch (error) {
      dispatch(getItemError(error));
    }
  };
};
