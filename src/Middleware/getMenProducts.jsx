import { ApiCall } from "../ApiService/ApiCall"

export const getMenProducts = () => {
    return async (dispatch) => {
        const response = await ApiCall("https://fakestoreapi.com/products/category/men's clothing",'get');
        console.log(response);
        dispatch ( {
        type: 'SET_MENPRODUCTS',
        payload: response,
    })
    }
    
}