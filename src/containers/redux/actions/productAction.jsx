import axios from "axios";
import { GET_USERS, DELETE_ITEM, FAILURE, ADD_ITEM, SET_PRODUCT, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "../constants/actionTypes";


export const setProducts = (products) => {
    return {
        type: SET_PRODUCT,
        payload: products,
    };
};


export const selectedProduct = (product) => {
    return {
        type: SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
    };
};


export const addToCart = (product) => {
    return {
        type: ADD_ITEM,
        payload: product,
    };
};


export const delFromCart = (product) => {
    return {
        type: DELETE_ITEM,
        payload: product,
    };
};

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get("https://fakestoreapi.com/users");
        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: FAILURE,
            payload: error,
        });
    }
};


export const addUser = (user) => async (dispatch) => {
    try {
        const res = await axios.post("'https://fakestoreapi.com/users", user);
        dispatch({
            type: "ADD_USER",
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};



export const deleteUser = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`https://fakestoreapi.com/users/${id}`);
        dispatch({
            type: "DELETE_USER",
            payload: res.data,
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};
