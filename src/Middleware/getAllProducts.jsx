import { ApiCall } from "../ApiService/ApiCall"

export const getAllProducts = () => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_LOADING',
            payload: true,
        })
        const response = await ApiCall('https://fakestoreapi.com/products','get');
        console.log(response);
        dispatch ( {
        type: 'SET_ALLPRODUCTS',
        payload: response,
        })
        dispatch({
            type: 'SET_LOADING',
            payload: false,
        })
       {/*dispatch ( {
        type: 'FILTER_PRODUCTS',
        payload: searchTerm,
        })*/}
        
    }
    
}