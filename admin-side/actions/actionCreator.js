import axios from 'axios';
import {
  BASE_URL,
  ITEM_FETCHITEM_ERROR,
  ITEM_FETCHITEM_PENDING,
  ITEM_FETCHITEM_SUCCESS,
  ITEM_GETITEM_PENDING,
  ITEM_GETITEM_SUCCESS,
  ITEM_GETITEM_ERROR,
  ITEM_ADDITEM_PENDING,
  ITEM_ADDITEM_SUCCESS,
  ITEM_ADDITEM_ERROR,
  ITEM_DELETEITEM_PENDING,
  ITEM_DELETEITEM_SUCCESS,
  ITEM_DELETEITEM_ERROR,
  USER_FETCHUSER_PENDING,
  USER_FETCHUSER_SUCCESS,
  USER_FETCHUSER_ERROR,
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

const addItemPending = () => ({
  type: ITEM_ADDITEM_PENDING,
});
const addItemSuccess = () => ({
  type: ITEM_ADDITEM_SUCCESS,
});

const addItemError = () => ({
  type: ITEM_ADDITEM_ERROR,
});

export const addItem = (formData) => {
  return async (dispatch, _) => {
    try {
      dispatch(addItemPending());
      const { data } = await axios({
        method: 'POST',
        url: `${BASE_URL}/items/add`,
        data: formData,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      dispatch(addItemSuccess(data));
    } catch (error) {
      dispatch(addItemError(error));
    }
  };
};

const deleteItemPending = () => ({
  type: ITEM_DELETEITEM_PENDING,
});
const deleteItemSuccess = () => ({
  type: ITEM_DELETEITEM_SUCCESS,
});

const deleteItemError = () => ({
  type: ITEM_DELETEITEM_ERROR,
});

export const deleteItem = (id) => {
  return async (dispatch, _) => {
    try {
      dispatch(deleteItemPending());
      const { data } = await axios({
        method: 'DELETE',
        url: `${BASE_URL}/items/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      dispatch(deleteItemSuccess(data));
    } catch (error) {
      dispatch(deleteItemError(error));
    }
  };
};

const updateItemPending = () => ({
  type: ITEM_DELETEITEM_PENDING,
});
const updateItemSuccess = () => ({
  type: ITEM_DELETEITEM_SUCCESS,
});

const updateItemError = () => ({
  type: ITEM_DELETEITEM_ERROR,
});

export const updateItem = (id, dataForm) => {
  return async (dispatch, _) => {
    try {
      dispatch(updateItemPending());
      const { data } = await axios({
        method: 'PUT',
        url: `${BASE_URL}/items/${id}`,
        data: dataForm,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      dispatch(updateItemSuccess(data));
    } catch (error) {
      dispatch(updateItemError(error));
    }
  };
};

const fetchUserPending = () => ({
  type: USER_FETCHUSER_PENDING,
});
const fetchUserSuccess = (users) => ({
  type: USER_FETCHUSER_SUCCESS,
  payload: users,
});

const fetchUserError = (errorMsg) => ({
  type: USER_FETCHUSER_ERROR,
  payload: errorMsg,
});

export const fetchUser = () => {
  return async (dispatch, _) => {
    try {
      dispatch(fetchUserPending());
      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL}/users`,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      console.log(data);
      dispatch(fetchUserSuccess(data.users));
    } catch (error) {
      dispatch(fetchUserError(error));
    }
  };
};
