import { ApiCall } from "../ApiService/ApiCall"

export const getWomenProducts = () => {
    return async (dispatch) => {
        const response = await ApiCall("https://fakestoreapi.com/products/category/women's clothing",'get');
        console.log(response);
        dispatch ( {
        type: 'SET_WOMENPRODUCTS',
        payload: response,
    })
    }
    
}