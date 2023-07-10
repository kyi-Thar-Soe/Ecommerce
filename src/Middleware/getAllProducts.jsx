import { ApiCall } from "../ApiService/ApiCall"

export const getAllProducts = () => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_LOADING',
            payload: true,
        })
        const response = await ApiCall('https://fakestoreapi.com/products','get',null,true);
        console.log(response);
        dispatch ( {
        type: 'SET_ALLPRODUCTS',
        payload: response,
        })
        dispatch({
            type: 'SET_LOADING',
            payload: false,
        })
    }
    
}
export const getFilterProducts = (name) => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_LOADING',
            payload: true,
        })
       dispatch ( {
        type: 'FILTER_PRODUCTS',
        payload:name,
        })
        dispatch({
            type: 'SET_LOADING',
            payload: false,
        })
        
    }
    
}