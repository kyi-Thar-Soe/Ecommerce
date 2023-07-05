import { ApiCall } from "../ApiService/ApiCall"

export const getJeweleryProducts = () => {
    return async (dispatch) => {
        const response = await ApiCall('https://fakestoreapi.com/products/category/jewelery','get');
        console.log(response);
        dispatch ( {
        type: 'SET_JEWELERYPRODUCTS',
        payload: response,
    })
    }
    
}