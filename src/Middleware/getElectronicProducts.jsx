import { ApiCall } from "../ApiService/ApiCall"

export const getElectronicProducts = () => {
    return async (dispatch) => {
        const response = await ApiCall('https://fakestoreapi.com/products/category/electronics','get');
        console.log(response);
        dispatch ( {
        type: 'SET_ELECTRONICPRODUCTS',
        payload: response,
    })
    }
    
}